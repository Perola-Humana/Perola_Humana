"use client"

import { motion, AnimatePresence, type PanInfo } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const books = [
  {
    title1: "O mistério do invisível",
    title2: "A responsabilidade é toda tua",
    subtitle: "ESTE LIVRO NÃO É PARA SER LIDO- É PARA SER SENTIDO",
    description1:
      "O mistério do invisível é um convite direto ao despertar de uma consciência que talvez nem saibas que estava adormecida. Vivemos cercados de informação, distrações e incertezas impostas, mas raramente paramos para questionar quem somos, o que escolhemos e quem realmente conduz a nossa vida. ",
    description2:
      "Entre ciência, espiritualidade e comportamento humano, estas páginas atravessam temas como mente, amor, relações, dinheiro, sexualidade, sistemas de controlo e identidade pessoal. Não para impor verdades, mas para quebrar automatismos invisíveis que moldam decisões todos os dias sem que percebas. ",
    description3: "Este livro não promete conforto.",
    description4: "promete clareza,",
    description5:
      "Porque aquilo que não vês pode estar a definir tudo aquilo que vives e reconhecer isso é o primeiro passo para retomar o controlo da tua própria história.",
  },
]

export default function BookShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [pageWidth, setPageWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const totalSlides = books.length

  useEffect(() => {
    const handleResize = () => {
      setPageWidth(containerRef.current?.clientWidth || 0)
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

  const handleDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
    const threshold = pageWidth / 3
    if (offset.x < -threshold || velocity.x < -0.5) {
      paginate(1)
    } else if (offset.x > threshold || velocity.x > 0.5) {
      paginate(-1)
    }
  }

  const currentBook = books[currentIndex]

  return (
    <section id="book" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/10 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="relative my-0">
          <div ref={containerRef} className="overflow">
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
                  opacity: { duration: 0.3 },
                }}
                drag="x"
                dragConstraints={{ left: -pageWidth, right: pageWidth }}
                dragElastic={0.1}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 40 }}
                onDragEnd={handleDragEnd}
                className="grid lg:grid-cols-2 items-center my-0 lg:gap-8"
              >
                {/* Capa do Livro - Lado Esquerdo */}
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="flex justify-center pt-3.5 pb-10 lg:py-3.5"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: -5 }}
                    transition={{ duration: 0.4 }}
                    className="relative group"
                    style={{ perspective: "1000px" }}
                  >
                    {/* Efeito de brilho */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-2xl blur-3xl group-hover:blur-2xl transition-all duration-500" />

                    {/* Imagem da capa */}
                    <div className="relative w-72 h-[28rem] rounded-2xl shadow-2xl overflow-hidden border-4 border-slate-600/50">
                      <img
                        src="/Capa_livro.jpeg"
                        alt="Capa do livro"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Sombra */}
                    <div className="absolute -bottom-6 left-8 right-8 h-10 bg-black/40 blur-2xl rounded-full" />
                  </motion.div>
                </motion.div>

                {/* Detalhes do Livro - Lado Direito */}
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="space-y-6"
                >
                  {/* Título */}
                  <div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-[#C8935F] to-[#E0A878] bg-clip-text text-transparent">
                      {currentBook.title1} <br /> {currentBook.title2}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#C8935F] to-[#E0A878] rounded-full" />
                    <p className="text-xl sm:text-2xl mb-4 text-muted-foreground mt-5">{currentBook.subtitle}</p>
                  </div>

                  {/* Descrição */}
                  <div className="space-y-4 leading-relaxed text-muted-foreground">
                    <p className="text-foreground">{currentBook.description1}</p>
                    <p className="text-foreground">{currentBook.description2}</p>
                    <p className="text-foreground">{currentBook.description3}</p>
                    <p className="text-foreground">{currentBook.description4}</p>
                    <p className="text-foreground">{currentBook.description5}</p>
                  </div>

                  {/* Disponibilidade */}
                  <div className="flex flex-wrap items-center gap-8 pt-4 border-t border-border">
                    <div className="flex items-center gap-3 text-primary">
                      <CheckCircle className="w-6 h-6" />
                      <div>
                        <div className="font-semibold">Distribuído em Portugal e Brasil</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}