import { Button } from '@/components/ui/common/Button'

export default function PaymentPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pagos</h1>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow max-w-md">
        <h2 className="text-xl mb-4">Integración de Tarjeta</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-400">Módulo listo para integración con Stripe/PayPal.</p>
        <Button>Pagar Ahora</Button>
      </div>
    </div>
  )
}
