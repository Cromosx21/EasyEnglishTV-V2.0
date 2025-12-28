import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import ScrollToTop from "./components/ui/common/ScrollToTop"; // Import ScrollToTop
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import PublicLayout from "./layouts/PublicLayout";
import LoginPage from "./features/auth/pages/LoginPage";
import StudentDashboard from "./features/student/pages/StudentDashboard";
import AdminDashboard from "./features/admin/pages/AdminDashboard";
import AdminUsersPage from "./features/admin/pages/AdminUsersPage";
import AdminCoursesPage from "./features/admin/pages/AdminCoursesPage";
import AdminMaterialsPage from "./features/admin/pages/AdminMaterialsPage";
import AdminSettingsPage from "./features/admin/pages/AdminSettingsPage";
import AdminFinancePage from "./features/admin/pages/AdminFinancePage";
import HomePage from "./features/landing/pages/HomePage";
import CoursesPage from "./features/landing/pages/CoursesPage";
import CourseDetailsPage from "./features/landing/pages/CourseDetailsPage";
import MaterialsPage from "./features/landing/pages/MaterialsPage";
import MaterialDetailsPage from "./features/landing/pages/MaterialDetailsPage";
import QuizzesPage from "./features/landing/pages/QuizzesPage";
import QuizLevelPage from "./features/landing/pages/QuizLevelPage";
import JessicaPage from "./features/landing/pages/JessicaPage";
import PaymentPage from "./features/payments/pages/PaymentPage";
import RegisterPage from "./features/auth/pages/RegisterPage";
import MyCoursesPage from "./features/student/pages/MyCoursesPage";
import MyMaterialsPage from "./features/student/pages/MyMaterialsPage";
import SettingsPage from "./features/student/pages/SettingsPage";
import AdminActivityPage from "./features/admin/pages/AdminActivityPage";
import CheckoutPage from "./features/payments/pages/CheckoutPage";
import CartDrawer from "./components/ui/common/CartDrawer";
import FloatingCartButton from "./components/ui/common/FloatingCartButton";

/**
 * Componente Principal App
 * Define la estructura de enrutamiento de la aplicación usando React Router.
 * Organiza las rutas en grupos según el layout (diseño) y el rol del usuario.
 */
function App() {
	return (
		<AuthProvider>
			<CartProvider>
				<Router>
					<ScrollToTop /> {/* Add ScrollToTop here */}
					<CartDrawer />
					<FloatingCartButton />
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
							<Route
								path="courses/:id"
								element={<CourseDetailsPage />}
							/>

							{/* Catálogo de Materiales y Detalles */}
							<Route
								path="materials"
								element={<MaterialsPage />}
							/>
							<Route
								path="materials/:id"
								element={<MaterialDetailsPage />}
							/>

							{/* Sección de Quizzes/Tests de Nivel */}
							<Route path="quizzes" element={<QuizzesPage />} />
							<Route
								path="quizzes/:level"
								element={<QuizLevelPage />}
							/>

							{/* Página promocional específica (ej: Profesor destacado) */}
							<Route path="jessica" element={<JessicaPage />} />

							{/* Página de Checkout */}
							<Route path="checkout" element={<CheckoutPage />} />
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
						<Route
							path="/student"
							element={<DashboardLayout role="student" />}
						>
							<Route
								path="dashboard"
								element={<StudentDashboard />}
							/>
							<Route path="courses" element={<MyCoursesPage />} />
							<Route
								path="materials"
								element={<MyMaterialsPage />}
							/>
							<Route path="settings" element={<SettingsPage />} />
							<Route path="payments" element={<PaymentPage />} />
						</Route>

						{/* 
				  --- RUTAS DE ADMINISTRADOR ---
				  Área privada para administradores. Usa DashboardLayout con rol="admin".
				*/}
						<Route
							path="/admin"
							element={<DashboardLayout role="admin" />}
						>
							<Route
								path="dashboard"
								element={<AdminDashboard />}
							/>
							<Route path="users" element={<AdminUsersPage />} />
							<Route
								path="courses"
								element={<AdminCoursesPage />}
							/>
							<Route
								path="materials"
								element={<AdminMaterialsPage />}
							/>
							<Route
								path="finance"
								element={<AdminFinancePage />}
							/>
							<Route
								path="activity"
								element={<AdminActivityPage />}
							/>
							<Route
								path="settings"
								element={<AdminSettingsPage />}
							/>
						</Route>
					</Routes>
				</Router>
			</CartProvider>
		</AuthProvider>
	);
}

export default App;
