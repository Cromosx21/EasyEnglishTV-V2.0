import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/common/Button";
import { ArrowLeft, Clock, AlertCircle } from "lucide-react";
import { useState } from "react";

const quizConfig = {
    general: {
        title: "Quiz General",
        description: "Evalúa tu nivel global de inglés",
        questions: 30,
        time: "15 min"
    },
    basic: {
        title: "Quiz Nivel Básico",
        description: "Para estudiantes principiantes (A1-A2)",
        questions: 15,
        time: "10 min"
    },
    intermediate: {
        title: "Quiz Nivel Intermedio",
        description: "Para estudiantes intermedios (B1-B2)",
        questions: 15,
        time: "10 min"
    },
    advanced: {
        title: "Quiz Nivel Avanzado",
        description: "Para estudiantes avanzados (C1-C2)",
        questions: 20,
        time: "12 min"
    }
};

export default function QuizLevelPage() {
    const { level } = useParams();
    const navigate = useNavigate();
    const config = quizConfig[level];
    const [started, setStarted] = useState(false);

    if (!config) {
        return <div className="min-h-screen flex items-center justify-center">Nivel de quiz no válido</div>;
    }

    const handleStart = () => {
        setStarted(true);
        // Here would be the logic to start the quiz
        // For now just showing a placeholder
    };

    if (started) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl p-8 shadow-xl max-w-2xl w-full text-center">
                    <h2 className="text-2xl font-bold mb-4">Quiz en progreso...</h2>
                    <p className="text-gray-600 mb-8">Aquí irían las preguntas del {config.title}</p>
                    <Button onClick={() => setStarted(false)} variant="outline">Cancelar</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
             <div className="w-full max-w-3xl">
                <Link to="/quizzes" className="inline-flex items-center text-gray-500 hover:text-brand-blue mb-8 transition-colors">
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
                            {config.description}. Tienes {config.time} para completar el test.
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
