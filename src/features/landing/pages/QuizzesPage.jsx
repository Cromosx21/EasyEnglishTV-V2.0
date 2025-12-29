import { Link } from "react-router-dom";
import { Button } from "@/components/ui/common/Button";
import { CheckCircle2, Clock, PlayCircle, BarChart, Users } from "lucide-react";

const levels = [
	{
		id: "basic",
		name: "Nivel Básico",
		description: "Preguntas: Vocabulario y frases esenciales",
		time: "5 minutos",
		color: "blue",
		image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=300",
	},
	{
		id: "intermediate",
		name: "Nivel Intermedio",
		description: "Preguntas: Verbos, tiempos verbales y compresión",
		time: "5 minutos",
		color: "emerald",
		image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=300",
	},
	{
		id: "advanced",
		name: "Nivel Avanzado",
		description: "Preguntas: Lectura, conversación y redacción",
		time: "5 minutos",
		color: "orange",
		image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=300",
	},
];

export default function QuizzesPage() {
	return (
		<div className="bg-white min-h-screen">
			{/* Hero */}
			<section className="bg-[#eef2ff] pt-20 text-center px-4">
				<div className="py-20 max-w-3xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 font-display">
						Descubre tu nivel de inglés en minutos
					</h1>
					<p className="text-lg text-gray-600 mb-8">
						Responde nuestro quiz gratuito y recibe recomendaciones
						de cursos y materiales adaptados a tu nivel.
					</p>
                    <Link to="/quizzes/general">
                        <Button
                            size="lg"
                            className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-8 shadow-lg shadow-rose-500/30 cursor-pointer"
                        >
                            Comenzar Quiz General
                        </Button>
                    </Link>
				</div>
			</section>

			{/* Main Quiz Card */}
			<div className="max-w-5xl mx-auto px-4 -mt-10 relative z-10 mb-20">
				<div className="bg-indigo-50 rounded-3xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center border border-indigo-300">
					<div className="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden bg-gray-100 relative">
                        {/* Placeholder */}
                        <img src="/src/assets/quizz/General.png" alt="" />
                    </div>
					<div className="w-full md:w-1/2">
						<div className="inline-block px-3 py-1 rounded-full bg-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wide mb-4">
							Quiz General
						</div>
						<h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">
							Un cuestionario rápido para ubicar tu nivel de inglés
						</h2>
						<div className="space-y-3 mb-8">
							<div className="flex items-start gap-3">
								<CheckCircle2 className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
								<p className="text-gray-600 text-sm">
									Preguntas: Vocabulario, comprensión, gramática
								</p>
							</div>
							<div className="flex items-start gap-3">
								<Clock className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
								<p className="text-gray-600 text-sm">
									Tiempo estimado: 5 minutos
								</p>
							</div>
						</div>
                        <Link to="/quizzes/general" className="w-full sm:w-auto">
                            <Button
                                variant="outline"
                                className="w-full border-gray-300 text-gray-700 hover:bg-indigo-50 cursor-pointer hover:border-brand-blue hover:text-brand-blue rounded-full px-6 py-4"
                            >
                                <PlayCircle className="w-4 h-4 mr-2" />
                                Realizar test general
                            </Button>
                        </Link>
					</div>
				</div>
			</div>

			{/* Levels Grid */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
				<div className="text-center mb-12">
					<h2 className="text-xl font-bold text-brand-dark mb-4 font-display">
						¿Ya sabes tu nivel? Prueba nuestro <br />
						<span className="text-brand-blue text-4xl">
							Quiz por niveles
						</span>
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{levels.map((level) => (
						<div
							key={level.id}
							className={ ` rounded-3xl p-6 border bg-${level.color}-50 border-${level.color}-500 shadow-lg hover:shadow-xl transition-shadow group`}
						>
							<div className="flex gap-4 mb-6">
								<div className="w-24 h-24 shrink-0 rounded-2xl overflow-hidden bg-gray-100">
                                    <img src="src/assets/quizz/Levels.png" alt="Imagen de nivel" className="object-cover w-full h-full" />
								</div>
								
								<div>
									<div
										className={`inline-block px-2 py-0.5 rounded-full bg-${level.color}-100 text-${level.color}-700 text-[10px] font-bold uppercase mb-2`}
									>
										{level.name}
									</div>
									<div className="space-y-2">
										<div className="flex items-start gap-2">
											<CheckCircle2 className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
											<p className="text-xs text-gray-500 line-clamp-2">
												{level.description}
											</p>
										</div>
										<div className="flex items-center gap-2">
											<Clock className="w-4 h-4 text-gray-400 shrink-0" />
											<p className="text-xs text-gray-500">
												{level.time}
											</p>
										</div>
									</div>
								</div>
							</div>
                            <Link to={`/quizzes/${level.id}`} className="w-full">
                                <Button
                                    variant="outline"
                                    className="w-full rounded-full border-gray-200 hover:border-brand-blue hover:text-brand-blue cursor-pointer"
                                >
                                    Hacer Quiz {level.name.split(" ")[1]}
                                </Button>
                            </Link>
						</div>
					))}
				</div>
			</section>

            {/* Benefits */}
            <section className="bg-brand-light/30 py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-brand-dark mb-12 font-display">
                        Al hacer el quiz que <br/>
                        <span className="text-brand-blue text-4xl">Beneficios obtendré</span>
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Autoevaluación Rápida", icon: BarChart },
                            { title: "Recomendaciones", icon: CheckCircle2 },
                            { title: "Retroalimentación", icon: PlayCircle },
                            { title: "Acceso Gratuito", icon: Users },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-blue-50/50">
                                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mx-auto mb-4">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-xs text-gray-500">Brindamos contenido de calidad y actualizado constantemente.</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16">
                        <p className="text-gray-600 mb-6 font-medium">"Evalúa tu nivel y mejora tu inglés con nuestros quizzes interactivos."</p>
                        <Link to="/quizzes/general">
                            <Button className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-10 py-6 shadow-lg shadow-rose-500/20 cursor-pointer">
                                Comenzar Ahora
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
		</div>
	);
}
