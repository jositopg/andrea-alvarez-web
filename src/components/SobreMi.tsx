import about from '../assets/about.jpg'

export function SobreMi() {
  return (
    <section id="sobre-mi" className="bg-surface">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <img
          src={about}
          alt="Andrea Álvarez sonriendo en su consulta de psicología"
          width="768"
          height="887"
          loading="lazy"
          className="rounded-[2rem] w-full max-w-sm object-cover shadow-xl shadow-black/10 md:order-2 justify-self-center"
        />
        <div className="md:order-1">
          <h2 className="font-serif text-3xl md:text-4xl text-text mb-2">
            ¿Cuál es mi historia?
          </h2>
          <p className="uppercase tracking-widest text-sm text-primary-dark font-semibold mb-6">
            Andrea Álvarez Expósito
          </p>
          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              Hola, soy Andrea y me complace mucho darte la bienvenida a mi
              sitio web. Aquí, quiero compartir contigo mi historia, mi
              pasión y mi compromiso con la psicología y el cómo esto puede
              ayudarte en tu camino.
            </p>
            <p>
              Si estás aquí, es porque sientes la necesidad de explorar tus
              propios desafíos y crecer en tu bienestar emocional. En mi
              consulta, encontrarás un espacio seguro y confidencial para
              expresarte y descubrir soluciones. Juntos, podemos trabajar en
              superar obstáculos y alcanzar un mayor equilibrio y felicidad
              en tu vida.
            </p>
            <p>
              Además de mi trabajo como psicóloga, tengo dos grandes pasiones
              en la vida. El baile es una forma de expresión que me llena de
              alegría y me conecta con mi lado más creativo, y la
              naturaleza, no solo la de mi hermosa isla de Tenerife, sino
              también la de otros lugares donde disfruto de la belleza de
              los paisajes naturales y encuentro en ellos un equilibrio y
              renovación.
            </p>
            <p>
              Espero que este sitio web sea un recurso útil para ti, y estoy
              emocionada por la posibilidad de acompañarte en tu camino.
            </p>
          </div>
          <blockquote className="mt-8 border-l-2 border-primary-light pl-4 italic text-text">
            "El crecimiento, como la subida a una montaña, a veces requiere
            esfuerzo, pero cada paso nos regala una nueva y más valiosa
            perspectiva del paisaje."
          </blockquote>
        </div>
      </div>
    </section>
  )
}
