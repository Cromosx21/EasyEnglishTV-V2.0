import { Outlet } from 'react-router-dom'
import Navbar from '@/components/ui/layout/Navbar'
import Footer from '@/features/landing/components/Footer'

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
