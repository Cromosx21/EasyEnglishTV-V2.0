import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/common/Button";
import {
	Check,
	ShoppingCart,
	ArrowRight,
	ArrowLeft,
	BookOpen,
} from "lucide-react";
import { Card } from "@/components/ui/layout/Card";

const materials = [
	{
		id: 1,
		vol: "VOL. 1",
		title: "IDIOMS",
		subtitle: "English Mastery",
		image: "/src/assets/Books/Book_1.png",
		type: "Tomo 1 • Bestseller",
		mainTitle: "Fundamentos del Inglés Moderno",
		description:
			"No es solo un libro, es tu guía interactiva. Inicia tu camino con conceptos básicos, códigos QR para audio nativo y ejercicios prácticos.",
		includes: [
			"Contenido 2024",
			"Ejercicios QR",
			"Guías paso a paso",
			"Audio Nativo",
			"Flashcards digitales",
			"Soporte 24/7",
		],
		price: "$12.00",
		gradient: "from-indigo-500 to-indigo-600",
		emoji: "🇺🇸",
	},
	{
		id: 2,
		vol: "VOL. 2",
		title: "PHRASAL",
		subtitle: "Verbs Mastery",
		image: "/src/assets/Books/Book_2.png",
		type: "Tomo 2 • Intermedio",
		mainTitle: "Dominando los Phrasal Verbs",
		description:
			"Lleva tu inglés al siguiente nivel. Aprende los verbos compuestos más usados en conversaciones reales y situaciones de trabajo.",
		includes: [
			"500+ Phrasal Verbs",
			"Ejemplos en contexto",
			"Prácticas de listening",
			"Tests interactivos",
			"Comunidad exclusiva",
			"Certificado digital",
		],
		price: "$15.00",
		gradient: "from-rose-500 to-rose-600",
		emoji: "🇬🇧",
	},
	{
		id: 3,
		vol: "VOL. 3",
		title: "BUSINESS",
		subtitle: "Professional English",
		image: "/src/assets/Books/Book_3.png",
		type: "Tomo 3 • Avanzado",
		mainTitle: "Inglés para Negocios",
		description:
			"La herramienta definitiva para el éxito profesional. Vocabulario técnico, redacción de correos, presentaciones y negociación.",
		includes: [
			"Vocabulario técnico",
			"Plantillas de email",
			"Simulaciones de entrevista",
			"Networking tips",
			"Casos de estudio",
			"Mentoría grupal",
		],
		price: "$18.00",
		gradient: "from-amber-500 to-amber-600",
		emoji: "💼",
	},
];

export default function MaterialShowcase() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [dragOffset, setDragOffset] = useState(0);
	const [isDragging, setIsDragging] = useState(false);
	const [containerWidth, setContainerWidth] = useState(0);

	const containerRef = useRef(null);

	// Touch handling state
	const touchStartX = useRef(null);
	const touchCurrentX = useRef(null);

	useEffect(() => {
		if (containerRef.current) {
			setContainerWidth(containerRef.current.offsetWidth);
		}
		const handleResize = () => {
			if (containerRef.current) {
				setContainerWidth(containerRef.current.offsetWidth);
			}
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const onTouchStart = (e) => {
		setIsDragging(true);
		touchStartX.current = e.targetTouches[0].clientX;
		touchCurrentX.current = e.targetTouches[0].clientX;
		setDragOffset(0);
	};

	const onTouchMove = (e) => {
		if (!isDragging) return;
		touchCurrentX.current = e.targetTouches[0].clientX;
		const diff = touchCurrentX.current - touchStartX.current;
		setDragOffset(diff);
	};

	const onTouchEnd = () => {
		setIsDragging(false);
		if (!touchStartX.current || !touchCurrentX.current) return;

		const diff = touchCurrentX.current - touchStartX.current;
		const threshold = containerWidth * 0.2; // 20% width threshold

		if (diff > threshold && activeIndex > 0) {
			prevMaterial();
		} else if (diff < -threshold && activeIndex < materials.length - 1) {
			nextMaterial();
		}

		setDragOffset(0);
		touchStartX.current = null;
		touchCurrentX.current = null;
	};

	const nextMaterial = () => {
		if (activeIndex < materials.length - 1) {
			setActiveIndex((prev) => prev + 1);
		}
	};

	const prevMaterial = () => {
		if (activeIndex > 0) {
			setActiveIndex((prev) => prev - 1);
		}
	};

	return (
		<section className="py-24 bg-gradient-to-b from-brand-light to-white relative overflow-hidden">
			{/* Decorative Blobs */}
			<div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
			<div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

			<div
				className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden"
				ref={containerRef}
			>
				<div className="text-center mb-16">
					<p className="text-sm font-bold text-brand-pink uppercase tracking-widest">
						Contamos con
					</p>
					<h2 className="text-4xl sm:text-5xl font-extrabold text-brand-dark tracking-tight">
						Materiales{" "}
						<span className="text-brand-blue underline decoration-brand-yellow decoration-4 underline-offset-4">
							Exclusivos
						</span>
					</h2>
					<p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
						Descubre nuestros libros y recursos didácticos que
						marcan la diferencia en el aprendizaje del inglés.
					</p>
				</div>

				{/* Carousel Container */}
				<div
					className="flex transition-transform duration-500 ease-out touch-pan-y"
					style={{
						transform: `translateX(calc(-${
							activeIndex * 100
						}% + ${dragOffset}px))`,
						transition: isDragging
							? "none"
							: "transform 0.5s ease-out",
					}}
					onTouchStart={onTouchStart}
					onTouchMove={onTouchMove}
					onTouchEnd={onTouchEnd}
				>
					{materials.map((currentMaterial, index) => (
						<div
							key={currentMaterial.id}
							className="min-w-full px-4 lg:px-12 box-border"
						>
							<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative">
								{/* Desktop Navigation Arrows (Only visible on active slide on desktop) */}
								<div
									className={`hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 ${
										index !== activeIndex
											? "pointer-events-none opacity-0"
											: ""
									}`}
								>
									<button
										onClick={prevMaterial}
										disabled={activeIndex === 0}
										className={`w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 text-brand-dark hover:bg-brand-light hover:scale-110 transition-all ${
											activeIndex === 0
												? "opacity-50 cursor-not-allowed"
												: ""
										}`}
										aria-label="Previous material"
									>
										<ArrowLeft className="w-6 h-6" />
									</button>
								</div>

								<div
									className={`hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 ${
										index !== activeIndex
											? "pointer-events-none opacity-0"
											: ""
									}`}
								>
									<button
										onClick={nextMaterial}
										disabled={
											activeIndex === materials.length - 1
										}
										className={`w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 text-brand-dark hover:bg-brand-light hover:scale-110 transition-all ${
											activeIndex === materials.length - 1
												? "opacity-50 cursor-not-allowed"
												: ""
										}`}
										aria-label="Next material"
									>
										<ArrowRight className="w-6 h-6" />
									</button>
								</div>

								{/* Product Image with Interactive 3D feel */}
								<div className="flex-1 relative group perspective-1000 w-full max-w-md mx-auto lg:max-w-none">
									<div className="absolute inset-0 bg-brand-yellow rounded-[2.5rem] rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-20 scale-105"></div>
									<div className="relative bg-white/80 backdrop-blur-xl border-2 border-white rounded-[2.5rem] p-10 shadow-2xl flex items-center justify-center transform transition-transform duration-500 group-hover:-translate-y-2">
										{/* Book Mockup */}
										<div
											className={` rounded-r-2xl rounded-l-sm  shadow-2xl relative overflow-hidden transform group-hover:scale-105 transition-all duration-500`}
                    >
                      <img src={currentMaterial.image} className="w-full h-full object-cover" alt="Libro" />

											<div className="absolute bottom-0 left-0 right-0 h-2 bg-black/20"></div>
											<div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-black/20 to-transparent"></div>
										</div>
									</div>
								</div>

								{/* Product Details */}
								<div className="flex-1 space-y-8 w-full">
									{/* Mobile Navigation Controls */}
									<div className="flex justify-between items-center lg:hidden mb-4 px-4">
										<button
											onClick={(e) => {
												e.stopPropagation();
												prevMaterial();
											}}
											disabled={activeIndex === 0}
											className={`p-2 rounded-full bg-gray-100 hover:bg-gray-200 ${
												activeIndex === 0
													? "opacity-50"
													: ""
											}`}
										>
											<ArrowLeft className="w-5 h-5" />
										</button>
										<span className="font-mono text-sm text-gray-400">
											{index + 1} / {materials.length}
										</span>
										<button
											onClick={(e) => {
												e.stopPropagation();
												nextMaterial();
											}}
											disabled={
												activeIndex ===
												materials.length - 1
											}
											className={`p-2 rounded-full bg-gray-100 hover:bg-gray-200 ${
												activeIndex ===
												materials.length - 1
													? "opacity-50"
													: ""
											}`}
										>
											<ArrowRight className="w-5 h-5" />
										</button>
									</div>

									<div className="space-y-4">
										<span className="inline-block px-3 py-1 bg-brand-pink/10 text-brand-pink font-bold text-xs uppercase rounded-full">
											{currentMaterial.type}
										</span>
										<h3 className="text-3xl sm:text-4xl font-bold text-brand-dark leading-tight">
											{currentMaterial.mainTitle}
										</h3>
										<p className="text-lg text-gray-600 leading-relaxed">
											{currentMaterial.description}
										</p>
									</div>

									<div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/60 shadow-sm">
										<h4 className="font-bold text-brand-dark mb-4 flex items-center gap-2">
											<span className="w-2 h-2 rounded-full bg-brand-yellow"></span>
											Lo que incluye:
										</h4>
										<ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
											{currentMaterial.includes.map(
												(item) => (
													<li
														key={item}
														className="flex items-center text-gray-700 text-sm font-medium"
													>
														<span className="bg-green-100 text-green-600 p-0.5 rounded-full mr-2 shrink-0">
															<Check className="w-3 h-3" />
														</span>
														{item}
													</li>
												)
											)}
										</ul>
									</div>

									<div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
										<Button className="w-full sm:w-auto bg-brand-pink text-white hover:bg-brand-pink/90 hover:scale-105 transition-all rounded-full px-8 h-14 gap-3 shadow-xl shadow-brand-pink/20 text-lg">
											<ShoppingCart className="w-5 h-5" />
											Adquirir por {currentMaterial.price}
										</Button>
										<Button
											variant="ghost"
											className="w-full sm:w-auto text-brand-blue hover:text-brand-blue/80 hover:bg-brand-blue/5 font-bold gap-2 rounded-full h-14"
										>
											Ver preview gratuita{" "}
											<ArrowRight className="w-4 h-4" />
										</Button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Pagination Dots */}
				<div className="flex justify-center gap-2 mt-8">
					{materials.map((_, idx) => (
						<button
							key={idx}
							onClick={() => setActiveIndex(idx)}
							className={`h-2 rounded-full transition-all duration-300 ${
								idx === activeIndex
									? "w-8 bg-brand-blue"
									: "w-2 bg-gray-300"
							}`}
							aria-label={`Go to slide ${idx + 1}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
