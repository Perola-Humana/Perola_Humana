import { Header } from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import MissionSection from "@/components/MissionSection"
import Events from "@/components/events"
import Diseases from "@/components/diseases"
import BookShowcase from "@/components/book-showcase"
import { CTA } from "@/components/cta"
import Contact from "@/components/contact"
import Marquee from "@/components/marquee"
import { Footer } from "@/components/footer"
import SelfKnowledge from "@/components/self-knowledge"
import HealthVideos from "@/components/health-videos"

export default function Home() {
  return (
    <main className="min-h-screen mb-0">
      <Header />
      <Hero />
      <About />
      <MissionSection />      
      <Diseases />
      <HealthVideos />
      <SelfKnowledge />
      <BookShowcase />
      <Events />
      <CTA />
      <Contact />
      <Marquee />
      <Footer />
    </main>
  )
}
