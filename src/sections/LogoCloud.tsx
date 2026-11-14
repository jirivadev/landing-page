import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { logos, logosLabel } from '../content'

// Wordmarks only: a small set of invented marks read as identical dots next to
// real brand names, and borrowing anyone's logo is not an option.
export function LogoCloud() {
  const doubled = [...logos, ...logos]
  return (
    <section className="py-12">
      <Container>
        <Reveal>
          <p className="text-center text-[13px] text-faint">{logosLabel}</p>
        </Reveal>
        <div className="section-mask relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
          <ul className="flex w-max animate-marquee items-center gap-14 pr-14 hover:[animation-play-state:paused]">
            {doubled.map((name, i) => (
              <li key={`${name}-${i}`} className="text-[17px] font-semibold tracking-tight text-fg/45">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
