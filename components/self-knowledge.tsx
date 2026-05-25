"use client"

import { motion } from "framer-motion"

const timelineData = [
  {
    section: "AUTOCONHECIMENTO",
    items: [
      {
        title: '"O UNIVERSO SÓ TE DÁ AQUILO QUE PENSAS, SENTES E DIZES SER DIGNO DE RECEBER"',
        author: "Nietzsche",
        content: "Eu sou vários, há multidões em mim, ma mesa da minha alma, sentam-se muitos e eu sou todos eles, há um velho, uma criança, um sábio, um tolo. Você nunca saberá com quem está sentado ou quanto tempo permanecerá com cada um de mim, mas prometo que se nos sentarmos à mesa, nesse ritual sagrado, eu lhe entregarei ao menos um de tantos que sou e correrei o risco de estarmos juntos no mesmo plano. Desde inicio evite ilusões, também tenho um lado mau, ruim que tento manter preso e que quando se solta me envergonha. Não sou santo nem exemplo infelizmente, entre tantos, um dia, eu me descubro e um dia eu serei eu mesmo definitivamente, como já foi dito: 'Ouse conquistar a ti mesmo!'",
        position: "right"
      },
      {
        title: "QUEM SOU EU AFINAL?",
        content: "O seu corpo não é um corpo físico, é uma massa de energia. Você é feito de milhões de átomos, a energia se manifesta em ondas eletromagnéticas. Você é energia feita de órgãos, os órgãos são feitos de tecidos, tecidos são feitos de células, células são feitas de moléculas, moléculas são feitas de átomos. Quando você entende que não é um corpo físico mas uma energia (alma) que faz parte do divino, que o corpo de você é uma massa energética que vibra de acordo com a tua mente, que você tem o poder de vibrar o que quiser e que automaticamente o teu corpo vibra na mesma frequência, então você vai entender que você só vive a realidade que você mesmo 'possui dentro de ti'. Toda a cura só começa quando você enfrenta suas sombras e feridas com amor. Quando você percebe que não é a sua dor, não são os teus problemas e dificuldades. Quebre todos os bloqueios e muros energéticos que você construiu para te proteger. 'Você não dentro de ti'. Essa é uma versão forjada por feridas, dores, raivas, vergonhas e medos, e verá que nunca esteve quebrado sequer; você simplesmente esqueceu quem era. Reivindique a tua luz, ative o teu poder pessoal. Você só se tornou a si mesmo quando você incorpora o teu novo Self!",
        position: "left"
      },
      {
        title: "DESPERTAR DE CONSCIÊNCIA É UM CAMINHO SEM VOLTA",
        content: "O despertar da consciência não acontece de uma vez só, nem de um momento para o outro e vai muito além desta vida. É um processo contínuo de sintonia com sua essência e com os planos mais altos. Quanto mais se desperta, mais se percebe que a realidade vendida é apenas reflexo da programação do sistema. O primeiro sinal de despertar é questionar—questionar as estruturas impostas, as crenças programadas e os padrões que te mantêm preso. Tudo o que você aprendeu dentro da matrix foi desenhado para te manter adormecido, repetindo ciclos sem consciência. Mas quando você consegue ver além do 'véu', algo dentro de você ativa a conexão com o teu verdadeiro eu e, sutilmente, começa aquela sensação de vazio ou insatisfação. Você começa a perceber os sinais, as 'coincidências' (coincidências não existem), as sincronicidades, aquela intuição mais forte do que nunca te guiando em direção ao que é certo. Isso é meramente o despertar da consciência. Imagine tudo o que você acreditou até agora era apenas uma pequena parte do que realmente existe. O despertar da consciência (ou despertar espiritual) é como abrir uma porta para um universo novo. Quando você cruza aquela porta, nada é igual novamente. Você começa a questionar as histórias, os padrões, as crenças que carrega. Percebe que não é o ator mas que a dor é uma resposta do que já passou. Ali você cura teu coração. Esqueça aquilo que te disseram que você era ou como deveria ser. Você precisa renascer das tuas cinzas como a Fênix para se reconectar com a fonte, que é o único Pai e Mãe de onde você vem, e se reinventar sabendo que você é parte de um todo neste processo.",
        position: "right"
      },
      {
        title: "APOCALIPSE O QUE É AFINAL?",
        content: "Muitos estão a confundir o tão falado apocalipse bíblico com o despertar planetário. Vamos discutir brevemente essa confusão e a verdadeira transição que nos chama a despertar de dentro para fora. A Bíblia, um livro codificado e manipulado foi usado para aprisionar a consciência humana em dogmas e medos, em uma matrix espiritual que mantém as pessoas presas à espera de um salvador. Sua narrativa foi estruturada como programação preditiva, induzindo crenças limitantes que fazem com que as próprias pessoas manifestem eventos negativos através do inconsciente coletivo. Até o conhecimento do tal de 'Jesus' (nome criado pelo homem) foi distorcido pelo império romano. 'Jesus' nunca pregou culto cego ou intermediários, mas sim a expansão da consciência e o amor incondicional. A tal chamada 'volta de Cristo' é apenas o despertar da consciência humana, que só é um evento interno que se alinha com a nova realidade e nunca é, nem será, um evento externo. Quem eleva a sua vibração, sintoniza-se nessa nova era de luz e consciência, e se alinha com a nova realidade, com a nova vibração do planeta, jamais vivenciará o apocalipse!",
        position: "left"
      }
    ]
  }
]

export default function Timeline() {
  return (
    // Background without img
    //  <section id="timeline" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-background via-background/95 to-background"></section>

    // Background with img
    <section 
      id="self-knowledge" 
      className="pt-32 pb-20 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-32 px-4 sm:px-6 relative scroll-mt-20"
      style={{
        backgroundImage: 'url(/backgroundSelfKnow.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay para melhorar legibilidade */}
      <div className="absolute inset-0 bg-white/70"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {timelineData.map((section, sectionIdx) => (
          <div key={sectionIdx}>
            {/* Título Principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16 sm:mb-20"
            >
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-[#C8935F] to-[#E0A878] bg-clip-text text-transparent">
                {section.section}
              </h2>
               <div className="w-24 h-1 bg-gradient-to-r from-[#C8935F] to-[#E0A878] rounded-full mx-auto mb-4" />
            </motion.div>

            {/* Timeline Container */}
            <div className="relative">
              {/* Linha Vertical Central */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-secondary/40 to-primary/20 -translate-x-1/2 hidden md:block" />

              {/* Timeline Items */}
              <div className="space-y-24">
                {section.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative"
                  >
                    {/* Dot no centro */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1 + 0.3,
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                      className="absolute left-1/2 top-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-background shadow-lg shadow-primary/30 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block"
                    />

                    {/* Content Container - Com items-center para centralização vertical */}
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                      {/* Card Título (menor) */}
                      <div className={`${item.position === "right" ? "md:order-1" : "md:order-2"}`}>
                        <motion.div
                          whileHover={{ scale: 1.02, y: -5 }}
                          className="bg-card/60 backdrop-blur-md border-l-4 border-primary/60 p-6 sm:p-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/10"
                        >
                          {item.title && (
                            <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
                              {item.title}
                            </h3>
                          )}
                        </motion.div>
                      </div>

                      {/* Card Conteúdo (maior) */}
                      <div className={`${item.position === "right" ? "md:order-2" : "md:order-1"}`}>
                        <motion.div
                          whileHover={{ scale: 1.02, y: -5 }}
                          className="bg-card/60 backdrop-blur-md border-l-4 border-secondary/60 p-6 sm:p-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-secondary/10"
                        >
                          {item.content && (
                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                              {item.content}
                            </p>
                          )}

                          {item.author && (
                            <div className="flex items-center justify-end mt-4">
                              <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                — {item.author}
                              </span>
                            </div>
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}