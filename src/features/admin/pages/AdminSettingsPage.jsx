import { Button } from "@/components/ui/common/Button"
import { Input } from "@/components/ui/common/Input"
import { User, Mail, Lock, Camera, Save, Bell, Globe } from "lucide-react"

export default function AdminSettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
        <header>
            <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
                Configuración del Administrador
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
                Gestiona tu perfil y las preferencias de la plataforma.
            </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Profile Picture Card */}
            <div className="md:col-span-1">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center">
                    <div className="relative inline-block mb-4 group cursor-pointer">
                        <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden mx-auto border-4 border-white dark:border-gray-700 shadow-md">
                            <img src="https://ui-avatars.com/api/?name=Admin+User&background=0F172A&color=fff" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Camera className="w-8 h-8 text-white" />
                        </div>
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Admin User</h3>
                    <p className="text-sm text-gray-500 mb-4">Super Administrador</p>
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
                        Información de Perfil
                    </h2>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre</label>
                                <Input defaultValue="Admin" icon={User} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Apellido</label>
                                <Input defaultValue="User" icon={User} />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                            <Input defaultValue="admin@eetv.com" type="email" icon={Mail} />
                        </div>
                        <div className="pt-2">
                            <Button className="bg-brand-blue text-white hover:bg-brand-blue/90">
                                <Save className="w-4 h-4 mr-2" />
                                Guardar Cambios
                            </Button>
                        </div>
                    </form>
                </section>

                {/* Platform Settings */}
                <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-brand-blue" />
                        Configuración de Plataforma
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                            <div>
                                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Modo Mantenimiento</h3>
                                <p className="text-xs text-gray-500">Desactiva el acceso a estudiantes temporalmente.</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-brand-blue"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                            <div>
                                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Registro de Usuarios</h3>
                                <p className="text-xs text-gray-500">Permitir nuevos registros públicos.</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-brand-blue"></div>
                            </label>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
  )
}
