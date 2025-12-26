import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import {
	LogOut,
	Home,
	User,
	Settings,
	BookOpen,
	Library,
	DollarSign,
	Activity,
} from "lucide-react";
import { cn } from "@/utils/cn";

export default function DashboardLayout({ role }) {
	const navigate = useNavigate();
	const location = useLocation();

	const handleLogout = () => {
		// TODO: Implement logout logic
		navigate("/auth/login");
	};

	const navItemClass = (path) =>
		cn(
			"flex items-center p-2 rounded-md transition-colors",
			location.pathname === path
				? "bg-brand-blue text-white"
				: "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
		);

	return (
		<div className="flex h-screen bg-gray-100 dark:bg-gray-900">
			{/* Sidebar */}
			<aside className="w-64 bg-white dark:bg-gray-800 shadow-md hidden md:flex flex-col">
				<div className="p-6 border-b dark:border-gray-700 flex items-center justify-center">
					<h1 className="text-2xl font-display font-bold text-brand-blue">
						EasyEnglishTV
					</h1>
				</div>
				<nav className="flex-1 p-4 space-y-2">
					<Link
						to={`/${role}/dashboard`}
						className={navItemClass(`/${role}/dashboard`)}
					>
						<Home className="w-5 h-5 mr-3" />
						Dashboard
					</Link>

					{role === "admin" ? (
						<>
							<Link
								to="/admin/users"
								className={navItemClass("/admin/users")}
							>
								<User className="w-5 h-5 mr-3" />
								Usuarios
							</Link>
							<Link
								to="/admin/courses"
								className={navItemClass("/admin/courses")}
							>
								<BookOpen className="w-5 h-5 mr-3" />
								Cursos
							</Link>
							<Link
								to="/admin/materials"
								className={navItemClass("/admin/materials")}
							>
								<Library className="w-5 h-5 mr-3" />
								Materiales
							</Link>
							<Link
								to="/admin/finance"
								className={navItemClass("/admin/finance")}
							>
								<DollarSign className="w-5 h-5 mr-3" />
								Finanzas
							</Link>
							<Link
								to="/admin/activity"
								className={navItemClass("/admin/activity")}
							>
								<Activity className="w-5 h-5 mr-3" />
								Actividad
							</Link>
						</>
					) : (
						<>
							<Link
								to="/student/courses"
								className={navItemClass("/student/courses")}
							>
								<BookOpen className="w-5 h-5 mr-3" />
								Mis Cursos
							</Link>
							<Link
								to="/student/materials"
								className={navItemClass("/student/materials")}
							>
								<Library className="w-5 h-5 mr-3" />
								Mis Materiales
							</Link>
						</>
					)}

					<Link
						to={`/${role}/settings`}
						className={navItemClass(`/${role}/settings`)}
					>
						<Settings className="w-5 h-5 mr-3" />
						Configuración
					</Link>
				</nav>
				<div className="p-4 border-t dark:border-gray-700">
					<button
						onClick={handleLogout}
						className="flex items-center w-full p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md"
					>
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
	);
}
