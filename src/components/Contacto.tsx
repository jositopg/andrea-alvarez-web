import { CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_URL } from '../lib/constants'

export function Contacto() {
  return (
    <footer id="contacto" className="max-w-6xl mx-auto px-6 py-20 text-center">
      <h2 className="font-serif text-3xl md:text-4xl text-text mb-4">
        ¿Hablamos?
      </h2>
      <p className="text-text-muted max-w-xl mx-auto mb-10">
        Puedes contactarme a través de la vía que te resulte más cómoda.
        Quiero que sepas que tu mensaje nunca es una molestia. Si no puedo
        atenderte en el momento en que me contactas, encontraré el espacio
        para responderte tan pronto como me sea posible.
      </p>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-block bg-primary-dark text-bg uppercase tracking-wide text-sm font-semibold px-8 py-4 rounded-full hover:bg-text transition-colors mb-10"
      >
        Reserva tu cita
      </a>

      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-sm text-text-muted">
        <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary-dark">
          {CONTACT_EMAIL}
        </a>
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-primary-dark">
          {INSTAGRAM_HANDLE}
        </a>
      </div>

      <p className="text-xs text-text-muted mt-16">
        © {new Date().getFullYear()} Andrea Álvarez Expósito · Psicóloga General Sanitaria
      </p>
    </footer>
  )
}
