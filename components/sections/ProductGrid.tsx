import SectionHeader from "@/components/ui/SectionHeader";
import ProductCard from "@/components/ui/ProductCard";
import type { ProductsContent } from "@/lib/types";

interface ProductGridProps {
  content: ProductsContent;
}

export default function ProductGrid({ content }: ProductGridProps) {
  return (
    <section
      id="produtos"
      className="bg-white px-6 py-24 lg:px-10 lg:py-32"
      aria-labelledby="produtos-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <SectionHeader
            badge={content.badge}
            title={content.sectionTitle}
            subtitle={content.sectionSubtitle}
          />
        </div>

        <ul
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Grade de produtos em destaque"
        >
          {content.items.map((product, i) => (
            <li key={product.id}>
              <ProductCard product={product} index={i} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
