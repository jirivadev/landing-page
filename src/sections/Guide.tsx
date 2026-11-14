import { ChevronDown, Gamepad2, Laptop, Monitor, Smartphone, Tablet } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState, type ReactElement } from 'react'

import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { guide } from '../content'
import { cx } from '../lib/cx'

type DeviceKey = keyof typeof guide.services

const icons: Record<string, ReactElement> = {
  notebook: <Laptop />,
  telefon: <Smartphone />,
  pocitac: <Monitor />,
  tablet: <Tablet />,
  konzole: <Gamepad2 />,
}

export function Guide({ onEnquire }: { onEnquire?: (topic: string) => void }) {
  const [device, setDevice] = useState<DeviceKey>('notebook')
  const [serviceIndex, setServiceIndex] = useState(0)

  const services = guide.services[device]
  const service = services[Math.min(serviceIndex, services.length - 1)]
  const deviceLabel = guide.devices.find((item) => item.key === device)?.label ?? ''

  function chooseDevice(key: DeviceKey) {
    setDevice(key)
    setServiceIndex(0)
  }

  return (
    <section id="pruvodce" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={guide.eyebrow}
          title={guide.title}
          description={guide.description}
          align="left"
          className="max-w-3xl"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-12">
          <div>
            <Reveal>
              <div className="flex items-baseline gap-2.5">
                <span className="text-[12px] font-medium tabular-nums text-faint">{guide.deviceStep}</span>
                <span className="text-[15px] font-medium">{guide.deviceLabel}</span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {guide.devices.map((item) => {
                  const active = item.key === device
                  return (
                    <button
                      key={item.key}
                      type="button"
                      aria-pressed={active}
                      onClick={() => chooseDevice(item.key as DeviceKey)}
                      className={cx(
                        'depth relative flex h-[104px] flex-col items-center justify-center gap-2.5 rounded-card-sm bg-surface text-[14px] transition-colors',
                        active
                          ? 'text-fg [--depth-edge:rgb(255_122_69/0.55)] [--depth-highlight:rgb(255_181_71/0.22)]'
                          : 'text-muted hover:text-fg hover:[--depth-edge:rgb(255_236_224/0.2)]',
                      )}
                    >
                      <span className={cx('[&_svg]:size-6', active ? 'text-accent' : 'text-faint')}>{icons[item.key]}</span>
                      {item.label}
                    </button>
                  )
                })}
              </div>
            </Reveal>

            <Reveal delay={0.08} className="mt-9">
              <div className="flex items-baseline gap-2.5">
                <span className="text-[12px] font-medium tabular-nums text-faint">{guide.serviceStep}</span>
                <label htmlFor="guide-service" className="text-[15px] font-medium">
                  {guide.serviceLabel}
                </label>
              </div>

              <div className="depth relative mt-4 rounded-control bg-surface">
                <select
                  id="guide-service"
                  value={serviceIndex}
                  onChange={(e) => setServiceIndex(Number(e.target.value))}
                  className="h-13 w-full appearance-none rounded-control bg-transparent pl-4 pr-11 text-[15px] text-fg focus:outline-none [&>option]:bg-surface [&>option]:text-fg"
                >
                  {services.map((item, i) => (
                    <option key={item.name} value={i}>
                      {item.name} — {item.price}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted" />
              </div>

              <div className="mt-6 flex flex-col gap-2.5 text-[14px] leading-relaxed text-muted">
                {guide.notes.map((note) => (
                  <p key={note} className="text-pretty">
                    {note}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="lg:self-start">
            <aside aria-live="polite" className="depth relative flex flex-col rounded-card bg-surface p-7 shadow-glow">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-faint">{guide.recommendedLabel}</p>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`${device}-${serviceIndex}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3 className="mt-3 text-balance text-[24px] font-semibold leading-snug tracking-[-0.02em]">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{service.description}</p>

                  <div className="mt-6 border-t border-line pt-5">
                    <p className="text-[13px] text-faint">{guide.priceLabel}</p>
                    <p className="mt-1 text-[28px] font-semibold leading-none tracking-[-0.02em] tabular-nums">
                      {service.price}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <p className="mt-5 border-t border-line pt-5 text-[13px] leading-relaxed text-muted">{guide.priceNote}</p>
              <Button
                href={guide.cta.href}
                className="mt-6 w-full"
                onClick={() => onEnquire?.(`${deviceLabel} – ${service.name}`)}
              >
                {guide.cta.label}
              </Button>
              <p className="mt-4 text-[12px] leading-relaxed text-faint">{guide.disclaimer}</p>
            </aside>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
