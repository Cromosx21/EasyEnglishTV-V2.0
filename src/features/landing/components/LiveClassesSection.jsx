import { Button } from "@/components/ui/common/Button";
import { Video, CheckCircle2, Mic, Users, Clock, Play } from "lucide-react";

export default function LiveClassesSection() {
	return (
		<section className="py-24 bg-brand-dark relative overflow-hidden">
			{/* Dynamic Background */}
			<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
			<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
			<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-pink rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
					{/* Text Content */}
					<div className="flex-1 order-2 lg:order-1">
						<div className="mb-10">
							<span className="text-brand-yellow font-bold tracking-wider uppercase text-sm mb-2 block">
								Metodología Interactiva
							</span>
							<h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
								Clases en vivo <br />
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-pink">
									que sí funcionan
								</span>
							</h2>
						</div>

						<div className="space-y-6">
							<p className="text-lg text-gray-200 font-medium leading-relaxed">
								Olvídate de las clases aburridas. Participa en
								sesiones en tiempo real, interactúa con
								profesores nativos y mejora tu inglés día a día.
							</p>

							<div className="grid gap-4">
								{[
									{
										text: "Interacción en tiempo real",
										icon: Users,
										color: "text-brand-yellow",
									},
									{
										text: "Corrección de pronunciación",
										icon: Mic,
										color: "text-brand-pink",
									},
									{
										text: "Acceso ilimitado a grabaciones",
										icon: Clock,
										color: "text-blue-400",
									},
								].map((item) => (
									<div
										key={item.text}
										className="flex items-center gap-4 bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 transition-colors cursor-default group"
									>
										<div
											className={`p-2 rounded-lg bg-white/5 ${item.color} group-hover:scale-110 transition-transform`}
										>
											<item.icon className="w-6 h-6" />
										</div>
										<span className="text-white font-medium text-lg">
											{item.text}
										</span>
									</div>
								))}
							</div>

							<div className="pt-8">
								<Button
									size="lg"
									className="w-full sm:w-auto bg-brand-yellow text-brand-dark hover:bg-brand-yellow/90 font-bold rounded-full px-10 h-14 text-lg shadow-[0_0_20px_rgba(255,214,0,0.3)] hover:shadow-[0_0_30px_rgba(255,214,0,0.5)] transition-all"
								>
									Reservar mi primera clase
								</Button>
							</div>
						</div>
					</div>

					{/* Visual Content */}
					<div className="flex-1 relative order-1 lg:order-2 w-full">
						<div className="max-w-xl relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white/10 bg-gray-900 aspect-video group">
							{/* Video Youtube */}
							<iframe
								className="w-full h-full"
								src="https://www.youtube.com/embed/SB6zlm-Zm1w"
								title="Aprende a usar los PRONOMBRES POSESIVOS en Inglés 👩🏻‍🏫 Inglés con Amor 12 ❤️"
								frameborder="0"
								allow="accelerometer autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerpolicy="strict-origin-when-cross-origin"
								allowfullscreen
							></iframe>


							{/* Floating Student Bubbles */}
							<div className="absolute bottom-4 right-6 flex -space-x-4 z-20">
								{[1, 2, 3].map((i) => (
									<div
										key={i}
										className="w-12 h-12 rounded-full border-2 border-brand-dark bg-gray-200 flex items-center justify-center overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform"
									>
										<img
											src={`/src/assets/Profile/Profile_${i}.png`}
											alt={`Student ${i}`}
											className="w-full h-full object-cover"
										/>
									</div>
								))}
								<div className="w-12 h-12 rounded-full border-2 border-brand-dark bg-brand-pink flex items-center justify-center text-white font-bold shadow-lg z-10">
									+20
								</div>
							</div>
						</div>

						{/* Decorative Elements */}
						<div className="absolute -top-6 -right-6 bg-white text-brand-dark px-6 py-3 rounded-xl shadow-xl font-bold rotate-6 z-30 animate-bounce delay-1000">
							🔴 LIVE
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
