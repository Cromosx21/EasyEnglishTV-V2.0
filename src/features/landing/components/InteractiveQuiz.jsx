import { Button } from "@/components/ui/common/Button";
import { Card, CardContent } from "@/components/ui/layout/Card";
import { CheckSquare, BarChart, ArrowRight, Trophy } from "lucide-react";

export default function InteractiveQuiz() {
	return (
		<section className="py-24 bg-brand-blue relative overflow-hidden">
			{/* Background Patterns */}
			<div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="flex flex-col lg:flex-row items-center gap-16">
					{/* Text Side */}
					<div className="flex-1 text-center lg:text-left">
						<div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full mb-6 border border-white/20 backdrop-blur-sm">
							<Trophy className="w-4 h-4 text-brand-yellow" />
							<span className="font-bold text-sm uppercase tracking-wide">
								Desafío EETV
							</span>
						</div>
						<h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
							¿Cuál es tu nivel <br />
							<span className="text-brand-yellow">
								real de inglés?
							</span>
						</h2>
						<p className="text-xl text-blue-100 mb-10 max-w-lg mx-auto lg:mx-0">
							No pierdas tiempo en cursos que no son para ti. Toma
							nuestro test inteligente y descubre tu ruta de
							aprendizaje ideal en 5 minutos.
						</p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="/quizzes" className="block">
                                <Card className="bg-white/10 border-white/20 backdrop-blur-md hover:bg-white/20 transition-colors cursor-pointer group flex-1 max-w-xs">
                                    <CardContent className="p-6 flex items-center gap-4 text-left">
                                        <div className="bg-brand-pink p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                                            <CheckSquare className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white text-lg">
                                                Test Rápido
                                            </h3>
                                            <p className="text-blue-100 text-xs font-medium">
                                                5 minutos • General
                                            </p>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-white ml-auto group-hover:translate-x-1 transition-transform" />
                                    </CardContent>
                                </Card>
                            </a>
                            
                            <a href="/quizzes" className="block">
                                <Card className="bg-white hover:bg-gray-50 transition-colors cursor-pointer group flex-1 max-w-xs border-none shadow-xl">
                                    <CardContent className="p-6 flex items-center gap-4 text-left">
                                        <div className="bg-brand-blue p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                                            <BarChart className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-brand-dark text-lg">
                                                Test Profundo
                                            </h3>
                                            <p className="text-gray-500 text-xs">
                                                20 minutos • Preciso
                                            </p>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-brand-blue transition-colors" />
                                    </CardContent>
                                </Card>
                            </a>

						</div>
					</div>

					{/* Visual Side */}
					<div className="flex-1 w-full max-w-md mx-auto relative">
						<div className="absolute inset-0 bg-brand-pink/20 blur-3xl rounded-full"></div>
						<div className="relative bg-white rounded-[2.5rem] shadow-2xl p-2 rotate-2 hover:rotate-0 transition-transform duration-500">
							<div className="bg-gray-50 rounded-[2rem] overflow-hidden border border-gray-100">
								{/* Mock App UI */}
								<div className="bg-white p-6 border-b border-gray-100 flex justify-between items-center">
									<span className="font-bold text-gray-400">
										Question 3/10
									</span>
									<span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
										Easy
									</span>
								</div>
								<div className="p-8">
									<div className="h-2 w-full bg-gray-100 rounded-full mb-8">
										<div className="h-full w-1/3 bg-brand-blue rounded-full"></div>
									</div>
									<h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
										Select the correct verb form:
									</h3>
									<div className="space-y-3">
										{[
											"She ___ to the store yesterday.",
											"She go",
											"She went",
											"She gone",
										].map((opt, i) => (
											<div
												key={i}
												className={`p-4 rounded-xl border-2 font-medium cursor-pointer transition-all ${
													i === 2
														? "border-brand-blue bg-brand-light text-brand-blue shadow-sm"
														: "border-gray-100 hover:border-gray-200 text-gray-600"
												}`}
											>
												{opt.includes("___") ? (
													<span className="text-lg italic">
														{opt}
													</span>
												) : (
													opt
												)}
												{i === 2 && (
													<span className="float-right">
														✅
													</span>
												)}
											</div>
										))}
									</div>
								</div>
								<div className="bg-gray-50 p-6 text-center">
									<Button className="w-full bg-brand-dark text-white rounded-xl py-6">
										Next Question
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
