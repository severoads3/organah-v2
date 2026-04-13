import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import type { FooterContent } from "@/lib/types";

interface FooterProps {
  content: FooterContent;
  copyrightName: string;
}

export default function Footer({ content, copyrightName }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contato"
      className="bg-[var(--color-primary)] text-white"
      aria-label="Rodapé com informações de contato"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* ── Marca ─────────────────────────────────────────────── */}
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              aria-label={`${copyrightName} - voltar ao início`}
            >
              <Image
                src="/assets/logo_footer.png"
                alt={`Logo ${copyrightName}`}
                width={200}
                height={90}
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              {content.description}
            </p>
            <a
              href={content.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram: ${content.instagramHandle}`}
              className="flex w-fit items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              <ExternalLink size={16} strokeWidth={2} aria-hidden="true" />
              {content.instagramHandle}
            </a>
          </div>

          {/* ── Navegação rápida ───────────────────────────────────── */}
          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50">
              Navegação
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {content.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contato ───────────────────────────────────────────── */}
          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50">
              Contato
            </h3>
            <ul className="flex flex-col gap-4" role="list">
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  strokeWidth={2}
                  className="mt-0.5 shrink-0 text-[var(--color-accent)]"
                  aria-hidden="true"
                />
                <span className="text-sm text-white/75">{content.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  size={16}
                  strokeWidth={2}
                  className="shrink-0 text-[var(--color-accent)]"
                  aria-hidden="true"
                />
                <a
                  href={content.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {content.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  size={16}
                  strokeWidth={2}
                  className="shrink-0 text-[var(--color-accent)]"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${content.email}`}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {content.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  size={16}
                  strokeWidth={2}
                  className="mt-0.5 shrink-0 text-[var(--color-accent)]"
                  aria-hidden="true"
                />
                <span className="text-sm text-white/75">{content.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Barra inferior ────────────────────────────────────────── */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/50">
            &copy; {currentYear} {copyrightName}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/40">
            Qualidade que você vê, sente e confia.
          </p>
        </div>
      </div>
    </footer>
  );
}
