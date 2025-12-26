import { Search, Filter, Clock, User, FileText, DollarSign, BookOpen, AlertCircle, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/common/Button";

// Mock Data for Activities (Extended)
const allActivities = [
    { id: 1, user: "Juan Pérez", action: "Compró curso 'Inglés Básico'", time: "Hace 5 min", type: "purchase", amount: "$49.90", status: "success" },
    { id: 2, user: "Maria García", action: "Nuevo registro de usuario", time: "Hace 15 min", type: "registration", amount: "-", status: "success" },
    { id: 3, user: "Carlos López", action: "Error en pago de suscripción", time: "Hace 25 min", type: "error", amount: "$19.90", status: "error" },
    { id: 4, user: "Ana Martínez", action: "Compró pack 'Business English'", time: "Hace 1 hora", type: "purchase", amount: "$89.90", status: "success" },
    { id: 5, user: "Pedro Sánchez", action: "Completó test de nivelación", time: "Hace 1 hora", type: "test", amount: "-", status: "info" },
    { id: 6, user: "Sofia Rodriguez", action: "Actualizó datos de perfil", time: "Hace 2 horas", type: "update", amount: "-", status: "info" },
    { id: 7, user: "Luis Hernandez", action: "Inició curso 'Intermedio B1'", time: "Hace 3 horas", type: "course_start", amount: "-", status: "success" },
    { id: 8, user: "Carmen Diaz", action: "Descargó E-book 'Verbos Irregulares'", time: "Hace 3 horas", type: "download", amount: "-", status: "success" },
    { id: 9, user: "Roberto Gomez", action: "Intento de inicio de sesión fallido", time: "Hace 4 horas", type: "security", amount: "-", status: "warning" },
    { id: 10, user: "Elena Torres", action: "Compró curso 'Pronunciación Master'", time: "Hace 5 horas", type: "purchase", amount: "$39.90", status: "success" },
    { id: 11, user: "Miguel Angel", action: "Nuevo registro de usuario", time: "Hace 6 horas", type: "registration", amount: "-", status: "success" },
    { id: 12, user: "Lucia Fernandez", action: "Solicitó reembolso", time: "Hace 7 horas", type: "refund", amount: "$29.90", status: "warning" },
    { id: 13, user: "David Ruiz", action: "Completó módulo 1 de 'Inglés Básico'", time: "Hace 8 horas", type: "progress", amount: "-", status: "success" },
    { id: 14, user: "Patricia Lima", action: "Error en descarga de material", time: "Hace 9 horas", type: "error", amount: "-", status: "error" },
    { id: 15, user: "Jorge Blanco", action: "Cambio de contraseña exitoso", time: "Hace 10 horas", type: "security", amount: "-", status: "info" },
];

const ITEMS_PER_PAGE = 10;

export default function AdminActivityPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [filterType, setFilterType] = useState("all"); // all, purchase, registration, error, warning

    // Filter Logic
    const filteredActivities = allActivities.filter(activity => {
        if (filterType === "all") return true;
        if (filterType === "purchase") return activity.type === "purchase";
        if (filterType === "registration") return activity.type === "registration";
        if (filterType === "error") return activity.type === "error" || activity.status === "error";
        if (filterType === "warning") return activity.status === "warning";
        return true;
    });

    // Pagination Logic
    const totalPages = Math.ceil(filteredActivities.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentActivities = filteredActivities.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const getIcon = (type) => {
        switch (type) {
            case "purchase": return <DollarSign className="w-5 h-5 text-emerald-500" />;
            case "registration": return <User className="w-5 h-5 text-blue-500" />;
            case "download": return <FileText className="w-5 h-5 text-purple-500" />;
            case "course_start": return <BookOpen className="w-5 h-5 text-indigo-500" />;
            case "error": return <XCircle className="w-5 h-5 text-red-500" />;
            case "warning": return <AlertCircle className="w-5 h-5 text-amber-500" />;
            case "security": return <User className="w-5 h-5 text-gray-500" />;
            default: return <Clock className="w-5 h-5 text-gray-400" />;
        }
    };

    const getStatusBadge = (status) => {
        switch (status) {
            case "success": return <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-bold">Exitoso</span>;
            case "error": return <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-bold">Fallido</span>;
            case "warning": return <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-xs font-bold">Alerta</span>;
            default: return <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-bold">Info</span>;
        }
    };

    return (
        <div className="space-y-6">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white">Actividad Reciente</h1>
                    <p className="text-gray-500 dark:text-gray-400">Monitoreo de eventos clave del sistema.</p>
                </div>
                <div className="flex gap-2">
                    <select 
                        value={filterType}
                        onChange={(e) => {
                            setFilterType(e.target.value);
                            setCurrentPage(1); // Reset page on filter change
                        }}
                        className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    >
                        <option value="all">Todas las Actividades</option>
                        <option value="purchase">Compras</option>
                        <option value="registration">Registros</option>
                        <option value="error">Errores</option>
                        <option value="warning">Advertencias</option>
                    </select>
                    <Button variant="outline" className="border-gray-300 text-gray-700">
                        Exportar Log
                    </Button>
                </div>
            </header>

            {/* Activity Table */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 dark:bg-gray-700/50">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider w-16">Tipo</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Usuario</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Acción</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Hora</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Monto</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Estado</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                            {currentActivities.length > 0 ? (
                                currentActivities.map((activity) => (
                                    <tr key={activity.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                                                {getIcon(activity.type)}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                                            {activity.user}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            {activity.action.replace(activity.user, '').trim()}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500 flex items-center gap-2">
                                            <Clock className="w-3 h-3" />
                                            {activity.time}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-white text-right">
                                            {activity.amount}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            {getStatusBadge(activity.status)}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                                        No se encontraron actividades con este filtro.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                
                {/* Pagination Controls */}
                <div className="p-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between bg-gray-50 dark:bg-gray-800">
                    <p className="text-sm text-gray-500">
                        Mostrando {filteredActivities.length > 0 ? startIndex + 1 : 0}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredActivities.length)} de {filteredActivities.length} eventos
                    </p>
                    <div className="flex gap-2">
                        <Button 
                            variant="outline" 
                            size="sm" 
                            disabled={currentPage === 1 || filteredActivities.length === 0}
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        >
                            Anterior
                        </Button>
                        <div className="flex items-center px-2">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Página {currentPage} de {totalPages || 1}
                            </span>
                        </div>
                        <Button 
                            variant="outline" 
                            size="sm" 
                            disabled={currentPage === totalPages || filteredActivities.length === 0}
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        >
                            Siguiente
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
