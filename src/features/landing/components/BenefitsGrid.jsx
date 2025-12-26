import { Zap, Target, Clock, ShieldCheck } from 'lucide-react'

const benefits = [
  {
    name: 'Aprendizaje Flexible',
    description: 'Estudia a tu propio ritmo, en cualquier momento y desde cualquier dispositivo.',
    icon: Clock,
  },
  {
    name: 'Contenido Actualizado',
    description: 'Cursos revisados constantemente para asegurar que aprendes lo último en tecnología.',
    icon: Zap,
  },
  {
    name: 'Proyectos Prácticos',
    description: 'Aplica lo aprendido con ejercicios reales y proyectos para tu portafolio.',
    icon: Target,
  },
  {
    name: 'Certificación Garantizada',
    description: 'Recibe un certificado verificado al completar cada curso con éxito.',
    icon: ShieldCheck,
  },
]

export default function BenefitsGrid() {
  return (
    <div className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Beneficios</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Una mejor forma de aprender
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            Diseñamos nuestra plataforma pensando en tu éxito profesional y personal.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <benefit.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{benefit.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                  {benefit.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
