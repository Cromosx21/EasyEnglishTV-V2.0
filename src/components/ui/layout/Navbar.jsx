import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/common/Button";
import { User, Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";

export default function Navbar() {
	const location = useLocation();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const isActive = (path) => {
		return location.pathname === path
			? "text-brand-blue font-bold"
			: "text-gray-600 hover:text-brand-blue font-semibold";
	};

	const navLinks = [
		{ name: "Cursos", path: "/courses" },
		{ name: "Materiales", path: "/materials" },
		{ name: "Quizzes", path: "/quizzes" },
		{ name: "Jessica", path: "/jessica" },
	];

	return (
		<div className="fixed top-4 z-50 flex justify-center w-full px-4">
			<nav className="bg-white/90 backdrop-blur-md border border-gray-100 rounded-2xl md:rounded-full shadow-lg max-w-7xl w-full transition-all duration-300">
				<div className="px-6 sm:px-8">
					<div className="flex justify-between h-20 items-center">
						{/* Logo */}
						<div className="flex-shrink-0 flex items-center gap-2">
							<Link
								to="/"
								className="flex items-center gap-2"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								<div className="bg-brand-blue text-white p-2 rounded-lg font-bold text-xl">
									EE
								</div>
								<span className="text-2xl font-bold text-brand-dark tracking-tight">
									EETV
								</span>
							</Link>
						</div>

						{/* Desktop Menu */}
						<div className="hidden md:flex items-center space-x-8">
							{navLinks.map((link) => (
								<Link
									key={link.path}
									to={link.path}
									className={`${isActive(
										link.path
									)} text-sm uppercase tracking-wide font-display transition-colors`}
								>
									{link.name}
								</Link>
							))}
						</div>

						{/* Desktop CTA Buttons */}
						<div className="hidden md:flex items-center gap-4">
							<Link to="/auth/login">
								<Button className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-8 py-2 font-semibold shadow-lg shadow-rose-500/20">
									<User className="w-4 h-4 mr-2" />
									Iniciar Sesión
								</Button>
							</Link>
						</div>

						{/* Mobile menu button */}
						<div className="md:hidden flex items-center">
							<Button
								variant="ghost"
								size="icon"
								onClick={() =>
									setIsMobileMenuOpen(!isMobileMenuOpen)
								}
								className="text-gray-600"
							>
								{isMobileMenuOpen ? (
									<X className="h-6 w-6" />
								) : (
									<Menu className="h-6 w-6" />
								)}
							</Button>
						</div>
					</div>
				</div>

				{/* Mobile Menu Dropdown */}
				<div
					className={cn(
						"md:hidden overflow-hidden transition-all duration-300 ease-in-out",
						isMobileMenuOpen
							? "max-h-[32rem] opacity-100 pb-6"
							: "max-h-0 opacity-0"
					)}
				>
					<div className="px-6 space-y-4 flex flex-col items-center">
						{/* Mobile Only: Inicio Link */}
						<Link
							to="/"
							onClick={() => setIsMobileMenuOpen(false)}
							className={`${isActive(
								"/"
							)} text-lg block w-full text-center py-2`}
						>
							Inicio
						</Link>

						{navLinks.map((link) => (
							<Link
								key={link.path}
								to={link.path}
								onClick={() => setIsMobileMenuOpen(false)}
								className={`${isActive(
									link.path
								)} text-lg block w-full text-center py-2`}
							>
								{link.name}
							</Link>
						))}
						<div className="pt-4 w-full flex justify-center">
							<Link
								to="/auth/login"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								<Button className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-8 py-2 font-semibold shadow-lg shadow-rose-500/20 w-full sm:w-auto">
									<User className="w-4 h-4 mr-2" />
									Iniciar Sesión
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
