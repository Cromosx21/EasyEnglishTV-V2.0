import { Outlet, Link, useNavigate } from 'react-router-dom'
import { LogOut, Home, User, Settings, CreditCard } from 'lucide-react'

export default function DashboardLayout({ role }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    // TODO: Implement logout logic
    navigate('/auth/login')
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-md hidden md:flex flex-col">
        <div className="p-4 border-b dark:border-gray-700">
          <h1 className="text-xl font-bold text-primary">EETV {role === 'admin' ? 'Admin' : 'Student'}</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link to={`/${role}/dashboard`} className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
            <Home className="w-5 h-5 mr-3" />
            Dashboard
          </Link>
          {role === 'admin' ? (
            <Link to="/admin/users" className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
              <User className="w-5 h-5 mr-3" />
              Usuarios
            </Link>
          ) : (
             <Link to="/student/courses" className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
              <User className="w-5 h-5 mr-3" />
              Mis Cursos
            </Link>
          )}
          <Link to={`/${role}/settings`} className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
            <Settings className="w-5 h-5 mr-3" />
            Configuración
          </Link>
        </nav>
        <div className="p-4 border-t dark:border-gray-700">
          <button onClick={handleLogout} className="flex items-center w-full p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md">
            <LogOut className="w-5 h-5 mr-3" />
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  )
}
