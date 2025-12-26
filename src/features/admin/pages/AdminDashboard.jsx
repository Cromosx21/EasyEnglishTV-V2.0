import {
	Users,
	DollarSign,
	BookOpen,
	ShoppingBag,
	ArrowUpRight,
	ArrowDownRight,
	Clock,
	User,
	FileText,
	AlertCircle,
	CheckCircle,
	XCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
	{
		title: "Total Usuarios",
		value: "2,543",
		change: "+12.5%",
		trend: "up",
		icon: Users,
		color: "blue",
		link: "/admin/users",
	},
	{
		title: "Ingresos Mensuales",
		value: "$12,450",
		change: "+8.2%",
		trend: "up",
		icon: DollarSign,
		color: "emerald",
		link: "/admin/finance",
	},
	{
		title: "Cursos Activos",
		value: "12",
		change: "0%",
		trend: "neutral",
		icon: BookOpen,
		color: "purple",
		link: "/admin/courses",
	},
	{
		title: "Ventas Materiales",
		value: "345",
		change: "-2.4%",
		trend: "down",
		icon: ShoppingBag,
		color: "rose",
		link: "/admin/materials",
	},
];

// Mock Data consistent with AdminActivityPage structure
const recentActivity = [
	{
		id: 1,
		user: "Juan Pérez",
		action: "Compró curso 'Inglés Básico'",
		time: "Hace 5 min",
		type: "purchase",
		amount: "$49.90",
		status: "success",
	},
	{
		id: 2,
		user: "Maria García",
		action: "Nuevo registro de usuario",
		time: "Hace 15 min",
		type: "registration",
		amount: "-",
		status: "success",
	},
	{
		id: 3,
		user: "Carlos López",
		action: "Error en pago de suscripción",
		time: "Hace 25 min",
		type: "error",
		amount: "$19.90",
		status: "error",
	},
	{
		id: 4,
		user: "Ana Martínez",
		action: "Compró pack 'Business English'",
		time: "Hace 1 hora",
		type: "purchase",
		amount: "$89.90",
		status: "success",
	},
	{
		id: 5,
		user: "Pedro Sánchez",
		action: "Completó test de nivelación",
		time: "Hace 1 hora",
		type: "test",
		amount: "-",
		status: "info",
	},
];

export default function AdminDashboard() {
	const getIcon = (type) => {
		switch (type) {
			case "purchase":
				return <DollarSign className="w-5 h-5 text-emerald-500" />;
			case "registration":
				return <User className="w-5 h-5 text-blue-500" />;
			case "download":
				return <FileText className="w-5 h-5 text-purple-500" />;
			case "course_start":
				return <BookOpen className="w-5 h-5 text-indigo-500" />;
			case "error":
				return <XCircle className="w-5 h-5 text-red-500" />;
			case "warning":
				return <AlertCircle className="w-5 h-5 text-amber-500" />;
			case "security":
				return <User className="w-5 h-5 text-gray-500" />;
			default:
				return <Clock className="w-5 h-5 text-gray-400" />;
		}
	};

	const getStatusBadge = (status) => {
		switch (status) {
			case "success":
				return (
					<span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-bold">
						Exitoso
					</span>
				);
			case "error":
				return (
					<span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-bold">
						Fallido
					</span>
				);
			case "warning":
				return (
					<span className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-xs font-bold">
						Alerta
					</span>
				);
			default:
				return (
					<span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-bold">
						Info
					</span>
				);
		}
	};

	return (
		<div className="space-y-8">
			<header>
				<h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
					Panel de Administración
				</h1>
				<p className="text-gray-500 dark:text-gray-400">
					Resumen general del rendimiento de la plataforma.
				</p>
			</header>

			{/* Stats Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{stats.map((stat, index) => (
					<Link
						to={stat.link}
						key={index}
						className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer block"
					>
						<div className="flex items-center justify-between mb-4">
							<div
								className={`w-12 h-12 rounded-lg bg-${stat.color}-100 flex items-center justify-center`}
							>
								<stat.icon
									className={`w-6 h-6 text-${stat.color}-600`}
								/>
							</div>
							<div
								className={`flex items-center text-sm font-bold ${
									stat.trend === "up"
										? "text-emerald-600"
										: stat.trend === "down"
										? "text-rose-600"
										: "text-gray-500"
								}`}
							>
								{stat.change}
								{stat.trend === "up" && (
									<ArrowUpRight className="w-4 h-4 ml-1" />
								)}
								{stat.trend === "down" && (
									<ArrowDownRight className="w-4 h-4 ml-1" />
								)}
							</div>
						</div>
						<h3 className="text-gray-500 text-sm font-medium mb-1">
							{stat.title}
						</h3>
						<p className="text-2xl font-bold text-gray-900 dark:text-white">
							{stat.value}
						</p>
					</Link>
				))}
			</div>

			{/* Recent Activity & Quick Actions */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{/* Recent Activity (Table Format) */}
				<div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
					<div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
						<h2 className="font-bold text-lg text-gray-900 dark:text-white">
							Actividad Reciente
						</h2>
						<Link
							to="/admin/activity"
							className="text-sm text-brand-blue font-medium hover:underline"
						>
							Ver todo
						</Link>
					</div>
					<div className="overflow-x-auto">
						<table className="w-full text-left">
							<thead className="bg-gray-50 dark:bg-gray-700/50">
								<tr>
									<th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider w-16">
										Tipo
									</th>
									<th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
										Usuario
									</th>
									<th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
										Acción
									</th>
									<th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">
										Monto
									</th>
									<th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">
										Estado
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-100 dark:divide-gray-700">
								{recentActivity.map((activity) => (
									<tr
										key={activity.id}
										className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
									>
										<td className="px-6 py-4">
											<div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
												{getIcon(activity.type)}
											</div>
										</td>
										<td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
											{activity.user}
										</td>
										<td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
											{activity.action
												.replace(activity.user, "")
												.trim()}
										</td>
										<td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-white text-right">
											{activity.amount}
										</td>
										<td className="px-6 py-4 text-center">
											{getStatusBadge(activity.status)}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				{/* Quick Actions / System Status */}
				<div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
					<h2 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
						Estado del Sistema
					</h2>
					<div className="space-y-4">
						<div className="flex justify-between items-center">
							<span className="text-sm text-gray-600 dark:text-gray-300">
								Servidor
							</span>
							<span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
								Online
							</span>
						</div>
						<div className="flex justify-between items-center">
							<span className="text-sm text-gray-600 dark:text-gray-300">
								Base de Datos
							</span>
							<span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
								Conectado
							</span>
						</div>
						<div className="flex justify-between items-center">
							<span className="text-sm text-gray-600 dark:text-gray-300">
								Almacenamiento
							</span>
							<span className="text-sm font-bold text-gray-900 dark:text-white">
								45% Usado
							</span>
						</div>
						<div className="w-full bg-gray-200 rounded-full h-2">
							<div
								className="bg-brand-blue h-2 rounded-full"
								style={{ width: "45%" }}
							></div>
						</div>
					</div>

					<div className="mt-8">
						<h3 className="font-bold text-gray-900 dark:text-white mb-3">
							Accesos Rápidos
						</h3>
						<div className="space-y-3">
							<Link
								to="/admin/users"
								className="p-3 rounded-lg border border-gray-200 hover:border-brand-blue hover:text-brand-blue transition-colors text-sm font-medium text-gray-600 flex items-center justify-center gap-2"
							>
								<Users className="w-4 h-4" />
								Nuevo Usuario
							</Link>
							<Link
								to="/admin/courses"
								className="p-3 rounded-lg border border-gray-200 hover:border-brand-blue hover:text-brand-blue transition-colors text-sm font-medium text-gray-600 flex items-center justify-center gap-2"
							>
								<BookOpen className="w-4 h-4" />
								Crear Curso
							</Link>
							<Link
								to="/admin/materials"
								className="p-3 rounded-lg border border-gray-200 hover:border-brand-blue hover:text-brand-blue transition-colors text-sm font-medium text-gray-600 flex items-center justify-center gap-2"
							>
								<ShoppingBag className="w-4 h-4" />
								Agregar Material
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
