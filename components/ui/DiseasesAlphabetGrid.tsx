import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';

// Tipos
interface Disease {
  name: string;
  description: string;
}

interface LetterGroup {
  letter: string;
  count: number;
  diseases: Disease[];
}

// Dados de exemplo - SUBSTITUA com seus dados reais
const diseasesData: LetterGroup[] = [
  {
    letter: 'A',
    count: 11,
    diseases: [
      { name: 'Alcoolismo',
        description: `O alcoolismo não é apenas um hábito; é um reflexo de padrões emocionais e energéticos internos que permanecem bloqueados. Quando uma pessoa bebe, emoções reprimidas — raiva, medo ou tristeza — emergem porque o álcool altera a regulação do cérebro, reduzindo o autocontrole.

        Na ótica da física quântica, a consciência funciona como observadora desses estados internos, podendo influenciar como eles se manifestam. A mudança começa ao trabalhar com os processos conscientes, mesmo que pequenos, para interagir com padrões inconscientes: amor, paciência, empatia e atenção positiva reorganizam o equilíbrio emocional.

        O álcool é sintoma, não causa. A raiz está em traumas e culpas acumuladas. Criar ambientes de apoio, respeito e compreensão permite que a pessoa se conecte com sua própria força interior e que a dependência perca poder, de forma natural e sustentável.
        ` },

      { name: 'Alergia na pele',
        description: `Reações alérgicas indicam que o corpo responde a tensões ou estímulos externos que afetam o equilíbrio físico e emocional. Assim como campos externos podem interferir em partículas sensíveis na física quântica, o corpo humano reage a situações que ameaçam seu espaço ou bem-estar.

        A solução está em reconhecer limites, comunicar necessidades com clareza e proteger seu espaço pessoal. Ajustar a forma de se relacionar consigo mesmo e com os outros reorganiza padrões energéticos, reduzindo respostas físicas de irritação. Mudanças pessoais tendem a gerar mudanças no ambiente de forma gradual.
        ` },

      { name: 'Anemia',
        description: `A anemia reflete, simbolicamente, a diminuição da energia vital causada por bloqueios emocionais e psicológicos. Muitas pessoas perdem a alegria de viver por medo, falta de reconhecimento ou sentimento de insuficiência. Podem sentir-se subestimadas, acreditar que existem limites na vida ou perder a vontade de se amar.

        Se na sua educação nunca recebeu valorização, elogios ou incentivo, tende a depender do reconhecimento alheio para sentir-se completo. A energia vital circula livremente quando os sentimentos e emoções estão desbloqueados. Por isso, é essencial permitir que a vida flua dentro de si, buscando experiências e pessoas que elevem o ânimo. A saúde física e emocional depende, em grande parte, da maneira como pensamos e sentimos.

        Quando nos fixamos na postura de vítima ou na dependência do reconhecimento externo, o corpo manifesta essa limitação. A corrente sanguínea e o fluxo de energia vital passam a depender de fatores externos, refletindo a fragilidade emocional interna. Reconhecer e assumir os próprios valores, independentemente do que os outros pensem, fortalece a vitalidade e transforma a experiência de vida.

        Para restaurar a energia:

        •	Cuide da sua aparência e da sua postura, pois elas influenciam diretamente o estado emocional;
        •	Ame-se e liberte-se da dependência do amor ou da aprovação de terceiros;
        •	Viva com coragem, bom humor e entusiasmo, permitindo-se desfrutar das pequenas alegrias diárias;
        •	Observe o riso e as travessuras simples de uma criança, que despertam a verdadeira felicidade;
        •	Deixe os acontecimentos fluírem, assumindo responsabilidade apenas pelo que lhe pertence;
        •	Faça o que gosta sem medo de críticas, libertando-se da pressão de agradar ou controlar tudo.

        A anemia, assim, não é apenas um desequilíbrio físico, mas um reflexo da relação consigo mesmo. Ao cultivar alegria, reconhecimento interno e independência emocional, a energia vital flui plenamente, fortalecendo corpo, mente e espírito.
        ` },

      { name: 'Ânus',
        description: `Problemas nessa região podem refletir ansiedade relacionada à busca por liberdade ou à necessidade de se desprender de situações e hábitos que não servem mais. Na perspectiva quântica, a energia pode estar bloqueada, dificultando o fluxo natural de ação e decisão.

        Liberar-se requer consciência e prática: identificar o que deve ser deixado para trás, estabelecer limites claros e agir de forma consistente. Quanto mais alinhadas as intenções com as ações, mais natural se torna a experiência de liberdade e equilíbrio.
        ` },

      { name: 'Apêndice',
        description: `O apêndice é um órgão pequeno, sem função aparente atualmente, mas que pode ter desempenhado papéis importantes no passado evolutivo. Na física quântica, estruturas aparentemente inativas podem ser relevantes em contextos específicos.
        Isso mostra que cada parte do organismo pode influenciar o equilíbrio geral. Mesmo o que parece “desnecessário” contribui para a harmonia do sistema, reforçando a importância de cuidar do corpo de forma integral e consciente.

        Apendicite

        A apendicite reflete bloqueios internos causados pelo medo de avançar ou mudar. A inflamação indica que pensamentos e emoções não estão fluindo de forma saudável, criando tensão física e mental.

        Do ponto de vista quântico, padrões emocionais retidos podem se manifestar no corpo como sinais de alerta. Guardar mágoas ou apegar-se a situações que não contribuem para o presente impede o fluxo natural de bem-estar.

        A solução começa ao identificar essas tensões internas, reorganizar pensamentos e emoções e permitir que a paz entre no seu sistema. Perdoar, compreender-se e reconhecer seu potencial cria condições para que o corpo e a mente reajam positivamente, restaurando equilíbrio e harmonia.
        ` },

      { name: 'Arteriosclerose e Presbiopia',
        description: `A presbiopia manifesta-se com o avançar do tempo, quando o olhar físico começa a perder a facilidade de focar o que está próximo, como se a lente interior se tornasse menos flexível. É frequentemente associada à idade, mas, num plano mais subtil, pode simbolizar uma consciência que se projecta demasiado para a frente, inquieta com o que ainda não aconteceu, afastando-se do instante presente onde a vida realmente pulsa.

        A dificuldade em ver ao perto pode espelhar uma mente absorvida por antecipações, tal como o viajante que, ao entardecer, em vez de contemplar a paisagem que o envolve, se angustia com a distância que ainda falta percorrer. Quando o pensamento se fixa apenas no que virá, o agora perde nitidez, como um objecto que se afasta do campo de visão.
        Existe também uma dimensão de rigidez interior — não como julgamento, mas como convite à flexibilidade. Tal como o cristalino precisa de elasticidade para ajustar o foco, a mente beneficia de abertura para acolher novas perspectivas, ideias e experiências. A vida, quando observada com curiosidade em vez de resistência, mantém uma juventude silenciosa que não depende apenas dos anos, mas da forma como se sente o tempo a passar.

        Nesta leitura simbólica, o corpo torna-se espelho de estados internos. O endurecimento das estruturas físicas pode ser visto como metáfora de um endurecimento emocional ou mental, enquanto a suavidade e a adaptabilidade recordam a importância de fluir com os ciclos naturais. Não se trata de culpa nem de causa directa, mas de correspondências poéticas entre interior e exterior — como se o organismo fosse um mapa vivo das nossas paisagens invisíveis.

        Viver o presente com atenção é como ajustar o foco da consciência. Cada momento contém detalhes subtis, partículas de experiência que só se revelam quando realmente observadas. Libertar o peso do passado e reduzir o medo do futuro não é ignorar o tempo, mas habitá-lo com mais inteireza.

        Sentir-se parte da natureza é reconhecer que envelhecer não significa perder luz, mas transformar-se. O olhar, quando se volta para o mundo com serenidade, descobre que o futuro é apenas uma extensão das escolhas e crenças cultivadas agora. Pensamentos tornam-se sementes; atitudes, terreno fértil. E a visão — física ou interior — expande-se quando o ser se permite observar a vida com confiança, leveza e presença.
        ` },

      { name: 'Articulações',
        description: `As articulações refletem nossa capacidade de adaptação e de aceitar mudanças na vida. Quanto mais flexível e consciente você for nas relações e nas situações do dia a dia, mais saudável será a mobilidade física.
        Falta de gratidão, rigidez mental ou apego emocional podem gerar tensões que se manifestam nas articulações, especialmente na região do quadril e da coxa. Trabalhar a compreensão, a aceitação e a flexibilidade reorganiza padrões energéticos e contribui para a saúde física e emocional.
        ` },

      { name: 'Artrite',
        description: `A artrite revela acúmulo de tensões, críticas e ressentimentos. Pessoas com dificuldades em lidar com frustração ou sentimentos de não ser valorizadas podem apresentar maior vulnerabilidade a esse problema.
        A reorganização quântica aqui se dá ao reconhecer os padrões internos de julgamento e raiva, permitindo que pensamentos e emoções se alinhem a um estado de equilíbrio. Reduzir críticas internas e cultivar autocompaixão ajuda a prevenir ou aliviar manifestações físicas.
        ` },

      { name: 'Asfixia',
        description: `A asfixia indica bloqueios no fluxo de energia vital, muitas vezes ligados a medos antigos, especialmente da infância. Essa limitação impede crescimento e a plena expressão das próprias verdades.
        Do ponto de vista quântico, liberar esses bloqueios significa permitir que pensamentos e intenções fluam sem resistência, confiando em si mesmo e na orientação interna. Crescer é integrar liberdade e força interior, mantendo a capacidade de se renovar e agir com clareza em qualquer situação.
        ` },

      { name: 'Astigmatismo',
        description: `O astigmatismo mostra dificuldade em alinhar percepções e focos simultaneamente. Assim como na física quântica, em que diferentes estados podem coexistir, a mente pode se dividir em múltiplos cenários, criando tensão e desgaste.
        Reconhecer essa tendência e confiar mais nas pessoas ao seu redor permite que pensamentos e decisões fluam de maneira mais organizada. Aceitar apoio e simplificar a análise das situações reduz a sobrecarga mental e melhora a percepção da realidade.
        ` },

      { name: 'Azia',
        description: `A azia surge como sinal de medo — medo de enfrentar decisões, responsabilidades ou mudanças importantes. Muitas vezes, o corpo reage antes da mente ter processado completamente a situação.
        Na ótica quântica, identificar e observar o medo permite reorganizar a energia interna, reduzindo a manifestação física do desconforto. Respirar profundamente, buscar apoio e relaxar diante do processo ajuda a restabelecer equilíbrio, permitindo que os eventos se desenrolem naturalmente sem criar sobrecarga emocional ou física.
        ` },
    ]
  },
  {
    letter: 'B',
    count: 5,
    diseases: [
      {
        name: 'Bactérias — Vermes — Vírus',
        description: `Quando há harmonia com a energia da vida, a vitalidade flui naturalmente pelo corpo e pelo ambiente. Quando o equilíbrio interno é rompido, organismos como bactérias, vírus e fungos encontram condições para se desenvolver.

        Pesquisas de Alexander Gurvich mostram que todas as células vivas emitem radiações — os raios mitogenéticos — que influenciam outras células ao redor. No corpo humano, doenças podem alterar essa emissão. A mente também influencia o comportamento desses organismos, podendo acelerar ou desacelerar seu desenvolvimento conforme o estado emocional e a convicção mental.

        Os chamados “inimigos invisíveis” só encontram espaço quando há desarmonia interna. A energia do pensamento atua como um íman: vibrações geradas por crenças negativas ou autodestrutivas atraem desequilíbrios, enquanto pensamentos claros e tranquilos fortalecem a saúde e protegem o corpo.
        `},
      {
        name: 'Baço',
        description: `O baço regula células importantes do sistema imunológico, como leucócitos e hemácias. Ele reflete o equilíbrio entre diferentes tipos de energia interna, emocional e racional.

        Quando há conflitos emocionais ou obsessão por eventos passados, a função do baço pode ser afetada, alterando a produção de células de defesa. Problemas de relacionamento ou carência afetiva na infância podem impactar simbolicamente esse órgão.

        Para restaurar equilíbrio, é necessário autoconhecimento, perdão e atenção consciente ao próprio estado emocional. Exercícios de relaxamento, observação interna e mudança de atitude permitem maior harmonia física e mental, reforçando a proteção natural do corpo.
        `},
       {
        name: 'Bexiga',
        description: `A bexiga está ligada à capacidade de suportar tensões e emoções acumuladas. Guardar problemas e ressentimentos prolongados pode gerar alterações em seu funcionamento, refletindo sobrecarga emocional.

        Reconhecer os limites pessoais, desapegar de eventos ou pessoas que provocam ansiedade e cultivar autocompaixão ajuda a restaurar a função adequada da bexiga. O equilíbrio emocional influencia diretamente a saúde física, e atitudes conscientes fortalecem a capacidade de lidar com situações difíceis sem sobrecarga.
        `},
       {
        name: 'Boca',
        description: `A boca expressa pensamentos e emoções. Palavras duras, críticas ou comentários negativos repercutem tanto na comunicação quanto no próprio corpo, manifestando-se como aftas, feridas ou herpes.

        Observar sinceramente os próprios comportamentos e adotar uma comunicação mais gentil e consciente reduz tensões internas e externas. Pensamentos e palavras funcionam como energia que retorna ao emissor; disciplina e cuidado com a forma de falar ajudam a manter saúde física e emocional.
        `},
       {
        name: 'Bronquite asmática nas crianças',
        description: `Doenças em crianças frequentemente refletem tensões emocionais e padrões de comportamento de quem cuida delas. Conflitos internos de pais ou responsáveis podem se manifestar na saúde infantil através de somatização.

        O equilíbrio emocional e a harmonia familiar são essenciais. Atitudes de cooperação, compreensão e gratidão contribuem para a saúde de todos. Pensamentos positivos e comportamentos equilibrados ajudam a reduzir manifestações físicas de tensão, enquanto disciplina emocional e oração ou meditação fortalecem o bem-estar coletivo.
        `},      
    ]
  },
  {
    letter: 'C',
    count: 3,
    diseases: [
      {
        name: 'Cabeça',
        description: `A cabeça está ligada à razão, mas a lógica isolada não resolve tudo. Ignorar as emoções pode gerar desequilíbrios físicos ou acidentes envolvendo a cabeça. Pensamentos rígidos e conflitos familiares profundos podem se manifestar como problemas neurológicos, incluindo tumores.

        Na perspectiva quântica, pensamentos e emoções influenciam diretamente os padrões de energia do corpo. Renovar ideias, perdoar e abrir espaço para perspectivas externas promove flexibilidade mental e harmonia interna, reduzindo tensões físicas e psicológicas. Desconfiança, revolta ou resistência podem criar desequilíbrios que se refletem no cérebro.
        `},
      {
        name: 'Cãibras',
        description: `Cãibras indicam tensão muscular e medo de se soltar, geralmente relacionadas à sensação de controle externo ou à defesa de direitos pessoais. Elas refletem insegurança em avançar ou usar plenamente a própria experiência.

        Do ponto de vista quântico, o corpo reage aos bloqueios emocionais mesmo que a mente consciente não perceba. Trabalhar essas tensões internamente, liberar medo de mudanças e relaxar a mente permite que o corpo recupere flexibilidade, prevenindo ou aliviando as cãibras.
        `},
      {
        name: 'Calvície',
        description: `A queda de cabelo está associada a padrões de tensão emocional e defensiva, orgulho excessivo ou dificuldades em lidar com críticas. Também pode refletir sensibilidade extrema a atitudes alheias, gerando ressentimentos acumulados.

        Na perspectiva quântica, os padrões de energia emocional influenciam diretamente a vitalidade do corpo, incluindo o crescimento capilar. Posturas defensivas, raiva ou isolamento emocional intensificam esses efeitos. Trabalhar a autoestima, liberar ressentimentos e cultivar gratidão e aceitação ajuda a restaurar o equilíbrio e a saúde do couro cabeludo.
        `},      
    ]
  },
  {
    letter: 'D',
    count: 11,
    diseases: [
       {
        name: 'Daltonismo',
        description: `O daltonismo simboliza dificuldade em perceber ou aceitar a diversidade — de pessoas, experiências ou realidades. Pode indicar rigidez mental, resistência a conselhos e irritação com situações pequenas.

        Do ponto de vista quântico, a mente influencia padrões energéticos que se refletem fisicamente. Cultivar harmonia, gentileza e compreensão reduz essas tensões internas e externas. Trabalhar hábitos mentais positivos permite perceber “todas as cores” da vida, promovendo equilíbrio emocional e físico.          
        `},  
      {
        name: 'Dedo Indicador',
        description: ` Ferimentos no dedo indicador podem refletir acusações internas ou externas. O corpo responde a padrões de energia emocional relacionados a mágoas ou ressentimentos.

        •	Dedo da mão direita: a tensão pode estar relacionada a uma mulher.
        •	Dedo da mão esquerda: a tensão pode estar relacionada a um homem.

        Na ótica quântica, a consciência influencia esses padrões energéticos; identificar e liberar ressentimentos ajuda a restaurar equilíbrio físico e emocional.
        `}, 
      {
        name: 'Dedo Médio',
        description: `Ferimentos no dedo médio estão ligados a tensões relacionadas à sexualidade e à autopercepção. Insatisfação, raiva ou sentimentos de rejeição, tanto em relação a parceiros quanto a si mesmo, podem se manifestar fisicamente neste dedo.

        Reconhecer essas emoções e trabalhar a aceitação e a comunicação interna permite reorganizar a energia do corpo, promovendo equilíbrio e harmonia emocional.
        `},
      {
        name: 'Dedo Anelar',
        description: `O dedo anelar simboliza a união e parcerias afetivas. Lesões ou dores indicam inseguranças ou frustrações em relacionamentos, ou expectativas instáveis sobre futuras conexões afetivas.

        A física quântica mostra que pensamentos e emoções moldam padrões energéticos; ajustar a perspectiva e trabalhar confiança e abertura emocional ajuda a reduzir manifestações físicas e mentais de tensão.
        `},
      {
        name: 'Dedo Mindinho',
        description: `O dedo mindinho representa a família e o ambiente familiar. Ferimentos neste dedo podem indicar:

        •	Mágoas ou pressões em contextos familiares;
        •	Conflitos ou aborrecimentos com pessoas próximas;
        •	Medo de constituir família ou desejo de distanciamento.

        Reconhecer esses sentimentos e liberar a tensão interna reorganiza a energia, prevenindo reflexos físicos de estresse emocional.
        `},
      {
        name: 'Dedo Polegar',
        description: `O polegar está ligado a preocupações intelectuais e profissionais. Lesões ou dores indicam desorganização mental ou emocional que afeta vida pessoal e relacionamentos.

        Praticar relaxamento, avaliar o próprio comportamento e identificar desequilíbrios permite alinhar objetivos profissionais e vida pessoal. Ansiedade ou revolta podem se refletir fisicamente, até nos dedos de familiares, mostrando a influência da energia individual no ambiente. Caminhar com calma e humildade promove reorganização energética e bem-estar.
        `},
      {
        name: 'Dedos dos Pés',
        description: `Os dedos dos pés refletem preocupações sobre o futuro. Medos ou inquietações podem se manifestar como dores ou acidentes nesses dedos.

        Interromper pensamentos negativos e cultivar tranquilidade reorganiza padrões energéticos do corpo. Expressar palavras e pensamentos positivos promove bem-estar, leveza interior e equilíbrio físico-emocional.
        `},
      {
        name: 'Dentes',
        description: `Problemas nos dentes refletem indecisões e conflitos internos. Crianças educadas sob pressão ou com opiniões constantemente anuladas desenvolvem padrões energéticos de dúvida e insegurança, que podem se manifestar fisicamente nos dentes — desalinhamento, fragilidade ou cáries.

        Do ponto de vista quântico, pensamentos e emoções moldam o corpo. Seguir a intuição, reconhecer respostas da própria consciência e tomar decisões conscientes reorganiza padrões energéticos, reduzindo interferências externas e fortalecendo a autoconfiança.

        Problemas de Canal

        Alterações no canal dentário indicam tensões profundas relacionadas a mudanças inesperadas ou traumas emocionais. Inflamações refletem atritos internos e resistência à adaptação de crenças ou planos pessoais.

        Ser paciente e flexível nos pensamentos, aceitar mudanças sem absolutizar antigas verdades e reorganizar padrões mentais e emocionais ajuda a restaurar equilíbrio físico e emocional.
        `},
       {
        name: 'Derrame Cerebral',
        description: `O derrame cerebral está ligado à rigidez mental e temperamento inflexível. Emoções intensas, críticas constantes e teimosia sobre convicções aumentam tensão cerebral.

        Na ótica quântica, a flexibilidade mental influencia diretamente o fluxo energético no cérebro. Liberar a necessidade de ser “dono da verdade”, ouvir e comunicar-se com calma permite reorganizar esses padrões, reduzindo sobrecarga emocional e física.
        `},
       {
        name: 'Diabetes',
        description: `A diabetes pode refletir acúmulo de golpes emocionais e dificuldades em lidar com perdas ou frustrações. Mágoas não resolvidas alteram padrões energéticos relacionados à percepção do “doce” da vida, gerando insegurança e medo do futuro.

        Reconhecer o papel criador da própria mente, perdoar sinceramente e liberar o passado reorganiza o fluxo energético, permitindo encontrar equilíbrio emocional e prazer na vida novamente. Pensamentos e atitudes positivas atraem experiências de bem-estar, promovendo saúde física e emocional.
        `},
       {
        name: 'Dor (em geral)',
        description: `A dor simboliza falta de amparo e sobrecarga emocional. É sinal de que há limites sendo ultrapassados, conflitos não resolvidos ou responsabilidades assumidas de forma excessiva.

        Do ponto de vista quântico, a dor é uma manifestação do desalinhamento interno. Reconhecer sentimentos de culpa, delegar responsabilidades e respeitar o próprio tempo permite reorganizar padrões energéticos e reduzir tensões físicas. Aceitar-se, ter paciência e permitir evolução gradual restaura equilíbrio e bem-estar.
        `},
    ]
  },
  {
    letter: 'E',
    count: 11,
    diseases: [
       {
        name: 'Enjoos',
        description: `Os enjoos refletem desequilíbrios emocionais, ansiedade e sensação de perda de controle. Mudanças ou situações desconfortáveis podem gerar respostas físicas que se manifestam como náuseas. Reconhecer a origem emocional ajuda a restaurar o equilíbrio interno.
      `},  
      {
        name: 'Enjoo no carro',
        description: `Enjoos no carro indicam desconforto com o destino ou com quem te acompanha. Experiências passadas e emoções não resolvidas podem intensificar essa reação. Observar sentimentos antes da viagem e respeitar limites pessoais ajuda a equilibrar corpo e mente.
        `},
       {
        name: 'Enjoo no mar',
        description: `Enjoos no mar refletem resistência a mudanças e instabilidade emocional. Contextos que geram medo, insegurança ou infelicidade podem manifestar-se fisicamente. Enfrentar receios e afirmar necessidades com autenticidade promove equilíbrio emocional e bem-estar corporal.
        `},
       {
        name: 'Enjoos na gravidez',
        description: `Durante a gravidez, corpo e emoções passam por transformações intensas. Náuseas podem indicar ansiedade, medo do futuro ou conflitos familiares não resolvidos. Buscar apoio emocional, aceitar inseguranças com compaixão e fortalecer vínculos positivos contribui para um estado mais tranquilo e equilibrado.
        `},
       {
        name: 'Entorses',
        description: `Entorses refletem rigidez interna, teimosia ou resistência a mudanças. São sinais do corpo pedindo pausa e reorganização dos pensamentos. Conectar-se com os próprios sentimentos e escolhas previne acidentes e promove equilíbrio físico e emocional.
        `},
       {
        name: 'Epilepsia',
        description: `A epilepsia envolve fatores neurológicos e emocionais. Além do acompanhamento médico, práticas de redução de stress, apoio psicológico e manutenção de hábitos equilibrados ajudam a regular os padrões energéticos que afetam o corpo. A espiritualidade, quando adequada, pode fortalecer a resiliência interior, mas deve ser usada com discernimento.
        `},
       {
        name: 'Espinhas e Furúnculos',
        description: `Problemas de pele refletem stress, frustrações, insegurança ou emoções reprimidas. A relação com o ambiente, autoimagem e hábitos emocionais influencia diretamente o corpo. Desenvolver autocuidado, compaixão, autoconhecimento e hábitos positivos reorganiza a energia emocional e melhora o bem-estar físico.
        `},
       {
        name: 'Estafa',
        description: `Estafa física ou mental indica sobrecarga emocional e dificuldade em impor limites. O desejo de corresponder às expectativas externas gera tensão interna. Priorizar autocuidado, aprender a delegar e reconhecer o próprio valor restabelece equilíbrio, melhora a energia vital e reduz impactos físicos do stress.
        `},
       {
        name: 'Estética',
        description: `A tua aparência reflete padrões mentais, emocionais e energéticos. Dores, flacidez, celulite ou desconfortos estéticos são sinais do corpo sobre desequilíbrios internos.

        O cérebro atua como mediador entre consciente, inconsciente e subconsciente:

        •	Consciente: governa decisões e livre-arbítrio.
        •	Inconsciente: executa ordens do subconsciente, mantém funções automáticas do corpo e armazena hábitos repetidos.
        •	Subconsciente: registra pensamentos, emoções e influências ambientais, transmitindo sinais ao inconsciente.

        Os sintomas físicos surgem quando há desalinhamento entre estas camadas. Observar e compreender esses sinais reorganiza padrões energéticos e promove equilíbrio físico e emocional.
        `},
      {
        name: 'Estrabismo',
        description: `O estrabismo em crianças pode refletir conflitos emocionais ou desarmonia parental. Divergências extremas entre os pais projetam tensão no subconsciente da criança, interferindo no desenvolvimento ocular e na percepção de mundo.

        A criança estrábica tende a desenvolver sensibilidade, inteligência elevada ou resistência emocional. Harmonizar o ambiente familiar permite que a criança canalize seu potencial de forma saudável.

        Do ponto de vista quântico, pensamentos e emoções dos pais influenciam padrões energéticos do filho. A criança pode aprender a mediar situações, observar o mundo com análise e serenidade, e direcionar sua vida sem absorver negatividade externa.
        `},
      {
        name: 'Estômago',
        description: `Problemas no estômago refletem dificuldade em “digerir” emoções, críticas ou mudanças. Ansiedade, excesso de autoexigência ou mágoas acumuladas alteram padrões energéticos, gerando azia, dor ou má digestão.

        Praticar aceitação, cultivar pensamentos leves, dialogar de forma gentil consigo mesmo e reservar momentos de prazer e descanso reorganiza energia interna, promovendo equilíbrio físico e emocional.
        `},      
    ]
  },
  {
    letter: 'F',
    count: 4,
    diseases: [
      {
        name: 'Fadiga',
        description: `A fadiga muitas vezes indica falta de amor ou entusiasmo pelo que fazes. Trabalhar com prazer e propósito diminui o peso do cansaço físico. O corpo precisa de motivação e vontade do coração, não apenas de alimento.

        Se te sentes esgotado, observa se a fonte está na forma como fazes o trabalho ou na falta de reconhecimento. Aceita os teus sentimentos e valoriza o que fazes. Trabalhar com amor, sem foco apenas na recompensa, torna tudo mais leve. Se necessário, procura ambientes onde teu talento seja valorizado.
        `},  
      {
        name: 'Febre',
        description: `A febre reflete atrito emocional intenso, muitas vezes raiva contida. Nas crianças, pode indicar tensões familiares inconscientes.

        Respira fundo, relaxa e confia na vida. Aceita opiniões diferentes sem perder tua essência. O equilíbrio surge ao manter calma diante da oposição, assumir responsabilidade pelos teus atos e não pelos dos outros.
        `}, 
       {
        name: 'Fígado',
        description: `O fígado processa, transforma e equilibra energias no corpo. Mágoas, raiva ou recusa de ajuda criam desgaste neste órgão.

        A cura começa ao desenvolver humildade, flexibilidade e abertura ao amor. Soltar velhas dores e aceitar a leveza da vida reequilibra corpo e mente.
        `},
       {
        name: 'Fraturas',
        description: `Fraturas refletem rigidez interna, resistência a ceder ou conflitos com autoridade.

        •	Braço direito: conflito com figuras femininas.
        •	Braço esquerdo: conflito com figuras masculinas.
        •	Sem ligação específica: conflito interno ou crenças limitantes.

        Liberar ressentimentos, confiar em si e encarar obstáculos como degraus permite transformar fraturas em aprendizado e cura.
        `},     
    ]
  },
  {
    letter: 'G',
    count: 4,
    diseases: [
       {
        name: 'Garganta',
        description: `A garganta é o canal de expressão. Inflamações indicam sentimentos reprimidos, dificuldade em falar ou ser ouvido.

        Aprender a expressar ideias, vontades e desconfortos sem medo liberta a energia bloqueada. Criar ambiente de autenticidade permite comunicação clara e saudável.
        `},  
      {
        name: 'Gastrite',
        description: `A gastrite indica ansiedade, preocupações e sensação de falta de controle. O estômago reage mais às emoções do que à comida.

        Pare de remoer dores antigas. Aceite erros como aprendizado. Confie no próprio caminho, solte tentativas de controlar pessoas ou situações, e permita pequenas mudanças de direção para restaurar equilíbrio.
        `}, 
       {
        name: 'Glúteos',
        description: `Os glúteos refletem o quanto assumimos nosso poder e limites. Fraqueza nessa região indica permitir que outros ultrapassem limites ou carregar fardos alheios.

        Aprender a dizer “não”, assumir responsabilidades próprias e estabelecer metas pessoais fortalece tanto os glúteos quanto a postura perante a vida.
        `},
       {
        name: 'Gordura / Obesidade',
        description:`O excesso de peso muitas vezes simboliza proteção emocional ou busca de segurança. Pode refletir sensibilidade extrema, repressão de emoções e mágoas antigas.

        Limpar pensamentos negativos, agir com autonomia, praticar exercícios e enviar mensagens positivas ao subconsciente ajuda a transformar gordura em energia vital. Não se prenda ao passado; concentre-se no presente e nas decisões que fortalecem tua vida.
        `},      
    ]
  },
  {
    letter: 'H',
    count: 6,
    diseases: [
      {
        name: 'Hemofilia',
        description: `O sangue é um reflexo subtil da energia vital e das relações humanas. Segundo a medicina oriental, os glóbulos vermelhos representam o princípio yang — energia positiva e masculina — enquanto os glóbulos brancos correspondem ao princípio yin — energia negativa e feminina.

        Quando ocorre leucemia — caracterizada pelo aumento excessivo de glóbulos brancos e desequilíbrio entre yin e yang — ou hemofilia — marcada por dificuldades de coagulação — estas doenças podem simbolizar desarmonia nas relações familiares ou emocionais. Muitas vezes, conflitos ocultos ou autoritarismo entre marido e mulher, mesmo que não manifestos, geram tensões que se refletem nos descendentes.

        As crianças ou filhos que apresentam problemas sanguíneos, ainda que adultos, podem estar a manifestar inconscientemente tensões herdadas ou reproduzidas das experiências familiares. Pela lei do inconsciente, tendem a procurar parceiros semelhantes aos pais, criando uma “continuidade” de padrões emocionais, mas, com consciência, é possível romper este ciclo: mudando hábitos, crenças e atitudes, abre-se espaço para uma nova linha de pensamento, independente das antigas dinâmicas familiares.

        O caminho para harmonia envolve reconhecer a natureza humana e cultivar respeito mútuo, liberdade e equilíbrio emocional. Autoritarismo e orgulho causam resistência, conflitos e desorganização, afetando saúde, felicidade e relações. Reconciliação, compreensão e empatia são ferramentas essenciais.

        É importante refletir sobre a própria flexibilidade de opinião e conduta. Soltar ressentimentos, agradecer e desejar felicidade aos outros — mesmo àqueles que nos magoaram — permite que a energia flua e que o corpo recupere equilíbrio. Frequentemente, quem nos fere é precisamente quem mais tentamos controlar; libertando a necessidade de dominar, dissolvem-se as tensões e o universo responde com equilíbrio e compensação.
        `},  
      {
        name: 'Hepatite em crianças',
        description: `A hepatite em crianças não surge apenas do corpo físico; muitas vezes reflete padrões emocionais presentes nos pais ou avós. Até os sete anos, a criança está mais sintonizada com a energia emocional da mãe; dos sete aos catorze, a influência do pai torna-se mais relevante.

        No contexto quântico, isso pode ser interpretado como um campo de ressonância: a criança recebe, absorve e interage com a energia e emoções dominantes ao seu redor, influenciando seu sistema imunológico e fisiológico. Ao modificar conscientemente a tua postura emocional e reduzir tensões, alteras a ressonância energética que a criança recebe, contribuindo para que o seu organismo encontre um equilíbrio mais natural.
        `}, 
      {
        name: 'Hérnia de disco',
        description: `A hérnia de disco surge em situações de sobrecarga emocional, sensação de bloqueio e indecisão profunda. Fisicamente, a coluna transmite sustentação; energeticamente, ela reflete a capacidade de suportar e processar estímulos internos e externos.

        Do ponto de vista quântico, os padrões mentais e emocionais funcionam como campos de probabilidade: pensamentos repetitivos de medo e desamparo aumentam a probabilidade de tensão física se manifestar como dor ou hérnia. Identificar essas tensões, buscar apoio e ajustar a tua postura mental pode alterar o “campo de possibilidades”, permitindo que a recuperação física acompanhe a reorganização emocional.
        `}, 
      {
        name: 'Hipermetropia',
        description: `A hipermetropia indica dificuldade em focar o presente, com tendência a viver mais no passado ou no futuro. O eixo curto do olho limita a percepção próxima, o que simbolicamente reflete uma incapacidade de lidar com detalhes imediatos.

        Na perspectiva quântica, os olhos respondem à atenção e ao foco: direcionar a consciência para o presente, tomar decisões conscientes e desapegar de memórias ou expectativas externas altera a percepção visual e, em termos energéticos, reduz a tensão que mantém a hipermetropia ativa. O “campo de atenção” direciona não só a visão física, mas também os processos adaptativos do organismo.
        `}, 
      {
        name: 'Hipertensão - Pressão alta',
        description: `A hipertensão está associada à acumulação de tensões, padrões repetitivos de preocupação e necessidade de controle. Emoções não processadas criam um estado constante de ativação do sistema nervoso e do coração.

        A física quântica sugere que o corpo reage a campos de energia mental e emocional: pensamentos rígidos e focados no futuro geram padrões de energia que se traduzem em pressão arterial elevada. Reduzir a antecipação de cenários futuros, praticar consciência corporal e soltar emoções retidas muda a “configuração energética” interna, promovendo relaxamento cardiovascular e equilíbrio físico.
        `}, 
        {
        name: 'Hipoglicemia',
        description: `A hipoglicemia indica sensibilidade e tendência a ceder perante pressões externas, resultando em desgaste energético. Ao “ceder para agradar”, diminui-se a energia vital, refletida no baixo nível de glicose.

        Em termos quânticos, a mente funciona como um emissor de campos de intenção: quando a pessoa não se preserva, o corpo responde diminuindo recursos energéticos para sinalizar o desequilíbrio. Reconhecer limites, manter integridade e criar espaço para necessidades próprias altera a ressonância interna, estabilizando os níveis de energia e glicose.
        `},    
    ]
  },
  {
    letter: 'J',
    count: 1,
    diseases: [
        {
        name: 'Joelhos — versão quântica',
        description: `Os joelhos funcionam como pivôs de equilíbrio entre passado e futuro, mediando a energia que flui das coxas (experiências passadas) para as pernas (ações futuras).

        Dores, inflamações ou lesões podem refletir padrões mentais e emocionais rígidos: resistência a ceder, dificuldade em aceitar perspectivas diferentes ou abdicar da própria integridade cria campos de tensão que se manifestam fisicamente nos joelhos.

        Do ponto de vista quântico, pensamentos repetitivos e emoções reprimidas geram padrões energéticos que influenciam diretamente a fisiologia. Quanto mais forte a crença na incapacidade de mudança ou no desrespeito próprio, maior a probabilidade de o corpo expressar esse bloqueio através de dor ou limitação de mobilidade.

        A cura envolve reconfigurar esses campos internos: reconhecer emoções, ajustar expectativas, aceitar flexibilidade mental e agir de forma alinhada com os próprios valores altera a ressonância energética, reduzindo a manifestação física e restaurando mobilidade.
        `},         
    ]
  },
  {
    letter: 'L',
    count: 2,
    diseases: [
      {
        name: 'Labirintite — versão quântica',
        description: `A labirintite pode surgir quando a mente está sobrecarregada por pensamentos conflitantes, medo, nervosismo ou choques emocionais não processados. A sensação de vertigem ou desequilíbrio indica que o corpo está reagindo a um campo energético interno instável, resultado de padrões mentais que dificultam a orientação e a ação no presente.

        Persistir em hábitos antigos ou tentar ignorar medos e emoções cria interferências na percepção física e no equilíbrio neurológico. A vertigem funciona como sinal quântico: o corpo reflete a desarmonia entre intenção (pensamento) e ação (corpo).

        A intervenção passa por realinhar a atenção e a energia: processar emoções, priorizar a própria autenticidade, abandonar padrões que já não servem e tomar decisões conscientes. Isso altera a distribuição de energia interna, estabiliza o sistema vestibular e reduz os sintomas físicos, promovendo equilíbrio real no corpo e na mente.
        `},  
      {
        name: 'Leucemia',
        description: `O sangue é um reflexo subtil da energia vital e das relações humanas. Segundo a medicina oriental, os glóbulos vermelhos representam o princípio yang — energia positiva e masculina — enquanto os glóbulos brancos correspondem ao princípio yin — energia negativa e feminina.

        Quando ocorre leucemia — caracterizada pelo aumento excessivo de glóbulos brancos e desequilíbrio entre yin e yang — ou hemofilia — marcada por dificuldades de coagulação — estas doenças podem simbolizar desarmonia nas relações familiares ou emocionais. Muitas vezes, conflitos ocultos ou autoritarismo entre marido e mulher, mesmo que não manifestos, geram tensões que se refletem nos descendentes.

        As crianças ou filhos que apresentam problemas sanguíneos, ainda que adultos, podem estar a manifestar inconscientemente tensões herdadas ou reproduzidas das experiências familiares. Pela lei do inconsciente, tendem a procurar parceiros semelhantes aos pais, criando uma “continuidade” de padrões emocionais, mas, com consciência, é possível romper este ciclo: mudando hábitos, crenças e atitudes, abre-se espaço para uma nova linha de pensamento, independente das antigas dinâmicas familiares.

        O caminho para harmonia envolve reconhecer a natureza humana e cultivar respeito mútuo, liberdade e equilíbrio emocional. Autoritarismo e orgulho causam resistência, conflitos e desorganização, afetando saúde, felicidade e relações. Reconciliação, compreensão e empatia são ferramentas essenciais.

        É importante refletir sobre a própria flexibilidade de opinião e conduta. Soltar ressentimentos, agradecer e desejar felicidade aos outros — mesmo àqueles que nos magoaram — permite que a energia flua e que o corpo recupere equilíbrio. Frequentemente, quem nos fere é precisamente quem mais tentamos controlar; libertando a necessidade de dominar, dissolvem-se as tensões e o universo responde com equilíbrio e compensação.
        `},
      ]   
    },
   {
    letter: 'M',
    count: 7,
    diseases: [
       {
        name: 'Mal-Estares em geral',
        description: `Todo o sofrimento mental e emocional cria padrões de energia que afetam diretamente o corpo físico. Dores, inflamações, constipações ou fadiga não surgem ao acaso; são manifestações da interação entre o consciente, o inconsciente e o campo energético do corpo
        `},  
      {
        name: 'Mamas / Seios',
        description: `Problemas nos seios — como nódulos, mastite ou tumores — podem refletir desequilíbrios energéticos relacionados a figuras de referência masculina ou padrões de expectativa e controlo. Produção insuficiente de leite ou dores podem estar associadas a tensão emocional ou resistência interna a entregar e receber energia de forma fluida.

        O campo quântico do corpo responde diretamente a emoções como ressentimento, frustração ou necessidade de controlo. Quando estas emoções se equilibram — por exemplo, aceitando a liberdade do outro, reconhecendo limites e ajustando expectativas — a energia flui melhor, reduzindo sintomas físicos. A cura é facilitada ao transformar padrões energéticos rígidos em flexibilidade emocional e autonomia.
        `},       
       {
        name: 'Manchas na pele',
        description: `Manchas refletem desequilíbrios energéticos ligados à sensação de ameaça ou dificuldade de expressão. O corpo manifesta externamente o que o inconsciente não consegue comunicar internamente.

        •	Manchas no rosto indicam bloqueios na comunicação e ansiedade sobre a própria imagem e espaço pessoal.
        •	Manchas brancas nos braços podem sinalizar conflitos familiares ou sensação de não ser reconhecido.

        Do ponto de vista quântico, a atenção consciente e a mudança de padrão mental — lidar com conflitos internos sem agressão, oferecer carinho verdadeiro e liberar ressentimentos — alteram o campo energético que se manifesta na pele, reduzindo ou eliminando manchas.
        `},
       {
        name: 'Mãos',
        description: `As mãos refletem o potencial de ação e expressão. Ferimentos, tensões ou dificuldades de movimento indicam bloqueios energéticos ligados a experiências de vida, trabalho e relacionamentos.

        A física quântica aplicada à saúde mostra que intenções repetitivas — pensamentos de frustração, raiva ou insegurança — afetam diretamente a energia dos músculos e articulações das mãos. Abrir as mãos simbolicamente e fisicamente, agir com intenção consciente e harmonizar movimentos, reorganiza o fluxo energético e reduz sintomas físicos. Ombros, braços e mãos respondem à ambição e aos conflitos internos, indicando quando é necessário realinhar prioridades e intenção de ação.
        `},
       {
        name: 'Medo',
        description: `O medo é um padrão energético que bloqueia decisões e limita ações. Quando vives cheio de dúvidas ou indecisões, mesmo que chames isso de “cautela”, o teu campo energético vibra em baixa frequência, gerando tensão no corpo e dificuldades de ação.

        •	Medo de falhar ou errar.
        •	Medo de expressar sentimentos ou opiniões.
        •	Medo do desconhecido, do futuro ou da solidão.
        •	Medo de perder recursos, trabalho ou estabilidade.

        No plano quântico, pensamentos repetitivos criam potenciais que se manifestam na realidade física como estresse, fadiga ou predisposição a doenças. Reconhecer o medo, em vez de negá-lo, altera imediatamente o padrão energético. Aceitar responsabilidades apenas sobre aquilo que te pertence reduz sobrecarga e libera energia para decisões conscientes.

        Ao enfrentar o medo com intenção clara e ação consciente, o campo energético do corpo se reorganiza, abrindo novas possibilidades e soluções. O corpo e a mente seguem a mesma frequência; ao mudar a tua intenção, mudas também a manifestação física.
        `},
       {
        name: 'Miopia',
        description: `A miopia é uma alteração física do eixo ocular, onde o olho foca melhor perto do que longe. A nível psicológico-energético, pessoas míopes tendem a restringir a percepção da realidade e a focar-se no imediato, evitando ampliar o campo de visão para o futuro ou situações complexas.

        No modelo quântico, a mente cria filtros que limitam a atenção e a percepção de possibilidades externas. Resistir ao que escapa ao teu controle ou crença gera tensão e reforça o padrão físico da visão curta.

        Observar com consciência, aceitar perspectivas diferentes e relaxar o julgamento permite que o sistema visual — físico e cognitivo — se alinhe com novos padrões de informação. Em termos energéticos, a flexibilidade mental pode reduzir a resistência e melhorar a adaptação a situações complexas.
        `},
       {
        name: 'Músculos',
        description: `Os músculos refletem diretamente o padrão de energia mental e emocional.

        •	Flacidez muscular indica padrões de passividade, falta de motivação ou resistência interna à ação. O corpo reage à baixa energia mental transmitida pelo subconsciente.

        •	Tensão ou rigidez excessiva revela resistência, medo de mudança ou inflexibilidade emocional. Mesmo sem esforço físico, o corpo sinaliza conflito entre intenção consciente e desejos internos.

        Do ponto de vista quântico, cada pensamento repetido envia instruções ao corpo, moldando a expressão muscular e postural. Músculos fortes, flexíveis e equilibrados indicam congruência entre intenção mental, emoção e ação física.

        Praticar consciência corporal, alinhar pensamentos com desejos reais e adotar ação deliberada reprograma o campo energético, permitindo que músculos e corpo físico respondam de forma saudável, ágil e vital.

        MÚSCULOS DO PESCOÇO

        A dor no pescoço reflete rigidez mental e padrões de pensamento fixos. Quando te apegas a ideias imutáveis ou à necessidade de controlar situações externas, os músculos do pescoço tendem a contrair-se, criando tensão física.

        O perfeccionismo e a autocobrança reforçam este padrão: acordar com torcicolos muitas vezes não se deve à posição de dormir ou a um vento, mas à tensão acumulada.

        Do ponto de vista quântico, pensamentos repetidos moldam padrões neurais e enviam sinais de contração ao corpo. Reconhecer essas ideias e libertar a rigidez mental altera imediatamente a frequência energética, permitindo relaxamento muscular.

        Se sentires dor no pescoço, observa teus pensamentos recentes: houve conflitos, tentares controlar alguém ou agarrar-te a situações que já não servem? A dor é uma mensagem do corpo para reavaliar a tua postura mental e emocional.
        `},       
    ]    
  },
   {
    letter: 'N',
    count: 1,
    diseases: [
       {
        name: 'Nariz',
        description: `Problemas no nariz estão ligados à percepção do “eu” e à interação com o meio. Traços de egocentrismo, necessidade de reconhecimento ou resistência a opiniões externas podem gerar tensão nessa região.

        Distúrbios nasais — como rinite, pólipos ou hemorragias — indicam padrões energéticos de bloqueio, onde a circulação de atenção e foco para o mundo externo está comprometida. Do ponto de vista quântico, essas áreas refletem uma restrição na tua capacidade de absorver e processar experiências sociais e emocionais.

        Hemorragias nasais podem sinalizar sobrecarga emocional ou pedidos inconscientes de atenção. Observar a comunicação e praticar empatia ativa reduz o padrão de tensão e restaura fluxo energético no corpo.
        `},             
    ]
  },
   {
    letter: 'O',
    count: 8,
    diseases: [
       {
        name: 'Obesidade / Gordura',
        description: `O excesso de gordura corporal funciona, muitas vezes, como um casulo de proteção energética. Pessoas sensíveis ou que acumulam frustração, mágoa ou stress podem manifestar isso fisicamente como gordura localizada.

        Do ponto de vista quântico, pensamentos e emoções repetidos moldam padrões de energia e metabolismo. O corpo materializa a tendência de proteger-se ou criar barreiras diante de ameaças percebidas, mesmo que sejam emocionais.

        Para reverter esse padrão:

        •	Alinha pensamentos, intenções e ações com objetivos de saúde e bem-estar.
        •	Liberta expectativas irreais sobre os outros.
        •	Transforme energia emocional negativa em movimento físico: exercício, respiração consciente e ação intencional.

        O excesso de peso é tanto um reflexo de hábitos emocionais quanto físicos. Reprogramar o subconsciente, praticando foco em soluções e não problemas, altera a manifestação corporal.
        `},  
      {
        name: 'Ombros',
        description: `Os ombros refletem a forma como carregas responsabilidades e tensões externas. Inflamações, bursites ou dor nessa região indicam sobrecarga emocional, conflito com autoridade ou pressões não reconhecidas.

        Quando aceitas responsabilidades que não são tuas ou assumes culpa alheia, o corpo mantém músculos e articulações em estado de contração. Do ponto de vista quântico, isso significa que a energia mental e emocional está bloqueando o fluxo de ação e expressão natural.

        Revisar prioridades, redistribuir responsabilidades e manter limites claros realinha o campo energético, aliviando a tensão muscular e permitindo ação consciente e produtiva. Ombros fortes e alinhados indicam congruência entre intenção, ação e percepção de valor próprio.
        `},  
       {
        name: 'Olhos',
        description: `A visão reflete diretamente como processamos o mundo e as experiências emocionais. Limitações visuais muitas vezes indicam emoções, traumas ou resistências inconscientes a perceber certas situações. O subconsciente retém informações de forma literal; mesmo após perdoar ou racionalizar, padrões antigos podem persistir e afetar a percepção.

        Pensamentos repetidos e emoções não resolvidas alteram a atividade neural e a forma como o cérebro processa estímulos visuais. Ao criar segurança interna, reconhecer emoções e reduzir julgamentos e orgulho, o fluxo energético se reorganiza, permitindo enxergar com mais clareza.
        `},
       {
        name: 'Olhos Vermelhos',
        description: `Os olhos avermelhados podem surgir como um sinal físico de cansaço ou irritação, mas, numa leitura simbólica, também podem ser vistos como um reflexo de tensão interior diante daquilo que se observa no mundo à volta. É como se o olhar, sobrecarregado de estímulos e emoções não expressas, pedisse pausa e reconexão.

        Quando a realidade exterior contraria expectativas ou valores pessoais, a percepção pode tornar-se mais sensível, quase inflamada, tal como um campo energético em desequilíbrio. Não se trata de rejeitar o mundo, mas de compreender que cada encontro humano é um espelho parcial — ninguém vê exactamente o mesmo universo, ainda que partilhe o mesmo espaço.

        Aprender a aceitar momentos de recolhimento não é solidão vazia, mas intervalo fértil. O silêncio pode funcionar como um laboratório interior onde pensamentos assentam e emoções encontram forma. Tal como os olhos precisam de repouso para recuperar a nitidez, a consciência também necessita de pausas para reencontrar clareza.

        A irritação, muitas vezes, nasce do desgaste invisível. O cansaço acumula-se como poeira sobre uma lente, alterando as cores do que se vê. Quando se limpa essa lente — através da compreensão, da paciência e do autoconhecimento — o cenário não muda necessariamente, mas a forma de o observar transforma-se.

        Entrar em sintonia com os outros não significa concordar com tudo, mas reconhecer que cada pessoa carrega universos íntimos, crenças silenciosas e expectativas que raramente se revelam por completo. A empatia funciona como um ajuste fino da visão interior: amplia o campo de percepção e suaviza o contraste das diferenças.

        Dentro de cada ser existe uma reserva discreta de serenidade, como uma nascente subterrânea que continua a fluir mesmo quando a superfície parece árida. Ao libertar ressentimentos e reduzir a resistência, o olhar torna-se menos pesado e mais translúcido. O mundo deixa de ser apenas algo que se enfrenta e passa a ser algo que se contempla.

        Confiar no fluxo natural da vida é permitir que o tempo reorganize as experiências, tal como o corpo reorganiza a luz que entra pelos olhos. A felicidade não surge apenas como destino distante, mas como frequência que se sintoniza no presente — um estado que se activa quando o olhar deixa de lutar contra o cenário e começa a dialogar com ele.
        `},
       {
        name: 'Ossos',
        description: `Os ossos podem ser vistos, numa leitura simbólica, como a arquitectura silenciosa do ser — a estrutura que sustém o corpo tal como as convicções sustentam a personalidade. São a geometria interna que mantém a forma, o eixo invisível onde repousa o movimento. Quando se observa esta relação em linguagem metafórica, os ossos tornam-se imagem de firmeza interior, limites pessoais e capacidade de se manter de pé perante as forças externas.

        Conflitos com figuras de autoridade, responsabilidades não aceites ou tensões prolongadas podem ser entendidos, neste plano poético, como pressões que procuram expressão. Não como causa directa de manifestações físicas, mas como espelhos simbólicos: a “quebra” exterior a representar, em narrativa interior, a sensação de ruptura ou desalinhamento. O corpo não acusa; comunica em silêncio, como um livro escrito em células e sensações.

        Ossos fortes evocam estabilidade de identidade — não rigidez, mas consistência. Tal como uma ponte sólida precisa de flexibilidade para resistir ao vento, também a personalidade encontra força quando sabe adaptar-se sem perder a essência. A verdadeira firmeza não nasce do confronto constante, mas da clareza tranquila de quem conhece o próprio valor e dialoga sem necessidade de imposição.

        A flexibilidade é a alquimia discreta entre ceder e afirmar. Quando a mente aceita que outras perspectivas podem ampliar o horizonte, a estrutura interior deixa de ser muro e transforma-se em coluna: sustém sem aprisionar. O equilíbrio entre humildade e autonomia cria uma ressonância harmoniosa, como se cada decisão fosse um ponto de apoio num campo maior de possibilidades.

        Cuidar do espaço, das palavras e das atitudes é também cuidar da própria estrutura energética. A serenidade actua como um alinhamento invisível, semelhante a um eixo que se ajusta para que o movimento flua com menor atrito. Quando a pessoa se sente em paz com as próprias escolhas, a postura — física e interior — tende a reflectir confiança e estabilidade.
        `},
       {
        name: 'Ossos Deformados',
        description: `Nesta mesma linguagem simbólica, deformações podem ser vistas como metáforas de pressões acumuladas ou adaptações prolongadas a ambientes pouco flexíveis. Não como destino inevitável, mas como imagem de uma energia que, ao longo do tempo, se moldou em resposta às circunstâncias. Tal como um metal aquece e se curva, a experiência humana também deixa marcas subtis na forma como alguém se percebe e se posiciona no mundo.

        O apego excessivo à segurança pode criar resistência à mudança, enquanto a abertura gradual permite novas configurações de identidade. A transformação não ocorre por negação do passado, mas por integração consciente — como quem redesenha uma rota sem destruir o mapa anterior. A mente, quando se liberta do medo constante, devolve leveza à percepção e espaço ao crescimento.

        A natureza oferece um ritmo próprio de reorganização. Nada se altera de forma instantânea; tudo se ajusta em ciclos, tal como as marés que nunca são iguais e, ainda assim, obedecem a um padrão invisível. Confiar nesse fluxo é permitir que a estrutura interior encontre novas formas de se sustentar sem perder a integridade.

        Pensamentos funcionam como forças subtis de orientação. Não são martelos que moldam a matéria, mas bússolas que influenciam direcções. Quando a consciência observa os próprios hábitos, ambientes e relações, começa a perceber que cada escolha é um pequeno vector num vasto campo de probabilidades. Libertar-se do medo da mudança é, em essência, ajustar o esqueleto invisível das crenças — e quando isso acontece, o corpo simbólico ganha espaço para respirar.
        `},
       {
        name: 'Osteoporose',
        description: `A osteoporose, no plano físico, está relacionada com a diminuição da densidade óssea e envolve factores biológicos, hormonais e nutricionais bem conhecidos. Numa leitura simbólica — poética, não literal — pode ser entendida como imagem de perda de sustentação interior ou de desgaste prolongado da vitalidade emocional. Não como causa directa, mas como metáfora de um estado em que a pessoa sente que o chão interno se tornou menos firme.

        Quando a mente permanece demasiado tempo sob tensão ou desalento, a percepção da vida pode estreitar-se, como se o horizonte encolhesse. A consciência perde agilidade para se reinventar e o futuro parece pesado antes mesmo de acontecer. Neste enquadramento simbólico, abrir espaço para novas experiências funciona como arejar uma casa antiga: o ar não muda as paredes, mas transforma a atmosfera.

        Práticas de silêncio interior — meditação, respiração consciente, contemplação — actuam como pausas regeneradoras. Não são fórmulas mágicas, mas momentos em que o ruído mental abranda e a atenção regressa ao corpo. A natureza, com o seu ritmo cíclico, recorda que tudo se reorganiza com o tempo: ossos, pensamentos, estações. A transformação não é um salto brusco, é uma sucessão de pequenos realinhamentos quase invisíveis.
        `},
       {
        name: 'Ouvidos',
        description: `Os ouvidos, mais do que órgãos de audição, podem ser vistos simbolicamente como portais de relação com o mundo. Escutar é permitir que algo entre; é um acto de abertura. Quando alguém se sente constantemente invadido por críticas, ruído emocional ou palavras que ferem, pode surgir a sensação íntima de saturação — como um campo sonoro que perdeu harmonia.

        Nesta leitura metafórica, a dificuldade em “ouvir” representa por vezes o desejo profundo de silêncio, de fronteiras mais claras, de recuperação do espaço pessoal. Não significa que a mente provoque directamente alterações físicas, mas que o corpo e a emoção dialogam de forma subtil, como instrumentos numa mesma orquestra. Quando um toca em excesso, o outro tenta compensar.

        Restabelecer equilíbrio passa muitas vezes por ajustar o volume interior: escolher melhor o que se escuta, criar intervalos de quietude, expressar limites com serenidade. O som não é apenas vibração externa; é também interpretação interna. Ao transformar a forma como se recebe o mundo sonoro — com mais consciência e menos reacção automática — o ouvido simbólico volta a abrir-se, não por obrigação, mas por escolha.

        Escutar, no fundo, é um acto quântico no sentido mais poético da palavra: o observador altera a experiência ao modo como observa. O mesmo som pode ser ruído ou música dependendo do estado de quem o recebe. Quando a atenção se afina, o mundo não fica mais silencioso — torna-se mais compreensível, como se cada frequência encontrasse finalmente o seu lugar no vasto concerto da experiência humana.
        
        Observação
        Antes de mais, aprenda a perdoar. Independentemente de quem o magoou — pai, mãe, companheiro, chefe ou qualquer outra pessoa —, escolha libertar-se. O perdão verdadeiro dissolve o conflito e cria espaço para que o coração e o corpo recuperem harmonia. Partilhar, com serenidade, uma parte da sua razão com quem o magoou não é submissão, mas integração da experiência. Quando o conflito se dissipa do coração, a energia do corpo circula com mais liberdade.
        `},     
       ] 
  },
   {
    letter: 'P',
    count: 6,
    diseases: [
      {
        name: 'Pele',
        description: `A pele é a fronteira entre o mundo interior e exterior, um manto que protege a nossa individualidade. Alterações na pele — manchas, erupções, sensibilidade excessiva — podem refletir dificuldades em estabelecer limites ou sobrecarga emocional. Aprender a cuidar da pele simbolicamente é também aprender a cuidar da própria energia, definindo onde termina o eu e começa o mundo. A atenção e a gentileza consigo mesmo suavizam a percepção e fortalecem a própria proteção.
        `},  
      {
        name: 'Pâncreas',
        description: `O pâncreas desempenha uma função dupla vital: digere e transforma, regula e mantém o equilíbrio interno. Psicossomaticamente, quando a vida parece sem doçura, este órgão revela a dificuldade de metabolizar experiências “ácidas” e manter pensamentos doces. A pancreatite ou a diabetes podem simbolizar frustração acumulada, sensação de impotência ou crença de que os objetivos são inalcançáveis.

        O caminho simbólico para restaurar o equilíbrio passa por: observar o que incomoda, analisar os acontecimentos de forma clara e agir com perseverança, transformando decepções em aprendizagem. A confiança no próprio esforço e a paciência diante das dificuldades ajudam a reconectar a doçura da vida, tanto interna como externamente.
        `},
      {
        name: 'Papeira',
        description: `A papeira indica sensibilidade extrema às críticas e tendência a sentir-se um estorvo ou vítima. Psicossomaticamente, sugere que a pessoa evita expressar-se plenamente por medo do julgamento alheio. A transformação acontece ao assumir responsabilidade sobre a própria vida: falar com clareza, agir com confiança, manter a postura erguida e os passos firmes.

        A escuta atenta, seguida de resposta ponderada, fortalece a personalidade e permite que a expressão individual se alinhe à própria essência. Quem se coloca assim no mundo aprende a viver coerentemente com a sua natureza, sem se envergonhar de manifestar ideias ou desejos, abrindo caminho para crescimento pessoal e evolução.
        `}, 
      {
        name: 'Pulsos',
        description: `Os pulsos representam, simbolicamente, a nossa relação com frustração e pressão interna. A dor surge quando, apesar de sentirmos confiança nas nossas capacidades ou experiências, enfrentamos situações em que nos sentimos encurralados ou sem saída. É um reflexo das expectativas não cumpridas e do desejo interior de “acertar sempre”, um peso silencioso sobre a nossa energia.

        Para aliviar estas tensões, é necessário acolher as mudanças que a vida propõe, sem que o ego impeça a adaptação. Os erros deixam de ser falhas quando se tornam lições; tornam-se pontes que fortalecem a nossa resiliência. Observar o percurso, analisar riscos e benefícios, e expressar sentimentos de forma consciente ajuda a restaurar a harmonia.

        Cultivar flexibilidade, gratidão e tranquilidade fortalece os pulsos — e, simbolicamente, a capacidade de lidar com frustrações e desafios, permitindo que a energia flua livremente pelo corpo e pela consciência.
        `}, 
      {
        name: 'Pernas',
        description: `As pernas são, no plano físico e simbólico, os nossos pilares de movimento e caminho. Problemas nesta área podem refletir bloqueios internos ou conflitos que dificultam avançar na vida.

        •	Coxas (parte superior): Ligadas ao passado, guardam traumas, mágoas e memórias que ainda influenciam decisões presentes. Dores ou lesões nesta região indicam emoções antigas não resolvidas, que pedem atenção e aceitação.
        •	Pernas (parte inferior): Ligadas ao futuro, representam ação e movimento. Medo do desconhecido, insegurança ou ansiedade sobre o que está por vir podem manifestar-se em dores, entorses ou desequilíbrios.
        •	Lado direito: Conflitos ou desafios relacionados com mulheres.
        •	Lado esquerdo: Conflitos ou desafios relacionados com homens.

        Ferimentos ou tensões nas pernas funcionam como alertas do inconsciente: indicam onde a nossa liberdade de ação ou progresso está bloqueada. Para restaurar harmonia e movimento, é essencial:

        1.	Reconhecer e aceitar os próprios sentimentos.
        2.	Tomar decisões conscientes sobre o caminho a seguir.
        3.	Enfrentar medos sem depender excessivamente de apoio externo.
        4.	Agir com coragem, mesmo diante da insegurança sobre o futuro.

        Quando se trabalha estas emoções, o corpo e a mente reencontram ritmo e estabilidade, permitindo avançar com segurança, clareza e determinação, como se cada passo refletisse a integração entre experiência, coragem e presença consciente.
        `}, 
      {
        name: 'Presbiopia e Arteriosclerose',
        description: `A presbiopia manifesta-se com o avançar do tempo, quando o olhar físico começa a perder a facilidade de focar o que está próximo, como se a lente interior se tornasse menos flexível. É frequentemente associada à idade, mas, num plano mais subtil, pode simbolizar uma consciência que se projecta demasiado para a frente, inquieta com o que ainda não aconteceu, afastando-se do instante presente onde a vida realmente pulsa.

        A dificuldade em ver ao perto pode espelhar uma mente absorvida por antecipações, tal como o viajante que, ao entardecer, em vez de contemplar a paisagem que o envolve, se angustia com a distância que ainda falta percorrer. Quando o pensamento se fixa apenas no que virá, o agora perde nitidez, como um objecto que se afasta do campo de visão.

        Existe também uma dimensão de rigidez interior — não como julgamento, mas como convite à flexibilidade. Tal como o cristalino precisa de elasticidade para ajustar o foco, a mente beneficia de abertura para acolher novas perspectivas, ideias e experiências. A vida, quando observada com curiosidade em vez de resistência, mantém uma juventude silenciosa que não depende apenas dos anos, mas da forma como se sente o tempo a passar.

        Nesta leitura simbólica, o corpo torna-se espelho de estados internos. O endurecimento das estruturas físicas pode ser visto como metáfora de um endurecimento emocional ou mental, enquanto a suavidade e a adaptabilidade recordam a importância de fluir com os ciclos naturais. Não se trata de culpa nem de causa directa, mas de correspondências poéticas entre interior e exterior — como se o organismo fosse um mapa vivo das nossas paisagens invisíveis.

        Viver o presente com atenção é como ajustar o foco da consciência. Cada momento contém detalhes subtis, partículas de experiência que só se revelam quando realmente observadas. Libertar o peso do passado e reduzir o medo do futuro não é ignorar o tempo, mas habitá-lo com mais inteireza.

        Sentir-se parte da natureza é reconhecer que envelhecer não significa perder luz, mas transformar-se. O olhar, quando se volta para o mundo com serenidade, descobre que o futuro é apenas uma extensão das escolhas e crenças cultivadas agora. Pensamentos tornam-se sementes; atitudes, terreno fértil. E a visão — física ou interior — expande-se quando o ser se permite observar a vida com confiança, leveza e presença.
        `},              
    ]
  },
   {
    letter: 'R',
    count: 5,
    diseases: [
        {
        name: 'Rejuvenescimento',
        description: `O rejuvenescimento começa na forma como percebemos o tempo. Quando deixamos de nos preocupar com cada mês ou cada ano, as nossas células continuam a reproduzir-se naturalmente, mantendo a energia vital. Mas, quando vivemos contabilizando o tempo, tudo parece gerar cansaço e fragilidade, projetando para o corpo físico aquilo em que acreditamos.

        A velhice, tal como o tempo, é uma construção da mente. O ser humano criou referências para compreender ciclos naturais — o movimento das estrelas, a alternância da noite e do dia — transformando observação em conceito, e conceito em normas sociais. Tempo e espaço não são realidades materiais absolutas, mas produtos da consciência. Quando nos aprisionamos a eles, a energia interior começa a enfraquecer, e o corpo reflete o peso de crenças limitantes.

        A mente governa as células e influencia o fluxo da vitalidade. Quando a psicologia se cansa da luta ou teme o tempo a passar, as células parecem perder força. Libertar-se dessas ilusões significa perceber que o presente é a única dimensão onde a vida realmente se manifesta.
        `},  
      {
        name: 'Rins',
        description: `Os rins funcionam, simbolicamente, como filtros das emoções relacionadas com o futuro. Quem se sente inseguro e teme naufragar nas correntes da vida pode experienciar dores, tensões ou inflamações nesta região. O medo e a ansiedade acumulados retêm água, energia vital, e moldam experiências externas de forma simbólica.

        Se acredita nas “pedras do caminho”, pode criar obstáculos internos que se refletem fisicamente. Quando sentimos que fomos prejudicados ou injustiçados, esquecemos que os outros também se defendem conforme a própria percepção de mundo. A nossa tensão mental e emocional atrai, muitas vezes, exatamente aquilo que mais tememos, mesmo quando parece que tudo está calmo.

        O caminho para restaurar equilíbrio envolve:

        •	Transformar pensamentos tensos em atitudes positivas e construtivas;
        •	Observar comportamentos diários e reduzir lamentações e queixas;
        •	Libertar-se de pessoas ou situações que alimentam negatividade, ou ajudá-las a transformar a própria consciência;
        •	Confiar na vida e aceitar que o futuro se constrói a partir do presente, sem antecipar sofrimento ou dependência de reconhecimento externo.

        Ao cuidar da mente e das emoções, os rins simbolicamente recuperam equilíbrio. A coragem de seguir os sonhos, sem medo do julgamento alheio, permite que a energia flua livre, reforçando vitalidade, confiança e alegria de viver.
        `},    
        {
        name: 'Rosto Inflamado',
        description: `O rosto é o espelho subtil do que sentimos e pensamos sobre o mundo à nossa volta. Inflamações, manchas ou espinhas podem surgir como reflexo de insatisfação, raiva ou mágoa, especialmente quando sentimos bloqueio ou limitação impostos por pessoas de autoridade. Cada tensão emocional acumulada deixa marcas visíveis, e o rosto traduz o ambiente interior de forma silenciosa.

        Quando cultivamos pensamentos de compreensão, empatia e apreciação pelo comportamento alheio, mesmo diante de dificuldades, o rosto irradia suavidade, juventude e harmonia. As manifestações físicas — inclusive acidentes — tendem a ser moduladas pela energia emocional que nutrimos. O cuidado com a mente e com os sentimentos é, portanto, um cuidado direto com a expressão facial.
        `},
        {
        name: 'Rugas',
        description: `As rugas são histórias gravadas na pele: cada linha reflete uma crença, uma tensão ou um padrão emocional prolongado. Quanto mais nos fixamos no cansaço da vida ou no envelhecimento do mundo à nossa volta, mais marcas se formam. A beleza, no entanto, nasce da paz interior; a serenidade da alma projeta-se na pele e suaviza traços.

        Emoções pesadas tensam os músculos do rosto sem que percebamos, criando linhas que só desaparecem com intervenção externa. A prática de suavizar sentimentos, cultivar amor profundo por pessoas, animais e natureza, e aprender a não transformar cada problema numa tragédia, fortalece a vitalidade do rosto e prolonga a aparência jovem.

        A forma como vemos o mundo é decisiva: o mesmo acontecimento pode gerar desespero em uns e indiferença ou aprendizado em outros, conforme as imagens internas que criamos. Aprender a olhar com inocência e curiosidade — como uma criança ou como Jesus contemplando a beleza mesmo na decomposição — permite projetar no rosto leveza, alegria e harmonia.

        Ser adulto não implica endurecer o coração. A capacidade de encarar a vida com novos olhos, de ver beleza nas pequenas coisas e de responder ao mundo com sensibilidade equilibrada é um dom que mantém a expressão jovem, serena e conectada com a energia da vida.
        `},  
        {
        name: 'Reumatismo no Sangue',
        description: `O reumatismo no sangue simboliza tristeza profunda, frustração e ressentimentos acumulados. Surge de amarguras por falta de amor, por sentimentos de injustiça ou pela incapacidade de reagir alegremente às situações da vida. A cura começa ao reconhecer que o amor e a alegria são escolhas que se expandem para o ambiente ao nosso redor.

        Quando um filho apresenta este sintoma, pode refletir emoções não expressas pelos pais, como insegurança ou sentimento de inferioridade. Muitas vezes, a pessoa reprime desejos e necessidades afetivas, assumindo o papel de vítima.

        O caminho para equilíbrio inclui:

        •	Expressar sentimentos e necessidades com clareza;
        •	Assumir responsabilidade pela própria felicidade, sem culpa ou autoacusação;
        •	Compreender a origem de medos ou padrões reprimidos, incluindo traumas do passado;
        •	Desejar alegria e bem-estar em todos os lugares onde se encontra.

        Ao agir assim, o coração transforma-se de um poço de ressentimentos num reservatório de amor e vitalidade. A vida responde com saúde, relacionamentos sinceros e presença genuína daqueles que valorizam a sua energia positiva.
        `}, 
    ]
  },
   {
    letter: 'S',
    count: 4,
    diseases: [
        {
        name: 'Sacro',
        description: `O sacro simboliza a nossa relação com mudanças, hierarquia e poder pessoal. Problemas nesta região podem indicar dificuldade em aceitar transformações, perda de controlo sobre situações ou apego ao passado. Pessoas que resistem às novidades, teimosamente agarradas às velhas ideias, criam desestruturação emocional.

        O mundo está em constante renovação, material e espiritual. A aceitação de novas ideias não significa abandonar princípios, mas aperfeiçoar a própria visão de vida. Soltar-se sem medo de perder controlo é permitir que os outros sigam o seu caminho, aprendendo e crescendo. Ao relaxar e viver a sua vida com intensidade consciente, aumenta o poder sobre si mesmo e fortalece a autonomia interior.
        `},  
      {
        name: 'Sangue - Problemas Vários',
        description: `O sangue é o fluxo da vida e simboliza alegria e vitalidade. Problemas como hemorragias podem refletir a perda de prazer ou satisfação. Quem vive contrariado, insatisfeito ou se anula para contornar imposições alheias, experimenta o desvanecer da alegria, que se manifesta física e simbolicamente no corpo.

        Para restaurar o fluxo vital:

        •	Expresse as suas emoções e afirme a própria autenticidade;
        •	Realize pequenas ações que lhe tragam prazer diário;
        •	Sorria genuinamente para si mesmo e para os outros;
        •	Construa relações com pessoas que apreciem o seu jeito de ser.

        Persistir em tentar mudar os outros ou depender do reconhecimento alheio conduz a frustração. Aceite com amor e doçura o que não pode controlar, aprendendo a focar na sua felicidade. Cada problema é oportunidade de aprendizado e autotransformação — tudo o que nos acontece é, de algum modo, atraído pelas nossas próprias crenças e padrões emocionais.
        `},  
       {
        name: 'Sinusite / Rinite',
        description: `A sinusite é um sinal de irritação mental e emocional, geralmente causada por alguém próximo que invade o seu espaço ou desafia a sua autonomia. Está ligada à rebeldia ou resistência mental, muitas vezes direcionada a figuras de autoridade, como pais, patrões ou outros superiores.

        O nariz, símbolo de sensibilidade e intuição, reflete a capacidade de aceitar ou recusar situações e pessoas. Para curar a sinusite de forma definitiva, é necessário trabalhar a mente:

        •	Reconhecer e valorizar o que recebeu de experiências passadas;
        •	Aceitar com humildade as diferenças de opinião;
        •	Tornar a mente dócil e receptiva, acolhendo conselhos ou orientações sem resistência;
        •	Colocar em prática o conhecimento em benefício próprio e dos outros;
        •	Admitir erros e limitações, cultivando aprendizado contínuo.

        A sinusite é, portanto, mais do que uma inflamação física: é o reflexo da mente e do ego. Liberando resistência, preconceitos e orgulho, a respiração flui com facilidade e a paz interior é restaurada.
        `},     
        {
        name: 'SIDA  / AIDS',
        description: `A SIDA, embora considerada incurável pela medicina convencional, pode ser entendida como uma doença de autopunição. Reflete uma pessoa que perdeu o amor-próprio e o respeito por si mesma, incapaz de reconhecer o seu valor, descontente com tudo e todos, insatisfeita profissional ou afetivamente, vivendo uma existência sem atenção a si própria. Esta condição simboliza a sensação de que a vida perdeu o sentido.

        Muitas vezes, a pessoa recorre a comportamentos autodestrutivos — dormir pouco, usar drogas ou envolver-se em futilidades — tentando, inconscientemente, encontrar amor ou propósito através da rebeldia. A Natureza é harmoniosa e amorosa; para restaurar a saúde, é essencial reconectar-se consigo mesma e com o Universo, acolhendo a paz e afastando influências negativas.

        A cura está ligada a atitudes concretas: amar-se, agir com segurança, cultivar pensamentos positivos, ajudar outras pessoas e perdoar-se. A sexualidade deve ser uma fonte de alegria e troca positiva, nunca de punição. O poder curativo da energia vital flui naturalmente pelo corpo; para utilizá-lo, é necessário otimismo, dinamismo e convicção.

        Sugestões práticas incluem: buscar apoio de profissionais de desenvolvimento pessoal, neurolinguistas ou terapeutas, ler histórias de superação e conectar-se com pessoas positivas. A SIDA surge como alerta: não para destruir, mas para ensinar a corrigir comportamentos e escolhas de vida. Planeie o futuro, crie um ambiente saudável à sua volta e descubra as maravilhas da vida.
        `},       
    ]
  },
   {
    letter: 'T',
    count: 7,
    diseases: [
    {
        name: 'Tumefação e Inchaço na Região Acima dos Olhos',
        description: `O inchaço na zona superior do olhar pode ser observado, num plano simbólico, como um convite à introspecção sobre tensões internas relacionadas com autoridade, responsabilidade ou expectativas externas. A parte superior da cabeça, onde repousa o olhar que se eleva, pode ser vista como território metafórico das figuras que, de algum modo, ocupam lugares de influência na nossa vida — não apenas pessoas, mas também ideias, crenças e padrões que consideramos “acima” de nós.

        Quando existe resistência constante ou conflito silencioso perante essas presenças, o campo emocional tende a acumular peso, tal como nuvens densas antes de uma chuva libertadora. O corpo, nessa leitura poética, torna-se um mensageiro subtil, revelando onde a energia encontra rigidez em vez de fluxo. Não se trata de culpa nem de causalidade directa, mas de correspondência simbólica entre o que se sente e o que se manifesta.

        Questionar a própria posição perante os outros pode ser um exercício de alinhamento interior. Nem submissão, nem imposição — apenas equilíbrio. A flexibilidade emocional funciona como a elasticidade de uma lente: quanto mais maleável, maior a capacidade de ajustar o foco às diferentes realidades. Quando a teimosia se dissolve em compreensão, o olhar adquire leveza, quase como o de uma criança que observa o mundo sem filtros pesados.

        Um semblante inchado ou sombrio pode também sugerir cansaço emocional acumulado, tensões de relacionamento ou excesso de pensamentos não expressos. O rosto, nesse sentido, torna-se um espelho atmosférico do clima interior. Tal como o céu muda após a tempestade, a expressão transforma-se quando a emoção encontra espaço para se reorganizar.
        `},  
      {
        name: 'Tumefação na Extremidade do Olho',
        description: `Na linguagem simbólica da fisiognomia — uma tradição antiga que procura ler significados nas feições humanas — a extremidade do olho representa os vínculos afectivos e as dinâmicas de intimidade. Mais do que interpretações literais, trata-se de metáforas visuais sobre como as relações influenciam o modo como vemos e somos vistos.

        Quando surge algum sinal nessa zona, pode ser entendido como um convite à harmonização dos laços emocionais, ao diálogo e à clareza afectiva. Não como destino inscrito no rosto, mas como poesia corporal: o organismo a recordar que ver o outro com nitidez começa, muitas vezes, por ajustar o foco dentro de si.
        `},     
       {
        name: 'Terçol',
        description: `O terçol indica raiva contida ou insatisfação com determinada situação. Muitas vezes surge quando se realiza algo que contraria os nossos desejos ou valores, mesmo que parecesse já resolvido. Evite guardar ressentimentos; as pessoas pensam e sentem de formas diferentes, e compreender estas diferenças é essencial. Utilize o seu livre-arbítrio: ele é responsável por todas as experiências da sua vida. Alegre-se por poder escolher o que o faz feliz e transformar a sua realidade interna.
        `}, 
       {
        name: 'Tireóide',
        description: `Problemas na tireóide refletem um estado psicológico de baixa autoestima, sensação de humilhação e perda de otimismo. A pessoa acredita não poder atingir a felicidade, nem realizar os seus desejos. A chave para a cura está na imaginação e na criação consciente: visualize-se a realizar o que mais ama e permita que essas sensações preencham o seu coração.

        Lembre-se: ninguém pode retirar-lhe os seus pensamentos; somos livres desde o nascimento. Muitas vezes, tolhemos o nosso potencial por falta de prática em viver conscientemente. Para equilibrar a tireóide:

        •	Cultive uma fisionomia alegre e positiva;
        •	Pratique exercícios respiratórios, que fortalecem as glândulas;
        •	Reconheça e transforme emoções negativas em aprendizado;
        •	Permita que as coisas fluam naturalmente, fazendo o que o coração mandar;
        •	Respeite-se e assuma-se como filho da Inteligência Superior, cultivando pensamentos nobres e saudáveis.
        `},   
       {
        name: 'Tornozelos',
        description: `Problemas nos tornozelos refletem dificuldade em avançar na vida com convicção. Entorses ou ligamentos rompidos surgem quando há bloqueio emocional ou resistência em agir. Tornozelos inchados indicam que pensamentos e decisões estão retidos por medo ou ira.

        Para restaurar a harmonia:

        •	Adote atitudes naturais e flexíveis;
        •	Expresse sentimentos reprimidos com clareza;
        •	Encontre equilíbrio nas relações e nos caminhos que escolhe seguir.
        `}, 
       {
        name: 'Tosse',
        description: `A tosse simboliza raiva ou frustração que “não sai da garganta”. Surge quando se vive uma situação injusta ou quando alguém provoca irritação constante, mas não se pode expressar abertamente. Pigarros e tosses incessantes refletem tensão emocional reprimida.

        Práticas de libertação emocional incluem:

        •	Relaxar e respirar profundamente;
        •	Analisar calmamente a situação;
        •	Expressar pensamentos e emoções sem medo;
        •	Chorar ou falar quando necessário, libertando o corpo e a mente de tensões acumuladas.
        `}, 
       {
        name: 'Tuberculose',
        description: `A tuberculose revela uma mente sobrecarregada por preocupações e angústias, que se acumulam no peito e enfraquecem o corpo. Representa excesso de responsabilidade, tentativa de controlar tudo sozinho e crença de que o homem nasceu para sofrer.

        Para restaurar equilíbrio:

        •	Acredite na bondade e justiça de quem o criou;
        •	Espiritualize os pensamentos, procurando dissolver crenças limitantes;
        •	Use o livre-arbítrio para corrigir a sua conduta, e não a dos outros;
        •	Desenvolva humildade e flexibilidade emocional, que são a solução para a maioria dos conflitos;
        •	As mães influenciam profundamente os filhos até aos sete anos, e os pais dos sete aos catorze: cuide dos seus pensamentos para não transferir angústias ou medos;
        •	Trabalhe com consciência para promover saúde própria e familiar.
        `},     
    ]
  },
   {
    letter: 'U',
    count: 3,
    diseases: [
      {
        name: 'Úlcera',
        description: `Surge de medos e inseguranças enraizados no inconsciente, muitas vezes originados na infância. Representa a resistência a confiar na vida e na própria capacidade. Para curar: pratique afirmações positivas diárias, cultive gratidão pelas coisas simples, harmonize-se antes de comer e liberte ressentimentos. Aceitar erros e abrir-se para novas experiências permite que a energia vital flua, promovendo cura e equilíbrio.
        `},  
      {
        name: 'Unhas',
        description: `As unhas simbolizam proteção e segurança. Roer unhas ou ter unhas encravadas reflete ressentimentos profundos, ansiedade e medo de não ser compreendido ou protegido. Para equilibrar: reconheça e liberte sentimentos de raiva ou mágoa, aceite seu espaço pessoal, confie na sua capacidade e pratique momentos de silêncio e introspeção para fortalecer a paz interior e a segurança emocional.
        `},   
      {
        name: 'Útero',
        description: `Representa criatividade, expressão da feminilidade e relações conjugais. Dores, nódulos, cistos ou atrasos menstruais indicam repressão, mágoas e ressentimentos, especialmente no relacionamento com o parceiro. Para equilibrar: liberte-se da raiva e mágoas acumuladas, perdoe, permita-se criar e expressar-se livremente. Honre os seus desejos e a sua feminilidade, usando a criatividade como canal de cura e conexão com a energia vital.
        `},         
    ]
  },
   {
    letter: 'V',
    count: 8,
    diseases: [
      {
        name: 'Vaginite',
        description: `Relaciona-se com o amor e a intimidade. Reflete raiva, ressentimento ou insatisfação com o parceiro, ciúmes ou carência afetiva. Muitas vezes a inflamação é uma somatização de conflitos internos e não da higiene ou sexo. Para equilibrar: respire fundo, reflita sobre os seus sentimentos, ame-se acima de tudo, cultive gratidão e harmonia, e liberte mágoas. Fidelidade e carinho são frutos de mentes e corações alinhados, e não obrigações impostas.
        `},  
      {
        name: 'Varizes',
        description: `Simbolizam bloqueios no fluxo vital devido à sobrecarga, frustração ou insatisfação prolongada. Podem surgir quando a pessoa se sente obrigada a permanecer em situações ou lugares que não deseja, provocando raiva e ressentimento. Para equilibrar: liberte-se da culpa, aceite mudanças, confie na vida, escute o seu coração e planeie o futuro com alegria. Varizes são sinais de que é hora de reorganizar pensamentos e ações.
        `}, 
       {
        name: 'Vértebras Cervicais',
        description: `Representam suporte, clareza e flexibilidade mental. Problemas refletem sobrecarga, confusão, medo do ridículo, indecisão ou excesso de responsabilidades. Para equilibrar: seja flexível consigo mesmo, aceite limites e liberte-se do peso de “carregar” problemas alheios.
        `},
       {
        name: 'Vértebras Torácicas',
        description: `Relacionam-se com contrariedades e conflitos internos. Problemas aqui indicam culpa, medo de fracassar, resistência ao amor, sentimentos de inferioridade ou dificuldade em assumir responsabilidades. Para equilibrar: reflita sobre os seus desejos, aceite a imperfeição e liberte ressentimentos.
        `},
       {
        name: 'Vértebras Lombares',
        description: `Ligadas à indecisão, conflitos emocionais e questões financeiras. Problemas refletem resistência a mudanças, raiva consigo mesmo ou bloqueios sexuais e sentimentais. Para equilibrar: aceite a sua individualidade, liberte raiva e cultive confiança nas suas escolhas.
        `},    
       {
        name: 'Verrugas',
        description: `Simbolizam ódio acumulado e desconfiança em relação ao ambiente ou às pessoas. O seu significado depende da localização, indicando áreas de conflito, mágoa ou repressão emocional. Para equilibrar: substitua pensamentos negativos por amor, perdão e gratidão; liberte mágoas antigas e permita que a energia flua livremente.
        `},
       {
        name: 'Vírus, Bactérias e Vermes',
        description: `São influenciados pelo desequilíbrio energético. Radiações emitidas pelo corpo (segundo Gurvich) podem afetar organismos vivos. Para prevenir problemas: mantenha harmonia interior, pensamentos positivos e energia vital equilibrada; o que atrai vibrações negativas são emoções e crenças autodestrutivas.
        `},
       {
        name: 'Vesícula Biliar',
        description: `Regula a digestão e reflete equilíbrio emocional. Problemas surgem com raiva, ressentimentos ou sobrecarga perante autoridade, trabalho ou relações pessoais. Comer em excesso ou alimentos muito gordurosos pode agravar a situação, mas a raiz é emocional. Para equilibrar: liberte tensões, distribua responsabilidades, pratique gratidão, cuide de si com prazer e alegria, e aceite a cooperação dos outros.
        `},     
    ]
  },
];

export default function DiseasesAlphabetGrid() {
  const [selectedLetter, setSelectedLetter] = useState<LetterGroup | null>(null);
  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null);

  const openLetterModal = (letterGroup: LetterGroup) => {
    setSelectedLetter(letterGroup);
  };

  const closeLetterModal = () => {
    setSelectedLetter(null);
    setSelectedDisease(null);
  };

  const openDiseaseModal = (disease: Disease) => {
    setSelectedDisease(disease);
  };

  const closeDiseaseModal = () => {
    setSelectedDisease(null);
  };

  return (
    <div className="w-full py-12">
      {/* Título */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[#C8935F] to-[#E0A878] bg-clip-text text-transparent">
        Lista de Doenças
      </h2>

      {/* Grid de Letras */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mx-auto px-4">
        {diseasesData.map((letterGroup) => (
          <motion.button
            key={letterGroup.letter}
            onClick={() => openLetterModal(letterGroup)}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-[#E0A878] to-[#C8935F] rounded-2xl p-2 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              {/* Círculo com a Letra */}
              <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-[#C8935F]">
                  {letterGroup.letter}
                </span>
              </div>

              {/* Info */}
              <div className="text-left flex-1">
                <p className="text-white font-bold text-sm sm:text-lg">
                  {letterGroup.count} doença{letterGroup.count !== 1 ? 's' : ''}
                </p>
                <p className="text-white/80 text-sm">
                  Clique para ver mais
                </p>
              </div>

              {/* Seta */}
              <ChevronRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors hidden sm:block" />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Modal 1: Lista de Doenças da Letra */}
      <AnimatePresence>
        {selectedLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeLetterModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-hidden"
            >
              {/* Header do Modal */}
              <div className="bg-gradient-to-r from-[#C8935F] to-[#E0A878] p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#C8935F]">
                      {selectedLetter.letter}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Doenças com {selectedLetter.letter}
                    </h3>
                    <p className="text-white/80">
                      {selectedLetter.count} doença{selectedLetter.count !== 1 ? 's' : ''} encontrada{selectedLetter.count !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeLetterModal}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Lista de Doenças */}
              <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)]">
                {selectedLetter.diseases.length > 0 ? (
                  <div className="space-y-3">
                    {selectedLetter.diseases.map((disease, index) => (
                      <motion.button
                        key={index}
                        onClick={() => openDiseaseModal(disease)}
                        whileHover={{ x: 5 }}
                        className="w-full bg-gradient-to-r from-gray-50 to-gray-100 hover:from-[#C8935F]/10 hover:to-[#E0A878]/10 rounded-xl p-4 flex items-center justify-between group transition-all duration-300 border border-gray-200 hover:border-[#C8935F]/30"
                      >
                        <span className="text-left font-medium text-gray-800 group-hover:text-[#C8935F] transition-colors">
                          {disease.name}
                        </span>
                        <div className="flex items-center gap-2 text-[#C8935F]">
                          <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                            Ver detalhes
                          </span>
                          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <p className="text-lg">Em breve, mais informações sobre doenças com a letra {selectedLetter.letter}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal 2: Detalhes da Doença */}
      <AnimatePresence>
        {selectedDisease && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
            onClick={closeDiseaseModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
            >
              {/* Header do Modal de Detalhes */}
              <div className="bg-gradient-to-r from-[#C8935F] to-[#E0A878] p-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">
                  {selectedDisease.name}
                </h3>
                <button
                  onClick={closeDiseaseModal}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Conteúdo */}
              <div className="p-8 overflow-y-auto max-h-[calc(80vh-120px)]">
                <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                  {selectedDisease.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

