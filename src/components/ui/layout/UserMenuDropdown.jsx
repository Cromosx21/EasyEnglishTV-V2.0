import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import {
	User,
	BookOpen,
	FileText,
	Settings,
	LogOut,
	LayoutDashboard,
	ChevronDown,
} from "lucide-react";

export default function UserMenuDropdown() {
	const { user, logout } = useAuth();
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleLogout = () => {
		logout();
		setIsOpen(false);
		navigate("/");
	};

	if (!user) return null;

	return (
		<div className="relative" ref={dropdownRef}>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center gap-2 group focus:outline-none"
			>
				<div className="w-10 h-10 rounded-full overflow-hidden border-2 border-transparent group-hover:border-brand-blue transition-all">
					<img
						src={user.avatar || "/src/assets/Landing/Home-hero.png"} // Fallback image
						alt={user.name}
						className="w-full h-full object-cover"
					/>
				</div>
				<span className="hidden lg:block text-sm font-semibold text-gray-700 group-hover:text-brand-blue transition-colors">
					{user.name}
				</span>
				<ChevronDown
					className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
						isOpen ? "rotate-180" : ""
					}`}
				/>
			</button>

			{/* Dropdown Menu */}
			{isOpen && (
				<div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
					<div className="px-4 py-3 border-b border-gray-100 mb-2">
						<p className="text-sm font-bold text-gray-900 truncate">
							{user.name}
						</p>
						<p className="text-xs text-gray-500 truncate">
							{user.email}
						</p>
					</div>

					<div className="space-y-1">
						<Link
							to="/student/dashboard"
							className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-blue transition-colors"
							onClick={() => setIsOpen(false)}
						>
							<LayoutDashboard className="w-4 h-4" />
							Mi Dashboard
						</Link>
						<Link
							to="/student/courses"
							className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-blue transition-colors"
							onClick={() => setIsOpen(false)}
						>
							<BookOpen className="w-4 h-4" />
							Mis Cursos
						</Link>
						<Link
							to="/student/materials"
							className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-blue transition-colors"
							onClick={() => setIsOpen(false)}
						>
							<FileText className="w-4 h-4" />
							Mis Materiales
						</Link>
						<Link
							to="/student/settings"
							className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-blue transition-colors"
							onClick={() => setIsOpen(false)}
						>
							<Settings className="w-4 h-4" />
							Configuraciones
						</Link>
					</div>

					<div className="border-t border-gray-100 mt-2 pt-2">
						<button
							onClick={handleLogout}
							className="w-full flex items-center gap-3 px-4 py-2 text-sm text-rose-600 hover:bg-rose-50 transition-colors text-left"
						>
							<LogOut className="w-4 h-4" />
							Cerrar Sesión
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
