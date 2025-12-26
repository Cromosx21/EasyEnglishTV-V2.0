import { Button } from '@/components/ui/common/Button'
import { Card, CardContent } from '@/components/ui/layout/Card'
import { ArrowRight, MessageCircle, Book, Zap, PenTool } from 'lucide-react'

const categories = [
  { 
    name: 'Speaking', 
    subtitle: 'Fluidez Total',
    description: 'Pierde el miedo a hablar',
    color: 'from-blue-400 to-blue-600',
    icon: MessageCircle,
    shadow: 'shadow-blue-500/30'
  },
  { 
    name: 'Reading', 
    subtitle: 'Comprensión',
    description: 'Entiende cualquier texto',
    color: 'from-emerald-400 to-emerald-600',
    icon: Book,
    shadow: 'shadow-emerald-500/30'
  },
  { 
    name: 'Vocabulary', 
    subtitle: 'Expansión',
    description: 'Miles de palabras nuevas',
    color: 'from-amber-400 to-orange-500',
    icon: Zap,
    shadow: 'shadow-orange-500/30'
  },
  { 
    name: 'Grammar', 
    subtitle: 'Estructura',
    description: 'Escribe sin errores',
    color: 'from-purple-400 to-purple-600',
    icon: PenTool,
    shadow: 'shadow-purple-500/30'
  }
]

export default function CourseCategories() {
  return (
    <section className="py-24 bg-brand-light/30 relative flex items-center min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-brand-dark mb-4 font-display">
                ¿Qué aprenderás?
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
                Nuestro programa cubre todas las áreas esenciales para que domines el inglés de forma integral.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="group relative bg-white rounded-3xl p-1 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-3xl"></div>
              
              <div className="relative h-full flex flex-col p-6 z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-2">{category.subtitle}</p>
                  <p className="text-gray-500 text-sm mb-6">{category.description}</p>
                  
                  <div className="mt-auto flex items-center text-sm font-bold text-gray-400 group-hover:text-brand-dark transition-colors">
                      Ver módulos <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
              </div>
              
              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
