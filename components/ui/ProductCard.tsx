"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import type { ProductItem } from "@/lib/types";
import Button from "./Button";

interface ProductCardProps {
  product: ProductItem;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex flex-col overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-card-bg)] transition-shadow duration-300 hover:shadow-lg"
    >
      {/* Imagem do produto */}
      <div className="relative aspect-square overflow-hidden bg-[var(--color-border)]">
        <Image
          src={product.image.url}
          alt={product.image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-[var(--color-accent)] px-3 py-1 text-xs font-semibold text-white tracking-wide">
            {product.badge}
          </span>
        )}
      </div>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-medium tracking-widest uppercase text-[var(--color-text-muted)]">
            {product.category}
          </p>
          <h3 className="text-lg font-bold leading-snug text-[var(--color-text-main)]">
            {product.name}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
            {product.description}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold text-[var(--color-primary)]">
            {product.price}
          </span>
          <Button variant="primary" className="gap-1.5 px-4 py-2 text-xs">
            <ShoppingBag size={14} strokeWidth={2} />
            Comprar
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
