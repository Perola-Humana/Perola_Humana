"use client"

import { motion, AnimatePresence, type PanInfo } from "framer-motion"
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const upcomingEvents = [
  {
    date: "Mar 15, 2025",
    title: "Em breve",
    description: "Em breve",
    gradient: "Mais informações em breve",
  },
  {
    date: "Mar 15, 2025",
    title: "Em breve",
    description: "Em breve",
    gradient: "Mais informações em breve",
  },
  {
    date: "Mar 15, 2025",
    title: "Em breve",
    description: "Em breve",
    gradient: "Mais informações em breve",
  },
  {
    date: "Mar 15, 2025",
    title: "Em breve",
    description: "Em breve",
    gradient: "Mais informações em breve",
  },
 
]

export default function Events() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3) // Default to desktop

  const totalSlides = upcomingEvents.length

  // Detect screen size for responsive visible cards
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) {
        setVisibleCount(1) // Mobile
      } else if (width < 1024) {
        setVisibleCount(2) // Tablet
      } else {
        setVisibleCount(3) // Desktop
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection
      if (nextIndex < 0) nextIndex = totalSlides - 1
      if (nextIndex >= totalSlides) nextIndex = 0
      return nextIndex
    })
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  }

  const getVisibleCards = () => {
    const cards = []
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % totalSlides
      cards.push(upcomingEvents[index])
    }
    return cards
  }

  // Swipe detection helpers
  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  return (
    <section id="events" className="pt-32 pb-20 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-32 px-4 sm:px-6 scroll-mt-20 bg-muted/20 border">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-[#C8935F] to-[#E0A878] bg-clip-text text-transparent">EVENTOS DA PÉROLA HUMANA</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C8935F] to-[#E0A878] rounded-full mx-auto mb-4" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Próximos eventos
          </p>
        </motion.div>

        <div className="relative">
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 backdrop-blur-sm border border-border rounded-full p-3 hover:bg-accent transition-colors duration-300 shadow-lg hover:shadow-xl hover:scale-110 mx-[-50px]"
            aria-label="Previous events"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 backdrop-blur-sm border border-border rounded-full p-3 hover:bg-accent transition-colors duration-300 shadow-lg hover:shadow-xl hover:scale-110 px-3 mx-[-50px]"
            aria-label="Next events"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.8}
                onDragEnd={(_e, { offset, velocity }: PanInfo) => {
                  const swipe = swipePower(offset.x, velocity.x)
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                className={`grid gap-6 sm:gap-8 ${
                  visibleCount === 1 ? "grid-cols-1" : visibleCount === 2 ? "grid-cols-2" : "grid-cols-3"
                }`}
              >
                {getVisibleCards().map((event, index) => (
                  <motion.div
                    key={`${event.title}-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/50 hover:shadow-primary/10 transition-all duration-300"
                  >
                    <div className={`h-2 bg-gradient-to-r ${event.gradient}`} />
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{event.description}</p>
                      <Button size="lg" variant="outline" className="shadow-md bg-transparent">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-3 mt-16">
            {upcomingEvents.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-12 bg-gradient-to-r from-primary to-secondary"
                    : "w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to event ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
