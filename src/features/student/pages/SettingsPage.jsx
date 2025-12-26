import { Button } from "@/components/ui/common/Button"
import { Input } from "@/components/ui/common/Input"
import { User, Mail, Lock, Camera, Save } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
        <header>
            <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
                Configuración de Perfil
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
                Actualiza tu información personal y seguridad.
            </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Profile Picture Card */}
            <div className="md:col-span-1">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center">
                    <div className="relative inline-block mb-4 group cursor-pointer">
                        <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden mx-auto border-4 border-white dark:border-gray-700 shadow-md">
                            <img src="https://ui-avatars.com/api/?name=Estudiante+Demo&background=random" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Camera className="w-8 h-8 text-white" />
                        </div>
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Estudiante Demo</h3>
                    <p className="text-sm text-gray-500 mb-4">Estudiante Premium</p>
                    <Button variant="outline" size="sm" className="w-full border-gray-300">
                        Cambiar Foto
                    </Button>
                </div>
            </div>

            {/* Forms */}
            <div className="md:col-span-2 space-y-8">
                {/* Personal Info */}
                <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                        <User className="w-5 h-5 text-brand-blue" />
                        Información Personal
                    </h2>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre</label>
                                <Input defaultValue="Estudiante" icon={User} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Apellido</label>
                                <Input defaultValue="Demo" icon={User} />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                            <Input defaultValue="estudiante@ejemplo.com" type="email" icon={Mail} />
                        </div>
                        <div className="pt-2">
                            <Button className="bg-brand-blue text-white hover:bg-brand-blue/90">
                                <Save className="w-4 h-4 mr-2" />
                                Guardar Cambios
                            </Button>
                        </div>
                    </form>
                </section>

                {/* Security */}
                <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                        <Lock className="w-5 h-5 text-brand-blue" />
                        Seguridad
                    </h2>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Contraseña Actual</label>
                            <Input type="password" placeholder="••••••••" icon={Lock} />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nueva Contraseña</label>
                                <Input type="password" placeholder="••••••••" icon={Lock} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Confirmar Contraseña</label>
                                <Input type="password" placeholder="••••••••" icon={Lock} />
                            </div>
                        </div>
                        <div className="pt-2">
                            <Button variant="outline" className="text-gray-700 border-gray-300 hover:bg-gray-50">
                                Actualizar Contraseña
                            </Button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    </div>
  )
}
