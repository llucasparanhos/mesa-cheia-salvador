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
  };
  transparency: string;
  image: string;
  featured: boolean;
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
      website: "https://alimentasalvador.org.br"
    },
    transparency: "100% das doações são convertidas em refeições e distribuídas diretamente às famílias cadastradas.",
    image: "/api/placeholder/400/300",
    featured: true
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
      website: "https://mesasolidariabahia.org"
    },
    transparency: "Relatórios mensais de distribuição disponíveis no site. Prestação de contas transparente.",
    image: "/api/placeholder/400/300",
    featured: true
  },
  {
    id: "3",
    name: "Prato Cheio Salvador",
    description: "ONG que oferece refeições gratuitas em restaurantes populares e distribui cestas básicas.",
    mission: "Garantir acesso à alimentação digna para todos os cidadãos de Salvador através de restaurantes populares.",
    location: "Centro Histórico, Salvador - BA", 
    contact: {
      phone: "(71) 3333-3333",
      email: "info@pratocheiosalvador.org.br"
    },
    transparency: "Auditoria anual independente. Relatórios financeiros públicos trimestralmente.",
    image: "/api/placeholder/400/300",
    featured: true
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
      website: "https://bancoalimentosbahia.org.br"
    },
    transparency: "Sistema online de rastreamento de doações. Relatórios de impacto mensais.",
    image: "/api/placeholder/400/300",
    featured: false
  },
  {
    id: "5",
    name: "Cozinha Comunitária Dendê",
    description: "Prepara e distribui refeições populares com foco na culinária baiana tradicional.",
    mission: "Valorizar a cultura alimentar baiana enquanto combate a fome nas comunidades locais.",
    location: "Pelourinho, Salvador - BA",
    contact: {
      phone: "(71) 3333-5555", 
      email: "cozinha@dendebahia.org"
    },
    transparency: "Reuniões mensais abertas à comunidade. Prestação de contas participativa.",
    image: "/api/placeholder/400/300",
    featured: false
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
      website: "https://nutrirsalvador.org.br"
    },
    transparency: "Acompanhamento nutricional documentado. Relatórios de crescimento das crianças atendidas.",
    image: "/api/placeholder/400/300", 
    featured: false
  }
];

export const getFeaturedOngs = () => ongs.filter(ong => ong.featured);
export const getOngById = (id: string) => ongs.find(ong => ong.id === id);