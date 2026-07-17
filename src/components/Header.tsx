import logo from '../assets/logo.png'
import { WHATSAPP_URL } from '../lib/constants'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logotipo de Andrea Álvarez Expósito, Psicóloga General Sanitaria"
            width="56"
            height="56"
            className="h-14 w-14 rounded-full object-cover"
          />
          <span className="hidden sm:block font-serif text-lg text-text">
            Andrea Álvarez Expósito
          </span>
        </a>
        <div className="flex items-center gap-4">
          <a
            href="#herramientas"
            className="hidden sm:block text-sm tracking-wide font-semibold uppercase text-text-muted hover:text-primary-dark transition-colors"
          >
            Herramientas
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="text-sm tracking-wide font-semibold uppercase border border-primary-dark text-primary-dark px-4 py-2 rounded-full hover:bg-primary-dark hover:text-bg transition-colors"
          >
            Reservar sesión
          </a>
        </div>
      </div>
    </header>
  )
}
