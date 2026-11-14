import { ArrowRight, Check, Clock, MapPin, Phone, X } from 'lucide-react'
import { useState, type FormEvent } from 'react'

import { Aurora } from '../components/Aurora'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { contact, cta } from '../content'
import { cx } from '../lib/cx'

export function Cta({ enquiry = '', onClearEnquiry }: { enquiry?: string; onClearEnquiry?: () => void }) {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function submit(event: FormEvent) {
    event.preventDefault()
    setState('sending')
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(enquiry ? { email, topic: enquiry } : { email }),
      })
      const body = (await response.json()) as { error?: string }
      if (!response.ok) throw new Error(body.error ?? 'Something went wrong.')
      setState('done')
      setMessage(cta.success)
    } catch (error) {
      setState('error')
      setMessage(error instanceof Error ? error.message : 'Something went wrong.')
    }
  }

  return (
    <section id="cta" className="scroll-mt-24 py-12">
      <Container>
        <Reveal>
          <div className="depth relative overflow-hidden rounded-[32px] bg-surface px-6 py-20 text-center shadow-glow sm:px-12 sm:py-28">
            <Aurora intensity={0.8} />
            <div aria-hidden className="grid-lines absolute inset-0" />
            <div aria-hidden className="noise pointer-events-none absolute inset-0" />
            <div className="relative mx-auto max-w-xl">
              <h2 className="text-balance text-[36px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[52px]">{cta.title}</h2>
              <p className="mt-4 text-[16px] text-muted sm:text-[18px]">{cta.description}</p>

              {enquiry && state !== 'done' && (
                <div className="depth relative mx-auto mt-8 flex max-w-md items-start gap-3 rounded-control-lg bg-white/[0.04] px-4 py-3 text-left text-[13px] text-muted">
                  <span className="min-w-0 flex-1">
                    <span className="text-faint">{cta.enquiryLabel}: </span>
                    <span className="text-fg">{enquiry}</span>
                  </span>
                  <button
                    type="button"
                    onClick={onClearEnquiry}
                    aria-label={cta.clearLabel}
                    className="grid size-6 shrink-0 place-items-center rounded-[8px] text-faint transition-colors hover:bg-white/[0.06] hover:text-fg"
                  >
                    <X className="size-3.5" />
                  </button>
                </div>
              )}

              {state === 'done' ? (
                <p className="depth relative mx-auto mt-8 inline-flex h-13 items-center gap-2 rounded-control-lg bg-accent-2/10 px-5 text-[15px] text-accent-2 [--depth-edge:rgb(255_181_71/0.35)]">
                  <Check className="size-4" />
                  {message}
                </p>
              ) : (
                <form
                  onSubmit={submit}
                  className={cx('mx-auto flex max-w-md flex-col gap-2 sm:flex-row', enquiry ? 'mt-3' : 'mt-8')}
                >
                  <label className="sr-only" htmlFor="cta-email">
                    E-mail
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={cta.placeholder}
                    className="depth relative h-13 min-w-0 w-full shrink-0 rounded-control-lg bg-bg/60 px-5 text-[15px] text-fg placeholder:text-faint backdrop-blur focus:outline-none focus:[--depth-edge:rgb(255_122_69/0.7)] sm:flex-1"
                  />
                  <Button size="lg" type="submit" disabled={state === 'sending'}>
                    {cta.button}
                    <ArrowRight />
                  </Button>
                </form>
              )}
              <p className="mt-3 text-[13px] text-muted">{cta.note}</p>
              {state === 'error' && <p className="mt-3 text-[13px] text-accent-3">{message}</p>}

              <div className="mt-10 flex flex-col items-center gap-3 border-t border-line pt-8 text-[14px] text-muted sm:flex-row sm:justify-center sm:gap-8">
                <a
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-fg"
                >
                  <Phone className="size-4 text-accent" />
                  {contact.phone}
                </a>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4 text-accent" />
                  {contact.addressLines.join(', ')}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="size-4 text-accent" />
                  {contact.hours[0].days} {contact.hours[0].time}
                </span>
              </div>
              <p className="mt-3 text-[12px] text-faint">{contact.placeholderNote}</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
