"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import type { NavbarContent } from "@/lib/types";

interface NavbarProps {
  content: NavbarContent;
}

export default function Navbar({ content }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[var(--color-border)] bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-6 lg:px-10"
        aria-label="Navegação principal"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label={`${content.logoText} - página inicial`}
        >
          <Image
            src="/logo.png"
            alt={`Logo ${content.logoText}`}
            width={160}
            height={72}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        {/* Links desktop */}
        <ul className="hidden items-center gap-8 md:flex" role="list">
          {content.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <Button as="a" variant="primary" href={content.ctaButton.href} className="px-5 py-2.5 text-sm">
            {content.ctaButton.label}
          </Button>
        </div>

        {/* Toggle mobile */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          className="flex items-center justify-center p-1 text-[var(--color-text-main)] md:hidden"
        >
          {mobileOpen ? (
            <X size={22} strokeWidth={2} aria-hidden="true" />
          ) : (
            <Menu size={22} strokeWidth={2} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Drawer mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="border-b border-[var(--color-border)] bg-white px-6 pb-6 pt-2 md:hidden"
          >
            <ul className="flex flex-col gap-5" role="list">
              {content.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-base font-medium text-[var(--color-text-main)] hover:text-[var(--color-primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Button as="a" variant="primary" href={content.ctaButton.href} className="w-full">
                  {content.ctaButton.label}
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
