export interface ONG {
  id: string;
  name: string;
  description: string;
  mission: string;
  location: string;
  contact: {
    phone?: string;
    email?: string;
    website?: string;
    instagram?: string;
  };
  transparency: string;
  image: string;
  gallery: string[];
  featured: boolean;
  foundedYear: number;
  impact: {
    familiesHelped: number;
    mealsServed: number;
    monthlyBudget: string;
  };
  certifications: string[];
  financialInfo: {
    donationUsage: string;
    adminCosts: string;
    transparency: string;
  };
  fundraisingGoal: {
    monthlyGoal: number;
    currentAmount: number;
    donorsCount: number;
    daysLeft: number;
    description: string;
  };
}

export const ongs: ONG[] = [
  {
    id: "1",
    name: "Instituto Alimenta Salvador",
    description: "Distribuição de refeições para famílias em situação de vulnerabilidade social em Salvador.",
    mission: "Combater a fome e promover a segurança alimentar através da distribuição de refeições nutritivas e educação alimentar.",
    location: "Liberdade, Salvador - BA",
    contact: {
      phone: "(71) 3333-1111",
      email: "contato@alimentasalvador.org.br",
      website: "https://alimentasalvador.org.br",
      instagram: "@alimentasalvador"
    },
    transparency: "100% das doações são convertidas em refeições e distribuídas diretamente às famílias cadastradas.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1593113598332-cd9b85e1580e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1577303935007-0d306ee638cf?w=800&h=600&fit=crop"
    ],
    featured: true,
    foundedYear: 2015,
    impact: {
      familiesHelped: 2500,
      mealsServed: 180000,
      monthlyBudget: "R$ 85.000"
    },
    certifications: ["CNPJ Regularizado", "Certificado CEBAS", "Auditoria Externa"],
    financialInfo: {
      donationUsage: "95% direto para alimentação, 5% custos administrativos",
      adminCosts: "Apenas 5% das doações são usadas para custos administrativos",
      transparency: "Relatórios mensais públicos e auditoria anual independente"
    },
    fundraisingGoal: {
      monthlyGoal: 85000,
      currentAmount: 62450,
      donorsCount: 342,
      daysLeft: 12,
      description: "Meta para alimentar 2.500 famílias este mês com refeições nutritivas"
    }
  },
  {
    id: "2", 
    name: "Mesa Solidária da Bahia",
    description: "Rede de voluntários que arrecada e distribui alimentos em bairros periféricos de Salvador.",
    mission: "Criar uma rede de solidariedade para garantir que nenhuma família passe fome em nossa cidade.",
    location: "Subúrbio Ferroviário, Salvador - BA",
    contact: {
      phone: "(71) 3333-2222",
      email: "mesa@solidariabahia.org",
      website: "https://mesasolidariabahia.org",
      instagram: "@mesasolidariabahia"
    },
    transparency: "Relatórios mensais de distribuição disponíveis no site. Prestação de contas transparente.",
    image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=400&h=300&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop"
    ],
    featured: true,
    foundedYear: 2018,
    impact: {
      familiesHelped: 1800,
      mealsServed: 95000,
      monthlyBudget: "R$ 62.000"
    },
    certifications: ["CNPJ Regularizado", "Registro Municipal", "Parceria Governo"],
    financialInfo: {
      donationUsage: "92% direto para alimentação, 8% custos operacionais",
      adminCosts: "8% das doações para estrutura operacional",
      transparency: "Portal transparência online com dados atualizados mensalmente"
    },
    fundraisingGoal: {
      monthlyGoal: 62000,
      currentAmount: 48900,
      donorsCount: 256,
      daysLeft: 18,
      description: "Campanha para expandir atendimento em novas comunidades do Subúrbio"
    }
  },
  {
    id: "3",
    name: "Prato Cheio Salvador",
    description: "ONG que oferece refeições gratuitas em restaurantes populares e distribui cestas básicas.",
    mission: "Garantir acesso à alimentação digna para todos os cidadãos de Salvador através de restaurantes populares.",
    location: "Centro Histórico, Salvador - BA", 
    contact: {
      phone: "(71) 3333-3333",
      email: "info@pratocheiosalvador.org.br",
      instagram: "@pratocheiosalvador"
    },
    transparency: "Auditoria anual independente. Relatórios financeiros públicos trimestralmente.",
    image: "https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=400&h=300&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1577303935007-0d306ee638cf?w=800&h=600&fit=crop"
    ],
    featured: true,
    foundedYear: 2012,
    impact: {
      familiesHelped: 3200,
      mealsServed: 250000,
      monthlyBudget: "R$ 120.000"
    },
    certifications: ["CNPJ Regularizado", "Certificado CEBAS", "ISO 22000"],
    financialInfo: {
      donationUsage: "94% direto para alimentação, 6% custos administrativos",
      adminCosts: "Apenas 6% para gestão e estrutura organizacional",
      transparency: "Auditoria independente anual e relatórios trimestrais públicos"
    },
    fundraisingGoal: {
      monthlyGoal: 120000,
      currentAmount: 95600,
      donorsCount: 478,
      daysLeft: 8,
      description: "Urgente: Manter funcionamento dos 3 restaurantes populares"
    }
  },
  {
    id: "4",
    name: "Banco de Alimentos da Bahia",
    description: "Coleta alimentos excedentes de mercados e restaurantes para redistribuir a ONGs parceiras.",
    mission: "Reduzir o desperdício de alimentos e aumentar o acesso à alimentação para populações vulneráveis.",
    location: "Iguatemi, Salvador - BA",
    contact: {
      phone: "(71) 3333-4444",
      email: "banco@alimentosbahia.org.br",
      website: "https://bancoalimentosbahia.org.br",
      instagram: "@bancoalimentosbahia"
    },
    transparency: "Sistema online de rastreamento de doações. Relatórios de impacto mensais.",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&h=300&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=800&h=600&fit=crop"
    ],
    featured: false,
    foundedYear: 2010,
    impact: {
      familiesHelped: 4500,
      mealsServed: 320000,
      monthlyBudget: "R$ 95.000"
    },
    certifications: ["CNPJ Regularizado", "Certificação HACCP", "Parceria SESC"],
    financialInfo: {
      donationUsage: "97% direto para redistribuição, 3% logística",
      adminCosts: "Apenas 3% para custos de coleta e distribuição",
      transparency: "Sistema online de rastreamento em tempo real"
    },
    fundraisingGoal: {
      monthlyGoal: 95000,
      currentAmount: 71200,
      donorsCount: 189,
      daysLeft: 15,
      description: "Expandir rede de coleta para reduzir desperdício alimentar"
    }
  },
  {
    id: "5",
    name: "Cozinha Comunitária Dendê",
    description: "Prepara e distribui refeições populares com foco na culinária baiana tradicional.",
    mission: "Valorizar a cultura alimentar baiana enquanto combate a fome nas comunidades locais.",
    location: "Pelourinho, Salvador - BA",
    contact: {
      phone: "(71) 3333-5555", 
      email: "cozinha@dendebahia.org",
      instagram: "@cozinhadende"
    },
    transparency: "Reuniões mensais abertas à comunidade. Prestação de contas participativa.",
    image: "https://images.unsplash.com/photo-1577303935007-0d306ee638cf?w=400&h=300&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1577303935007-0d306ee638cf?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=800&h=600&fit=crop"
    ],
    featured: false,
    foundedYear: 2016,
    impact: {
      familiesHelped: 1200,
      mealsServed: 65000,
      monthlyBudget: "R$ 45.000"
    },
    certifications: ["CNPJ Regularizado", "Vigilância Sanitária", "Patrimônio Cultural"],
    financialInfo: {
      donationUsage: "90% direto para alimentação, 10% estrutura",
      adminCosts: "10% para manutenção da cozinha e equipamentos",
      transparency: "Assembleias mensais abertas à comunidade local"
    },
    fundraisingGoal: {
      monthlyGoal: 45000,
      currentAmount: 32800,
      donorsCount: 128,
      daysLeft: 22,
      description: "Manter tradição culinária baiana nas refeições comunitárias"
    }
  },
  {
    id: "6",
    name: "Rede Nutrir Salvador",
    description: "Foca em nutrição infantil, oferecendo refeições balanceadas em escolas e creches.",
    mission: "Combater a desnutrição infantil através de programas de alimentação escolar complementar.",
    location: "Brotas, Salvador - BA",
    contact: {
      phone: "(71) 3333-6666",
      email: "nutrir@redesalvador.org.br",
      website: "https://nutrirsalvador.org.br",
      instagram: "@nutrirsalvador"
    },
    transparency: "Acompanhamento nutricional documentado. Relatórios de crescimento das crianças atendidas.",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop"
    ],
    featured: false,
    foundedYear: 2017,
    impact: {
      familiesHelped: 800,
      mealsServed: 42000,
      monthlyBudget: "R$ 38.000"
    },
    certifications: ["CNPJ Regularizado", "Registro CRN", "Parceria Secretaria Educação"],
    financialInfo: {
      donationUsage: "93% direto para nutrição infantil, 7% gestão",
      adminCosts: "7% para coordenação nutricional especializada",
      transparency: "Relatórios nutricionais semestrais e acompanhamento médico"
    },
    fundraisingGoal: {
      monthlyGoal: 38000,
      currentAmount: 28500,
      donorsCount: 95,
      daysLeft: 19,
      description: "Garantir alimentação balanceada para crianças em escolas parceiras"
    }
  },
  {
    id: "7",
    name: "Centro de Integração Familiar – CEIFAR",
    description: "ONG que recebe alimentos não perecíveis, contribuições financeiras e voluntariado, atuando com distribuição de alimentos e serviços sociais.",
    mission: "Promover a integração familiar e comunitária através de serviços sociais e distribuição de alimentos para comunidade local.",
    location: "Tancredo Neves, Salvador - BA",
    contact: {
      phone: "(71) 99100-3811",
      email: "recepcao.ceifar@hotmail.com",
      website: "https://ceifar.org.br",
      instagram: "@ceifar.ong"
    },
    transparency: "Atendimento direto à comunidade com prestação de contas via site oficial e redes sociais.",
    image: "/src/assets/ceifar-ong.jpg",
    gallery: [
      "/src/assets/ceifar-ong.jpg",
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop"
    ],
    featured: false,
    foundedYear: 2014,
    impact: {
      familiesHelped: 950,
      mealsServed: 52000,
      monthlyBudget: "R$ 35.000"
    },
    certifications: ["CNPJ Regularizado", "Registro Municipal", "Serviço Social Certificado"],
    financialInfo: {
      donationUsage: "91% direto para programas sociais, 9% gestão",
      adminCosts: "9% para coordenação e estrutura organizacional",
      transparency: "Relatórios disponíveis no site oficial e prestação de contas regular"
    },
    fundraisingGoal: {
      monthlyGoal: 35000,
      currentAmount: 26200,
      donorsCount: 87,
      daysLeft: 16,
      description: "Manter serviços de integração familiar e distribuição de alimentos"
    }
  },
  {
    id: "8",
    name: "Onça Solidária",
    description: "Ação comunitária focada em arrecadação e distribuição imediata de alimentos e itens básicos sem burocracia.",
    mission: "Promover solidariedade através da campanha 'Quem tem, bota! Quem não tem, tira!' para distribuição direta de alimentos.",
    location: "Sussuarana, Salvador - BA",
    contact: {
      email: "onca.solidaria@gmail.com"
    },
    transparency: "Ação direta na comunidade com transparência através de redes sociais e plataforma Atados.",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&h=300&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=800&h=600&fit=crop"
    ],
    featured: false,
    foundedYear: 2019,
    impact: {
      familiesHelped: 720,
      mealsServed: 38000,
      monthlyBudget: "R$ 28.000"
    },
    certifications: ["Registro Atados", "Ação Comunitária Certificada"],
    financialInfo: {
      donationUsage: "98% direto para distribuição, 2% logística",
      adminCosts: "Apenas 2% para organização logística",
      transparency: "Acompanhamento em tempo real via redes sociais e Atados"
    },
    fundraisingGoal: {
      monthlyGoal: 28000,
      currentAmount: 19600,
      donorsCount: 63,
      daysLeft: 20,
      description: "Expandir distribuição imediata de alimentos na comunidade"
    }
  },
  {
    id: "9",
    name: "Bahia Sem Fome",
    description: "Programa público estadual que articula doações, distribuição de alimentos e montagem de cestas básicas com alto alcance social.",
    mission: "Garantir segurança alimentar através de articulação entre governo, sociedade civil e empresas privadas.",
    location: "Salvador - Múltiplos pontos SAC",
    contact: {
      phone: "(71) 3115-9249",
      website: "https://bahiasemfome.ba.gov.br"
    },
    transparency: "Programa governamental com prestação de contas pública e relatórios de impacto disponíveis online.",
    image: "https://images.unsplash.com/photo-1577303935007-0d306ee638cf?w=400&h=300&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1577303935007-0d306ee638cf?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop"
    ],
    featured: true,
    foundedYear: 2020,
    impact: {
      familiesHelped: 15000,
      mealsServed: 450000,
      monthlyBudget: "R$ 350.000"
    },
    certifications: ["Programa Governamental", "Auditoria TCE", "Parceria Múltipla"],
    financialInfo: {
      donationUsage: "96% direto para beneficiários, 4% coordenação",
      adminCosts: "4% para coordenação estadual do programa",
      transparency: "Portal transparência governamental com dados públicos"
    },
    fundraisingGoal: {
      monthlyGoal: 350000,
      currentAmount: 287500,
      donorsCount: 892,
      daysLeft: 5,
      description: "Manter rede estadual de distribuição de alimentos"
    }
  },
  {
    id: "10",
    name: "Probem",
    description: "Organização que oferece cursos culturais e distribuição de alimentos/quentinhas, atendendo crianças e adolescentes em situação de vulnerabilidade.",
    mission: "Promover desenvolvimento cultural e garantir segurança alimentar para crianças e adolescentes vulneráveis.",
    location: "Costa Azul - Paróquia Santa Rosa de Lima, Salvador - BA",
    contact: {},
    transparency: "Atuação em parceria com paróquia local, atendimento direto à comunidade.",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&h=600&fit=crop"
    ],
    featured: false,
    foundedYear: 2013,
    impact: {
      familiesHelped: 560,
      mealsServed: 28000,
      monthlyBudget: "R$ 22.000"
    },
    certifications: ["Parceria Paroquial", "Programa Cultural Certificado"],
    financialInfo: {
      donationUsage: "89% direto para programas, 11% estrutura",
      adminCosts: "11% para manutenção de cursos e estrutura",
      transparency: "Prestação de contas via parceria paroquial"
    },
    fundraisingGoal: {
      monthlyGoal: 22000,
      currentAmount: 16800,
      donorsCount: 45,
      daysLeft: 25,
      description: "Manter cursos culturais e distribuição de quentinhas"
    }
  },
  {
    id: "11",
    name: "Ação pela Cidadania",
    description: "ONG voltada à defesa de direitos sociais, participando de projetos de inclusão e assistência social local.",
    mission: "Defender direitos sociais e promover inclusão através de projetos assistenciais e educativos.",
    location: "Pau Miúdo, Salvador - BA",
    contact: {
      email: "contato@acaopelacidadania.org.br"
    },
    transparency: "Organização focada em direitos sociais com prestação de contas regular aos apoiadores.",
    image: "https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=400&h=300&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop"
    ],
    featured: false,
    foundedYear: 2011,
    impact: {
      familiesHelped: 1350,
      mealsServed: 72000,
      monthlyBudget: "R$ 48.000"
    },
    certifications: ["CNPJ Regularizado", "Defesa de Direitos", "Assistência Social"],
    financialInfo: {
      donationUsage: "88% direto para projetos sociais, 12% gestão",
      adminCosts: "12% para coordenação de projetos e advocacy",
      transparency: "Relatórios de impacto social e prestação de contas semestral"
    },
    fundraisingGoal: {
      monthlyGoal: 48000,
      currentAmount: 35200,
      donorsCount: 156,
      daysLeft: 13,
      description: "Expandir projetos de inclusão social e defesa de direitos"
    }
  }
];

export const getFeaturedOngs = () => ongs.filter(ong => ong.featured);
export const getOngById = (id: string) => ongs.find(ong => ong.id === id);