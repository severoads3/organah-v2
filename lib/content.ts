/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║              ORGANNAH — ARQUIVO DE CONTEÚDO DO SITE             ║
 * ║                                                                  ║
 * ║  Este é o ÚNICO arquivo que você precisa editar para mudar      ║
 * ║  qualquer texto, título, imagem, preço ou informação do site.   ║
 * ║                                                                  ║
 * ║  Como trocar uma imagem:                                         ║
 * ║    URL Unsplash  → mantenha o link https://images.unsplash...   ║
 * ║    Imagem local  → coloque o arquivo em /public/assets/ e use   ║
 * ║                    "/assets/nome-do-arquivo.jpg"                ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

import type { AppContent } from "./types";

export const APP_CONTENT: AppContent = {
  // ─────────────────────────────────────────────────────────────────
  // METADADOS — SEO e compartilhamento em redes sociais
  // ─────────────────────────────────────────────────────────────────
  metadata: {
    title: "Organnah Produtos Naturais | Boutique Orgânica em Balneário Camboriú",
    description:
      "Curadoria exclusiva de suplementos, especiarias gourmet, fibras, snacks saudáveis e chás especiais. Qualidade premium, atendimento humanizado em Balneário Camboriú.",
    city: "Balneário Camboriú",
    siteUrl: "https://organnah.com.br",
    ogImage:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80&auto=format&fit=crop",
  },

  // ─────────────────────────────────────────────────────────────────
  // NAVBAR — Logotipo, links de navegação e botão de ação
  // ─────────────────────────────────────────────────────────────────
  navbar: {
    logoText: "Organnah",
    links: [
      { label: "Categorias", href: "#categorias" },
      { label: "Produtos", href: "#produtos" },
      { label: "Depoimentos", href: "#depoimentos" },
      { label: "Contato", href: "#contato" },
    ],
    ctaButton: {
      label: "Visitar Loja",
      href: "https://wa.me/5547998488535",
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // HERO — Seção principal de impacto
  // ─────────────────────────────────────────────────────────────────
  hero: {
    badge: "Boutique Orgânica em Balneário Camboriú",
    title: "Tudo para sua saúde natural, em um só lugar.",
    description:
      "De granéis selecionados a suplementos de alta performance. Qualidade que você vê, sente e confia — com o atendimento que você merece.",
    primaryCTA: {
      label: "Explorar Produtos",
      href: "#produtos",
    },
    secondaryCTA: {
      label: "Conhecer a Loja",
      href: "#contato",
    },
    stats: [
      { value: "+150", label: "Produtos" },
      { value: "5 anos", label: "de historia" },
      { value: "100%", label: "Natural" },
    ],
    image: {
      url: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1000&q=85&auto=format&fit=crop",
      alt: "Interior da boutique Organnah, exibindo prateleiras com produtos naturais selecionados",
      instruction:
        "Para usar foto da loja: coloque o arquivo em /public/assets/ e substitua a url por '/assets/loja-hero.jpg'",
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // CATEGORIAS — Grade de categorias com imagens de fundo
  // ─────────────────────────────────────────────────────────────────
  categories: {
    badge: "Explore",
    sectionTitle: "Nossas Categorias",
    sectionSubtitle:
      "Cada linha foi curada com critério para oferecer o que há de melhor em bem-estar natural.",
    viewAllLabel: "Ver todos os produtos",
    items: [
      {
        id: "suplementos",
        name: "Suplementos Premium",
        count: 48,
        image: {
          url: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&q=80&auto=format&fit=crop",
          alt: "Suplementos e cápsulas naturais premium",
        },
      },
      {
        id: "especiarias",
        name: "Especiarias Gourmet",
        count: 34,
        image: {
          url: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=800&q=80&auto=format&fit=crop",
          alt: "Tigelas com especiarias e temperos gourmet coloridos",
        },
      },
      {
        id: "fibras",
        name: "Fibras e Sementes",
        count: 27,
        image: {
          url: "https://images.unsplash.com/photo-1490885578174-acda8905c2c6?w=800&q=80&auto=format&fit=crop",
          alt: "Sementes e fibras naturais em potes de vidro",
        },
      },
      {
        id: "snacks",
        name: "Snacks Saudáveis",
        count: 41,
        image: {
          url: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&q=80&auto=format&fit=crop",
          alt: "Mix de snacks e frutas secas saudáveis",
        },
      },
      {
        id: "chas",
        name: "Chás Especiais",
        count: 22,
        image: {
          url: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80&auto=format&fit=crop",
          alt: "Xícara de chá especial com ervas naturais",
        },
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // PRODUTOS — Grade de destaques do mês
  // Dica de preço: use o formato "R$ XX,XX"
  // ─────────────────────────────────────────────────────────────────
  products: {
    badge: "Mais Pedidos",
    sectionTitle: "Produtos em Destaque",
    sectionSubtitle:
      "Os favoritos das nossas clientes — testados, aprovados e com qualidade garantida.",
    items: [
      {
        id: "supercoffee",
        name: "Supercoffee 3.0",
        category: "Suplementos Premium",
        description:
          "Café funcional com MCT, vitaminas e colágeno. Energia limpa e prolongada sem o crash.",
        price: "R$ 89,90",
        badge: "Mais Vendido",
        image: {
          url: "/assets/supercoffee.jpg",
          alt: "Supercoffee 3.0 by Caffeine Army — Chocolate, Vanilla Latte e Smart Energy, disponíveis na Organnah",
        },
      },
      {
        id: "maca-peruana",
        name: "Maca Peruana Orgânica",
        category: "Suplementos Premium",
        description:
          "Raiz adaptogênica 100% pura, sem aditivos. Suporte para energia, libido e equilíbrio hormonal.",
        price: "R$ 54,90",
        badge: "Novidade",
        image: {
          url: "/assets/maca_peruana.png",
          alt: "Maca Peruana Orgânica disponível na Organnah",
        },
      },
      {
        id: "mix-nuts",
        name: "Mix Nuts Premium",
        category: "Snacks Saudáveis",
        description:
          "Blend artesanal de castanhas, amêndoas, nozes e macadâmia. Selecionadas para o máximo frescor.",
        price: "R$ 42,90",
        image: {
          url: "/assets/mix_nuts_v2.png",
          alt: "Mix de castanhas e nozes premium em pote",
        },
      },
      {
        id: "curcuma",
        name: "Cúrcuma Pura Extra",
        category: "Especiarias Gourmet",
        description:
          "Pó de cúrcuma de alta curcumina com pimenta preta para absorção otimizada. Anti-inflamatório natural.",
        price: "R$ 38,90",
        image: {
          url: "/assets/curcuma_pura_extra.png",
          alt: "Cúrcuma Pura Extra disponível na Organnah",
        },
      },
      {
        id: "psyllium",
        name: "Psyllium em Flocos",
        category: "Fibras e Sementes",
        description:
          "Fibra solúvel premium que regula o trânsito intestinal e contribui para o controle da glicemia.",
        price: "R$ 31,90",
        image: {
          url: "/assets/psyllium_em_flocos.png",
          alt: "Psyllium em Flocos disponível na Organnah",
        },
      },
      {
        id: "cha-adaptogenico",
        name: "Chá Adaptogênico",
        category: "Chás Especiais",
        description:
          "Blend exclusivo com ashwagandha, tulsi e camomila. Reduz o cortisol e promove relaxamento profundo.",
        price: "R$ 47,90",
        badge: "Novidade",
        image: {
          url: "/assets/cha_adaptogenico.png",
          alt: "Chá Adaptogênico disponível na Organnah",
        },
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // DEPOIMENTOS — Avaliações reais de clientes
  // ─────────────────────────────────────────────────────────────────
  testimonials: {
    badge: "Depoimentos",
    sectionTitle: "O que nossas clientes dizem",
    sectionSubtitle:
      "Histórias reais de quem escolheu viver com mais saúde e consciência.",
    items: [
      {
        id: "review-fernanda",
        content:
          "A loja está linda demais! O atendimento é super atencioso e esclarecem todas as dúvidas. AMEI.",
        author: "Fernanda L.",
        role: "Cliente verificada",
        rating: 5,
      },
      {
        id: "review-mariana",
        content:
          "Loja linda, amo os temperos e a super aveia para fazer panquecas, delícia!",
        author: "Mariana S.",
        role: "Cliente verificada",
        rating: 5,
      },
      {
        id: "review-carlos",
        content:
          "Eu quero morar nesta loja, todos os produtos são de muita qualidade, variedade infinita.",
        author: "Carlos M.",
        role: "Cliente verificado",
        rating: 5,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // FOOTER — Informações de contato e rodapé
  // ─────────────────────────────────────────────────────────────────
  footer: {
    description:
      "Boutique de saúde natural em Balneário Camboriú. Curadoria exclusiva de suplementos, especiarias e alimentos funcionais premium.",
    address: "Av. Palestina, 868 - Balneário Camboriú, SC",
    phone: "(47) 9 9848-8535",
    email: "contato@organnah.com.br",
    whatsappHref: "https://wa.me/5547998488535",
    instagramHandle: "@organnahloja",
    instagramHref: "https://www.instagram.com/organnahloja/",
    workingHours: "Seg-Sex: 08:00 - 19:00 | Sáb: 08:00 - 18:00",
    copyrightName: "Organnah Produtos Naturais",
    navLinks: [
      { label: "Categorias", href: "#categorias" },
      { label: "Produtos", href: "#produtos" },
      { label: "Depoimentos", href: "#depoimentos" },
    ],
  },
};
