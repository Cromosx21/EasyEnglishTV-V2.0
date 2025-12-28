import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// Mock Data Store (Simulación de DB NoSQL)
const USERS_STORAGE_KEY = 'eetv_users_db';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check localStorage for existing session on mount
    const storedUser = localStorage.getItem('eetv_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    
    // Initialize Mock DB if empty
    if (!localStorage.getItem(USERS_STORAGE_KEY)) {
        const initialUsers = [
            {
                email: 'student@eetv.com',
                password: 'password123',
                name: 'Estudiante Demo',
                role: 'student',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Estudiante'
            },
            {
                email: 'admin@eetv.com',
                password: 'adminpassword',
                name: 'Admin Demo',
                role: 'admin',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Admin'
            }
        ];
        localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(initialUsers));
    }
    
    setLoading(false);
  }, []);

  const login = (credentials) => {
    // Si pasamos el objeto de usuario directamente (legacy/demo buttons)
    if (credentials.role && credentials.email && !credentials.password) {
         const userWithAvatar = {
            ...credentials,
            avatar: credentials.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + credentials.name,
            role: credentials.role || 'student'
        };
        setUser(userWithAvatar);
        localStorage.setItem('eetv_user', JSON.stringify(userWithAvatar));
        return { success: true };
    }

    // Validación real contra "Mock DB"
    const usersDB = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY) || '[]');
    const foundUser = usersDB.find(u => u.email === credentials.email && u.password === credentials.password);

    if (foundUser) {
        // No guardar el password en la sesión
        const { password, ...userSession } = foundUser;
        setUser(userSession);
        localStorage.setItem('eetv_user', JSON.stringify(userSession));
        return { success: true };
    } else {
        return { success: false, message: 'Credenciales inválidas' };
    }
  };

  const register = (userData) => {
      const usersDB = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY) || '[]');
      
      // Check if email exists
      if (usersDB.some(u => u.email === userData.email)) {
          return { success: false, message: 'El correo ya está registrado' };
      }

      const newUser = {
          ...userData,
          role: 'student', // Default role
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + userData.name
      };

      // Save to "DB"
      usersDB.push(newUser);
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(usersDB));

      // Auto login
      const { password, ...userSession } = newUser;
      setUser(userSession);
      localStorage.setItem('eetv_user', JSON.stringify(userSession));
      
      return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('eetv_user');
  };

  const value = {
    user,
    login,
    register,
    logout,
    isAuthenticated: !!user,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
