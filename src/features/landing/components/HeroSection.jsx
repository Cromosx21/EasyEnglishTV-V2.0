import { Link } from "react-router-dom";
import { Button } from "@/components/ui/common/Button";
import {
	PlayCircle,
	Youtube,
	Instagram,
	Facebook,
	Twitter,
} from "lucide-react";

export default function HeroSection() {
	return (
		<div className="relative bg-yellow-300 overflow-hidden pt-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col lg:flex-row items-center py-12 lg:py-24 gap-12">
					{/* Text Content */}
					<div className="flex-1 text-center lg:text-left z-10">
						<div className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/5 backdrop-blur-sm text-brand-blue font-semibold text-sm mb-6 border border-brand-blue/10">
							🚀 Aprende inglés hoy
						</div>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight mb-6">
							Aprende inglés <br />
							<span className="text-brand-pink">
								de manera fácil
							</span>{" "}
							<br />y efectiva en EETV
						</h1>
						<p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 font-medium">
							Domina el idioma con nuestro método interactivo,
							materiales exclusivos y clases en vivo. ¡Únete a la
							comunidad más cool!
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
							<Link to="/auth/register">
								<Button
									size="lg"
									className="bg-brand-pink hover:bg-brand-pink/90 text-white rounded-full px-8 py-6 text-lg shadow-xl shadow-brand-pink/30 w-full sm:w-auto transition-transform hover:scale-105"
								>
									¡Comienza Ahora!
								</Button>
							</Link>
							<Link to="/courses">
								<Button
									variant="outline"
									size="lg"
									className="bg-white border-gray-200 text-brand-blue hover:bg-gray-50 rounded-full px-8 py-6 text-lg shadow-lg w-full sm:w-auto"
								>
									<PlayCircle className="w-5 h-5 mr-2" />
									Ver Demo
								</Button>
							</Link>
						</div>
					</div>

					{/* Image/Visual Content */}
					<div className="flex-1 relative z-10 w-full max-w-lg lg:max-w-none">
						<div className="relative">
							{/* Floating Elements */}
							<div className="absolute -top-12 -left-8 bg-white p-3 rounded-2xl shadow-lg rotate-[-6deg] animate-bounce delay-700 z-20 border border-gray-100">
								<span className="text-2xl">📚</span>
								<span className="font-bold text-brand-blue text-sm ml-2">
									Vocabulary
								</span>
							</div>
							<div className="absolute top-1/2 -right-8 bg-white p-3 rounded-2xl shadow-lg rotate-[6deg] animate-bounce delay-1000 z-20 border border-gray-100">
								<span className="text-2xl">🎧</span>
								<span className="font-bold text-brand-pink text-sm ml-2">
									Listening
								</span>
							</div>

							{/* Main Image Placeholder */}
							<div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl bg-brand-light aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
								{/* Placeholder for "Young Girl Happy" */}
								<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-blue to-indigo-500">
									<span className="text-white text-9xl opacity-20">
										👩‍🎓
									</span>
									{/* In production this would be: <img src="/hero-girl.png" ... /> */}
								</div>
							</div>

							{/* Social Sidebar (Floating) */}
							<div className="absolute top-10 -right-4 lg:-right-12 flex flex-col gap-3">
								<div className="bg-white p-2 rounded-full shadow-md hover:text-brand-blue cursor-pointer transition-colors">
									<Facebook className="w-5 h-5" />
								</div>
								<div className="bg-white p-2 rounded-full shadow-md hover:text-brand-pink cursor-pointer transition-colors">
									<Instagram className="w-5 h-5" />
								</div>
								<div className="bg-white p-2 rounded-full shadow-md hover:text-red-600 cursor-pointer transition-colors">
									<Youtube className="w-5 h-5" />
								</div>
								<div className="bg-white p-2 rounded-full shadow-md hover:text-blue-400 cursor-pointer transition-colors">
									<Twitter className="w-5 h-5" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Decorative Wave at Bottom */}
			<div className="absolute bottom-0 left-0 right-0 leading-none">
				<svg
					className="w-full h-12 lg:h-24 text-white fill-current"
					viewBox="0 0 1440 320"
					preserveAspectRatio="none"
				>
					<path
						fillOpacity="1"
						d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
					></path>
				</svg>
			</div>
		</div>
	);
}
