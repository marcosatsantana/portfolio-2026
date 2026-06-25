import { useState } from "react";

const experience = [
  { role: "Dev. FullStack", company: "Carpal Tratores LTDA", period: "2025 → ATUAL", current: true },
  { role: "Ass. T.I.", company: "Carpal Tratores LTDA", period: "2023 → 2025", current: false },
  { role: "Analista de Sistemas", company: "Drogaria Santa Marta - LTDA", period: "2021 → 2023", current: false },
  { role: "Suporte Técnico", company: "Thato LTDA", period: "2018 → 2020", current: false },
];

const education = [
  { role: "Análise e Dev. de Sistemas", company: "Universidade Estadual", period: "2019 → 2022", current: false },
  { role: "Especialização UI/UX", company: "Escola de Design Digital", period: "2022 → 2023", current: false },
  { role: "Arquitetura de Software", company: "Plataforma Online", period: "2023 → 2024", current: false },
];

export function Qualifications() {
  const [tab, setTab] = useState<"exp" | "edu">("exp");
  const items = tab === "exp" ? experience : education;

  return (
    <section
      id="qualifications"
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
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-16">
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
              // QUALIFICAÇÕES
            </div>
            <h2
              className="mb-8"
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: "clamp(2.5rem, 4vw, 3.8rem)",
                lineHeight: 0.95,
                color: "#f0f0f8",
                letterSpacing: "0.01em",
              }}
            >
              MINHA<br />
              <span style={{ color: "transparent", WebkitTextStroke: "1.5px #00ff88" }}>
                JORNADA.
              </span>
            </h2>

            <div className="flex flex-col gap-2">
              {[
                { key: "exp", label: "EXPERIÊNCIA" },
                { key: "edu", label: "EDUCAÇÃO" },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setTab(key as "exp" | "edu")}
                  className="text-left px-5 py-3.5 transition-all duration-200"
                  style={{
                    border: `1px solid ${tab === key ? "#00ff88" : "rgba(255,255,255,0.07)"}`,
                    background: tab === key ? "rgba(0,255,136,0.06)" : "transparent",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.72rem",
                    letterSpacing: "0.15em",
                    color: tab === key ? "#00ff88" : "#6b6b80",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div
              className="absolute left-4 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, #00ff88, rgba(0,255,136,0.1))" }}
            />

            <div className="flex flex-col gap-0">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="group relative pl-12 pb-8 last:pb-0"
                >
                  {/* Node */}
                  <div
                    className="absolute left-2.5 top-2 w-3 h-3 -translate-x-1/2 transition-all duration-200"
                    style={{
                      background: item.current ? "#00ff88" : "#040407",
                      border: `2px solid ${item.current ? "#00ff88" : "rgba(0,255,136,0.4)"}`,
                      boxShadow: item.current ? "0 0 12px rgba(0,255,136,0.6)" : "none",
                    }}
                  />

                  <div
                    className="p-5 transition-all duration-200 group-hover:border-[rgba(0,255,136,0.2)]"
                    style={{
                      border: "1px solid rgba(255,255,255,0.07)",
                      background: "#06060a",
                    }}
                  >
                    <div className="flex items-start justify-between gap-3 flex-wrap mb-1">
                      <h3
                        style={{
                          fontFamily: "'Anton', sans-serif",
                          fontSize: "1.05rem",
                          color: "#f0f0f8",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {item.role.toUpperCase()}
                      </h3>
                      {item.current && (
                        <span
                          style={{
                            fontFamily: "'DM Mono', monospace",
                            fontSize: "0.62rem",
                            letterSpacing: "0.1em",
                            color: "#00ff88",
                            border: "1px solid rgba(0,255,136,0.3)",
                            padding: "2px 8px",
                            background: "rgba(0,255,136,0.07)",
                          }}
                        >
                          ATUAL
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span
                        style={{
                          fontFamily: "'Barlow', sans-serif",
                          fontWeight: 300,
                          fontSize: "0.875rem",
                          color: "#6b6b80",
                        }}
                      >
                        {item.company}
                      </span>
                      <span
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "0.7rem",
                          color: "#00ff88",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {item.period}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
