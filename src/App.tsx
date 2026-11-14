import { useState } from 'react'

import { Cta } from './sections/Cta'
import { Faq } from './sections/Faq'
import { Features } from './sections/Features'
import { Footer } from './sections/Footer'
import { Guide } from './sections/Guide'
import { Hero } from './sections/Hero'
import { LogoCloud } from './sections/LogoCloud'
import { Metrics } from './sections/Metrics'
import { Nav } from './sections/Nav'
import { Pricing } from './sections/Pricing'
import { Showcase } from './sections/Showcase'
import { Steps } from './sections/Steps'
import { Testimonials } from './sections/Testimonials'

// The page is a stack of independent sections. Remove or reorder freely;
// copy for each lives in src/content.ts.
export function App() {
  // The guide hands the chosen device and service to the contact form below.
  const [enquiry, setEnquiry] = useState('')

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogoCloud />
        <Guide onEnquire={setEnquiry} />
        <Features />
        <Steps />
        <Showcase />
        <Metrics />
        <Testimonials />
        <Pricing />
        <Faq />
        <Cta enquiry={enquiry} onClearEnquiry={() => setEnquiry('')} />
      </main>
      <Footer />
    </>
  )
}
