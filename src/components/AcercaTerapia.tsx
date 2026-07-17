import { servicios } from '../lib/servicios'

export function AcercaTerapia() {
  return (
    <section id="terapia" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="font-serif text-3xl md:text-4xl text-text mb-2 text-center">
        Acerca de la terapia
      </h2>
      <h3 className="font-serif text-xl text-primary-dark mb-6 text-center">
        Psicoterapia integradora
      </h3>
      <p className="text-text-muted leading-relaxed max-w-3xl mx-auto text-center mb-16">
        La psicoterapia desde una perspectiva integradora es como un traje a
        medida para tu bienestar emocional. Imagina que tienes una caja de
        herramientas con diferentes enfoques terapéuticos, y tu terapeuta
        sabe cuándo y cómo usar cada una de ellas para ayudarte de la mejor
        manera posible. No hay una talla única para todos, porque cada
        persona es única. Si te sientes abrumado, estresado, triste o
        simplemente quieres entender mejor tus pensamientos y emociones, la
        terapia integradora te ofrece un espacio acogedor y comprensivo para
        explorar todo lo que necesitas para sentirte mejor contigo mismo y
        vivir una vida más plena. ¡Tú eres el protagonista de tu historia, y
        la psicoterapia integradora te brinda las herramientas para escribir
        el próximo capítulo!
      </p>

      <div className="text-center mb-4">
        <h3 className="font-serif text-2xl text-text mb-4">
          ¿Cuáles son tus objetivos?
        </h3>
        <p className="text-text-muted max-w-2xl mx-auto mb-12">
          El mundo de la psicología es amplio y diverso, abarcando una amplia
          gama de enfoques y especialidades. Sin embargo, para brindar el
          mejor apoyo, es crucial centrarse en áreas específicas. De este
          modo los servicios en los que se enfoca la terapia que llevo a
          cabo son los siguientes:
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicios.map((servicio) => (
          <div
            key={servicio.titulo}
            className="bg-surface rounded-2xl p-6 border border-border"
          >
            <h4 className="font-serif text-lg text-primary-dark mb-3">
              {servicio.titulo}
            </h4>
            <p className="text-sm text-text-muted leading-relaxed">
              {servicio.descripcion}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
