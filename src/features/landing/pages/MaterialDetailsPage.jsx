import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/common/Button";
import {
	ArrowLeft,
	ShoppingCart,
	Check,
	BookOpen,
	Download,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";

const materialsData = [
	{
		id: 1,
		title: "Irregular Verbs - Tomo 1",
		level: "Inglés Básico A1",
		description:
			"Domina los verbos irregulares más usados con explicaciones claras, listas organizadas y ejercicios dinámicos.",
		price: 32.8,
		originalPrice: 75.5,
		discount: 50,
		image: "blue",
		type: "book",
		features: [
			"Formato PDF (Descargable e imprimible)",
			"Accesible desde cualquier dispositivo",
			"Enfoque directo y práctico",
			"Incluye ejercicios con clave de respuesta",
			"Ideal para principiantes y niveles intermedios",
		],
	},
	{
		id: 2,
		title: "Idioms for Travel",
		level: "Inglés Intermedio B1",
		description:
			"Aprende las expresiones idiomáticas esenciales para viajar como un local y entender la cultura.",
		price: 32.8,
		originalPrice: 75.5,
		discount: 50,
		image: "emerald",
		type: "book",
		features: [
			"Más de 100 idioms explicados",
			"Ejemplos en contexto real",
			"Audio nativo incluido",
			"Guía de pronunciación",
			"Ejercicios de práctica",
		],
	},
	{
		id: 3,
		title: "Business English Pack",
		level: "Inglés Avanzado C1",
		description:
			"El paquete definitivo para profesionales. Vocabulario, plantillas de correos y frases para reuniones.",
		price: 45.0,
		originalPrice: 90.0,
		discount: 50,
		image: "purple",
		type: "pack",
		features: [
			"Plantillas de email editables",
			"Vocabulario por industria",
			"Simulaciones de reuniones",
			"Guía de presentaciones efectivas",
			"Acceso a webinar exclusivo",
		],
	},
	{
		id: 4,
		title: "Grammar Guide",
		level: "Todos los niveles",
		description:
			"Tu referencia rápida para cualquier duda gramatical. Explicaciones sencillas y ejemplos claros.",
		price: 25.0,
		originalPrice: 50.0,
		discount: 50,
		image: "orange",
		type: "guide",
		features: [
			"Todos los tiempos verbales",
			"Tablas resumen",
			"Errores comunes a evitar",
			"Ejercicios interactivos",
			"Actualizaciones gratuitas",
		],
	},
	{
		id: 5,
		title: "Listening Mastery",
		level: "Inglés Intermedio B2",
		description:
			"Mejora tu comprensión auditiva con audios reales, transcripciones y ejercicios de comprensión.",
		price: 35.0,
		originalPrice: 70.0,
		discount: 50,
		image: "rose",
		type: "audio",
		features: [
			"20 horas de audio",
			"Acentos variados (US, UK, AUS)",
			"Transcripciones completas",
			"Vocabulario destacado",
			"Tests de comprensión",
		],
	},
];

export default function MaterialDetailsPage() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { user } = useAuth();
	const { addToCart } = useCart();

	const material = materialsData.find((m) => m.id === parseInt(id));

	if (!material) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				Material no encontrado
			</div>
		);
	}

	const handleAddToCart = () => {
		// Agrega sin abrir carrito automáticamente (para todos los usuarios)
		// El botón flotante se animará para dar feedback
		addToCart({ ...material, type: "material" }, false);
	};

	return (
		<div className="bg-brand-light/30 min-h-screen pb-20 pt-30">
			{/* Header / Breadcrumb */}
			<div className=" border-b border-gray-100 py-4">
				<div className="max-w-7xl mx-auto px-4">
					<Link
						to="/materials"
						className="inline-flex items-center text-sm text-gray-500 hover:text-brand-blue transition-colors"
					>
						<ArrowLeft className="w-4 h-4 mr-2" />
						Volver a materiales
					</Link>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-4 py-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
					{/* Image Column */}
					<div>
						<div
							className={`aspect-[4/5] rounded-3xl bg-${material.image}-100 relative overflow-hidden shadow-2xl p-12 flex items-center justify-center`}
						>
							<div className="absolute top-6 left-6 bg-red-600 text-white font-bold px-4 py-2 rounded-lg shadow-lg">
								{material.discount}% DCTO
							</div>
							<BookOpen className="w-48 h-48 text-brand-blue/20" />
							{/* Decorative elements */}
							<div className="absolute bottom-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl translate-y-1/3 translate-x-1/3"></div>
						</div>
					</div>

					{/* Content Column */}
					<div>
						<div className="inline-block px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-bold mb-6">
							{material.level}
						</div>
						<h1 className="text-3xl lg:text-4xl font-extrabold text-brand-dark mb-4 font-display">
							{material.title}
						</h1>
						<p className="text-gray-600 text-lg mb-8 leading-relaxed">
							{material.description}
						</p>

						<div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
							<div className="flex items-end gap-4 mb-6">
								<div className="bg-red-50 text-red-600 font-bold px-2 py-1 rounded text-sm">
									{material.discount}%
								</div>
								<div className="flex flex-col">
									<span className="text-gray-400 text-sm line-through">
										S/ {material.originalPrice.toFixed(2)}
									</span>
									<span className="text-4xl font-extrabold text-brand-dark">
										S/ {material.price.toFixed(2)}
									</span>
								</div>
							</div>
							<Button
								onClick={handleAddToCart}
								className="w-full bg-rose-500 hover:bg-rose-600 text-white rounded-full py-6 text-lg shadow-lg shadow-rose-500/20 mb-4"
							>
								<ShoppingCart className="w-5 h-5 mr-2" />
								Añadir al carrito
							</Button>
							<p className="text-center text-xs text-gray-400">
								Acceso inmediato después de la compra
							</p>
						</div>

						<div>
							<h3 className="font-bold text-gray-900 mb-4 font-display text-lg">
								Características del material
							</h3>
							<ul className="space-y-3">
								{material.features.map((feature, idx) => (
									<li
										key={idx}
										className="flex items-start gap-3"
									>
										<div className="bg-green-100 p-1 rounded-full mt-0.5 shrink-0">
											<Check className="w-3 h-3 text-green-600" />
										</div>
										<span className="text-gray-600 text-sm">
											{feature}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				{/* Additional Info Section */}
				<div className="mt-20">
					<div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 text-center">
						<h2 className="text-2xl font-bold text-brand-dark mb-6 font-display">
							Cursos recomendados
						</h2>
						<p className="text-gray-600 mb-8 max-w-2xl mx-auto">
							Este libro está complementado por uno o más cursos
							en vivo, donde podrás reforzar lo aprendido con
							ejercicios guiados, explicaciones personalizadas y
							práctica conversacional.
						</p>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
							<div
								className="border border-gray-200 rounded-2xl p-4 flex gap-4 text-left hover:border-brand-blue transition-colors cursor-pointer"
								onClick={() => navigate("/courses/1")}
							>
								<div className="w-24 h-24 bg-gray-100 rounded-xl shrink-0 overflow-hidden">
									<img
										src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=200"
										alt="Course"
										className="w-full h-full object-cover"
									/>
								</div>
								<div>
									<h4 className="font-bold text-gray-900 mb-1">
										Curso teórico viajes I
									</h4>
									<p className="text-xs text-gray-500 mb-2">
										Inglés básico
									</p>
									<p className="text-sm text-gray-600 line-clamp-2">
										Domina el uso práctico de verbos
										regulares e irregulares en frases
										reales.
									</p>
								</div>
							</div>
							<div
								className="border border-gray-200 rounded-2xl p-4 flex gap-4 text-left hover:border-brand-blue transition-colors cursor-pointer"
								onClick={() => navigate("/courses/1")}
							>
								<div className="w-24 h-24 bg-gray-100 rounded-xl shrink-0 overflow-hidden">
									<img
										src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=200"
										alt="Course"
										className="w-full h-full object-cover"
									/>
								</div>
								<div>
									<h4 className="font-bold text-gray-900 mb-1">
										Curso teórico viajes I
									</h4>
									<p className="text-xs text-gray-500 mb-2">
										Inglés básico
									</p>
									<p className="text-sm text-gray-600 line-clamp-2">
										Domina el uso práctico de verbos
										regulares e irregulares en frases
										reales.
									</p>
								</div>
							</div>
						</div>
						<div className="mt-12 flex items-center justify-center gap-2 text-sm text-gray-500 bg-yellow-50 py-3 px-6 rounded-full inline-block mx-auto">
							<span className="text-2xl">💡</span>
							<p>
								Puedes adquirir este libro de manera
								independiente o como complemento del curso. Sin
								embargo, te recomendamos combinar ambos para
								lograr mejores resultados.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
