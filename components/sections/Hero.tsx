"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Leaf, Shield, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import type { HeroContent } from "@/lib/types";

// Ícones para os badges de confiança — ordem corresponde ao array stats
const BADGE_ICONS = [Leaf, Shield, Sparkles] as const;

interface HeroProps {
  content: HeroContent;
}

export default function Hero({ content }: HeroProps) {
  return (
    <section
      className="relative min-h-screen bg-[var(--color-background)] pt-[68px]"
      aria-label="Apresentação da Organnah"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10 lg:py-28">
        {/* ── Coluna esquerda: texto ─────────────────────────────────── */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              {content.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl font-bold leading-[1.1] tracking-tight text-[var(--color-primary)] md:text-6xl lg:text-[4.5rem]"
          >
            {content.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-md text-lg leading-relaxed text-[var(--color-text-muted)]"
          >
            {content.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-3"
          >
            <Button as="a" variant="primary" href={content.primaryCTA.href} className="gap-2 px-7 py-3.5 text-base">
              {content.primaryCTA.label}
              <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
            </Button>
            <Button as="a" variant="outline" href={content.secondaryCTA.href} className="px-7 py-3.5 text-base">
              {content.secondaryCTA.label}
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="flex flex-wrap gap-6"
            role="list"
          >
            {content.stats.map(({ value, label }, i) => {
              const Icon = BADGE_ICONS[i % BADGE_ICONS.length];
              return (
                <li key={label} className="flex items-center gap-2">
                  <Icon
                    size={15}
                    strokeWidth={2}
                    className="text-[var(--color-primary)]"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-semibold text-[var(--color-text-main)]">
                    {value}
                  </span>
                  <span className="text-sm text-[var(--color-text-muted)]">
                    {label}
                  </span>
                </li>
              );
            })}
          </motion.ul>
        </div>

        {/* ── Coluna direita: imagem ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-2xl)] bg-[var(--color-card-bg)] lg:aspect-[3/4]">
            <Image
              src={content.image.url}
              alt={content.image.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent"
            />
          </div>

          {/* Card flutuante com primeira stat */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-6 -left-6 rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-xl"
          >
            <p className="text-3xl font-bold text-[var(--color-primary)]">
              {content.stats[0]?.value}
            </p>
            <p className="mt-0.5 text-sm text-[var(--color-text-muted)]">
              {content.stats[0]?.label}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
