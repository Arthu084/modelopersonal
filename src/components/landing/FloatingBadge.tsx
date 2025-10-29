"use client";

export default function FloatingBadge() {
  return (
    <div className="fixed bottom-24 right-6 z-50 md:bottom-6 md:right-28 animate-pulse-glow">
      <div className="bg-primary/90 text-primary-foreground text-sm font-bold px-4 py-2 rounded-full shadow-2xl backdrop-blur-sm">
        VAGAS LIMITADAS 🔥
      </div>
    </div>
  );
}
