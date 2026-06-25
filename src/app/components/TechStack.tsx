import { useRef } from "react";

const techs = [
  { name: "REACT", level: "AVANÇADO", color: "#61dafb" },
  { name: "NODEJS", level: "AVANÇADO", color: "#68a063" },
  { name: "TYPESCRIPT", level: "AVANÇADO", color: "#3178c6" },
  { name: "POSTGRESQL", level: "AVANÇADO", color: "#336791" },
  { name: "MYSQL", level: "AVANÇADO", color: "#00758f" },
  { name: "TAILWINDCSS", level: "AVANÇADO", color: "#06b6d4" },
  { name: "HTML5", level: "AVANÇADO", color: "#e34f26" },
  { name: "CSS3", level: "AVANÇADO", color: "#1572b6" },
  { name: "GIT", level: "MÉDIO", color: "#f05032" },
  { name: "JAVASCRIPT", level: "MÉDIO", color: "#f7df1e" },
  { name: "PYTHON", level: "BÁSICO", color: "#3776ab" },
  { name: "PHP", level: "MÉDIO", color: "#8892be" },
  { name: "FIREBASE", level: "BÁSICO", color: "#ffca28" },
  { name: "ORACLE", level: "MÉDIO", color: "#f80000" },
  { name: "EXPRESS", level: "AVANÇADO", color: "#f0f0f8" },
  { name: "KNEX", level: "AVANÇADO", color: "#d26b38" },
];

const doubled = [...techs, ...techs];

export function TechStack() {
  return (
    <section
      id="stack"
      style={{ background: "#08080f", overflow: "hidden" }}
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.72rem",
                color: "#ff0055",
                letterSpacing: "0.2em",
                marginBottom: "0.5rem",
              }}
            >
              // STACK_TECNOLÓGICA
            </div>
            <h2
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "#f0f0f8",
                lineHeight: 1,
                letterSpacing: "0.02em",
              }}
            >
              FERRAMENTAS
              <br />
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1.5px #ff0055",
                }}
              >
                QUE USO.
              </span>
            </h2>
          </div>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "1rem",
              color: "#6b6b80",
              maxWidth: "360px",
              lineHeight: 1.75,
              fontWeight: 300,
            }}
          >
            Tecnologias dominadas ao longo de 8 anos construindo produtos reais para empresas reais.
          </p>
        </div>
      </div>

      {/* Ticker row 1 — left to right */}
      <div className="relative mb-px" style={{ borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div
          className="flex gap-0"
          style={{
            animation: "tickerLeft 32s linear infinite",
            width: "max-content",
          }}
        >
          {doubled.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-8 py-4 group cursor-default"
              style={{ borderRight: "1px solid rgba(255,255,255,0.07)", minWidth: "max-content" }}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: tech.color }}
              />
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.78rem",
                  letterSpacing: "0.14em",
                  color: "#f0f0f8",
                }}
              >
                {tech.name}
              </span>
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.1em",
                  color: tech.color,
                  opacity: 0.7,
                }}
              >
                [{tech.level}]
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Ticker row 2 — right to left */}
      <div className="relative mb-0" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div
          className="flex gap-0"
          style={{
            animation: "tickerRight 40s linear infinite",
            width: "max-content",
          }}
        >
          {[...doubled].reverse().map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-8 py-3.5 group cursor-default"
              style={{
                borderRight: "1px solid rgba(255,255,255,0.07)",
                minWidth: "max-content",
                background: i % 3 === 0 ? "rgba(0,255,136,0.025)" : "transparent",
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  color: "#6b6b80",
                }}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="pb-20" />

      <style>{`
        @keyframes tickerLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes tickerRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
