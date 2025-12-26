export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium">Usuarios Activos</h3>
          <p className="text-3xl font-bold mt-2">1,234</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium">Ingresos Mes</h3>
          <p className="text-3xl font-bold mt-2">$12,450</p>
        </div>
         <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium">Nuevos Registros</h3>
          <p className="text-3xl font-bold mt-2">+56</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium">Incidencias</h3>
          <p className="text-3xl font-bold mt-2 text-red-500">3</p>
        </div>
      </div>
    </div>
  )
}
