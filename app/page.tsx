import { APP_CONTENT } from "@/lib/content";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import CategoryGrid from "@/components/sections/CategoryGrid";
import ProductGrid from "@/components/sections/ProductGrid";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";

/**
 * Página principal — o único papel desta página é:
 * 1. Importar APP_CONTENT
 * 2. Distribuir cada fatia para a seção correspondente
 *
 * Nenhum texto vive aqui. Para mudar qualquer coisa no site,
 * edite apenas lib/content.ts.
 */
export default function HomePage() {
  return (
    <main>
      <Navbar content={APP_CONTENT.navbar} />
      <Hero content={APP_CONTENT.hero} />
      <CategoryGrid content={APP_CONTENT.categories} />
      <ProductGrid content={APP_CONTENT.products} />
      <Testimonials content={APP_CONTENT.testimonials} />
      <Footer
        content={APP_CONTENT.footer}
        copyrightName={APP_CONTENT.navbar.logoText}
      />
    </main>
  );
}
