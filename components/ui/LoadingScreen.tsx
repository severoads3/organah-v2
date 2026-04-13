"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1400);
    const removeTimer = setTimeout(() => setVisible(false), 2000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F9F6F0",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.6s ease",
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      <div
        style={{
          animation: "organahPulse 1.8s ease-in-out infinite",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "32px",
        }}
      >
        <Image
          src="/logo.png"
          alt="Organnah Produtos Naturais"
          width={220}
          height={220}
          priority
          style={{ objectFit: "contain" }}
        />

        {/* Barra de progresso */}
        <div
          style={{
            width: "160px",
            height: "3px",
            borderRadius: "99px",
            backgroundColor: "#E0D9CF",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              borderRadius: "99px",
              backgroundColor: "#375F39",
              animation: "organahProgress 1.4s ease-out forwards",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes organahPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(1.04); opacity: 0.85; }
        }
        @keyframes organahProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}

