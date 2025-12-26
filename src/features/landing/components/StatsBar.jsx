import { BookOpen, PlayCircle, MapPin } from 'lucide-react'

const stats = [
  { id: 1, name: 'Páginas de material', value: '+800', icon: BookOpen },
  { id: 2, name: 'Clases grabadas', value: '+365', icon: PlayCircle },
  { id: 3, name: 'Guías exclusivas', value: '+50', icon: MapPin },
]

export default function StatsBar() {
  return (
    <div className="bg-brand-light/50 backdrop-blur-sm pt-12 pb-16 relative z-10 -mt-10 mx-4 sm:mx-8 rounded-3xl shadow-xl border border-white/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center justify-center p-6 bg-white/60 backdrop-blur-md rounded-2xl hover:shadow-2xl transition-all duration-300 border border-white/60 group hover:-translate-y-1">
              <div className="p-4 bg-brand-yellow/20 rounded-full text-brand-dark mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <stat.icon className="w-8 h-8" />
              </div>
              <dd className="text-4xl font-extrabold text-brand-blue mb-1 group-hover:text-brand-pink transition-colors">
                {stat.value}
              </dd>
              <dt className="text-sm font-bold text-gray-600 uppercase tracking-wide">
                {stat.name}
              </dt>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
