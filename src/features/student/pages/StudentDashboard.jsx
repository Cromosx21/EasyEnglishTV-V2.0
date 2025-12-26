import { Button } from "@/components/ui/common/Button"
import { PlayCircle, BookOpen, GraduationCap, ArrowRight, Clock } from "lucide-react"
import { Link } from "react-router-dom"

const activeCourses = [
    {
        id: 1,
        title: "Inglés para Negocios",
        progress: 45,
        lastLesson: "Writing Professional Emails",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 2,
        title: "Curso teórico viajes I",
        progress: 10,
        lastLesson: "At the Airport",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400"
    }
]

const activeMaterials = [
    {
        id: 1,
        title: "Irregular Verbs - Tomo 1",
        type: "book",
        lastAccessed: "2 days ago"
    },
    {
        id: 2,
        title: "Listening Mastery",
        type: "audio",
        lastAccessed: "1 week ago"
    }
]

export default function StudentDashboard() {
  return (
    <div className="space-y-8">
        <header className="mb-8">
            <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white">
                Hola, Estudiante 👋
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
                Continúa donde lo dejaste y sigue aprendiendo.
            </p>
        </header>

        {/* Level Test Banner */}
        <section className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h2 className="text-2xl font-bold mb-2">¿No sabes cuál es tu nivel?</h2>
                    <p className="text-blue-100 max-w-xl">
                        Realiza nuestro test de nivelación gratuito para descubrir qué cursos son ideales para ti. Solo toma 10 minutos.
                    </p>
                </div>
                <Link to="/quizzes">
                    <Button className="bg-white text-brand-blue hover:bg-blue-50 border-none px-8 py-6 text-lg font-bold shadow-xl">
                        Comenzar Test
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </Link>
            </div>
        </section>

        {/* Active Courses */}
        <section>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <PlayCircle className="w-6 h-6 text-brand-blue" />
                    Cursos Activos
                </h2>
                <Link to="/student/courses" className="text-sm font-medium text-brand-blue hover:text-blue-700">
                    Ver todos
                </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeCourses.map(course => (
                    <div key={course.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow">
                        <div className="h-32 overflow-hidden relative">
                            <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                                <div 
                                    className="h-full bg-brand-yellow" 
                                    style={{ width: `${course.progress}%` }}
                                ></div>
                            </div>
                        </div>
                        <div className="p-5">
                            <h3 className="font-bold text-gray-900 dark:text-white mb-1 truncate">{course.title}</h3>
                            <p className="text-xs text-gray-500 mb-4 flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                Última lección: {course.lastLesson}
                            </p>
                            <Button size="sm" className="w-full rounded-full bg-brand-blue text-white hover:bg-brand-blue/90">
                                Continuar Aprendiendo
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Active Materials */}
        <section>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-emerald-500" />
                    Materiales Recientes
                </h2>
                <Link to="/student/materials" className="text-sm font-medium text-brand-blue hover:text-blue-700">
                    Ver biblioteca
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {activeMaterials.map(material => (
                    <div key={material.id} className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 flex items-start gap-4 hover:border-brand-blue/30 transition-colors cursor-pointer group">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${material.type === 'book' ? 'bg-blue-100 text-brand-blue' : 'bg-rose-100 text-rose-500'}`}>
                            {material.type === 'book' ? <BookOpen className="w-6 h-6" /> : <PlayCircle className="w-6 h-6" />}
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-gray-900 dark:text-white text-sm truncate group-hover:text-brand-blue transition-colors">{material.title}</h4>
                            <p className="text-xs text-gray-500 mt-1">Accedido {material.lastAccessed}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}
