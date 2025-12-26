import { Button } from "@/components/ui/common/Button";
import { Youtube, Star, Award, BookOpen, Users } from "lucide-react";

export default function JessicaPage() {
	return (
		<div className="bg-white min-h-screen">
			{/* Hero Section */}
			<section className="relative pt-36 pb-24 overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col lg:flex-row items-center gap-16">
						{/* Image */}
						<div className="flex-1 relative order-2 lg:order-1">
							<div className="relative z-10 mx-auto max-w-md">
								<div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl bg-brand-light">
									{/* Placeholder for Jessica's Image */}
									<div className="w-full h-full bg-emerald-100 flex items-center justify-center">
										<span className="text-6xl">👩‍🏫</span>
									</div>
								</div>
								{/* Floating Elements */}
								<div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce delay-700">
									<div className="flex items-center gap-2">
										<div className="bg-rose-100 p-2 rounded-lg text-rose-500">
											<Youtube className="w-6 h-6" />
										</div>
										<div>
											<p className="text-xs text-gray-500 font-bold uppercase">
												YouTube
											</p>
											<p className="font-bold text-gray-900">
												+1M Subs
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-500/5 rounded-full blur-3xl -z-10"></div>
						</div>

						{/* Content */}
						<div className="flex-1 text-center lg:text-left order-1 lg:order-2">
							<h1 className="text-4xl lg:text-5xl font-extrabold text-brand-dark mb-6 font-display">
								Conoce a <span className="text-brand-blue">Jessica</span>
							</h1>
							<p className="text-xl text-gray-600 mb-8 leading-relaxed">
								Jessica es docente certificada, creadora de
								EasyEnglishTV y apasionada por enseñar inglés de
								forma sencilla y real. Ha ayudado a cientos de
								estudiantes a mejorar su inglés desde cero.
							</p>

							{/* Stats Grid */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
								<div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
									<BookOpen className="w-8 h-8 text-brand-blue mb-3 mx-auto lg:mx-0" />
									<h3 className="font-bold text-gray-900 mb-1">
										+5 años
									</h3>
									<p className="text-sm text-gray-600">
										enseñando inglés a estudiantes de todas
										las edades.
									</p>
								</div>
								<div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
									<Award className="w-8 h-8 text-purple-600 mb-3 mx-auto lg:mx-0" />
									<h3 className="font-bold text-gray-900 mb-1">
										Especialización
									</h3>
									<p className="text-sm text-gray-600">
										en enseñanza del idioma inglés como
										lengua extranjera.
									</p>
								</div>
								<div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
									<Users className="w-8 h-8 text-orange-500 mb-3 mx-auto lg:mx-0" />
									<h3 className="font-bold text-gray-900 mb-1">
										Global
									</h3>
									<p className="text-sm text-gray-600">
										Experiencia con estudiantes de Perú y
										del extranjero.
									</p>
								</div>
								<div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
									<Youtube className="w-8 h-8 text-rose-500 mb-3 mx-auto lg:mx-0" />
									<h3 className="font-bold text-gray-900 mb-1">
										Creadora
									</h3>
									<p className="text-sm text-gray-600">
										de contenido educativo en YouTube
										(EasyEnglishTV).
									</p>
								</div>
							</div>

							<div className="flex justify-center lg:justify-start">
								<a
									href="https://youtube.com"
									target="_blank"
									rel="noreferrer"
								>
									<Button
										size="lg"
										className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 shadow-lg shadow-red-600/20"
									>
										<Youtube className="w-5 h-5 mr-2" />
										Visitar canal de YouTube
									</Button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* YouTube Section */}
			<section className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-brand-dark mb-4 font-display">
							Mi canal de YouTube
						</h2>
						<div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
							<span className="font-bold text-brand-blue text-lg">
								EASYENGLISH
							</span>
							<span className="bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded">
								TV
							</span>
						</div>
					</div>

					{/* Video Grid Placeholder */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[1, 2, 3].map((i) => (
							<div
								key={i}
								className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
							>
								<div className="aspect-video bg-gray-200 relative">
									<div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/10 transition-colors">
										<Youtube className="w-12 h-12 text-red-600 opacity-80 group-hover:scale-110 transition-transform" />
									</div>
								</div>
								<div className="p-4">
									<h3 className="font-bold text-gray-900 line-clamp-2 mb-2">
										Clase de Inglés #{i}: Aprende vocabulario
										esencial para viajar
									</h3>
									<p className="text-sm text-gray-500">
										15k vistas • hace 2 días
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
