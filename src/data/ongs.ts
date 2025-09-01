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
    }
  }
];

export const getFeaturedOngs = () => ongs.filter(ong => ong.featured);
export const getOngById = (id: string) => ongs.find(ong => ong.id === id);