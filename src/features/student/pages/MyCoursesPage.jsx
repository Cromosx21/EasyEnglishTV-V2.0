import { Button } from "@/components/ui/common/Button"
import { PlayCircle, Clock, BookOpen, CheckCircle } from "lucide-react"

const myCourses = [
    {
        id: 1,
        title: "Inglés para Negocios",
        progress: 45,
        totalLessons: 24,
        completedLessons: 11,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 2,
        title: "Curso teórico viajes I",
        progress: 10,
        totalLessons: 15,
        completedLessons: 2,
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400"
    }
]

const recommendedCourses = [
    {
        id: 3,
        title: "Gramática Avanzada",
        level: "Inglés Avanzado",
        duration: "3h 45m",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 4,
        title: "Pronunciación Master",
        level: "Todos los niveles",
        duration: "2h 00m",
        image: "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?auto=format&fit=crop&q=80&w=400"
    }
]

export default function MyCoursesPage() {
  return (
    <div className="space-y-12">
        <header>
            <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
                Mis Cursos
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
                Gestiona tu aprendizaje y explora nuevo contenido.
            </p>
        </header>

        {/* My Active Courses */}
        <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <PlayCircle className="w-5 h-5 text-brand-blue" />
                Continuar Aprendiendo
            </h2>
            <div className="space-y-4">
                {myCourses.map(course => (
                    <div key={course.id} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row gap-6">
                        <div className="w-full sm:w-48 h-32 rounded-lg overflow-hidden shrink-0">
                            <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{course.title}</h3>
                                    <p className="text-sm text-gray-500">
                                        {course.completedLessons} de {course.totalLessons} lecciones completadas
                                    </p>
                                </div>
                                <span className="text-brand-blue font-bold">{course.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5 mb-4">
                                <div className="bg-brand-blue h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
                            </div>
                            <div className="flex gap-3">
                                <Button size="sm" className="rounded-full bg-brand-blue text-white hover:bg-brand-blue/90">
                                    Reanudar Curso
                                </Button>
                                <Button size="sm" variant="outline" className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-50">
                                    Ver Detalles
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Recommended Courses */}
        <section>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-gray-400" />
                    Más Cursos Disponibles
                </h2>
                <Button variant="ghost" className="text-brand-blue">Ver catálogo completo</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedCourses.map(course => (
                    <div key={course.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col h-full">
                        <div className="h-40 overflow-hidden relative">
                            <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-gray-900">
                                {course.level}
                            </div>
                        </div>
                        <div className="p-5 flex-1 flex flex-col">
                            <h3 className="font-bold text-gray-900 dark:text-white mb-2">{course.title}</h3>
                            <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> {course.duration}
                                </span>
                                <span className="flex items-center gap-1">
                                    <CheckCircle className="w-3 h-3" /> Certificado
                                </span>
                            </div>
                            <Button className="mt-auto w-full rounded-full bg-white border border-brand-blue text-brand-blue hover:bg-blue-50">
                                Ver Curso
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}
