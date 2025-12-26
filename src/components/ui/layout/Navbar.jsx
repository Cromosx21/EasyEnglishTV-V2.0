import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/common/Button";
import { User, Menu } from "lucide-react";

export default function Navbar() {
	const location = useLocation();

	const isActive = (path) => {
		return location.pathname === path
			? "text-brand-blue font-bold"
			: "text-gray-600 hover:text-brand-blue font-semibold";
	};

	return (
		<div className="fixed top-4 z-50 flex justify-center w-full px-4">
			<nav className="bg-white/90 backdrop-blur-md border border-gray-100 rounded-full shadow-lg max-w-7xl w-full">
				<div className="px-6 sm:px-8">
					<div className="flex justify-between h-20 items-center">
						{/* Logo */}
						<div className="flex-shrink-0 flex items-center gap-2">
							<Link to="/" className="flex items-center gap-2">
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
							<Link
								to="/courses"
								className={`${isActive(
									"/courses"
								)} text-sm uppercase tracking-wide font-display`}
							>
								Cursos
							</Link>
							<Link
								to="/materials"
								className={`${isActive(
									"/materials"
								)} text-sm uppercase tracking-wide font-display`}
							>
								Materiales
							</Link>
							<Link
								to="/quizzes"
								className={`${isActive(
									"/quizzes"
								)} text-sm uppercase tracking-wide font-display`}
							>
								Quizzes
							</Link>
							<Link
								to="/jessica"
								className={`${isActive(
									"/jessica"
								)} text-sm uppercase tracking-wide font-display`}
							>
								Jessica
							</Link>
						</div>

						{/* CTA Buttons */}
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
							<Button variant="ghost" size="icon">
								<Menu className="h-6 w-6 text-gray-600" />
							</Button>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
