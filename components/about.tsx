"use client"

import { motion } from "framer-motion"
import { Heart, Globe, BookOpen, Shield } from "lucide-react"

const pearlConcepts = [
  {
    icon: Heart,
    title: "Desenvolvimento Interior:",
    description:
      "As pérolas formam-se a partir de uma pequena impureza que, com o tempo, se transforma em algo valioso — uma metáfora para o processo de autodescoberta.",
  },
  {
    icon: Shield,
    title: "Resiliência:",
    description: "A formação da pérola é um processo lento e resiliente, inspirando-nos a cultivar paciência e persistência.",
  },
  {
    icon: BookOpen,
    title: "Autovalorização:",
    description: "Sendo algo raro e significativo, Pérola reforça a ideia de autovalorização e autoamor — recordar a nossa própria preciosidade.",
  },
  {
    icon: Globe,
    title: "Cuidado e Nutrição:",
    description:
      "A concha, além de proteger, também nutre as pérolas, fornecendo o ambiente para o seu desenvolvimento. Este arquétipo remete para a importância de cuidar de si mesmo e dos outros.",
  },
]

export default function About() {
  return (
    <section id="about" className="pt-20 pb-16 sm:pt-20 sm:pb-20 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-secondary/10 scroll-mt-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column - Nossa História */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Título com decoração */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#C8935F] to-[#E0A878] rounded-full" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-[#C8935F] to-[#E0A878] bg-clip-text text-transparent">
                A NOSSA HISTÓRIA
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#C8935F] to-[#E0A878] rounded-full mx-auto" />
            </div>

            {/* Conteúdo */}
            <div className="space-y-5 text-base leading-relaxed text-foreground/90">
              <p>
                Helena da Fonseca tem dedicado o seu percurso à defesa dos mais vulneráveis, orientando a sua vida para a ação social, a consciência humana e o serviço ao próximo. Desde 2007, o seu trabalho tem sido marcado por iniciativas concretas de solidariedade e por um compromisso contínuo com a dignidade humana.
              </p>
              
              <p>
                Nesse mesmo ano, fundou a Escola de Ascensão, dedicada ao desenvolvimento pessoal e ao autoconhecimento, onde passou a realizar palestras, cursos e consultas de análise de ADN, com enfoque no conhecimento de si, na consciência individual e no potencial humano. A sua atividade estendeu-se a diferentes contextos culturais e sociais, nomeadamente em:
              </p>
              
              <ul className="ml-6 space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-[#C8935F] font-bold mt-1">•</span>
                  <span>Portugal: Lisboa e Porto</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C8935F] font-bold mt-1">•</span>
                  <span>Brasil: Rio de Janeiro, São Paulo, Rio Grande do Sul e Santa Catarina</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C8935F] font-bold mt-1">•</span>
                  <span>Japão: Tóquio</span>
                </li>
              </ul>
              
              <p>
                Ao longo deste percurso, algumas experiências marcaram profundamente a sua consciência e orientação futura. Uma das mais impactantes ocorreu numa visita a uma escola em Campo Bom, no Rio Grande do Sul, onde se confrontou com realidades de extrema vulnerabilidade social:
              </p>
              
              <blockquote className="border-l-4 border-[#C8935F] pl-4 py-3 bg-[#C8935F]/10 rounded-r-lg">
                <p className="italic text-foreground/90">
                  "Crianças a viver em contextos de profunda fragilidade: mães envolvidas em prostituição dentro do próprio lar, pais dependentes de substâncias ou privados de liberdade por crimes graves, e adolescentes grávidas com apenas 13 anos."
                </p>
              </blockquote>
              
              <p>
                Infelizmente, este tipo de realidade não se limita a um país ou região específica. Situações semelhantes continuam a existir em várias partes do mundo, incluindo Portugal. A partir desse momento, Helena direcionou de forma ainda mais consciente o seu trabalho para crianças abandonadas e órfãs, idosos negligenciados pelas próprias famílias e agregados familiares em situação de carência social.
              </p>
              
              <p>
                Movida por uma determinação firme, nunca abandonou o propósito de estar ao serviço de quem mais precisa. Hoje, sente a responsabilidade e a realização de poder transformar esse propósito em ação concreta.
              </p>
              
              <p className="font-medium">
                Helena da Fonseca é diplomata civil e comparticipa em mais de 250 projetos humanitários a nível internacional, colaborando com diferentes iniciativas sociais, educativas e comunitárias.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Pérola Humana */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8 lg:sticky lg:top-24"
          >
            {/* Título com decoração */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#C8935F] to-[#E0A878] rounded-full" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-[#C8935F] to-[#E0A878] bg-clip-text text-transparent">
                PÉROLA HUMANA, PORQUÊ?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#C8935F] to-[#E0A878] rounded-full" />
            </div>

            {/* Introdução */}
            <p className="text-base leading-relaxed text-foreground/90">
              O arquétipo da pérola com a concha representa proteção, preciosidade e crescimento interior, podendo ser associado a várias dimensões da vida pessoal.
            </p>
            
            {/* Cards dos conceitos */}
            <div className="space-y-4">
              {pearlConcepts.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="group p-5 bg-card/80 backdrop-blur-sm border-l-4 border-[#C8935F]/30 hover:border-[#C8935F] border-t border-r border-b border-border/50 hover:shadow-xl transition-all duration-300 rounded-r-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#C8935F]/20 group-hover:bg-[#C8935F]/30 flex items-center justify-center shrink-0 transition-all duration-300">
                      <area.icon className="w-6 h-6 text-[#C8935F]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-[#C8935F] transition-colors">
                        {area.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}