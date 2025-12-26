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

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="courses/:id" element={<CourseDetailsPage />} />
          <Route path="materials" element={<MaterialsPage />} />
          <Route path="materials/:id" element={<MaterialDetailsPage />} />
          <Route path="quizzes" element={<QuizzesPage />} />
          <Route path="quizzes/:level" element={<QuizLevelPage />} />
          <Route path="jessica" element={<JessicaPage />} />
        </Route>
        
        {/* Auth Routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        {/* Student Routes */}
        <Route path="/student" element={<DashboardLayout role="student" />}>
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="payments" element={<PaymentPage />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<DashboardLayout role="admin" />}>
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
