"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { CategoryItem } from "@/lib/types";

interface CategoryCardProps {
  category: CategoryItem;
  index?: number;
}

export default function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`#${category.id}`}
        className="group relative flex aspect-[3/4] w-full overflow-hidden rounded-[var(--radius-xl)] bg-[var(--color-card-bg)]"
        aria-label={`${category.name} — ${category.count} produtos`}
      >
        <Image
          src={category.image.url}
          alt={category.image.alt}
          fill
          sizes="(max-width: 640px) 50vw, 20vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Overlay escurecido */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
        />

        {/* Texto sobre a imagem */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4">
          <p className="text-xs font-medium text-white/70">
            {category.count} produtos
          </p>
          <p className="text-sm font-bold leading-snug text-white">
            {category.name}
          </p>
        </div>
      </Link>
    </motion.li>
  );
}
