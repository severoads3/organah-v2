import SectionHeader from "@/components/ui/SectionHeader";
import ReviewCard from "@/components/ui/ReviewCard";
import type { TestimonialsContent } from "@/lib/types";

interface TestimonialsProps {
  content: TestimonialsContent;
}

export default function Testimonials({ content }: TestimonialsProps) {
  return (
    <section
      id="depoimentos"
      className="bg-[var(--color-background)] px-6 py-24 lg:px-10 lg:py-32"
      aria-labelledby="depoimentos-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <SectionHeader
            badge={content.badge}
            title={content.sectionTitle}
            subtitle={content.sectionSubtitle}
            centered
          />
        </div>

        <ul
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          role="list"
          aria-label="Depoimentos de clientes"
        >
          {content.items.map((review, i) => (
            <li key={review.id}>
              <ReviewCard review={review} index={i} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
