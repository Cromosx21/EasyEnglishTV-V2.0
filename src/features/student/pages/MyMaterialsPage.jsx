import { Button } from "@/components/ui/common/Button"
import { BookOpen, PlayCircle, Download, ExternalLink } from "lucide-react"

const myMaterials = [
    {
        id: 1,
        title: "Irregular Verbs - Tomo 1",
        type: "book",
        format: "PDF",
        size: "2.5 MB",
        image: "blue"
    },
    {
        id: 2,
        title: "Listening Mastery",
        type: "audio",
        format: "MP3 Pack",
        size: "150 MB",
        image: "rose"
    }
]

const availableMaterials = [
    {
        id: 3,
        title: "Idioms for Travel",
        type: "book",
        price: 32.80,
        image: "emerald"
    },
    {
        id: 4,
        title: "Business English Pack",
        type: "pack",
        price: 45.00,
        image: "purple"
    }
]

export default function MyMaterialsPage() {
  return (
    <div className="space-y-12">
        <header>
            <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
                Mis Materiales
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
                Accede a tus libros y recursos descargables.
            </p>
        </header>

        {/* My Library */}
        <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-brand-blue" />
                Mi Biblioteca
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {myMaterials.map(material => (
                    <div key={material.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className={`w-20 h-24 rounded-lg flex items-center justify-center shrink-0 bg-${material.image}-100`}>
                            {material.type === 'book' ? <BookOpen className={`w-8 h-8 text-${material.image}-600`} /> : <PlayCircle className={`w-8 h-8 text-${material.image}-600`} />}
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{material.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs font-bold">{material.format}</span>
                                <span>{material.size}</span>
                            </div>
                            <div className="flex gap-3">
                                <Button size="sm" className="rounded-full bg-brand-blue text-white hover:bg-brand-blue/90">
                                    <Download className="w-4 h-4 mr-2" />
                                    Descargar
                                </Button>
                                {material.type === 'book' && (
                                    <Button size="sm" variant="outline" className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-50">
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Leer Online
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Store / Available Materials */}
        <section>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <PlayCircle className="w-5 h-5 text-gray-400" />
                    Más Recursos para Ti
                </h2>
                <Button variant="ghost" className="text-brand-blue">Ir a la tienda</Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {availableMaterials.map(material => (
                    <div key={material.id} className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 hover:border-brand-blue/30 transition-colors group cursor-pointer">
                        <div className={`aspect-[3/4] rounded-lg bg-${material.image}-100 mb-4 flex items-center justify-center relative overflow-hidden`}>
                             <BookOpen className={`w-10 h-10 text-${material.image}-600 opacity-50 group-hover:scale-110 transition-transform`} />
                        </div>
                        <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1 truncate group-hover:text-brand-blue">{material.title}</h3>
                        <p className="text-brand-blue font-bold">S/ {material.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}
