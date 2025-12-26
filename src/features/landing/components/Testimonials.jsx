import { useState, useEffect } from "react";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/common/Avatar";
import { Star, Quote, ArrowUp, ArrowDown } from "lucide-react";

const testimonials = [
	{
		id: 1,
		content:
			"Las clases en vivo me ayudaron a mejorar mi pronunciación rápidamente. Los materiales exclusivos son muy útiles y prácticos.",
		author: "Carlos Pérez",
		role: "Inglés para los negocios",
		avatar: "CP",
		image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
	},
	{
		id: 2,
		content:
			"Increíble plataforma. He probado muchas apps, pero la interacción real con profesores aquí marca la diferencia total.",
		author: "Ana García",
		role: "Preparación IELTS",
		avatar: "AG",
		image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
	},
	{
		id: 3,
		content:
			"La comunidad es lo mejor. Poder practicar con compañeros de mi mismo nivel me quitó el miedo a hablar en público.",
		author: "Luis Rodríguez",
		role: "Inglés Conversacional",
		avatar: "LR",
		image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
	},
	{
		id: 4,
		content:
			"Los materiales descargables son oro puro. Las guías de gramática simplificada me salvaron en mi examen de certificación.",
		author: "María López",
		role: "Inglés Académico",
		avatar: "ML",
		image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
	},
];

export default function Testimonials() {
	const [activeIndex, setActiveIndex] = useState(0);

	// Auto-scroll effect
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % testimonials.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const handleNext = () => {
		setActiveIndex((prev) => (prev + 1) % testimonials.length);
	};

	const handlePrev = () => {
		setActiveIndex(
			(prev) => (prev - 1 + testimonials.length) % testimonials.length
		);
	};

	return (
		<section className="py-24 bg-[#eef2ff] relative overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="text-center mb-16">
					<h2 className="text-sm font-bold text-rose-500 tracking-wide uppercase mb-3">
						Comunidad EETV
					</h2>
					<h3 className="text-4xl lg:text-5xl font-extrabold text-brand-dark mb-4 font-display">
						Estos son los <br />
						<span className="text-brand-blue">Testimonios</span>
					</h3>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Descubre cómo EasyEnglishTV ha ayudado a mejorar el
						inglés de cientos de personas.
					</p>
				</div>

				<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
					{/* Left Side: Vertical Carousel */}
					<div className="flex-1 w-full max-w-xl">
						<div className="relative h-[600px] flex flex-col justify-center">
							{/* Navigation Buttons */}
							<div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20 translate-x-12 lg:translate-x-0">
								<button
									onClick={handlePrev}
									className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 text-rose-500 transition-colors"
								>
									<ArrowUp className="w-5 h-5" />
								</button>
								<div className="flex flex-col gap-1 py-2 items-center">
									{testimonials.map((_, idx) => (
										<div
											key={idx}
											className={`w-1.5 rounded-full transition-all duration-300 ${
												idx === activeIndex
													? "h-6 bg-rose-500"
													: "h-1.5 bg-brand-blue/20"
											}`}
										/>
									))}
								</div>
								<button
									onClick={handleNext}
									className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 text-rose-500 transition-colors"
								>
									<ArrowDown className="w-5 h-5" />
								</button>
							</div>

							{/* Cards Stack */}
							<div className="relative w-full h-[400px]">
								{testimonials.map((testimonial, index) => {
									// Calculate position relative to active index
									const position =
										(index -
											activeIndex +
											testimonials.length) %
										testimonials.length;

									let style = {};
									let zIndex = 0;
									let opacity = 0;

									if (position === 0) {
										// Active card
										style = {
											transform: "translateY(0) scale(1)",
											zIndex: 30,
											opacity: 1,
										};
									} else if (position === 1) {
										// Next card (below)
										style = {
											transform:
												"translateY(110px) scale(0.95)",
											zIndex: 20,
											opacity: 0.6,
										};
									} else if (
										position ===
										testimonials.length - 1
									) {
										// Previous card (above)
										style = {
											transform:
												"translateY(-110px) scale(0.95)",
											zIndex: 20,
											opacity: 0.6,
										};
									} else {
										// Hidden cards
										style = {
											transform:
												"translateY(200px) scale(0.9)",
											zIndex: 10,
											opacity: 0,
										};
									}

									return (
										<div
											key={testimonial.id}
											className="absolute top-0 left-0 w-full transition-all duration-500 ease-in-out"
											style={style}
										>
											<div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-50 relative">
												<div className="flex items-start gap-4">
													<div className="shrink-0">
														<Avatar className="h-14 w-14 border-2 border-white shadow-sm">
															<AvatarImage
																src={
																	testimonial.image
																}
																alt={
																	testimonial.author
																}
															/>
															<AvatarFallback className="bg-brand-blue/10 text-brand-blue font-bold">
																{
																	testimonial.avatar
																}
															</AvatarFallback>
														</Avatar>
													</div>
													<div>
														<h4 className="font-bold text-brand-dark text-lg">
															{testimonial.author}
														</h4>
														<p className="text-sm text-gray-400 mb-3">
															{testimonial.role}
														</p>
														<p className="text-gray-600 leading-relaxed">
															"
															{
																testimonial.content
															}
															"
														</p>
													</div>
												</div>
												{/* Quote Icon */}
												<div className="absolute top-6 right-6 text-brand-blue/10">
													<Quote className="w-10 h-10 fill-current" />
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>

					{/* Right Side: Hero Image */}
					<div className="flex-1 hidden lg:block relative">
						<div className="relative z-10">
							{/* This would be the "Woman with laptop" image */}
							<div className="bg-brand-blue rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 max-w-md mx-auto">
								<img
									src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
									alt="Happy student learning"
									className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
								/>
								<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-blue to-transparent p-8">
									<p className="text-white font-bold text-xl text-center">
										"La mejor decisión para mi carrera
										profesional"
									</p>
								</div>
							</div>

							{/* Floating Elements */}
							<div className="absolute -top-8 -right-8 bg-white p-4 rounded-xl shadow-lg animate-bounce delay-1000">
								<span className="text-3xl">👍</span>
							</div>
							<div className="absolute bottom-12 -left-12 bg-white p-4 rounded-xl shadow-lg animate-bounce delay-500">
								<div className="flex items-center gap-2">
									<div className="flex -space-x-2">
										{[1, 2, 3].map((i) => (
											<div
												key={i}
												className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
											></div>
										))}
									</div>
									<span className="text-sm font-bold text-brand-dark">
										+10k Students
									</span>
								</div>
							</div>
						</div>

						{/* Background Blob */}
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-blue/5 rounded-full blur-3xl -z-10"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
