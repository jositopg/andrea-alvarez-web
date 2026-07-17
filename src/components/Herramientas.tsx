import { KORA_URL, HABLEMOS_ANSIEDAD_URL } from '../lib/constants'

const apps = [
  {
    nombre: 'Kora',
    descripcion:
      'Tu diario emocional entre sesiones: registra pensamientos, explora tus "parcelas de vida" y trabaja tu diálogo interno con ejercicios guiados.',
    url: KORA_URL,
    cta: 'Entrar a Kora',
  },
  {
    nombre: 'Hablemos de Ansiedad',
    descripcion:
      'Recursos prácticos para gestionar la ansiedad en el día a día: respiración guiada, técnicas de relajación y ejercicios de psicoeducación.',
    url: HABLEMOS_ANSIEDAD_URL,
    cta: 'Entrar a Hablemos de Ansiedad',
  },
]

export function Herramientas() {
  return (
    <section id="herramientas" className="bg-surface">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-serif text-3xl md:text-4xl text-text mb-4 text-center">
          Herramientas para pacientes
        </h2>
        <p className="text-text-muted max-w-2xl mx-auto text-center mb-14">
          Si ya estás en proceso terapéutico conmigo, estas son las
          aplicaciones que utilizamos para seguir trabajando entre sesiones.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {apps.map((app) => (
            <div
              key={app.nombre}
              className="bg-bg rounded-2xl p-8 border border-border flex flex-col"
            >
              <h3 className="font-serif text-xl text-primary-dark mb-3">
                {app.nombre}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed mb-6 flex-1">
                {app.descripcion}
              </p>
              <a
                href={app.url}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-center bg-primary-dark text-bg uppercase tracking-wide text-sm font-semibold px-6 py-3 rounded-full hover:bg-text transition-colors"
              >
                {app.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
