import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/common/Button";
import {
	CheckCircle2,
	Clock,
	PlayCircle,
	Award,
	ArrowLeft,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";

/**
 * Datos simulados de los cursos (Mock Data).
 * En una aplicación real, estos datos vendrían de una API o base de datos.
 */
const coursesData = [
	{
		id: 1,
		title: "Curso teórico viajes I",
		level: "Inglés Básico",
		price: 29.99,
		description:
			"Domina el uso práctico de verbos regulares e irregulares en frases reales.",
		longDescription:
			"Este curso está diseñado para principiantes que desean adquirir las bases del idioma inglés con un enfoque específico en situaciones de viaje. Aprenderás a comunicarte en aeropuertos, hoteles, restaurantes y situaciones de emergencia.",
		students: 400,
		duration: "2h 20 min",
		image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400",
		modules: [
			"Introducción y saludos básicos",
			"En el aeropuerto: Check-in y seguridad",
			"Transporte y direcciones",
			"Alojamiento y reservas",
			"Comida y restaurantes",
		],
	},
	{
		id: 2,
		title: "Inglés para Negocios",
		level: "Inglés Intermedio",
		price: 49.99,
		description:
			"Aprende a desenvolverte en reuniones, correos y presentaciones profesionales.",
		longDescription:
			"Mejora tus habilidades comunicativas en el entorno empresarial. Este curso te preparará para escribir correos electrónicos efectivos, realizar presentaciones impactantes y participar activamente en reuniones internacionales.",
		students: 250,
		duration: "4h 10 min",
		image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400",
		modules: [
			"Vocabulario de negocios esencial",
			"Redacción de correos electrónicos formales",
			"Reuniones y videoconferencias",
			"Presentaciones efectivas",
			"Negociación y networking",
		],
	},
	{
		id: 3,
		title: "Gramática Avanzada",
		level: "Inglés Avanzado",
		price: 39.99,
		description:
			"Perfecciona tu escritura y habla con estructuras complejas.",
		longDescription:
			"Un curso intensivo para estudiantes avanzados que buscan pulir su gramática y expresarse con mayor precisión y sofisticación. Abordaremos estructuras complejas, tiempos verbales avanzados y matices del idioma.",
		students: 180,
		duration: "3h 45 min",
		image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400",
		modules: [
			"Tiempos verbales complejos",
			"Voz pasiva avanzada",
			"Condicionales mixtos",
			"Estilo indirecto y reporte",
			"Cohesión y coherencia textual",
		],
	},
	{
		id: 4,
		title: "Pronunciación Master",
		level: "Todos los niveles",
		price: 19.99,
		description:
			"Elimina tu acento y habla como un nativo con técnicas fonéticas.",
		longDescription:
			"Descubre los secretos de la pronunciación inglesa. Aprenderás a producir sonidos difíciles, mejorar tu entonación y ritmo, y reducir tu acento para comunicarte con mayor confianza y claridad.",
		students: 600,
		duration: "2h 00 min",
		image: "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?auto=format&fit=crop&q=80&w=400",
		modules: [
			"Sonidos vocálicos y consonánticos",
			"Acento y ritmo de las palabras",
			"Entonación de oraciones",
			"Connected speech (habla conectada)",
			"Errores comunes de pronunciación",
		],
	},
];

/**
 * Componente CourseDetailsPage
 *
 * Muestra la información detallada de un curso específico.
 * Utiliza el hook `useParams` para obtener el ID del curso desde la URL.
 */
export default function CourseDetailsPage() {
	// Obtener el ID del curso de la URL (ej: /courses/1 -> id = 1)
	const { id } = useParams();
	const navigate = useNavigate();
	const { user } = useAuth();
	const { addToCart } = useCart();

	// Buscar el curso correspondiente en los datos simulados
	const course = coursesData.find((c) => c.id === parseInt(id));

	// Si no se encuentra el curso (ID inválido), mostrar mensaje de error
	if (!course) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				Curso no encontrado
			</div>
		);
	}

	const handleEnroll = () => {
		// Siempre agregar al carrito sin abrir el drawer automáticamente
		// La animación del botón flotante indicará que se agregó
		addToCart({ ...course, type: "curso" }, false);
	};

	return (
		<div className="bg-white min-h-screen pb-20">
			{/* 
              --- SECCIÓN HEADER (HÉROE) ---
              Contiene el título, subtítulo, botón de inscripción y una imagen previa.
              Usa un fondo oscuro con superposición azulada.
            */}
			<div className="bg-brand-dark text-white py-40 relative overflow-hidden">
				{/* Fondo decorativo con opacidad */}
				<div className="absolute inset-0 bg-brand-blue/20"></div>

				<div className="max-w-7xl mx-auto px-4 relative z-10">
					{/* Botón para regresar a la lista de cursos */}
					<Link
						to="/courses"
						className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
					>
						<ArrowLeft className="w-4 h-4 mr-2" />
						Volver a cursos
					</Link>

					<div className="flex flex-col md:flex-row gap-10 items-start">
						{/* Columna Izquierda: Información Principal */}
						<div className="flex-1">
							{/* Etiqueta de Nivel */}
							<div className="inline-block px-3 py-1 bg-brand-blue rounded-full text-xs font-bold mb-4">
								{course.level}
							</div>

							{/* Título del Curso */}
							<h1 className="text-4xl lg:text-5xl font-extrabold mb-6 font-display">
								{course.title}
							</h1>

							{/* Descripción Corta */}
							<p className="text-xl text-gray-300 mb-8 max-w-2xl">
								{course.description}
							</p>

							{/* Metadatos: Duración y Certificado */}
							<div className="flex flex-wrap gap-6 text-sm text-gray-300 mb-8">
								<div className="flex items-center gap-2">
									<Clock className="w-5 h-5 text-brand-blue" />
									<span>{course.duration} de contenido</span>
								</div>
								<div className="flex items-center gap-2">
									<Award className="w-5 h-5 text-brand-blue" />
									<span>Certificado al finalizar</span>
								</div>
							</div>

							{/* Botón de Acción Principal (Call to Action) */}
							<div className="flex items-center gap-4">
								<Button
									onClick={handleEnroll}
									className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-rose-500/20"
								>
									Inscribirme Ahora - ${course.price}
								</Button>
							</div>
						</div>

						{/* Columna Derecha: Imagen/Video Preview */}
						<div className="w-full md:w-1/3 aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 relative group">
							<img
								src={course.image}
								alt={course.title}
								className="w-full h-full object-cover"
							/>
							{/* Botón de Play superpuesto */}
							<div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors cursor-pointer">
								<PlayCircle className="w-16 h-16 text-white opacity-90 group-hover:scale-110 transition-transform" />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* 
              --- SECCIÓN DE CONTENIDO PRINCIPAL ---
              Divide la pantalla en dos columnas (2/3 para info, 1/3 para sidebar) en desktop.
            */}
			<div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
				{/* Columna Izquierda: Descripción Larga y Módulos */}
				<div className="lg:col-span-2">
					<h2 className="text-2xl font-bold text-brand-dark mb-6 font-display">
						Descripción del curso
					</h2>
					<p className="text-gray-600 mb-12 leading-relaxed text-lg">
						{course.longDescription}
					</p>

					<h2 className="text-2xl font-bold text-brand-dark mb-6 font-display">
						Lo que aprenderás
					</h2>
					{/* Lista de módulos del curso */}
					<div className="bg-gray-50 rounded-3xl p-8 mb-12">
						<ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{course.modules.map((module, idx) => (
								<li
									key={idx}
									className="flex items-start gap-3"
								>
									<CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
									<span className="text-gray-700">
										{module}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Columna Derecha: Sidebar (Sticky/Fijo al hacer scroll) */}
				<div className="lg:col-span-1">
					<div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 sticky top-28">
						<h3 className="text-xl font-bold text-brand-dark mb-6 font-display">
							Este curso incluye:
						</h3>
						<ul className="space-y-4 mb-8">
							<li className="flex items-center gap-3 text-gray-600">
								<PlayCircle className="w-5 h-5 text-gray-400" />
								<span>
									{course.duration} de video bajo demanda
								</span>
							</li>
							<li className="flex items-center gap-3 text-gray-600">
								<CheckCircle2 className="w-5 h-5 text-gray-400" />
								<span>Acceso de por vida</span>
							</li>
							<li className="flex items-center gap-3 text-gray-600">
								<Award className="w-5 h-5 text-gray-400" />
								<span>Certificado de finalización</span>
							</li>
						</ul>
						<Button
							variant="outline"
							className="w-full rounded-full border-brand-blue text-brand-blue hover:bg-brand-blue/5"
						>
							Compartir curso
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
