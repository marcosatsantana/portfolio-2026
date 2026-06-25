import { Palette, Code2, TrendingUp, ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    icon: Code2,
    title: "DESENVOLVIMENTO\nFULLSTACK",
    description:
      "Sistemas completos do zero — frontend, backend, banco de dados, integrações. Arquitetura limpa, código escalável, entrega funcional.",
    tags: ["React", "NodeJS", "PostgreSQL", "REST API"],
    accent: "#00ff88",
  },
  {
    num: "02",
    icon: Palette,
    title: "DESIGNER\nDE PRODUTOS",
    description:
      "Interfaces que convertem. Prototipação, sistema de design, componentes reutilizáveis. UI com intenção, UX com pesquisa.",
    tags: ["Figma", "UI/UX", "Design System", "Protótipo"],
    accent: "#ff0055",
  },
  {
    num: "03",
    icon: TrendingUp,
    title: "MARKETING\nDIGITAL",
    description:
      "Estratégias digitais orientadas por dados. SEO técnico, automação, analytics e presença digital que gera resultado real.",
    tags: ["SEO", "Analytics", "Automação", "Social Media"],
    accent: "#00d4ff",
  },
];

export function Services() {
  return (
    <section
      id="services"
      style={{ background: "#040407" }}
    >
      <div
        style={{
          height: "60px",
          background: "#08080f",
          clipPath: "polygon(0 0, 100% 100%, 100% 0)",
          marginBottom: "-1px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-8 pb-24">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.72rem",
                color: "#ff0055",
                letterSpacing: "0.2em",
                marginBottom: "1rem",
              }}
            >
              // SERVIÇOS
            </div>
            <h2
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
                lineHeight: 0.95,
                color: "#f0f0f8",
                letterSpacing: "0.01em",
              }}
            >
              O QUE EU<br />
              <span style={{ color: "transparent", WebkitTextStroke: "1.5px #ff0055" }}>
                ENTREGO.
              </span>
            </h2>
          </div>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 300,
              fontSize: "1rem",
              color: "#6b6b80",
              maxWidth: "340px",
              lineHeight: 1.75,
            }}
          >
            Três frentes de atuação. Um único profissional que domina o processo de ponta a ponta.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.07)" }}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.num}
                className="group relative flex flex-col p-8 transition-all duration-300 overflow-hidden"
                style={{ background: "#040407" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "#070710";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "#040407";
                }}
              >
                {/* Number */}
                <div
                  className="absolute top-6 right-6"
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: "4rem",
                    color: `${service.accent}10`,
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  {service.num}
                </div>

                {/* Accent line top */}
                <div
                  className="w-0 group-hover:w-full h-px transition-all duration-500 mb-6"
                  style={{ background: service.accent }}
                />

                <div
                  className="w-11 h-11 flex items-center justify-center mb-6"
                  style={{ border: `1px solid ${service.accent}40` }}
                >
                  <Icon size={20} style={{ color: service.accent }} />
                </div>

                <h3
                  className="mb-4 whitespace-pre-line"
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: "1.4rem",
                    lineHeight: 1.1,
                    color: "#f0f0f8",
                    letterSpacing: "0.04em",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  className="mb-6 flex-1"
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.95rem",
                    color: "#6b6b80",
                    lineHeight: 1.8,
                  }}
                >
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.65rem",
                        letterSpacing: "0.08em",
                        color: service.accent,
                        border: `1px solid ${service.accent}30`,
                        padding: "2px 8px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  className="inline-flex items-center gap-2 group/btn"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.72rem",
                    letterSpacing: "0.1em",
                    color: service.accent,
                  }}
                >
                  SABER MAIS
                  <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
