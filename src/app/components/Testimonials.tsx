import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "ANA SILVA",
    role: "Santa Marta — R.H.",
    date: "JAN 2021",
    text: "Estou extremamente satisfeita com o trabalho excepcional. Superou todas as expectativas, entregando um produto de alta qualidade. A abordagem inovadora e a atenção aos detalhes fizeram toda a diferença. Recomendo sem hesitar.",
    initial: "A",
    accent: "#00ff88",
  },
  {
    name: "CARLOS MENDES",
    role: "Santa Marta — T.I.",
    date: "NOV 2021",
    text: "Trabalhar com essa equipe foi uma experiência incrível. Não apenas entenderam nossas necessidades, mas trouxeram insights valiosos que aprimoraram significativamente o projeto. Profissionais comprometidos e talentosos.",
    initial: "C",
    accent: "#ff0055",
  },
  {
    name: "ISABELA SANTOS",
    role: "Carpal Tratores — Contador",
    date: "NOV 2022",
    text: "Os serviços prestados foram além das minhas expectativas. A equipe mostrou grande profissionalismo, comunicação eficiente e entregou no prazo. O resultado refletiu exatamente o que eu tinha em mente. Parceria para futuros projetos.",
    initial: "I",
    accent: "#00d4ff",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section
      style={{ background: "#040407" }}
    >
      <div
        style={{
          height: "60px",
          background: "#08080f",
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
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
              // AVALIAÇÕES
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
              O QUE<br />
              <span style={{ color: "transparent", WebkitTextStroke: "1.5px #00ff88" }}>
                DIZEM.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="transition-all duration-200"
                style={{
                  width: i === active ? "32px" : "8px",
                  height: "4px",
                  background: i === active ? "#00ff88" : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-[auto_1fr] gap-10 items-start">
          {/* Avatar column */}
          <div className="flex flex-col items-center gap-4">
            <div
              className="w-20 h-20 flex items-center justify-center flex-shrink-0"
              style={{
                border: `2px solid ${t.accent}`,
                fontFamily: "'Anton', sans-serif",
                fontSize: "2.5rem",
                color: t.accent,
                background: `${t.accent}10`,
              }}
            >
              {t.initial}
            </div>

            <div className="flex flex-col gap-2 items-center">
              <button
                onClick={() => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-8 h-8 flex items-center justify-center transition-all duration-200"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#6b6b80",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#00ff88";
                  (e.currentTarget as HTMLButtonElement).style.color = "#00ff88";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.12)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#6b6b80";
                }}
              >
                <ChevronLeft size={14} />
              </button>
              <button
                onClick={() => setActive((prev) => (prev + 1) % testimonials.length)}
                className="w-8 h-8 flex items-center justify-center transition-all duration-200"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#6b6b80",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#00ff88";
                  (e.currentTarget as HTMLButtonElement).style.color = "#00ff88";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.12)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#6b6b80";
                }}
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Quote */}
          <div
            className="relative p-8 md:p-10"
            style={{
              border: "1px solid rgba(255,255,255,0.07)",
              background: "#06060a",
            }}
          >
            {/* Accent corner */}
            <div
              className="absolute top-0 left-0 w-12 h-1"
              style={{ background: t.accent }}
            />

            <div
              className="mb-6"
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: "4rem",
                color: `${t.accent}25`,
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              "
            </div>

            <p
              className="mb-8"
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 300,
                fontSize: "1.1rem",
                color: "#c0c0cc",
                lineHeight: 1.85,
                fontStyle: "italic",
              }}
            >
              {t.text}
            </p>

            <div className="flex items-center gap-4">
              <div
                className="h-px flex-1"
                style={{ background: "rgba(255,255,255,0.08)" }}
              />
              <div>
                <div
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: "1rem",
                    color: t.accent,
                    letterSpacing: "0.06em",
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.65rem",
                    color: "#6b6b80",
                    letterSpacing: "0.1em",
                  }}
                >
                  {t.role} / {t.date}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
