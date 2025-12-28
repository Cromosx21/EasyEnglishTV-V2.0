import { useState } from "react";
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
	Menu,
	X,
} from "lucide-react";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/common/Button";
import Navbar from "@/components/ui/layout/Navbar";
import { useAuth } from "@/context/AuthContext";

export default function DashboardLayout({ role }) {
	const navigate = useNavigate();
	const location = useLocation();
	const { logout } = useAuth();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const handleLogout = () => {
		logout();
		navigate("/auth/login");
	};

	// STUDENT LAYOUT (No Sidebar, uses Navbar)
	if (role === "student") {
		return (
			<div className="min-h-screen bg-gray-50 flex flex-col">
				<Navbar />
				<main className="flex-1 pt-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
					<Outlet />
				</main>
			</div>
		);
	}

	// ADMIN LAYOUT (With Sidebar)
	const navItemClass = (path) =>
		cn(
			"flex items-center p-2 rounded-md transition-colors",
			location.pathname === path
				? "bg-brand-blue text-white"
				: "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
		);

	const SidebarContent = () => (
		<>
			<div className="p-6 border-b dark:border-gray-700 flex items-center justify-center relative">
				<h1 className="text-2xl font-display font-bold text-brand-blue">
					EasyEnglishTV
				</h1>
				{/* Close button for mobile */}
				<button
					onClick={() => setIsMobileMenuOpen(false)}
					className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
				>
					<X className="w-6 h-6" />
				</button>
			</div>
			<nav className="flex-1 p-4 space-y-2 overflow-y-auto">
				<Link
					to={`/${role}/dashboard`}
					className={navItemClass(`/${role}/dashboard`)}
					onClick={() => setIsMobileMenuOpen(false)}
				>
					<Home className="w-5 h-5 mr-3" />
					Dashboard
				</Link>

				<Link
					to="/admin/users"
					className={navItemClass("/admin/users")}
					onClick={() => setIsMobileMenuOpen(false)}
				>
					<User className="w-5 h-5 mr-3" />
					Usuarios
				</Link>
				<Link
					to="/admin/courses"
					className={navItemClass("/admin/courses")}
					onClick={() => setIsMobileMenuOpen(false)}
				>
					<BookOpen className="w-5 h-5 mr-3" />
					Cursos
				</Link>
				<Link
					to="/admin/materials"
					className={navItemClass("/admin/materials")}
					onClick={() => setIsMobileMenuOpen(false)}
				>
					<Library className="w-5 h-5 mr-3" />
					Materiales
				</Link>
				<Link
					to="/admin/finance"
					className={navItemClass("/admin/finance")}
					onClick={() => setIsMobileMenuOpen(false)}
				>
					<DollarSign className="w-5 h-5 mr-3" />
					Finanzas
				</Link>
				<Link
					to="/admin/activity"
					className={navItemClass("/admin/activity")}
					onClick={() => setIsMobileMenuOpen(false)}
				>
					<Activity className="w-5 h-5 mr-3" />
					Actividad
				</Link>

				<Link
					to={`/${role}/settings`}
					className={navItemClass(`/${role}/settings`)}
					onClick={() => setIsMobileMenuOpen(false)}
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
		</>
	);

	return (
		<div className="flex h-screen bg-gray-100 dark:bg-gray-900 overflow-hidden">
			{/* Mobile Menu Overlay */}
			{isMobileMenuOpen && (
				<div
					className="fixed inset-0 bg-black/50 z-40 md:hidden"
					onClick={() => setIsMobileMenuOpen(false)}
				/>
			)}

			{/* Sidebar (Desktop & Mobile) */}
			<aside
				className={cn(
					"fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-md transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:flex flex-col",
					isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
				)}
			>
				<SidebarContent />
			</aside>

			{/* Main Content Area */}
			<div className="flex-1 flex flex-col min-w-0 overflow-hidden">
				{/* Mobile Header */}
				<header className="md:hidden bg-white dark:bg-gray-800 shadow-sm p-4 flex items-center justify-between z-30">
					<button
						onClick={() => setIsMobileMenuOpen(true)}
						className="text-gray-700 dark:text-gray-200"
					>
						<Menu className="w-6 h-6" />
					</button>
					<span className="font-display font-bold text-brand-blue text-lg">
						EasyEnglishTV
					</span>
					<div className="w-6" /> {/* Spacer for centering */}
				</header>

				{/* Scrollable Page Content */}
				<main className="flex-1 overflow-y-auto p-4 md:p-8">
					<Outlet />
				</main>
			</div>
		</div>
	);
}
