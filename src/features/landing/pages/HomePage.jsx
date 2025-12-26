import HeroSection from '../components/HeroSection'
import StatsBar from '../components/StatsBar'
import MaterialShowcase from '../components/MaterialShowcase'
import LiveClassesSection from '../components/LiveClassesSection'
import CourseCategories from '../components/CourseCategories'
import InteractiveQuiz from '../components/InteractiveQuiz'
import Testimonials from '../components/Testimonials'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <StatsBar />
      <MaterialShowcase />
      <LiveClassesSection />
      <CourseCategories />
      <InteractiveQuiz />
      <Testimonials />
    </div>
  )
}
