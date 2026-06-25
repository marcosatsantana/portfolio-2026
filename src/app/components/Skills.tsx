import { useState } from "react";

interface Skill {
  name: string;
  level: "BÁSICO" | "MÉDIO" | "AVANÇADO";
  percent: number;
}

const frontendSkills: Skill[] = [
  { name: "HTML", level: "AVANÇADO", percent: 92 },
  { name: "CSS", level: "AVANÇADO", percent: 88 },
  { name: "JavaScript", level: "MÉDIO", percent: 72 },
  { name: "React", level: "MÉDIO", percent: 78 },
  { name: "Bootstrap", level: "MÉDIO", percent: 68 },
  { name: "Git", level: "BÁSICO", percent: 55 },
];

const backendSkills: Skill[] = [
  { name: "NodeJS", level: "AVANÇADO", percent: 90 },
  { name: "MySql", level: "AVANÇADO", percent: 86 },
  { name: "Oracle", level: "MÉDIO", percent: 70 },
  { name: "PHP", level: "MÉDIO", percent: 64 },
  { name: "Firebase", level: "BÁSICO", percent: 50 },
  { name: "Python", level: "BÁSICO", percent: 44 },
];

const levelMeta: Record<string, { color: string; bar: string }> = {
  BÁSICO: { color: "#ff0055", bar: "#ff005540" },
  MÉDIO: { color: "#00d4ff", bar: "#00d4ff30" },
  AVANÇADO: { color: "#00ff88", bar: "#00ff8830" },
};

export function Skills() {
  const [tab, setTab] = useState<"frontend" | "backend">("frontend");

  const skills = tab === "frontend" ? frontendSkills : backendSkills;

  return (
    <section
      id="skills"
      style={{ background: "#08080f" }}
    >
      <div
        style={{
          height: "60px",
          background: "#040407",
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
          marginBottom: "-1px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-8 pb-24">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-start">
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
              // HABILIDADES
            </div>
            <h2
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: "clamp(2.5rem, 4vw, 3.8rem)",
                lineHeight: 0.95,
                color: "#f0f0f8",
                letterSpacing: "0.01em",
                marginBottom: "1.5rem",
              }}
            >
              MINHAS<br />
              <span style={{ color: "transparent", WebkitTextStroke: "1.5px #ff0055" }}>
                SKILLS.
              </span>
            </h2>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 300,
                fontSize: "0.95rem",
                color: "#6b6b80",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              Competências técnicas desenvolvidas ao longo de 8 anos em projetos
              reais com exigências de produção.
            </p>

            <div className="flex flex-col gap-1">
              {[
                { key: "frontend", label: "FRONTEND" },
                { key: "backend", label: "BACKEND" },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setTab(key as "frontend" | "backend")}
                  className="relative overflow-hidden flex items-center gap-4 px-5 py-3.5 text-left transition-all duration-200 group"
                  style={{
                    border: `1px solid ${tab === key ? "#00ff88" : "rgba(255,255,255,0.07)"}`,
                    background: tab === key ? "rgba(0,255,136,0.06)" : "transparent",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.72rem",
                      letterSpacing: "0.15em",
                      color: tab === key ? "#00ff88" : "#6b6b80",
                    }}
                  >
                    {label}_DEV
                  </span>
                  {tab === key && (
                    <span
                      className="ml-auto"
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.62rem",
                        color: "#00ff88",
                      }}
                    >
                      ATIVO →
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {skills.map((skill) => {
              const meta = levelMeta[skill.level];
              return (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span
                        style={{
                          fontFamily: "'Anton', sans-serif",
                          fontSize: "1.1rem",
                          color: "#f0f0f8",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {skill.name.toUpperCase()}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className="px-2 py-0.5"
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "0.62rem",
                          letterSpacing: "0.1em",
                          color: meta.color,
                          border: `1px solid ${meta.color}50`,
                          background: meta.bar,
                        }}
                      >
                        {skill.level}
                      </span>
                      <span
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "0.72rem",
                          color: meta.color,
                        }}
                      >
                        {skill.percent}%
                      </span>
                    </div>
                  </div>
                  <div
                    className="relative h-1 overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  >
                    <div
                      className="absolute left-0 top-0 h-full transition-all duration-1000"
                      style={{
                        width: `${skill.percent}%`,
                        background: `linear-gradient(90deg, ${meta.color}, ${meta.color}88)`,
                      }}
                    />
                    {/* Segment marks */}
                    {[25, 50, 75].map((mark) => (
                      <div
                        key={mark}
                        className="absolute top-0 bottom-0 w-px"
                        style={{
                          left: `${mark}%`,
                          background: "rgba(0,0,0,0.5)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
