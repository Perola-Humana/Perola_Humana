"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const quotes = [
  {
    text: "As mãos que ajudam são mais sagradas do que os lábios que rezam.",
    // author: "Madre Teresa de Calcutá"
  },
  {
    text: "Por vezes sentimos que aquilo que fazemos é apenas uma gota no oceano, mas se não fosse essa gota o oceano seria menor.",
  //   author: "Madre Teresa de Calcutá"
  },
  {
    text: "O mundo seria melhor se todos entendessem isto: Se puder ajudar os outros ajude, se não puder, ao menos não lhes faça mal.",
    // author: "Dalai Lama"
  },
  {
    text: "O universo só te dá aquilo que pensas, sentes e dizes ser digno de receber.",
    // author: "Madre Teresa de Calcutá"
  },
  {
    text: "Não ames pela beleza pois um dia ela acaba.",
    // author: "Madre Teresa de Calcutá"
  },
  {
    text: "Não ames por admiração pois um dia dececionas-te.",
    // author: "Madre Teresa de Calcutá"
  },
   {
    text: "Ama apenas, pois o tempo nunca pode acabar com um amor sem explicação.",
    // author: "Madre Teresa de Calcutá"
  },
  {
    text: "Quer fazer algo para promover a paz? Começa pela tua família.",
    // author: "Madre Teresa de Calcutá"
  },
  {
    text: "A pobreza não foi criada por Deus, mas por mim e por ti quando não repartirmos o que temos.",
    // author: "Madre Teresa de Calcutá"
  },
  {
    text: "O mundo seria melhor se todos entendessem isto: Se puder ajudar os outros ajude, se não puder, ao menos não lhes faça mal.",
    // author: "Dalai Lama"
  },
]

export default function Hero() {
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Vídeo ou Imagem de Fundo */}
      <div className="absolute inset-0 w-full h-full">
        
        {/* Imagem de fundo */}
        <img
          src="/peaceful-yoga-meditation-wellness-nature.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        
        {/* Overlay escuro para melhorar legibilidade */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Conteúdo com Frases */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.p
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-relaxed px-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                "{quotes[currentQuote].text}"
              </motion.p>
              
              {quotes[currentQuote].author && (
                <motion.p
                  className="text-lg sm:text-xl md:text-2xl text-white/80 italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  — {quotes[currentQuote].author}
                </motion.p>
              )}
            </motion.div>
          </AnimatePresence>
         
        </div>
      </div>

      {/* Seta para scroll (opcional) */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}