export interface Plant {
  id: string
  name: string
  scientificName: string
  family: string
  image: string
  references?: string[]
  description: string
  habitat: string
  origin?: string
  cultivation?: string
  medicinalUses?: string
  culinaryUses?: string
  partsUsed?: string
  howToUse?: string
  toxicity?: string
  contraindications?: string
  characteristics: string[]
  uses: string[]
  care?: {
    light: string
    water: string
    soil: string
  }
}

export const plantsData: Plant[] = [
  {
    id: "alecrim-pimenta",
    name: "Alecrim-pimenta",
    scientificName: "Lippia sidoides Cham.",
    family: "Verbenaceae",
    image: "/images/alecrim-pimenta.jpg",
    references: [
      "MATOS, F. J. A. Plantas medicinais: guia de seleção e emprego de plantas usadas em fitoterapia no Nordeste do Brasil. 3. ed. Fortaleza: Imprensa Universitária, 2007.",
      "LORENZI, H.; MATOS, F. J. A. Plantas medicinais no Brasil: nativas e exóticas. 2. ed. Nova Odessa: Instituto Plantarum, 2008.",
    ],
    description:
      "Arbusto próprio da vegetação do Nordeste, comum na caatinga. Possui alto teor de óleo essencial cujo componente ativo principal é o timol, substância de alto poder antisséptico.",
    habitat: "Nativo da caatinga entre Mossoró (RN) e Tabuleiro do Norte (CE).",
    origin: "Nordeste brasileiro",
    cultivation:
      "Planta arbustiva, caducifólia e aromática. Multiplicada por estaquia usando ramos finos. Mudas recém-preparadas devem ficar cobertas na primeira semana.",
    medicinalUses:
      "Forte ação antimicrobiana contra fungos e bactérias devido ao timol. Útil no combate ao caramujo vetor de esquistossomose e do mosquito da dengue (Aedes aegypti). Eficiente no tratamento de acne, sarna infectada, panos brancos e mau-cheiro.",
    partsUsed: "Folhas e flores",
    howToUse:
      "Chá abafado com 15-20 folhas em uma xícara. Tintura com 20g de folhas frescas em 30cc de álcool e 70cc de água. Pode ser usado como gargarejo, bochecho, lavagens vaginais e compressas locais.",
    contraindications:
      "Não utilizar tintura em gestantes, lactantes, crianças menores de 2 anos, diabéticos e alcoolistas. Não engolir após bochecho.",
    characteristics: [
      "Caule grosso e quebradiço",
      "Folhas longas finamente crenadas",
      "Flores pequenas esbranquiçadas",
      "Aroma forte característico de timol",
    ],
    uses: ["Infecções de garganta e boca", "Ferimentos e afecções da pele", "Desodorante íntimo", "Tratamento de acne"],
    care: {
      light: "Sol pleno",
      water: "Baixa a moderada",
      soil: "Bem drenado",
    },
  },
  {
    id: "alfavaca-cravo",
    name: "Alfavaca-cravo",
    scientificName: "Ocimum gratissimum L.",
    family: "Lamiaceae",
    image: "/images/alfavaca-cravo.jpg",
    references: [
      "BRASIL. Ministério da Saúde. Memento Fitoterápico da Farmacopeia Brasileira. Brasília: Anvisa, 2016.",
      "LORENZI, H.; MATOS, F. J. A. Plantas medicinais no Brasil: nativas e exóticas. 2. ed. Nova Odessa: Instituto Plantarum, 2008.",
    ],
    description:
      "Planta aromática que atinge entre 1,5 e 2,0 metros de altura, com aroma que lembra cravo-da-índia. Possui eugenol, substância que relaxa os músculos do intestino.",
    habitat: "Cultivada em regiões tropicais.",
    origin: "Ásia e África Ocidental",
    cultivation:
      "Plantio por sementes ou estacas dos ramos. Espaçamento de 0,8m x 0,4m. Necessita de 4-6 horas de sol por dia (preferencialmente sol da manhã). Rega moderada a cada 1-2 dias.",
    medicinalUses:
      "Utilizada para sintomas de gripe e resfriado. Efeito antisséptico bucal, combatendo mau hálito, aftas, gengivite e cáries. Ação carminativa contra flatulências, diarreias e distúrbios estomacais.",
    culinaryUses: "Preparo de molhos de pizzas e massas. Ramos adicionados em saladas e condimentos, verdes ou secos.",
    partsUsed: "Partes aéreas (folhas e inflorescências)",
    howToUse:
      "Chá: 3g (1 colher de sobremesa) de folhas em 150ml de água fervente, deixar 15 minutos. Para analgésico bucal: bochechos 1-3x/dia. Para antigripal: tomar 1 xícara 1-3x/dia. Em crianças: banho com o chá.",
    toxicity: "Consumo excessivo pode causar hipoglicemia, sonolência e bradicardia.",
    contraindications:
      "Gestantes, lactantes, crianças menores de 6 anos, pessoas com doenças gastrointestinais, hipoglicemia, epilepsia e Parkinson.",
    characteristics: [
      "Altura de 1,5-2,0 metros",
      "Aroma de cravo-da-índia",
      "Flores brancas ou lilás",
      "Folhas aromáticas",
    ],
    uses: ["Gripes e resfriados", "Saúde bucal", "Problemas digestivos", "Tempero culinário"],
    care: {
      light: "Sol pleno a meia sombra (4-6h/dia)",
      water: "Moderada (1-2 dias)",
      soil: "Rico em matéria orgânica",
    },
  },
  {
    id: "babosa",
    name: "Babosa",
    scientificName: "Aloe vera (L.) Burm.f.",
    family: "Liliaceae",
    image: "/images/babosa.jpg",
    references: [
      "BRASIL. Agência Nacional de Vigilância Sanitária. Formulário de Fitoterápicos da Farmacopeia Brasileira. Brasília: Anvisa, 2011.",
      "LORENZI, H.; MATOS, F. J. A. Plantas medicinais no Brasil: nativas e exóticas. 2. ed. Nova Odessa: Instituto Plantarum, 2008.",
    ],
    description:
      "Planta suculenta utilizada como hidratante, cicatrizante de queimaduras e feridas. Contém 19 aminoácidos essenciais e minerais importantes.",
    habitat: "Regiões áridas e semiáridas.",
    origin: "Região Mediterrânica",
    cultivation: "Planta de plena luz, não se dá bem à sombra. Clima tropical a subtropical.",
    medicinalUses:
      "Hidratante, cicatrizante de queimaduras e feridas, analgésica, anti-inflamatória. Auxilia em bursites, artrites, infecções da bexiga. Estimula regeneração celular e circulação sanguínea.",
    culinaryUses: "Considerada energética e nutritiva. Utilizada em suplementos e tinturas (uso controlado).",
    partsUsed: "Folhas (gel interno)",
    howToUse:
      "Uso tópico: Extrato seco 5:1 (3-10% em cremes/géis), Extrato seco 200:1 (0,5-3%), Extrato glicólico (2-6%). Uso interno: Tintura 20-30 gotas diluídas em água até 3x/dia.",
    toxicity:
      "Uso oral pode causar alterações gastrointestinais, toxicidade hepática, efeitos nefrotóxicos e alterações endócrinas. Compostos como antraquinonas possuem potencial mutagênico em doses elevadas.",
    contraindications:
      "Hipersensibilidade à substância. Evitar em pessoas com alergia a plantas da família Liliaceae. Uso oral não autorizado como alimento no Brasil (Anvisa).",
    characteristics: [
      "Folhas carnosas e espinhosas",
      "Gel transparente interno",
      "Flores tubulares amarelas",
      "Crescimento em roseta",
    ],
    uses: ["Queimaduras e feridas", "Hidratação da pele", "Anti-inflamatório", "Cosmético"],
    care: {
      light: "Sol pleno a meia sombra",
      water: "Baixa (regar quando secar)",
      soil: "Arenoso e bem drenado",
    },
  },
  {
    id: "capim-citronela",
    name: "Capim-citronela",
    scientificName: "Cymbopogon winterianus Jowitt",
    family: "Poaceae (Gramineae)",
    image: "/images/capim-citronela.jpg",
    references: [
      "LORENZI, H.; MATOS, F. J. A. Plantas medicinais no Brasil: nativas e exóticas. 2. ed. Nova Odessa: Instituto Plantarum, 2008.",
      "SILVA, N. C. C. et al. Atividade antimicrobiana de óleos essenciais. Revista Brasileira de Plantas Medicinais, v. 15, n. 4, p. 639-644, 2013.",
    ],
    description:
      "Planta aromática originária da Indonésia, amplamente cultivada como repelente natural. Seu óleo essencial é muito forte e não deve ser ingerido.",
    habitat: "Regiões tropicais e subtropicais.",
    origin: "Indonésia (ilha de Java)",
    cultivation:
      "Sol pleno com regas moderadas para manter solo levemente úmido. Solo bem drenado, fértil e rico em matéria orgânica. Evitar terrenos muito argilosos ou arenosos.",
    medicinalUses:
      "Usada em banhos, defumações e inalações para gripes, resfriados e dores musculares, com efeito relaxante e refrescante.",
    culinaryUses:
      "NÃO TEM USO CULINÁRIO. Óleo essencial muito forte e tóxico se ingerido. Usado apenas para fins aromáticos e repelentes.",
    partsUsed: "Folhas",
    howToUse:
      "Repelente: folhas picadas espalhadas no ambiente. Spray caseiro: infusão de 3-4 folhas grandes em 500ml de água fervente, esfriar, coar e borrifar.",
    toxicity:
      "Óleo essencial pode causar irritação de pele e olhos, alergias, náuseas e vômitos se ingerido em excesso.",
    contraindications:
      "Não indicada para uso interno. Consumo do chá pode causar irritações gastrointestinais, principalmente em crianças e animais domésticos.",
    characteristics: [
      "Folhas longas e estreitas",
      "Aroma cítrico intenso",
      "Crescimento em touceiras",
      "Altura de 1-2 metros",
    ],
    uses: ["Repelente de mosquitos", "Aromaterapia", "Banhos terapêuticos", "Defumação"],
    care: {
      light: "Sol pleno",
      water: "Moderada",
      soil: "Bem drenado e fértil",
    },
  },
  {
    id: "capim-santo",
    name: "Capim-santo",
    scientificName: "Cymbopogon citratus Stapf",
    family: "Gramineae",
    image: "/images/capim-santo.jpg",
    references: [
      "BRASIL. Ministério da Saúde. Memento Fitoterápico da Farmacopeia Brasileira. Brasília: Anvisa, 2016.",
      "LORENZI, H.; MATOS, F. J. A. Plantas medicinais no Brasil: nativas e exóticas. 2. ed. Nova Odessa: Instituto Plantarum, 2008.",
    ],
    description:
      "Planta aromática com sabor cítrico, essencial para efeito analgésico e anti-inflamatório. Regula colesterol e possui ação calmante.",
    habitat: "Regiões tropicais e subtropicais.",
    origin: "Índia",
    cultivation:
      "Pode ultrapassar 1 metro de altura. Necessita pelo menos 6 horas de sol. Molhar a cada dois dias para umedecer levemente o solo. Em vasos: mínimo 30cm de altura, largura e comprimento.",
    medicinalUses:
      "Analgésico e anti-inflamatório para dores musculares e abdominais, reumatismo. Regula colesterol, diminui inchaços e controla saúde do coração. Ação calmante, reduzindo ansiedade e estresse.",
    culinaryUses:
      "Sabor cítrico ideal para sopas, marinados, chás e ensopados. Ingrediente principal de bebidas tradicionais.",
    partsUsed: "Folhas",
    howToUse:
      "Chá: 1-2 colheres de chá de folhas picadas em água fervente, deixar 5-10 minutos. Compressas: umedecer pano limpo com o chá e aplicar por 15 minutos.",
    toxicity:
      "Pode causar enjoo, tontura, diminuição da pressão arterial e desmaio. Contato com pele pode causar queimaduras.",
    contraindications:
      "Gestantes, lactantes, menores de 18 anos, pessoas com doenças cardiovasculares, problemas renais e hepáticos.",
    characteristics: [
      "Folhas longas aromáticas",
      "Aroma de limão",
      "Crescimento em touceiras",
      "Altura de 1-1,5 metros",
    ],
    uses: ["Chá calmante", "Tempero culinário", "Dores musculares", "Ansiedade"],
    care: {
      light: "Sol pleno (6h ou mais)",
      water: "Moderada (a cada 2 dias)",
      soil: "Rico e bem drenado",
    },
  },
  {
    id: "chamba",
    name: "Chambá",
    scientificName: "Justicia pectoralis var. stenophylla Leonard",
    family: "Acanthaceae",
    image: "/images/chamba.jpg",
    references: [
      "MATOS, F. J. A. Plantas medicinais: guia de seleção e emprego de plantas usadas em fitoterapia no Nordeste do Brasil. 3. ed. Fortaleza: Imprensa Universitária, 2007.",
      "LORENZI, H.; MATOS, F. J. A. Plantas medicinais no Brasil: nativas e exóticas. 2. ed. Nova Odessa: Instituto Plantarum, 2008.",
    ],
    description:
      "Planta muito utilizada para problemas respiratórios como inflamações pulmonares, tosse, expectorante e útil em crises de asma, bronquite e chiado no peito.",
    habitat: "Regiões tropicais da América.",
    origin: "Nativa da região tropical da América",
    cultivation: "Prefere meia-sombra a sol pleno. Em dias quentes, proteger do sol direto nas horas mais fortes.",
    medicinalUses:
      "Propriedades analgésicas, antipiréticas, anti-inflamatórias, broncodilatadoras e expectorantes. Útil em asma, bronquite, tosse e chiado no peito.",
    partsUsed: "Folhas e flores",
    howToUse:
      "Infusão de folhas frescas ou secas: 1 xícara (150ml) de 1-3x/dia. Xarope feito só com chambá ou associado com malvarisco. Externamente: folhas maceradas aplicadas localmente.",
    toxicity:
      "Doses altas não demonstraram toxicidade em animais. Pode causar sonolência, dor de cabeça e enjoos. ATENÇÃO: Folhas mal conservadas podem desenvolver dicumarol (veneno anticoagulante).",
    contraindications:
      "Não recomendado em gravidez e lactação por falta de estudos. Não consumir por mais de 30 dias consecutivos.",
    characteristics: [
      "Folhas verdes lanceoladas",
      "Flores brancas pequenas",
      "Crescimento rasteiro",
      "Altura de 20-40 cm",
    ],
    uses: ["Tosse e bronquite", "Asma", "Expectorante", "Problemas respiratórios"],
    care: {
      light: "Meia sombra a sol pleno",
      water: "Alta (solo úmido)",
      soil: "Rico em matéria orgânica",
    },
  },
  {
    id: "colonia",
    name: "Colônia",
    scientificName: "Alpinia zerumbet (Pers.) B.L. Burtt & R.M.S",
    family: "Zingiberaceae",
    image: "/images/colonia.jpg",
    references: [
      "BRASIL. Ministério da Saúde. Memento Fitoterápico da Farmacopeia Brasileira. Brasília: Anvisa, 2016.",
      "LORENZI, H.; MATOS, F. J. A. Plantas medicinais no Brasil: nativas e exóticas. 2. ed. Nova Odessa: Instituto Plantarum, 2008.",
    ],
    description:
      "Planta ornamental e medicinal originária do sudeste da Ásia. Possui propriedades anti-hipertensivas, anti-inflamatórias, diuréticas e calmantes.",
    habitat: "Clima tropical a subtropical.",
    origin: "Sudeste da Ásia (Índia, Taiwan, Japão, Malásia)",
    cultivation:
      "Luz indireta ou meia-sombra. Solo fértil e bem drenado com boa umidade sem encharcamento. Temperaturas entre 18-32°C. Propagação por divisão de rizomas.",
    medicinalUses:
      "Anti-hipertensiva, anti-inflamatória, diurética, digestiva, calmante, antitérmica, antioxidante, antiobesidade, hipolipemiante e hipoglicemiante.",
    culinaryUses: "Folhas usadas para embrulhar bolos de arroz (muchi), conferindo aroma e sabor característico.",
    partsUsed: "Folha, fruto e caule",
    howToUse: "Preparar por infusão considerando proporção indicada. Embalagem deve proteger contra luz e umidade.",
    toxicity:
      "Doses elevadas podem causar asfixia por paralisia respiratória. Pode ser hepatotóxica em doses acima da recomendada.",
    contraindications:
      "Crianças (abaixo de 12 anos), gestantes, lactantes, alcoolistas, portadores de úlceras pépticas, diarreias, cardiopatias, hipotensão, nefropatias, hepatopatias.",
    characteristics: [
      "Folhas grandes e verdes",
      "Flores brancas e rosadas",
      "Aroma suave e agradável",
      "Altura de 2-3 metros",
    ],
    uses: ["Hipertensão", "Calmante", "Digestivo", "Ornamental"],
    care: {
      light: "Meia sombra a luz indireta",
      water: "Alta (boa umidade)",
      soil: "Fértil e bem drenado",
    },
  },
  {
    id: "confrei",
    name: "Confrei",
    scientificName: "Symphytum officinale L.",
    family: "Boraginaceae",
    image: "/images/confrei.jpg",
    references: [
      "BRASIL. Ministério da Saúde. Portaria nº 19, de 30 de janeiro de 1992. Proíbe o uso interno de confrei.",
      "LORENZI, H.; MATOS, F. J. A. Plantas medicinais no Brasil: nativas e exóticas. 2. ed. Nova Odessa: Instituto Plantarum, 2008.",
    ],
    description:
      "Planta medicinal com alantoína (cicatrizante) e alcaloides pirrolizdínicos tóxicos. USO EXTERNO APENAS - uso oral proibido pelo Ministério da Saúde.",
    habitat: "Regiões temperadas.",
    origin: "Europa",
    cultivation:
      "Plantio com espaçamento de 0,50 x 0,50m a partir de pedaços da parte subterrânea cortada. Folhas grandes com 25cm, ásperas com nervuras visíveis.",
    medicinalUses:
      "APENAS USO TÓPICO: cicatrização de feridas, úlceras de decúbito, úlceras varicosas, eczema, assaduras e queimaduras. Alantoína possui ação cicatrizante local.",
    partsUsed: "Folhas (raramente raízes)",
    howToUse:
      "Cozimento: 2 partes de folhas frescas (ou 1 parte seca) com 5 partes de água, ferver 5-10 minutos. Tintura: 3 partes de folhas secas moídas com 8 partes de álcool e 4 de água, filtrar após 1 semana. Pomada: 2 partes de tintura + 2 de lanolina + 6 de vaselina.",
    toxicity:
      "Alcaloides pirrolizdínicos podem provocar cirrose hepática ou câncer do fígado, mesmo anos após ingestão da dose tóxica.",
    contraindications:
      "USO ORAL PROIBIDO (Portaria 19/1992 do Ministério da Saúde). NUNCA beber suco, chá ou comer folhas/raízes por risco de grave intoxicação hepática.",
    characteristics: ["Folhas grandes e ásperas", "Flores roxas ou brancas", "Raízes profundas", "Altura de 60-120 cm"],
    uses: ["Cicatrização (uso externo)", "Úlceras (uso externo)", "Contusões (uso externo)", "Adubo verde"],
    care: {
      light: "Meia sombra a sol pleno",
      water: "Moderada a alta",
      soil: "Rico e profundo",
    },
  },
  {
    id: "erva-cidreira",
    name: "Erva-cidreira",
    scientificName: "Lippia alba (Mill.) N. E. Brown",
    family: "Verbenaceae",
    image: "/images/erva-cidreira.jpg",
    references: [
      "BRASIL. Ministério da Saúde. Memento Fitoterápico da Farmacopeia Brasileira. Brasília: Anvisa, 2016.",
      "LORENZI, H.; MATOS, F. J. A. Plantas medicinais no Brasil: nativas e exóticas. 2. ed. Nova Odessa: Instituto Plantarum, 2008.",
    ],
    description:
      "Planta aromática medicinal com propriedades calmantes e digestivas. Possui diferentes quimiotipos com variações na composição química.",
    habitat: "Climas tropicais e subtropicais.",
    origin: "América do Sul (Brasil e países vizinhos)",
    cultivation:
      "Locais ensolarados com solo fértil, bem drenado e moderadamente úmido. Planta rústica de fácil propagação por estacas. Evitar excesso de umidade.",
    medicinalUses:
      "Efeito calmante e digestivo. Extrato e óleo essencial têm ação analgésica e anti-inflamatória. Propriedades antibacterianas e antimicrobianas.",
    partsUsed: "Folhas",
    howToUse:
      "Chá das folhas para efeito calmante e digestivo. Extrato e óleo essencial devem ser usados com orientação profissional.",
    toxicity:
      "Efeitos tóxicos dependendo da dose e quimiotipo. Possíveis danos ao DNA (genotoxicidade), toxicidade celular e alterações no estresse oxidativo.",
    contraindications:
      "Evitar em gestantes, lactantes e crianças pequenas. Pessoas com hipotensão, uso de sedativos, ansiolíticos ou anticoagulantes devem ter cautela.",
    characteristics: ["Folhas verdes dentadas", "Aroma cítrico suave", "Flores brancas pequenas", "Altura de 30-60 cm"],
    uses: ["Chá calmante", "Ansiedade", "Digestivo", "Insônia"],
    care: {
      light: "Sol pleno",
      water: "Moderada",
      soil: "Fértil e bem drenado",
    },
  },
  {
    id: "guaco",
    name: "Guaco",
    scientificName: "Mikania glomerata Spreng",
    family: "Asteraceae",
    image: "/images/guaco.jpg",
    references: [
      "BRASIL. Ministério da Saúde. Memento Fitoterápico da Farmacopeia Brasileira. Brasília: Anvisa, 2016.",
      "LORENZI, H.; MATOS, F. J. A. Plantas medicinais no Brasil: nativas e exóticas. 2. ed. Nova Odessa: Instituto Plantarum, 2008.",
    ],
    description:
      "Planta nativa do Brasil muito utilizada para doenças respiratórias. Possui propriedades analgésicas, antipiréticas, anti-inflamatórias, broncodilatadoras e expectorantes.",
    habitat: "Mata atlântica brasileira.",
    origin: "Nativa do Brasil",
    medicinalUses:
      "Tratamento de bronquite, asma, gripe, tosse e resfriados. Propriedades analgésicas, antipiréticas, anti-inflamatórias, broncodilatadoras e expectorantes.",
    partsUsed: "Folhas (também caule e raiz em estudos)",
    howToUse:
      "Chá por infusão: 3g de folhas secas ou 5g de folhas frescas em 150ml de água fervida. Também em extrato ou xarope.",
    toxicity:
      "Uso prolongado ou em altas doses pode causar hemorragias, aumento dos batimentos cardíacos, vômitos e diarreia.",
    contraindications:
      "Não indicado para alérgicos à planta, pessoas com câncer, tuberculose, diabetes, doenças no fígado, crianças menores de 1 ano, gestantes, lactantes e usuários de anticoagulantes.",
    characteristics: [
      "Folhas em forma de coração",
      "Flores brancas pequenas",
      "Crescimento trepadeira",
      "Aroma característico",
    ],
    uses: ["Tosse e bronquite", "Asma", "Expectorante", "Gripes e resfriados"],
    care: {
      light: "Meia sombra",
      water: "Moderada a alta",
      soil: "Rico em matéria orgânica",
    },
  },
  {
    id: "hortela-japonesa",
    name: "Hortelã-japonesa",
    scientificName: "Mentha arvensis L. var. piperascens Holmes",
    family: "Lamiaceae (Labiatae)",
    image: "/images/hortela-japonesa.jpg",
    references: [
      "LORENZI, H.; MATOS, F. J. A. Plantas medicinais no Brasil: nativas e exóticas. 2. ed. Nova Odessa: Instituto Plantarum, 2008.",
      "MATOS, F. J. A. Plantas medicinais: guia de seleção e emprego de plantas usadas em fitoterapia no Nordeste do Brasil. 3. ed. Fortaleza: Imprensa Universitária, 2007.",
    ],
    description:
      "Tipo de hortelã cultivada em quase todo o mundo tropical. Indicada como descongestionante nasal e sedativo do estômago.",
    habitat: "Regiões tropicais e subtropicais.",
    origin: "Japão",
    cultivation:
      "Multiplicada por ramos ou estaquia de rizomas. Canteiros renovados 2-3x/ano após floração. Espaçamento 30x30cm em canteiros com bastante luz. Usar adubo orgânico.",
    medicinalUses:
      "Descongestionante nasal, eliminação de gases digestivos, sedativo do estômago contra náuseas e vômitos.",
    culinaryUses: "Folha versátil para sushis, temakis, onigiris e saladas, como tempero e para toque aromático único.",
    partsUsed: "Folhas",
    howToUse:
      "Chá: 4-6 folhas frescas em xícara de água fervente. Tintura: 20g de folhas secas ou 60g frescas em 100ml de álcool. Folhas podem ser usadas frescas, secas, chá, tintura ou inalante.",
    toxicity:
      "Pode causar reações alérgicas de contato. Óleos essenciais concentrados podem causar irritação de mucosas, tontura, insônia e irritabilidade.",
    contraindications:
      "Evitar em pessoas com refluxo gastroesofágico ou azia, grávidas, lactantes e crianças pequenas.",
    characteristics: ["Folhas verdes aromáticas", "Alto teor de mentol", "Flores lilás claras", "Crescimento vigoroso"],
    uses: ["Descongestionante nasal", "Problemas digestivos", "Náuseas", "Culinária asiática"],
    care: {
      light: "Bastante luz",
      water: "Alta",
      soil: "Rico com adubo orgânico",
    },
  },
  {
    id: "hortela-rasteira",
    name: "Hortelã-rasteira",
    scientificName: "Mentha x villosa Huds.",
    family: "Lamiaceae (Labiatae)",
    image: "/images/hortela-rasteira.jpg",
    references: [
      "LORENZI, H.; MATOS, F. J. A. Plantas medicinais no Brasil: nativas e exóticas. 2. ed. Nova Odessa: Instituto Plantarum, 2008.",
      "MATOS, F. J. A. Plantas medicinais: guia de seleção e emprego de plantas usadas em fitoterapia no Nordeste do Brasil. 3. ed. Fortaleza: Imprensa Universitária, 2007.",
    ],
    description:
      "Hortelã com atividades antimicrobianas, antivirais, antioxidantes e antitumorais. Caracterizada por óleos essenciais e antioxidantes fenólicos.",
    habitat: "Regiões temperadas e subtropicais.",
    cultivation: "Suporta 5-40°C, ideal 18-24°C. Não suporta calor, geada ou frio exagerados e prolongados.",
    medicinalUses:
      "Atividades antimicrobianas e antivirais significativas. Fortes ações antioxidantes e antitumorais. Algum potencial antialérgico.",
    culinaryUses: "Aromatizante em bebidas alcoólicas (como Mojito) e produção de óleos essenciais.",
    partsUsed: "Folhas",
    howToUse: "Forma mais comum: infusão (chá).",
    toxicity:
      "Contém ácido rosmarínico e flavonoides. Cuidado em pacientes com refluxo GI, hérnia hiatal ou cálculos renais. Pode ocasionar hepatotoxicidade e problemas gastrointestinais.",
    contraindications:
      "Não recomendado em gravidez e lactação. Utilização prolongada e em altas doses não é recomendada.",
    characteristics: [
      "Folhas minúsculas aromáticas",
      "Crescimento rasteiro denso",
      "Flores lilás pequenas",
      "Altura de 2-5 cm",
    ],
    uses: ["Chá medicinal", "Aromatizante", "Antimicrobiano", "Antioxidante"],
    care: {
      light: "Meia sombra",
      water: "Alta (solo sempre úmido)",
      soil: "Rico e bem drenado",
    },
  },
  {
    id: "malva-santa",
    name: "Malva-santa",
    scientificName: "Plectranthus barbatus Andr.",
    family: "Lamiaceae",
    image: "/images/malva-santa.jpeg",
    references: [
      "BRASIL. Ministério da Saúde. Memento Fitoterápico da Farmacopeia Brasileira. Brasília: Anvisa, 2016.",
      "LORENZI, H.; MATOS, F. J. A. Plantas medicinais no Brasil: nativas e exóticas. 2. ed. Nova Odessa: Instituto Plantarum, 2008.",
    ],
    description:
      "Planta aromática conhecida como boldo. Possui efeito hipossecretor gástrico, reduzindo acidez do suco gástrico. Trata azia e ressaca.",
    habitat: "Regiões tropicais.",
    origin: "África e Índia",
    cultivation:
      "Altura até 1,5m. Propaga-se em três nós com espaçamento de 1,0m x 0,5m. Necessita pleno sol (mais de 6 horas). Regar moderadamente todos os dias.",
    medicinalUses: "Reduz acidez gástrica, trata azia e ressaca. Propriedades digestivas e hepáticas.",
    culinaryUses: "Usado em chás, realça sabor em saladas, molhos, sopas e bebidas alcoólicas.",
    partsUsed: "Folhas",
    howToUse:
      "Chá por infusão: 3-4 folhas em xícara (200ml) de água fervente, descansar 10 minutos. Cataplasma: folhas e flores com pouca água, aplicar na região afetada.",
    toxicity:
      "Doses exageradas podem levar à intoxicação ou irritações gastrointestinais. Consulta médica necessária para dose correta.",
    contraindications: "Gestantes, lactantes, hipotensos, pessoas com hepatite ou obstrução da via biliar, crianças.",
    characteristics: [
      "Folhas verdes carnosas",
      "Flores azuis ou roxas",
      "Aroma característico",
      "Altura de 1-2 metros",
    ],
    uses: ["Problemas digestivos", "Azia", "Ressaca", "Chá medicinal"],
    care: {
      light: "Pleno sol (6h+)",
      water: "Moderada (diária)",
      soil: "Rico e bem drenado",
    },
  },
  {
    id: "malvarisco",
    name: "Malvarisco",
    scientificName: "Plectranthus amboinicus (Lour.) Spreng.",
    family: "Labiatae",
    image: "/images/malvarisco.jpg",
    references: [
      "BRASIL. Ministério da Saúde. Memento Fitoterápico da Farmacopeia Brasileira. Brasília: Anvisa, 2016.",
      "LORENZI, H.; MATOS, F. J. A. Plantas medicinais no Brasil: nativas e exóticas. 2. ed. Nova Odessa: Instituto Plantarum, 2008.",
    ],
    description:
      "Planta de crescimento rápido com 'pelugem' nas folhas e caules. Principal efeito broncodilatador e ação demulcente que protege mucosas das vias aéreas.",
    habitat: "Regiões tropicais.",
    origin: "Ásia Central",
    cultivation:
      "Propaga-se por estacas de caule. Altura 30-90cm, espaçamento 0,5m x 0,5m. Pleno sol (6-8h/dia). Regar regularmente 1-2 semanas para umedecer solo.",
    medicinalUses:
      "Broncodilatador (relaxa brônquios). Ação demulcente protegendo mucosas das vias aéreas. Trata gripes, resfriados, asma e bronquite.",
    culinaryUses:
      "Versátil na culinária, aroma realça sabor. Pode substituir orégano. Ótimo para sopas, guisados e saladas. Folhas frescas ou secas.",
    partsUsed: "Folhas",
    howToUse:
      "Infusão: 1-4 folhas em 200ml de água fervente, 10-15 minutos. Consumir 3x/dia. Xarope caseiro: 30 folhas frescas com 1 xícara de açúcar em banho-maria por 40 minutos.",
    toxicity:
      "Poucos estudos em humanos. Para cães e gatos pode causar vômitos, distúrbios gastrointestinais, irritação severa e envenenamento.",
    contraindications: "Gestantes, lactantes, crianças menores de 2 anos, diabéticos e hipertensos.",
    characteristics: [
      "Folhas carnosas com 'pelugem'",
      "Flores brancas ou lilás",
      "Aroma forte característico",
      "Altura de 30-90 cm",
    ],
    uses: ["Tosse e bronquite", "Asma", "Gripes e resfriados", "Expectorante"],
    care: {
      light: "Pleno sol (6-8h)",
      water: "Regular (1-2 semanas)",
      soil: "Rico e bem drenado",
    },
  },
  {
    id: "manjeirao",
    name: "Manjericão",
    scientificName: "Ocimum basilicum L.",
    family: "Lamiaceae",
    image: "/images/manjeirao.jpg",
    references: [
      "LORENZI, H.; MATOS, F. J. A. Plantas medicinais no Brasil: nativas e exóticas. 2. ed. Nova Odessa: Instituto Plantarum, 2008.",
      "MATOS, F. J. A. Plantas medicinais: guia de seleção e emprego de plantas usadas em fitoterapia no Nordeste do Brasil. 3. ed. Fortaleza: Imprensa Universitária, 2007.",
    ],
    description:
      "Erva aromática essencial na culinária. Possui óleos essenciais com linalol. Empregado no tratamento de disfunções gástricas, renais, dores de cabeça e tosse.",
    habitat: "Regiões tropicais.",
    origin: "Ásia Tropical",
    cultivation:
      "Plantio em vasos ou viveiros durante todo ano. Campo aberto no período quente. Espaçamento 30x30cm. Canteiros 15cm altura com 150g esterco/m². Irrigar 1x/dia (manhã ou tarde).",
    medicinalUses:
      "Tratamento de disfunções gástricas e renais, dores de cabeça, tosse, resfriado e constipação. Ação bactericida, fungicida, estimulante, antioxidante, afrodisíaca, anti-helmíntica, adstringente, carminativa e antitérmica.",
    culinaryUses: "Ingrediente em molhos, sopas, caldos, pizzas, saladas e carnes.",
    partsUsed: "Folhas",
    howToUse:
      "Chás e infusões: aliviam cólicas intestinais, gases e problemas digestivos, efeito calmante. Gripe e tosse: chá combate tosse, gripe, resfriados. Vapor das folhas desobstrui vias aéreas. Culinária.",
    contraindications: "Uso medicinal não recomendado para crianças, gestantes e lactantes.",
    characteristics: [
      "Folhas verdes brilhantes",
      "Aroma doce e picante",
      "Flores brancas ou roxas",
      "Altura de 30-60 cm",
    ],
    uses: ["Tempero culinário", "Problemas digestivos", "Gripes e resfriados", "Repelente de insetos"],
    care: {
      light: "Sol pleno",
      water: "Moderada a alta (1x/dia)",
      soil: "Rico com esterco curtido",
    },
  },
  {
    id: "mastruco",
    name: "Mastruço",
    scientificName: "Chenopodium ambrosioides var. anthelmintica (L.) A. Gray",
    family: "Amaranthaceae",
    image: "/images/mastruco.jpg",
    references: [
      "LORENZI, H.; MATOS, F. J. A. Plantas medicinais no Brasil: nativas e exóticas. 2. ed. Nova Odessa: Instituto Plantarum, 2008.",
      "MATOS, F. J. A. Plantas medicinais: guia de seleção e emprego de plantas usadas em fitoterapia no Nordeste do Brasil. 3. ed. Fortaleza: Imprensa Universitária, 2007.",
    ],
    description:
      "Erva anual de até 1 metro, muito ramosa. Contém óleo essencial com ascaridol (ação nematicida). 'Mastruz-com-leite' usado como fortificante e para problemas respiratórios.",
    habitat: "Terrenos úmidos em todo mundo tropical.",
    origin: "Ásia Tropical",
    cultivation:
      "Cresce espontaneamente mas pode ser cultivada em canteiros a partir de sementes. Produz numerosas sementes pequenas, pretas e brilhantes.",
    medicinalUses:
      "Ação vermífuga contra Ascaris lumbricoides (lombrigas). Usado para problemas respiratórios (bronquite crônica, tuberculose). Tratamento de contusões, hérnias e fraturas. Ação antimicrobiana comprovada.",
    culinaryUses: "Usado em molhos, sopas e saladas como tempero.",
    partsUsed: "Folhas",
    howToUse:
      "Uso interno: planta fresca cortada e machucada, 0,1-0,3g/kg de peso. Misturar com mel ou leite. Uso externo: planta triturada em compressas e pomadas para ferimentos e inflamações da pele.",
    toxicity:
      "Óleo essencial pode provocar enjoos, vômitos, sonolência, lesões no fígado e rins, surdez, transtornos da visão, problemas cardíacos, respiratórios e morte em altas doses. 'Mastruz-com-leite' pode provocar hiper-verminose se dose insuficiente.",
    contraindications:
      "Não recomendado para gestantes, crianças com menos de 10kg, pessoas com problemas de audição e idosos.",
    characteristics: [
      "Folhas alongadas de tamanhos diferentes",
      "Altura ramosa até 1m",
      "Cheiro forte característico",
      "Sementes pretas brilhantes",
    ],
    uses: ["Vermífugo", "Problemas respiratórios", "Ferimentos (uso externo)", "Fortificante"],
    care: {
      light: "Sol pleno",
      water: "Moderada (terrenos úmidos)",
      soil: "Úmido",
    },
  },
]

export function getPlantById(id: string): Plant | undefined {
  return plantsData.find((plant) => plant.id === id)
}
