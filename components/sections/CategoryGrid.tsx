import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import CategoryCard from "@/components/ui/CategoryCard";
import type { CategoriesContent } from "@/lib/types";

interface CategoryGridProps {
  content: CategoriesContent;
}

export default function CategoryGrid({ content }: CategoryGridProps) {
  return (
    <section
      id="categorias"
      className="bg-[var(--color-background)] px-6 py-24 lg:px-10 lg:py-32"
      aria-labelledby="categorias-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            badge={content.badge}
            title={content.sectionTitle}
            subtitle={content.sectionSubtitle}
          />
          <Link
            href="#produtos"
            className="group hidden shrink-0 items-center gap-2 text-sm font-semibold text-[var(--color-primary)] sm:flex"
          >
            {content.viewAllLabel}
            <ArrowRight
              size={15}
              strokeWidth={2.5}
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        <ul
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5"
          role="list"
          aria-label="Lista de categorias"
        >
          {content.items.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
