import HeroSection from '../components/HeroSection'
import StatsBar from '../components/StatsBar'
import MaterialShowcase from '../components/MaterialShowcase'
import LiveClassesSection from '../components/LiveClassesSection'
import CourseCategories from '../components/CourseCategories'
import InteractiveQuiz from '../components/InteractiveQuiz'
import Testimonials from '../components/Testimonials'

/**
 * Componente HomePage
 * 
 * Es la página de inicio (Landing Page) principal de la aplicación.
 * Actúa como un contenedor que ensambla varias secciones independientes
 * para crear una experiencia de usuario fluida y rica en contenido.
 */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Sección Hero: Primera impresión, título principal y CTA */}
      <HeroSection />
      
      {/* Barra de Estadísticas: Muestra números clave (alumnos, cursos, etc.) */}
      <StatsBar />
      
      {/* Escaparate de Materiales: Muestra recursos destacados */}
      <MaterialShowcase />
      
      {/* Clases en Vivo: Promoción de sesiones sincrónicas */}
      <LiveClassesSection />
      
      {/* Categorías de Cursos: Navegación por niveles o tipos de curso */}
      <CourseCategories />
      
      {/* Quiz Interactivo: Pequeña prueba para enganchar al usuario */}
      <InteractiveQuiz />
      
      {/* Testimonios: Prueba social de alumnos satisfechos */}
      <Testimonials />
    </div>
  )
}
