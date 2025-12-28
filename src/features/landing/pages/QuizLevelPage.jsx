import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/common/Button";
import {
	ArrowLeft,
	Clock,
	AlertCircle,
	CheckCircle2,
	XCircle,
	HelpCircle,
	Trophy,
	BookOpen,
	Video,
} from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import questionsData from "../data/question.json";

// Mock Data for Recommendations
const recommendedCourses = {
	basic: {
		id: 1,
		title: "Curso teórico viajes I",
		image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400",
	},
	intermediate: {
		id: 2,
		title: "Inglés para Negocios",
		image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400",
	},
	advanced: {
		id: 3,
		title: "Gramática Avanzada",
		image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400",
	},
};

const recommendedMaterials = {
	basic: { id: 1, title: "Irregular Verbs - Tomo 1", type: "book" },
	intermediate: { id: 2, title: "Idioms for Travel", type: "book" },
	advanced: { id: 3, title: "Business English Pack", type: "pack" },
};

const quizConfig = {
	general: {
		title: "Quiz General",
		description:
			"Evalúa tu nivel global de inglés. El test se adapta a tus respuestas.",
		questions: 20,
		time: "15 min",
		adaptive: true,
	},
	basic: {
		title: "Quiz Nivel Básico",
		description: "Para estudiantes principiantes (A1-A2)",
		questions: 10,
		time: "10 min",
		levelKey: "Facil",
	},
	intermediate: {
		title: "Quiz Nivel Intermedio",
		description: "Para estudiantes intermedios (B1-B2)",
		questions: 15,
		time: "10 min",
		levelKey: "Intermedio",
	},
	advanced: {
		title: "Quiz Nivel Avanzado",
		description: "Para estudiantes avanzados (C1-C2)",
		questions: 15,
		time: "12 min",
		levelKey: "Dificil", // Assuming "Dificil" is the key in JSON, need to verify or handle gracefully
	},
};

const shuffleArray = (array) => {
	const newArray = [...array];
	for (let i = newArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
	}
	return newArray;
};

export default function QuizLevelPage() {
	const { level } = useParams();
	const navigate = useNavigate();
	const config = quizConfig[level];

	const [gameState, setGameState] = useState("intro"); // intro, playing, finished
	const [currentQuestions, setCurrentQuestions] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [userAnswers, setUserAnswers] = useState({});
	const [inputAnswer, setInputAnswer] = useState("");

	// Adaptive Quiz State
	const [adaptiveLevel, setAdaptiveLevel] = useState("Facil");
	const [blockScore, setBlockScore] = useState(0);

	useEffect(() => {
		if (!config) return;
		// Reset state when level changes
		setGameState("intro");
		setCurrentQuestions([]);
		setCurrentIndex(0);
		setScore(0);
		setUserAnswers({});
		setInputAnswer("");
	}, [level, config]);

	if (!config) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				Nivel de quiz no válido
			</div>
		);
	}

	const getQuestionsByLevel = (lvl, count, excludeIds = []) => {
		// Normalize level key for safety (e.g. "Facil", "Intermedio", "Dificil")
		// Check if "Dificil" exists in JSON, otherwise fallback
		const filtered = questionsData.filter(
			(q) => q.level === lvl && !excludeIds.includes(q.id)
		);
		const shuffled = shuffleArray(filtered);
		return shuffled.slice(0, count);
	};

	const handleStart = () => {
		if (config.adaptive) {
			// General Quiz: Start with 5 Facil questions
			const initialQuestions = getQuestionsByLevel("Facil", 5);
			setCurrentQuestions(initialQuestions);
			setAdaptiveLevel("Facil");
			setBlockScore(0);
		} else {
			// Level Specific Quiz
			// Map "basic" -> "Facil", "intermediate" -> "Intermedio", "advanced" -> "Dificil"
			// Or use config.levelKey if defined
			let targetLevel = config.levelKey;
			// Fallback mapping if not in config
			if (!targetLevel) {
				if (level === "basic") targetLevel = "Facil";
				if (level === "intermediate") targetLevel = "Intermedio";
				if (level === "advanced") targetLevel = "Dificil"; // Assuming Dificil
			}

			const questions = getQuestionsByLevel(
				targetLevel,
				config.questions
			);
			setCurrentQuestions(questions);
		}
		setGameState("playing");
		setCurrentIndex(0);
		setScore(0);
		setUserAnswers({});
		setInputAnswer("");
	};

	const handleNextQuestion = () => {
		const currentQ = currentQuestions[currentIndex];

		// Logic to validate answer
		let isCorrect = false;
		const userAnswer =
			currentQ.type === "rellenar"
				? inputAnswer
				: userAnswers[currentQ.id];

		if (
			userAnswer &&
			userAnswer.trim().toLowerCase() ===
				currentQ.correct_answer.toLowerCase()
		) {
			isCorrect = true;
			setScore((prev) => prev + 1);
			if (config.adaptive) {
				setBlockScore((prev) => prev + 1);
			}
		}

		// Save answer for review if needed (storing truthiness for now)
		// Actually, let's store the user's input
		setUserAnswers((prev) => ({ ...prev, [currentQ.id]: userAnswer }));
		setInputAnswer("");

		// Adaptive Logic Check (every 5 questions)
		if (
			config.adaptive &&
			(currentIndex + 1) % 5 === 0 &&
			currentIndex + 1 < config.questions
		) {
			// Determine next batch level
			// Rules:
			// - Start 5 Facil.
			// - If >= 3 correct (in this block), go up (Facil->Intermedio, Intermedio->Dificil).
			// - If < 3, stay same level (Facil->Facil, Intermedio->Intermedio, Dificil->Dificil).
			// Wait, user said: "en caso no pueda responder las preguntas del nivel, se debe mostrar preguntas de ese mismo level"

			// Calculate block score including current question
			const currentBlockScore = isCorrect ? blockScore + 1 : blockScore;

			let nextLevel = adaptiveLevel;
			if (currentBlockScore >= 3) {
				if (adaptiveLevel === "Facil") nextLevel = "Intermedio";
				else if (adaptiveLevel === "Intermedio")
					nextLevel = "Dificil"; // Assuming Dificil exists
				else if (adaptiveLevel === "Dificil") nextLevel = "Dificil";
			} else {
				nextLevel = adaptiveLevel;
			}

			// Generate next 5 questions
			const currentIds = currentQuestions.map((q) => q.id);
			const nextQuestions = getQuestionsByLevel(nextLevel, 5, currentIds);
			setCurrentQuestions((prev) => [...prev, ...nextQuestions]);
			setAdaptiveLevel(nextLevel);
			setBlockScore(0);
		}

		if (
			currentIndex + 1 < currentQuestions.length ||
			(config.adaptive && currentIndex + 1 < config.questions)
		) {
			// If adaptive and we just generated questions, currentQuestions.length increased.
			// If standard, currentQuestions.length is fixed.
			// But wait, React state update for currentQuestions might not be immediate in this closure?
			// Actually, if we just called setCurrentQuestions, the re-render will handle showing the next question?
			// No, handleNextQuestion continues. We need to increment index.
			// But if we just added questions, 'currentQuestions' in this scope is the old one.
			// We need to trust that the state update will happen and currentIndex + 1 will point to valid data on next render.
			// However, for the very specific moment of "Did we finish?", we need to know.

			// If adaptive, we know we go up to 20.
			// If (currentIndex + 1) === 20, we finish.

			if (currentIndex + 1 >= config.questions) {
				setGameState("finished");
			} else {
				setCurrentIndex((prev) => prev + 1);
			}
		} else {
			setGameState("finished");
		}
	};

	// UseEffect to catch end of game if logic above is tricky
	useEffect(() => {
		if (gameState === "playing" && currentIndex >= config.questions) {
			setGameState("finished");
		}
	}, [currentIndex, config.questions, gameState]);

	const handleSelectOption = (optionValue) => {
		setUserAnswers((prev) => ({
			...prev,
			[currentQuestions[currentIndex].id]: optionValue,
		}));
	};

	const getRecommendationKey = () => {
		const percentage = (score / config.questions) * 100;
		if (level === "general") {
			if (percentage < 40) return "basic";
			if (percentage < 70) return "intermediate";
			return "advanced";
		}
		return level;
	};

	if (gameState === "finished") {
		const recommendationKey = getRecommendationKey();
		const course = recommendedCourses[recommendationKey];
		const material = recommendedMaterials[recommendationKey];
		const percentage = Math.round((score / (currentIndex + 1)) * 100); // currentIndex + 1 should be total answered

		return (
			<div className="min-h-screen bg-gray-50 py-12 px-4">
				<div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
					<div className="bg-brand-blue/10 p-8 text-center">
						<div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
							<Trophy className="w-10 h-10 text-brand-blue" />
						</div>
						<h2 className="text-3xl font-bold text-brand-dark mb-2">
							¡Quiz Completado!
						</h2>
						<p className="text-gray-600">
							Has completado el {config.title}
						</p>
					</div>

					<div className="p-8">
						<div className="flex justify-center items-center mb-10">
							<div className="text-center px-8 py-4 bg-gray-50 rounded-2xl border border-gray-100">
								<div className="text-sm text-gray-500 mb-1 uppercase tracking-wide font-bold">
									Tu Puntuación
								</div>
								<div className="text-5xl font-extrabold text-brand-blue">
									{score}/{currentIndex + 1}
								</div>
								<div className="text-sm font-medium text-gray-400 mt-1">
									{percentage}% Correcto
								</div>
							</div>
						</div>

						<div className="grid md:grid-cols-2 gap-8 mb-10">
							{/* Course Recommendation */}
							<div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
								<div className="flex items-center gap-3 mb-4">
									<div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center text-rose-500">
										<Video className="w-5 h-5" />
									</div>
									<h3 className="font-bold text-gray-900">
										Curso Recomendado
									</h3>
								</div>
								<div className="aspect-video rounded-lg bg-gray-200 mb-4 overflow-hidden">
									<img
										src={course.image}
										alt={course.title}
										className="w-full h-full object-cover"
									/>
								</div>
								<h4 className="font-bold text-gray-800 mb-2">
									{course.title}
								</h4>
								<Link
									to={`/courses/${course.id}`}
									className="block"
								>
									<Button
										size="sm"
										className="w-full bg-rose-500 hover:bg-rose-600 text-white"
									>
										Ver Curso
									</Button>
								</Link>
							</div>

							{/* Material Recommendation */}
							<div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
								<div className="flex items-center gap-3 mb-4">
									<div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
										<BookOpen className="w-5 h-5" />
									</div>
									<h3 className="font-bold text-gray-900">
										Material Recomendado
									</h3>
								</div>
								<div className="aspect-video rounded-lg bg-emerald-50 mb-4 flex items-center justify-center">
									<BookOpen className="w-12 h-12 text-emerald-200" />
								</div>
								<h4 className="font-bold text-gray-800 mb-2">
									{material.title}
								</h4>
								<Link
									to={`/materials/${material.id}`}
									className="block"
								>
									<Button
										size="sm"
										variant="outline"
										className="w-full"
									>
										Ver Material
									</Button>
								</Link>
							</div>
						</div>

						<div className="flex gap-4 justify-center">
							<Button
								onClick={() => window.location.reload()}
								variant="outline"
							>
								Intentar de nuevo
							</Button>
							<Link to="/quizzes">
								<Button variant="ghost">
									Volver a quizzes
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}

	if (
		gameState === "playing" &&
		currentQuestions.length > 0 &&
		currentQuestions[currentIndex]
	) {
		const question = currentQuestions[currentIndex];
		const progress = ((currentIndex + 1) / config.questions) * 100;

		return (
			<div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
				<div className="w-full max-w-2xl">
					{/* Progress Bar */}
					<div className="mb-6 flex items-center gap-4">
						<Link
							to="/quizzes"
							className="text-gray-400 hover:text-gray-600"
						>
							<XCircle className="w-6 h-6" />
						</Link>
						<div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
							<div
								className="h-full bg-brand-blue transition-all duration-500 ease-out"
								style={{ width: `${progress}%` }}
							></div>
						</div>
						<div className="text-sm font-bold text-gray-500">
							{currentIndex + 1}/{config.questions}
						</div>
					</div>

					<div className="bg-white rounded-3xl p-8 shadow-xl">
						{/* Question Header */}
						<div className="mb-8">
							{!config.adaptive && (
								<div className="inline-block px-3 py-1 bg-blue-50 text-brand-blue text-xs font-bold uppercase rounded-full mb-4">
									{question.level}
								</div>
							)}
							<h2 className="text-2xl font-bold text-gray-900 leading-relaxed">
								{question.question}
							</h2>
						</div>

						{/* Options */}
						<div className="space-y-4 mb-8">
							{question.type === "seleccionar" ? (
								<div className="grid gap-3">
									{question.alternatives &&
										Object.values(
											question.alternatives
										).map((opt, idx) => (
											<button
												key={idx}
												onClick={() =>
													handleSelectOption(opt)
												}
												className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group
                                                ${
													userAnswers[question.id] ===
													opt
														? "border-brand-blue bg-blue-50/50"
														: "border-gray-100 hover:border-gray-300 hover:bg-gray-50"
												}`}
											>
												<span
													className={`font-medium ${
														userAnswers[
															question.id
														] === opt
															? "text-brand-blue"
															: "text-gray-700"
													}`}
												>
													{opt}
												</span>
												<div
													className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                                                ${
													userAnswers[question.id] ===
													opt
														? "border-brand-blue bg-brand-blue"
														: "border-gray-300 group-hover:border-gray-400"
												}`}
												>
													{userAnswers[
														question.id
													] === opt && (
														<div className="w-2 h-2 bg-white rounded-full" />
													)}
												</div>
											</button>
										))}
								</div>
							) : (
								<div>
									<input
										type="text"
										value={inputAnswer}
										onChange={(e) =>
											setInputAnswer(e.target.value)
										}
										placeholder="Escribe tu respuesta aquí..."
										className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all"
									/>
								</div>
							)}
						</div>

						{/* Footer */}
						<div className="flex justify-end">
							<Button
								onClick={handleNextQuestion}
								disabled={
									question.type === "seleccionar"
										? !userAnswers[question.id]
										: !inputAnswer.trim()
								}
								className="bg-brand-blue hover:bg-brand-blue/90 text-white rounded-full px-8 py-6 shadow-lg shadow-blue-500/20"
							>
								{currentIndex + 1 === config.questions
									? "Finalizar Quiz"
									: "Siguiente Pregunta"}
							</Button>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
			<div className="w-full max-w-3xl">
				<Link
					to="/quizzes"
					className="inline-flex items-center text-gray-500 hover:text-brand-blue mb-8 transition-colors"
				>
					<ArrowLeft className="w-4 h-4 mr-2" />
					Volver a quizzes
				</Link>

				<div className="bg-[#eef2ff] rounded-[2.5rem] p-12 text-center relative overflow-hidden">
					<div className="relative z-10">
						<div className="inline-block px-4 py-1 bg-white rounded-full text-brand-blue text-sm font-bold mb-6 shadow-sm">
							{config.questions} Preguntas
						</div>
						<h1 className="text-4xl lg:text-5xl font-extrabold text-brand-dark mb-4 font-display">
							{config.title}
						</h1>
						<p className="text-lg text-gray-600 mb-10 max-w-lg mx-auto">
							{config.description}. Tienes {config.time} para
							completar el test.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
							<div className="flex items-center gap-2 text-gray-500 text-sm bg-white px-4 py-2 rounded-full">
								<Clock className="w-4 h-4" />
								Tiempo límite: {config.time}
							</div>
							<div className="flex items-center gap-2 text-gray-500 text-sm bg-white px-4 py-2 rounded-full">
								<AlertCircle className="w-4 h-4" />
								Un solo intento
							</div>
						</div>

						<Button
							onClick={handleStart}
							className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-12 py-8 text-xl shadow-xl shadow-rose-500/20 w-full sm:w-auto"
						>
							Comenzar Quiz
						</Button>
					</div>

					{/* Background decorations */}
					<div className="absolute top-0 left-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
					<div className="absolute bottom-0 right-0 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
				</div>
			</div>
		</div>
	);
}
