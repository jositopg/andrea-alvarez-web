import hero from '../assets/hero.jpg'
import { WHATSAPP_URL } from '../lib/constants'

export function Hero() {
  return (
    <section id="inicio" className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p className="uppercase tracking-widest text-sm text-primary-dark font-semibold mb-4">
          Psicóloga General Sanitaria
        </p>
        <h1 className="font-serif text-4xl md:text-5xl leading-tight text-text mb-6">
          A partir de aquí, crearemos nuestro espacio
        </h1>
        <p className="text-text-muted text-lg mb-8 max-w-md">
          Un espacio seguro y confidencial para explorar tus pensamientos y
          emociones, y avanzar hacia tu bienestar.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-primary-dark text-bg uppercase tracking-wide text-sm font-semibold px-8 py-4 rounded-full hover:bg-text transition-colors"
        >
          Reserva tu cita
        </a>
      </div>
      <div className="justify-self-center">
        <img
          src={hero}
          alt="Andrea Álvarez, Psicóloga General Sanitaria en Tenerife"
          width="768"
          height="1090"
          fetchPriority="high"
          className="rounded-[2rem] w-full max-w-sm object-cover shadow-xl shadow-black/10"
        />
      </div>
    </section>
  )
}
