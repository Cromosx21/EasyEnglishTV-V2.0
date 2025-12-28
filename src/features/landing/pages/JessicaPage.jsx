import { Button } from "@/components/ui/common/Button";
import {
	Youtube,
	Star,
	Award,
	BookOpen,
	Users,
	Play,
	Clock,
} from "lucide-react";
import { useState } from "react";

export default function JessicaPage() {
	// Estado para el video activo (reproductor principal)
	// En una implementación real con API, esto se establecería con el primer resultado del fetch
	const [activeVideo, setActiveVideo] = useState({
		id: "SB6zlm-Zm1w", // Video real de Easy English TV (Inglés con Amor)
		title: "Aprende a usar los PRONOMBRES POSESIVOS en Inglés",
		views: "45k",
		date: "hace 2 semanas",
		description:
			"En esta clase aprenderás todo sobre los pronombres posesivos en inglés de una manera fácil y divertida. ¡No te lo pierdas!",
	});

	// Mock de videos recientes.
	// TODO: Reemplazar con una llamada a la API de YouTube (GET https://www.googleapis.com/youtube/v3/search?key=API_KEY&channelId=CHANNEL_ID&part=snippet,id&order=date&maxResults=5)
	const recentVideos = [
		{
			id: "SB6zlm-Zm1w",
			title: "Aprende a usar los PRONOMBRES POSESIVOS en Inglés",
			views: "45k",
			date: "hace 2 semanas",
			duration: "12:45",
		},
		{
			id: "HwcSNfLNOL4", // ID de ejemplo (reemplazar con real)
			title: "CUÁLES son y CÓMO usar los WH QUESTIONS en INGLÉS 🤔👩🏻‍🏫",
			views: "1.5k",
			date: "hace 1 mes",
			duration: "39:36",
		},
		{
			id: "sJyzPPAXxxA", // ID de ejemplo
			title: "El ABECEDARIO en Inglés y su PRONUNCIACIÓN 🔥👩🏻‍🏫",
			views: "1.4k",
			date: "hace 2 meses",
			duration: "44:13",
		},
		{
			id: "tvFd6CG4rMU", // ID de ejemplo
			title: "Cómo decir los DÍAS y los MESES en Inglés 👩🏻‍🏫✅ Pronuncialo Correctamente",
			views: "1.1 k",
			date: "hace 2 meses",
			duration: "41:59",
		},
	];

	return (
		<div className="bg-white min-h-screen">
			{/* Hero Section */}
			<section className="relative pt-36 pb-24 overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col lg:flex-row items-center gap-16">
						{/* Image */}
						<div className="flex-1 relative order-2 lg:order-1">
							<div className="relative z-10 mx-auto">
								{/* Placeholder for Jessica's Image */}
								<img
									src="/src/assets/Landing/Home-hero.png"
									alt="Docente Jessica"
									className="mask-b-from-60% mask-b-to-95% w-full h-full object-cover "
								/>
								{/* Floating Elements */}
								<div className="absolute -bottom-6 right-1/2 translate-x-1/2 bg-white py-4 px-6 rounded-2xl shadow-xl animate-bounce delay-700">
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
								Conoce a{" "}
								<span className="text-brand-blue">Jessica</span>
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
										className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 shadow-lg shadow-red-600/20 cursor-pointer hover:-translate-y-0.5 transition-transform duration-300"
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
						<div className="inline-flex px-4 py-2">
							<img src="/src/assets/Logo.svg" alt="Logo del canal EasyEnglish TV" />
						</div>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						{/* Left Column: Main Video & Channel Info */}
						<div className="lg:col-span-2 flex flex-col gap-4">
							{/* Main Video Player */}
							<div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-lg relative group">
								<iframe
									width="100%"
									height="100%"
									src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=0&rel=0&modestbranding=1`}
									title={activeVideo.title}
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									className="w-full h-full"
								></iframe>
							</div>

							{/* Channel Info Row */}
							<div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
								<div className="flex items-center gap-4">
									<div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 border-2 border-gray-50 shrink-0 shadow-inner">
										<img
											src="/src/assets/Landing/Home-hero.png"
											alt="EasyEnglish TV"
											className="w-full h-full object-cover"
										/>
									</div>
									<div className="text-center sm:text-left">
										<h3 className="font-bold text-lg text-gray-900 leading-tight">
											EasyEnglish TV
										</h3>
										<p className="text-gray-500 text-sm">
											447 K suscriptores
										</p>
									</div>
								</div>
								<a
									href="https://www.youtube.com/@EasyEnglishTVJL"
									target="_blank"
									rel="noreferrer"
								>
									<Button className="bg-red-600 hover:bg-red-500 text-white rounded-full px-6 shadow-lg shadow-gray-200 cursor-pointer hover:-translate-y-0.5 transition-all duration-300">
										Ir al canal
									</Button>
								</a>
							</div>
						</div>

						{/* Right Column: Recent Videos List */}
						<div className="flex flex-col h-full bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
							<div className="flex items-center justify-between mb-6">
								<h3 className="font-bold text-gray-900">
									Videos recientes
								</h3>
								<Youtube className="w-5 h-5 text-red-600" />
							</div>

							<div className="flex-1 flex flex-col gap-5 overflow-y-auto max-h-[500px] pr-2 custom-scrollbar">
								{recentVideos.map((video) => (
									<div
										key={video.id}
										className={`flex gap-3 group cursor-pointer p-2 rounded-xl transition-colors ${
											activeVideo.id === video.id
												? "bg-red-50"
												: "hover:bg-gray-50"
										}`}
										onClick={() => setActiveVideo(video)}
									>
										<div className="w-32 aspect-video bg-gray-200 rounded-lg overflow-hidden relative shrink-0">
											<img
												src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
												alt={video.title}
												className="w-full h-full object-cover"
											/>
											<span className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1 rounded font-medium">
												{video.duration}
											</span>
											{activeVideo.id === video.id && (
												<div className="absolute inset-0 bg-black/20 flex items-center justify-center">
													<div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center animate-pulse">
														<Play className="w-3 h-3 text-white fill-current ml-0.5" />
													</div>
												</div>
											)}
										</div>
										<div className="flex flex-col gap-1 min-w-0 justify-center">
											<h4
												className={`font-bold text-sm line-clamp-2 leading-snug transition-colors ${
													activeVideo.id === video.id
														? "text-red-600"
														: "text-gray-900 group-hover:text-red-600"
												}`}
											>
												{video.title}
											</h4>
											<div className="flex items-center gap-2 text-xs text-gray-500">
												<span>
													{video.views} vistas
												</span>
												<span>•</span>
												<span>{video.date}</span>
											</div>
										</div>
									</div>
								))}
							</div>

							<a
								href="https://www.youtube.com/@EasyEnglishTVJL/videos"
								target="_blank"
								rel="noreferrer"
								className="mt-6 pt-4 border-t border-gray-100"
							>
								<Button
									variant="outline"
									className="w-full rounded-full border-gray-200 text-gray-600 hover:text-red-600 hover:border-red-200 hover:bg-red-50 cursor-pointer hover:-translate-y-0.5 transition-transform duration-300"
								>
									Ver más videos
								</Button>
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
