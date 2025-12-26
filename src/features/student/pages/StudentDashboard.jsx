export default function StudentDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Panel del Estudiante</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium">Mis Cursos</h3>
          <p className="text-3xl font-bold mt-2">4</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium">Progreso</h3>
          <p className="text-3xl font-bold mt-2">75%</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium">Próxima Clase</h3>
            <p className="text-md mt-2 text-gray-500">Mañana, 10:00 AM</p>
        </div>
      </div>
    </div>
  )
}
