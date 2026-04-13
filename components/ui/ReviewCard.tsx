"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { ReviewItem } from "@/lib/types";

interface ReviewCardProps {
  review: ReviewItem;
  index?: number;
}

export default function ReviewCard({ review, index = 0 }: ReviewCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-5 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-card-bg)] p-7"
    >
      {/* Estrelas */}
      <div className="flex gap-1" aria-label={`${review.rating} de 5 estrelas`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={15}
            strokeWidth={0}
            fill={i < review.rating ? "var(--color-accent)" : "#E8E3DB"}
          />
        ))}
      </div>

      {/* Texto do depoimento */}
      <blockquote className="text-base font-medium leading-relaxed text-[var(--color-text-main)]">
        &ldquo;{review.content}&rdquo;
      </blockquote>

      {/* Autor */}
      <footer className="flex items-center gap-3 pt-1">
        <div
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-xs font-bold text-white"
        >
          {review.author.charAt(0)}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-[var(--color-text-main)]">
            {review.author}
          </span>
          <span className="text-xs text-[var(--color-text-muted)]">
            {review.role}
          </span>
        </div>
      </footer>
    </motion.article>
  );
}
