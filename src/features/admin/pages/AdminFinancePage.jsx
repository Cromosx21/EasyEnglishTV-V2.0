import { useState } from "react";
import { Button } from "@/components/ui/common/Button";
import {
  DollarSign,
  TrendingUp,
  Download,
  Calendar,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

// Mock Data for Charts/Tables
const financeData = {
  daily: {
    total: "$450.00",
    transactions: 12,
    trend: "+12%",
    history: [
      { id: 1, date: "Hoy, 10:30 AM", user: "Juan Pérez", item: "Curso Inglés Básico", amount: "$29.90", status: "Completed" },
      { id: 2, date: "Hoy, 09:15 AM", user: "Ana López", item: "E-Book Verbos", amount: "$12.90", status: "Completed" },
      { id: 3, date: "Hoy, 08:45 AM", user: "Carlos Ruiz", item: "Pack Business", amount: "$29.90", status: "Completed" },
    ],
  },
  weekly: {
    total: "$3,250.00",
    transactions: 85,
    trend: "+5%",
    history: [
      { id: 1, date: "Lun, 12 Oct", total: "$450.00", orders: 15 },
      { id: 2, date: "Mar, 13 Oct", total: "$520.00", orders: 18 },
      { id: 3, date: "Mie, 14 Oct", total: "$380.00", orders: 12 },
      { id: 4, date: "Jue, 15 Oct", total: "$600.00", orders: 20 },
      { id: 5, date: "Vie, 16 Oct", total: "$850.00", orders: 25 },
    ],
  },
  monthly: {
    total: "$12,450.00",
    transactions: 340,
    trend: "+8.2%",
    history: [
      { id: 1, date: "Semana 1", total: "$2,800.00", orders: 80 },
      { id: 2, date: "Semana 2", total: "$3,100.00", orders: 95 },
      { id: 3, date: "Semana 3", total: "$2,950.00", orders: 85 },
      { id: 4, date: "Semana 4", total: "$3,600.00", orders: 110 },
    ],
  },
};

export default function AdminFinancePage() {
  const [period, setPeriod] = useState("daily"); // daily, weekly, monthly

  const currentData = financeData[period];

  const handleDownloadReport = () => {
    // Simulación de descarga
    const csvContent = "data:text/csv;charset=utf-8,Date,Item,Amount\n" + 
        currentData.history.map(row => `${row.date},${row.item || 'Ventas'},${row.amount || row.total}`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `finance_report_${period}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white">
            Finanzas
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Monitorea los ingresos y transacciones de la plataforma.
          </p>
        </div>
        <div className="flex gap-2">
            <Button
                variant="outline"
                onClick={handleDownloadReport}
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
                <Download className="w-4 h-4 mr-2" />
                Descargar Reporte
            </Button>
        </div>
      </header>

      {/* Period Selector */}
      <div className="bg-white dark:bg-gray-800 p-1 rounded-lg inline-flex border border-gray-100 dark:border-gray-700 shadow-sm">
        <button
          onClick={() => setPeriod("daily")}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
            period === "daily"
              ? "bg-brand-blue text-white shadow-sm"
              : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
          }`}
        >
          Día
        </button>
        <button
          onClick={() => setPeriod("weekly")}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
            period === "weekly"
              ? "bg-brand-blue text-white shadow-sm"
              : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
          }`}
        >
          Semana
        </button>
        <button
          onClick={() => setPeriod("monthly")}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
            period === "monthly"
              ? "bg-brand-blue text-white shadow-sm"
              : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
          }`}
        >
          Mes
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-emerald-600" />
            </div>
            <span className="flex items-center text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
              {currentData.trend} <ArrowUpRight className="w-4 h-4 ml-1" />
            </span>
          </div>
          <h3 className="text-gray-500 text-sm font-medium mb-1">Ingresos Totales</h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">{currentData.total}</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-gray-500 text-sm font-medium mb-1">Transacciones</h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">{currentData.transactions}</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-gray-500 text-sm font-medium mb-1">Ticket Promedio</h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">$35.00</p>
        </div>
      </div>

      {/* Detailed Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-gray-700">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                {period === 'daily' ? 'Transacciones de Hoy' : period === 'weekly' ? 'Resumen Semanal' : 'Resumen Mensual'}
            </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 dark:bg-gray-700/50">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Fecha / Hora</th>
                {period === 'daily' && <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Usuario</th>}
                {period === 'daily' && <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Item</th>}
                {period !== 'daily' && <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Pedidos</th>}
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Monto</th>
                {period === 'daily' && <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Estado</th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {currentData.history.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        {row.date}
                    </div>
                  </td>
                  {period === 'daily' && <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{row.user}</td>}
                  {period === 'daily' && <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{row.item}</td>}
                  {period !== 'daily' && <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{row.orders} ventas</td>}
                  <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-white text-right">
                    {row.amount || row.total}
                  </td>
                  {period === 'daily' && (
                    <td className="px-6 py-4 text-right">
                        <span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                            {row.status}
                        </span>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
