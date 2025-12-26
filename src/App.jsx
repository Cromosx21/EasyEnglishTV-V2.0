import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import DashboardLayout from './layouts/DashboardLayout'
import PublicLayout from './layouts/PublicLayout'
import LoginPage from './features/auth/pages/LoginPage'
import StudentDashboard from './features/student/pages/StudentDashboard'
import AdminDashboard from './features/admin/pages/AdminDashboard'
import HomePage from './features/landing/pages/HomePage'
import CoursesPage from './features/landing/pages/CoursesPage'
import CourseDetailsPage from './features/landing/pages/CourseDetailsPage'
import MaterialsPage from './features/landing/pages/MaterialsPage'
import MaterialDetailsPage from './features/landing/pages/MaterialDetailsPage'
import QuizzesPage from './features/landing/pages/QuizzesPage'
import QuizLevelPage from './features/landing/pages/QuizLevelPage'
import JessicaPage from './features/landing/pages/JessicaPage'
import PaymentPage from './features/payments/pages/PaymentPage'
import RegisterPage from './features/auth/pages/RegisterPage'

/**
 * Componente Principal App
 * Define la estructura de enrutamiento de la aplicación usando React Router.
 * Organiza las rutas en grupos según el layout (diseño) y el rol del usuario.
 */
function App() {
  return (
    <Router>
      <Routes>
        {/* 
          --- RUTAS PÚBLICAS --- 
          Accesibles para cualquier visitante. Usan el PublicLayout (Navbar y Footer públicos).
        */}
        <Route path="/" element={<PublicLayout />}>
          {/* Página de inicio (Landing Page) */}
          <Route index element={<HomePage />} />
          
          {/* Catálogo de Cursos y Detalles */}
          <Route path="courses" element={<CoursesPage />} />
          <Route path="courses/:id" element={<CourseDetailsPage />} />
          
          {/* Catálogo de Materiales y Detalles */}
          <Route path="materials" element={<MaterialsPage />} />
          <Route path="materials/:id" element={<MaterialDetailsPage />} />
          
          {/* Sección de Quizzes/Tests de Nivel */}
          <Route path="quizzes" element={<QuizzesPage />} />
          <Route path="quizzes/:level" element={<QuizLevelPage />} />
          
          {/* Página promocional específica (ej: Profesor destacado) */}
          <Route path="jessica" element={<JessicaPage />} />
        </Route>
        
        {/* 
          --- RUTAS DE AUTENTICACIÓN ---
          Páginas de Login y Registro. Usan AuthLayout (diseño simplificado o centrado).
        */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        {/* 
          --- RUTAS DE ESTUDIANTE ---
          Área privada para estudiantes. Usa DashboardLayout con rol="student".
          Requiere autenticación (protección de ruta pendiente de implementar).
        */}
        <Route path="/student" element={<DashboardLayout role="student" />}>
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="payments" element={<PaymentPage />} />
        </Route>

        {/* 
          --- RUTAS DE ADMINISTRADOR ---
          Área privada para administradores. Usa DashboardLayout con rol="admin".
        */}
        <Route path="/admin" element={<DashboardLayout role="admin" />}>
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
