const pasos = [
  {
    titulo: 'Primer paso: ponerte en contacto con la profesional.',
    descripcion:
      'Puedes contactarme a través de la vía que te resulte más cómoda. Quiero que sepas que tu mensaje nunca es una molestia. Si no puedo atenderte en el momento en que me contactas, encontraré el espacio para responderte tan pronto como me sea posible.',
  },
  {
    titulo: 'Segundo paso: concretar la disponibilidad.',
    descripcion:
      'En esta primera comunicación, resolveré las dudas básicas que tengas y te facilitaré la información necesaria para concretar nuestra primera sesión, buscando siempre un horario que se ajuste a tu disponibilidad. En este momento también te informaré sobre detalles prácticos como la duración de las sesiones y la política de cancelación.',
  },
  {
    titulo: 'Tercer paso: primera sesión.',
    descripcion:
      'Este primer encuentro es un espacio fundamental para ambos. Por tu parte, tendrás la oportunidad de contarme cuál es el motivo por el que acudes a terapia. Por la mía, valoraré si mi experiencia y formación son las adecuadas para tu situación.',
  },
]

export function Proceso() {
  return (
    <section id="proceso" className="bg-surface">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-serif text-3xl md:text-4xl text-text mb-4 text-center">
          ¿Cómo es el proceso?
        </h2>
        <blockquote className="italic text-text-muted max-w-2xl mx-auto text-center mb-14">
          "Dar el primer paso puede generar dudas e incertidumbre. Para que
          te sientas en confianza, aquí te explicamos de forma clara cómo es
          el camino que recorreremos juntos."
        </blockquote>

        <ol className="space-y-10 max-w-3xl mx-auto">
          {pasos.map((paso, i) => (
            <li key={paso.titulo} className="flex gap-5">
              <span className="flex-none w-10 h-10 rounded-full bg-primary-dark text-bg font-serif text-lg flex items-center justify-center">
                {i + 1}
              </span>
              <div>
                <h3 className="font-serif text-xl text-text mb-2">
                  {paso.titulo.replace(/^(Primer|Segundo|Tercer) paso:\s*/, '')}
                </h3>
                <p className="text-text-muted leading-relaxed">{paso.descripcion}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mt-14">
          <div className="bg-bg rounded-2xl p-6 border border-border">
            <h4 className="font-serif text-lg text-primary-dark mb-3">
              Si mi enfoque se ajusta a tus necesidades
            </h4>
            <p className="text-sm text-text-muted leading-relaxed">
              Definiremos juntos los objetivos de la terapia y ajustaremos
              las expectativas dentro de un marco realista y honesto. Si
              ambos decidimos que podemos trabajar juntos, concretaremos la
              frecuencia de nuestras sesiones. A partir de aquí, se abrirá
              un espacio seguro y confidencial de reflexión,
              cuestionamiento, aceptación y cambio.
            </p>
          </div>
          <div className="bg-bg rounded-2xl p-6 border border-border">
            <h4 className="font-serif text-lg text-primary-dark mb-3">
              Si no soy el profesional adecuado
            </h4>
            <p className="text-sm text-text-muted leading-relaxed">
              Mi compromiso es con tu bienestar. Si considero que otro
              profesional puede ayudarte mejor, llevaré a cabo una
              derivación, orientándote con total transparencia para que
              encuentres la ayuda que necesitas.
            </p>
          </div>
        </div>

        <p className="text-center italic text-text-muted mt-14">
          Este es un viaje que no siempre será fácil, pero te aseguro que
          será profundamente satisfactorio.
        </p>
      </div>
    </section>
  )
}
