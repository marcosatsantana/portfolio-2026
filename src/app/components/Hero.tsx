import { useState, useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

const bootLines = [
  "> INICIALIZANDO SISTEMA...",
  "> CARREGANDO MÓDULOS...",
  "> CONECTANDO AO SERVIDOR...",
  "> AUTENTICANDO USUÁRIO...",
  "> ACESSO CONCEDIDO.",
  "> BEM-VINDO AO PORTFÓLIO MK.",
];

const roles = [
  "DESENVOLVEDOR FULLSTACK",
  "ARQUITETO SOLID",
  "UI/UX DESIGNER",
  "ENGENHEIRO DE SOFTWARE",
];

export function Hero() {
  const [bootDone, setBootDone] = useState(false);
  const [bootIndex, setBootIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [glitch, setGlitch] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Boot sequence
  useEffect(() => {
    if (bootIndex < bootLines.length) {
      const t = setTimeout(() => setBootIndex((i) => i + 1), 300);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setBootDone(true), 400);
      return () => clearTimeout(t);
    }
  }, [bootIndex]);

  // Typing role
  useEffect(() => {
    if (!bootDone) return;
    const target = roles[roleIndex];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 55);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2400);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex, bootDone]);

  // Glitch trigger
  useEffect(() => {
    const t = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "#040407" }}
    >
      {/* Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,136,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,136,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Large bg text */}
      <div
        className="absolute right-0 bottom-0 pointer-events-none select-none"
        style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: "clamp(120px, 22vw, 280px)",
          color: "rgba(0,255,136,0.03)",
          lineHeight: 0.85,
          letterSpacing: "-0.02em",
        }}
      >
        DEV
      </div>

      {/* Accent line left */}
      <div
        className="absolute left-0 top-1/4 w-px h-1/2 hidden md:block"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(0,255,136,0.4), transparent)" }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
          <div>
            {/* Boot terminal */}
            {!bootDone && (
              <div
                className="mb-8 p-4"
                style={{
                  border: "1px solid rgba(0,255,136,0.2)",
                  background: "rgba(0,255,136,0.03)",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.75rem",
                  color: "#00ff88",
                  maxWidth: "440px",
                }}
              >
                {bootLines.slice(0, bootIndex).map((line, i) => (
                  <div key={i} className={i === bootIndex - 1 ? "opacity-100" : "opacity-50"}>
                    {line}
                  </div>
                ))}
                <span className="animate-pulse">█</span>
              </div>
            )}

            {bootDone && (
              <>
                <div
                  className="inline-flex items-center gap-3 mb-6"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.72rem",
                    letterSpacing: "0.2em",
                    color: "#ff0055",
                  }}
                >
                  <span
                    className="w-6 h-px"
                    style={{ background: "#ff0055" }}
                  />
                  MARCOS SANTANA / GOIÂNIA — BR
                </div>

                <h1
                  className="relative mb-2"
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: "clamp(3.5rem, 9vw, 8rem)",
                    lineHeight: 0.92,
                    letterSpacing: "-0.01em",
                    color: "#f0f0f8",
                    filter: glitch ? "none" : "none",
                  }}
                >
                  {glitch && (
                    <>
                      <span
                        className="absolute inset-0 select-none"
                        style={{ color: "#ff0055", clipPath: "polygon(0 20%, 100% 20%, 100% 45%, 0 45%)", transform: "translateX(-3px)", opacity: 0.8 }}
                        aria-hidden
                      >
                        MARCOS
                      </span>
                      <span
                        className="absolute inset-0 select-none"
                        style={{ color: "#00ff88", clipPath: "polygon(0 55%, 100% 55%, 100% 75%, 0 75%)", transform: "translateX(3px)", opacity: 0.8 }}
                        aria-hidden
                      >
                        MARCOS
                      </span>
                    </>
                  )}
                  <span className="relative">MARCOS</span>
                </h1>

                <h1
                  className="mb-8"
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: "clamp(3.5rem, 9vw, 8rem)",
                    lineHeight: 0.92,
                    letterSpacing: "-0.01em",
                    color: "transparent",
                    WebkitTextStroke: "2px #00ff88",
                  }}
                >
                  SANTANA
                </h1>

                <div
                  className="flex items-center gap-3 mb-8"
                  style={{ minHeight: "2rem" }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)",
                      color: "#f0f0f8",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {displayed}
                    <span
                      className="animate-pulse"
                      style={{ color: "#00ff88", marginLeft: "2px" }}
                    >
                      _
                    </span>
                  </span>
                </div>

                <p
                  className="mb-10 max-w-lg"
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "1.05rem",
                    color: "#6b6b80",
                    lineHeight: 1.8,
                    fontWeight: 300,
                  }}
                >
                  Desenvolvedor Frontend e Backend com 8 anos construindo sistemas robustos.
                  Arquitetura SOLID, UI/UX design, entrega no prazo. Sem desculpas.
                </p>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => scrollTo("portfolio")}
                    className="group relative overflow-hidden px-7 py-3.5"
                    style={{ background: "#00ff88" }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.78rem",
                        letterSpacing: "0.12em",
                        color: "#040407",
                        fontWeight: 500,
                      }}
                    >
                      VER_PROJETOS →
                    </span>
                  </button>

                  <button
                    onClick={() => scrollTo("contact")}
                    className="group relative overflow-hidden px-7 py-3.5"
                    style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                  >
                    <div
                      className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    />
                    <span
                      className="relative"
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.78rem",
                        letterSpacing: "0.12em",
                        color: "#f0f0f8",
                      }}
                    >
                      DOWNLOAD_CV
                    </span>
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Right side stats column */}
          {bootDone && (
            <div className="hidden lg:flex flex-col gap-4 mt-16">
              {[
                { val: "8", unit: "ANOS", label: "EXPERIÊNCIA" },
                { val: "48+", unit: "PROJ", label: "ENTREGUES" },
                { val: "24/7", unit: "HRS", label: "SUPORTE" },
              ].map(({ val, unit, label }) => (
                <div
                  key={label}
                  className="text-right"
                  style={{ borderRight: "2px solid rgba(0,255,136,0.3)", paddingRight: "20px" }}
                >
                  <div
                    style={{
                      fontFamily: "'Anton', sans-serif",
                      fontSize: "2.4rem",
                      color: "#f0f0f8",
                      lineHeight: 1,
                    }}
                  >
                    {val}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.62rem",
                      color: "#00ff88",
                      letterSpacing: "0.15em",
                    }}
                  >
                    {unit} / {label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Diagonal cut bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: "#040407",
          clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
          zIndex: 30,
        }}
      />

      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity"
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.65rem",
          letterSpacing: "0.15em",
          color: "#6b6b80",
        }}
      >
        SCROLL
        <ArrowDown size={14} className="animate-bounce" />
      </button>
    </section>
  );
}
