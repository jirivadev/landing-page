import type { ReactElement } from 'react'

import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { contact, footer } from '../content'

// Social links a repair shop would actually use. Every href is still a
// placeholder until the real profiles exist.
const socials: { label: string; icon: ReactElement }[] = [
  {
    label: 'Facebook',
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
        <path d="M13.5 22v-8h2.72l.41-3.16H13.5V8.82c0-.91.25-1.53 1.56-1.53h1.67V4.46c-.29-.04-1.28-.12-2.43-.12-2.41 0-4.06 1.47-4.06 4.17v2.33H7.5V14h2.74v8z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'X',
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="pb-10 pt-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-muted">{footer.blurb}</p>
            <address className="mt-5 flex max-w-xs flex-col gap-1 text-[14px] not-italic leading-relaxed text-muted">
              <span>{contact.addressLines.join(', ')}</span>
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="transition-colors hover:text-fg">
                {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="transition-colors hover:text-fg">
                {contact.email}
              </a>
              <span className="mt-1 text-faint">
                {contact.hours.map((slot) => `${slot.days} ${slot.time}`).join(' · ')}
              </span>
            </address>
            <p className="mt-3 max-w-xs text-[12px] leading-relaxed text-faint">{contact.placeholderNote}</p>
          </div>
          <div>
            <p className="text-[13px] font-medium text-fg">{footer.area.title}</p>
            <div className="mt-4 flex flex-col gap-2.5 text-[14px] leading-relaxed text-muted">
              {footer.area.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
          {footer.columns.map((col) => (
            <div key={col.title}>
              <p className="text-[13px] font-medium text-fg">{col.title}</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[14px] text-muted transition-colors hover:text-fg">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-[13px] text-faint">{footer.legal}</p>
          <div className="flex items-center gap-1">
            {socials.map(({ label, icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid size-9 place-items-center rounded-[11px] text-muted transition-colors hover:bg-white/[0.06] hover:text-fg"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
