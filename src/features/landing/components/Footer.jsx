import { Link } from "react-router-dom";
import {
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
	Mail,
	Phone,
	MapPin,
} from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-brand-dark text-gray-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
					{/* Brand Column */}
					<div className="space-y-6">
						<div className="flex items-center gap-2 bg-slate-50 py-2 px-4 rounded-lg">
							<img src="/src/assets/logo.svg" alt="Logo de la página web" />
						</div>
						<p className="text-sm text-gray-400 leading-relaxed">
							Aprende inglés de manera fácil y efectiva con
							nuestro método, materiales exclusivos y clases en
							vivo.
						</p>
						<div className="flex space-x-4">
							{[Facebook, Twitter, Instagram, Linkedin].map(
								(Icon, i) => (
									<a
										key={i}
										href="#"
										className="bg-white/10 p-2 rounded-full hover:bg-brand-pink hover:text-white transition-all"
									>
										<Icon className="h-4 w-4" />
									</a>
								)
							)}
						</div>
					</div>

					{/* Links 1 */}
					<div>
						<h4 className="text-lg font-bold text-white mb-6">
							Enlaces Rápidos
						</h4>
						<ul className="space-y-3 text-sm">
							<li>
								<Link
									to="/"
									className="hover:text-brand-yellow transition-colors"
								>
									Inicio
								</Link>
							</li>
							<li>
								<Link
									to="/courses"
									className="hover:text-brand-yellow transition-colors"
								>
									Cursos
								</Link>
							</li>
							<li>
								<Link
									to="/materials"
									className="hover:text-brand-yellow transition-colors"
								>
									Materiales
								</Link>
							</li>
							<li>
								<Link
									to="/about"
									className="hover:text-brand-yellow transition-colors"
								>
									Nosotros
								</Link>
							</li>
						</ul>
					</div>

					{/* Links 2 */}
					<div>
						<h4 className="text-lg font-bold text-white mb-6">
							Soporte
						</h4>
						<ul className="space-y-3 text-sm">
							<li>
								<Link
									to="/contact"
									className="hover:text-brand-yellow transition-colors"
								>
									Contacto
								</Link>
							</li>
							<li>
								<Link
									to="/faq"
									className="hover:text-brand-yellow transition-colors"
								>
									Preguntas Frecuentes
								</Link>
							</li>
							<li>
								<Link
									to="/terms"
									className="hover:text-brand-yellow transition-colors"
								>
									Términos de Uso
								</Link>
							</li>
							<li>
								<Link
									to="/privacy"
									className="hover:text-brand-yellow transition-colors"
								>
									Política de Privacidad
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="text-lg font-bold text-white mb-6">
							Contáctanos
						</h4>
						<ul className="space-y-4 text-sm">
							<li className="flex items-center">
								<Mail className="h-4 w-4 mr-3 text-brand-pink" />{" "}
								contacto@eetv.com
							</li>
							<li className="flex items-center">
								<Phone className="h-4 w-4 mr-3 text-brand-pink" />{" "}
								+51 987 654 321
							</li>
							<li className="flex items-center">
								<MapPin className="h-4 w-4 mr-3 text-brand-pink" />{" "}
								Lima, Perú
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-white/10 mt-6 py-4 text-center text-xs text-gray-500">
					<p>
						&copy; {new Date().getFullYear()} Easy English TV. Todos
						los derechos reservados.
					</p>
				</div>
			</div>
		</footer>
	);
}
