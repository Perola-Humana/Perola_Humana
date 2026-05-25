"use client"

import { Handshake, Users, Stethoscope, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface MissionItem {
  id: number
  icon: any
  image?: string
  title: string
  description?: string
  subHeading?: string
  status?: string
}

const missionItems: MissionItem[] = [
  {
    id: 1,
    icon: Users,
    image: "/centro_rosa.jpeg",
    title: "PROJETO: ROSA",
    subHeading: "Centro de dia para idosos totalmente gratuito.",
    status: "Mais informações em breve",
  },
  {
    id: 2,
    icon: Handshake,
    image: "/orquideas_brancas.jpeg",
    title: "PROJETO: ORQUÍDEAS BRANCAS",
    subHeading: "Apoio às Vítimas de Violência Doméstica.",
    status: "Mais informações em breve",
  },
  {
    id: 3,
    icon: Stethoscope,
    title: "SAÚDE",
    subHeading: "Tecnologia revolucionária na saúde totalmente gratuito.",
    status: "Mais informações em breve",
  },
]

export default function MissionSection() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null)

  return (
    <section 
      id="mission" 
          className="pt-24 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 relative scroll-mt-20"
      style={{
        backgroundImage: 'url(/backgroundWhatWedo.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background without img */}
      {/* <section id="mission" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-background via-secondary/5 to-background"></section> */}
      
      {/* Background with img */}
      {/* Overlay para melhorar legibilidade */}
      <div className="absolute inset-0 bg-white/60"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Título principal */}
          <div className="text-center mb-12">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-[#C8935F] to-[#E0A878] bg-clip-text text-transparent">
                O QUE FAZEMOS
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#C8935F] to-[#E0A878] rounded-full mx-auto" />
            </div>
          </div>

          {/* Conteúdo do texto com melhor formatação */}
          <div className="max-w-4xl mx-auto space-y-6 text-base leading-relaxed text-foreground/90">
            <p className="text-lg font-medium text-center text-foreground">
              O nosso propósito é despertar consciências e promover o equilíbrio do ser humano nas suas dimensões emocional, mental, espiritual e social, reconhecendo que cada pessoa é um sistema vivo em constante interação com o meio.
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-[#C8935F]/30 to-transparent my-8" />

            <p>
              Acreditamos que tudo está interligado. Tal como a ciência moderna demonstra que nenhum sistema existe isolado, também o ser humano é influenciado pelas relações, pelo ambiente e pela qualidade da presença que recebe. A atenção, o cuidado e o afeto não são abstrações: produzem efeitos reais no corpo, na mente e na forma como cada pessoa se relaciona com o mundo.
            </p>

            <p>
              Atuamos junto de crianças, idosos e mulheres vítimas de violência doméstica em situação de vulnerabilidade, oferecendo aquilo que muitas vezes falta: <span className="font-semibold text-[#C8935F]">presença consciente, escuta ativa, segurança emocional e dignidade humana</span>. Pequenos gestos — um olhar atento, uma palavra sincera, um toque respeitoso — podem desencadear mudanças profundas, porque alteram estados internos e restauram a sensação de pertença.
            </p>

            <p>
              A espiritualidade que defendemos não é dogma, mas consciência: a capacidade de reconhecer valor na vida, em si e no outro. Quando alguém se sente visto e reconhecido, ocorre uma transformação concreta — emocional, psicológica e até fisiológica. O corpo responde à segurança, à empatia e ao amor com maior equilíbrio e resiliência.
            </p>

            <blockquote className="border-l-4 border-[#C8935F] pl-6 py-4 bg-[#C8935F]/10 rounded-r-lg my-6">
              <p className="italic text-foreground/90">
                Apadrinhar crianças ao longo de todo o ano, oferecer tempo, realizar visitas e expressar afeto com um simples "gosto de ti" ou "amo-te" são atos simples, mas com impacto real. Para quem vive no esquecimento ou no isolamento, esta atenção pode alterar trajetórias de vida inteiras.
              </p>
            </blockquote>
            <p>
              Queremos contribuir para a mudança de pensamentos e estados internos, unir mãos e corações e criar condições para um Portugal e uma humanidade mais consciente, solidário e humano. 
            </p>
            <p className="text-center font-medium text-lg"><span className="text-[#C8935F]">Porque quando um ser humano muda, o sistema à sua volta também muda.</span>
            </p>
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-[#C8935F] to-[#E0A878] bg-clip-text text-transparent">
              OS NOSSOS PROJETOS
            </h3>
            <div className="w-32 h-1 bg-gradient-to-r from-[#C8935F] to-[#E0A878] rounded-full mx-auto" />
            <p className="mt-5 text-muted-foreground">
              Iniciativas concretas para transformar vidas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missionItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setExpandedSection(item.id)}
                onHoverEnd={() => setExpandedSection(null)}
                className="relative group p-6 rounded-2xl cursor-pointer overflow-hidden border-2 border-border bg-card hover:bg-gradient-to-br hover:from-card hover:to-[#C8935F]/10 hover:border-[#C8935F]/50 hover:shadow-xl transition-all duration-500"
              >
                <div className="flex flex-col h-full relative z-10">
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-[#C8935F]/20 rounded-xl text-[#C8935F] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mx-auto">
                      {/* <item.icon className="w-7 h-7" /> */}
                      {item.image ? (
                      <img src={item.image} alt={item.title} className="w-24 h-24 object-contain mx-auto" />
                    ) : (
                      <item.icon className="w-7 h-7" />
)}
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                        expandedSection === item.id ? "rotate-180 text-[#C8935F]" : ""
                      }`}
                    />
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-[#C8935F] transition-colors">
                    {item.title}
                  </h3>

                  {/* Subheading */}
                  {item.subHeading && (
                    <p className="text-sm text-foreground/80 mb-3 leading-relaxed">
                      {item.subHeading}
                    </p>
                  )}

                  {/* Hidden Content Area */}
                  <AnimatePresence>
                    {expandedSection === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 border-t border-[#C8935F]/20 mt-3">
                          {item.description ? (
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          ) : (
                            <p className="text-sm italic text-[#C8935F]/80 flex items-center gap-2">
                              <span className="w-2 h-2 bg-[#C8935F] rounded-full animate-pulse" />
                              {item.status}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C8935F]/0 to-[#E0A878]/0 group-hover:from-[#C8935F]/5 group-hover:to-[#E0A878]/5 transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}