import { Outlet } from 'react-router-dom'
import Navbar from '@/components/ui/layout/Navbar'
import Footer from '@/features/landing/components/Footer'

export default function AuthLayout() {
  return (
    <>
      <Navbar />
      <div className="min-h-fit flex items-center justify-center bg-gray-50 dark:bg-gray-900 pb-8 pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  )
}
