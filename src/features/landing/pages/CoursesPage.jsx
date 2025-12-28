import { Button } from "@/components/ui/common/Button";
import {
	Clock,
	Users,
	PlayCircle,
	CheckCircle2,
	ShoppingCart,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";

const courses = [
	{
		id: 1,
		title: "Curso teórico viajes I",
		level: "Inglés Básico",
		description:
			"Domina el uso práctico de verbos regulares e irregulares en frases reales.",
		students: 400,
		duration: "2h 20 min",
		price: 29.99,
		originalPrice: 59.99,
		image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400",
	},
	{
		id: 2,
		title: "Inglés para Negocios",
		level: "Inglés Intermedio",
		description:
			"Aprende a desenvolverte en reuniones, correos y presentaciones profesionales.",
		students: 250,
		duration: "4h 10 min",
		price: 49.99,
		originalPrice: 89.99,
		image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400",
	},
	{
		id: 3,
		title: "Gramática Avanzada",
		level: "Inglés Avanzado",
		description:
			"Perfecciona tu escritura y habla con estructuras complejas.",
		students: 180,
		duration: "3h 45 min",
		price: 39.99,
		originalPrice: 79.99,
		image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400",
	},
	{
		id: 4,
		title: "Pronunciación Master",
		level: "Todos los niveles",
		description:
			"Elimina tu acento y habla como un nativo con técnicas fonéticas.",
		students: 600,
		duration: "2h 00 min",
		price: 19.99,
		originalPrice: 39.99,
		image: "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?auto=format&fit=crop&q=80&w=400",
	},
];

export default function CoursesPage() {
	const navigate = useNavigate();
	const { user } = useAuth();
	const { addToCart } = useCart();

	const handleAddToCart = (e, course) => {
		e.preventDefault();
		e.stopPropagation();

		// Siempre agregar al carrito sin abrir el drawer automáticamente (false)
		// La animación del botón flotante indicará que se agregó
		addToCart({ ...course, type: "curso" }, false);
	};

	return (
		<div className="bg-white min-h-screen py-20">
			{/* Hero */}
			<section className="bg-brand-blue/5 py-20 px-4">
				<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
					<div className="flex-1 text-center lg:text-left">
						<h1 className="text-4xl lg:text-5xl font-extrabold text-brand-dark mb-6 font-display">
							Aprende inglés con <br />
							<span className="text-brand-blue">
								Cursos Interactivos
							</span>
						</h1>
						<p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
							Domina el idioma con nuestra metodología probada.
							Clases prácticas, ejercicios reales y seguimiento
							personalizado.
						</p>
						<Link to="/courses">
							<Button className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-8 py-6 shadow-lg shadow-rose-500/20 text-lg">
								Ver todos los cursos
							</Button>
						</Link>
					</div>
					<div className="flex-1 relative">
						<div className="bg-white p-4 rounded-3xl shadow-xl transform rotate-2">
							<img
								src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
								alt="Students"
								className="rounded-2xl w-full"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Course Banner */}
			<div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10 mb-20">
				<div className="bg-brand-dark rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
					<div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
						<div className="flex-1">
							<div className="inline-block px-3 py-1 bg-rose-500 rounded-full text-xs font-bold mb-4">
								OFERTA DE LA SEMANA
							</div>
							<h2 className="text-3xl font-bold mb-4 font-display">
								20% DE DESCUENTO <br /> en cualquier curso
							</h2>
							<p className="text-gray-300 mb-6">
								¡Inscríbete esta semana y aprovecha nuestros
								precios especiales!
							</p>
							<Button className="bg-white text-brand-dark hover:bg-gray-100 rounded-full px-8">
								Aprovechar Oferta
							</Button>
						</div>
						<div className="w-full md:w-1/3">
							<img
								src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400"
								alt="Offer"
								className="rounded-2xl border-4 border-white/10"
							/>
						</div>
					</div>
					{/* Background decoration */}
					<div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
				</div>
			</div>

			{/* Courses Grid */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between mb-10">
					<h2 className="text-3xl font-bold text-brand-dark font-display">
						Nuestros Cursos
					</h2>
					<div className="hidden sm:flex gap-2">
						<Button
							variant="outline"
							size="sm"
							className="rounded-full"
						>
							Todos
						</Button>
						<Button
							variant="ghost"
							size="sm"
							className="rounded-full text-gray-500"
						>
							Básico
						</Button>
						<Button
							variant="ghost"
							size="sm"
							className="rounded-full text-gray-500"
						>
							Intermedio
						</Button>
						<Button
							variant="ghost"
							size="sm"
							className="rounded-full text-gray-500"
						>
							Avanzado
						</Button>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
					{courses.map((course) => (
						<div
							key={course.id}
							className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex gap-6 group"
						>
							<div className="w-1/3 shrink-0 rounded-xl overflow-hidden relative">
								<img
									src={course.image}
									alt={course.title}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
								<div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur px-2 py-0.5 rounded text-[10px] font-bold">
									{course.level}
								</div>
							</div>
							<div className="flex-1 py-2">
								<h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">
									{course.title}
								</h3>
								<p className="text-gray-500 text-sm mb-4 line-clamp-2">
									{course.description}
								</p>

								<div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
									<div className="flex items-center gap-1">
										<Users className="w-3 h-3" />
										<span>
											+{course.students} estudiantes
										</span>
									</div>
									<div className="flex items-center gap-1">
										<Clock className="w-3 h-3" />
										<span>{course.duration}</span>
									</div>
								</div>

								<div className="flex items-center justify-between mb-4">
									<div className="flex flex-col">
										<span className="text-gray-400 text-xs line-through">
											S/ {course.originalPrice}
										</span>
										<span className="text-xl font-bold text-brand-blue">
											S/ {course.price}
										</span>
									</div>
									<Button
										size="icon"
										className="rounded-full bg-brand-light hover:bg-brand-blue text-brand-blue hover:text-white w-10 h-10 transition-colors"
										onClick={(e) =>
											handleAddToCart(e, course)
										}
										title="Añadir al carrito"
									>
										<ShoppingCart className="w-5 h-5" />
									</Button>
								</div>

								<Link to={`/courses/${course.id}`}>
									<Button
										size="sm"
										className="rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors w-full sm:w-auto"
									>
										Ver Detalles
									</Button>
								</Link>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Methodology */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
				<div className="text-center mb-16">
					<p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
						Nuestra
					</p>
					<h2 className="text-3xl font-bold text-brand-dark font-display">
						Metodología de enseñanza
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{[
						{
							title: "Aprendizaje práctico desde el día 1",
							desc: "Enfoque conversacional y situaciones de la vida real.",
						},
						{
							title: "Evaluación por niveles y progreso semanal",
							desc: "Seguimiento constante para asegurar tu avance.",
						},
						{
							title: "Participación activa y conversación real",
							desc: "Clases en vivo con grupos reducidos.",
						},
						{
							title: "Uso de materiales digitales exclusivos",
							desc: "Acceso a nuestra biblioteca de recursos premium.",
						},
					].map((item, idx) => (
						<div
							key={idx}
							className="bg-gray-50 p-8 rounded-3xl flex items-start gap-4"
						>
							<div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
								<CheckCircle2 className="w-5 h-5" />
							</div>
							<div>
								<h3 className="font-bold text-lg text-gray-900 mb-2">
									{item.title}
								</h3>
								<p className="text-gray-600">{item.desc}</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
