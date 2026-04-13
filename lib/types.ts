// ─── Primitivos reutilizáveis ─────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export interface CTAButton {
  label: string;
  href: string;
}

export interface ImageData {
  url: string;
  alt: string;
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

export interface NavbarContent {
  logoText: string;
  links: NavLink[];
  ctaButton: CTAButton;
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export interface HeroContent {
  badge: string;
  title: string;
  description: string;
  primaryCTA: CTAButton;
  secondaryCTA: CTAButton;
  stats: Array<{ value: string; label: string }>;
  image: ImageData & {
    /** Dica para substituição por imagem local */
    instruction: string;
  };
}

// ─── Categorias ───────────────────────────────────────────────────────────────

export interface CategoryItem {
  id: string;
  name: string;
  count: number;
  image: ImageData;
}

export interface CategoriesContent {
  badge: string;
  sectionTitle: string;
  sectionSubtitle: string;
  viewAllLabel: string;
  items: CategoryItem[];
}

// ─── Produtos ─────────────────────────────────────────────────────────────────

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  badge?: string;
  image: ImageData;
}

export interface ProductsContent {
  badge: string;
  sectionTitle: string;
  sectionSubtitle: string;
  items: ProductItem[];
}

// ─── Depoimentos ──────────────────────────────────────────────────────────────

export interface ReviewItem {
  id: string;
  content: string;
  author: string;
  role: string;
  rating: number;
}

export interface TestimonialsContent {
  badge: string;
  sectionTitle: string;
  sectionSubtitle: string;
  items: ReviewItem[];
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export interface FooterContent {
  description: string;
  address: string;
  phone: string;
  email: string;
  whatsappHref: string;
  instagramHandle: string;
  instagramHref: string;
  workingHours: string;
  copyrightName: string;
  navLinks: NavLink[];
}

// ─── Metadados ────────────────────────────────────────────────────────────────

export interface MetadataContent {
  title: string;
  description: string;
  city: string;
  siteUrl: string;
  ogImage: string;
}

// ─── Raiz ─────────────────────────────────────────────────────────────────────

export interface AppContent {
  metadata: MetadataContent;
  navbar: NavbarContent;
  hero: HeroContent;
  categories: CategoriesContent;
  products: ProductsContent;
  testimonials: TestimonialsContent;
  footer: FooterContent;
}
