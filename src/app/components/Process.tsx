const steps = [
  {
    num: "01",
    title: "BRIEFING",
    subtitle: "ENTENDER O PROBLEMA",
    description:
      "Mergulho fundo no seu negócio, objetivos e dores antes de escrever uma linha de código. Perguntas difíceis, respostas honestas.",
    accent: "#00ff88",
  },
  {
    num: "02",
    title: "ARQUITETURA",
    subtitle: "PLANEJAR A SOLUÇÃO",
    description:
      "Definição da stack, modelagem de dados, wireframes e arquitetura do sistema. Menos retrabalho, mais velocidade de entrega.",
    accent: "#ff0055",
  },
  {
    num: "03",
    title: "EXECUÇÃO",
    subtitle: "CONSTRUIR COM QUALIDADE",
    description:
      "Desenvolvimento iterativo com entregas parciais. Código limpo, componentizado e documentado. Você acompanha cada passo.",
    accent: "#00d4ff",
  },
  {
    num: "04",
    title: "ENTREGA",
    subtitle: "LANÇAR E EVOLUIR",
    description:
      "Deploy, testes, ajustes finais e suporte pós-lançamento. O projeto não termina na entrega — evolui com você.",
    accent: "#00ff88",
  },
];

export function Process() {
  return (
    <section
      id="process"
      style={{ background: "#08080f", overflow: "hidden" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
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
              // PROCESSO
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
              COMO EU<br />
              <span style={{ color: "transparent", WebkitTextStroke: "1.5px #00ff88" }}>
                TRABALHO.
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
            Processo estruturado. Comunicação direta. Sem surpresas no final.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative flex flex-col p-7 overflow-hidden transition-all duration-300"
              style={{ background: "#08080f" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "#0b0b14";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "#08080f";
              }}
            >
              {/* Hover accent fill */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-1 transition-all duration-300"
                style={{ background: step.accent }}
              />

              {/* Step number — large bg */}
              <div
                className="absolute -top-4 -right-2 select-none pointer-events-none transition-all duration-300 group-hover:opacity-20"
                style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: "7rem",
                  color: "rgba(255,255,255,0.04)",
                  lineHeight: 1,
                }}
              >
                {step.num}
              </div>

              <div
                className="mb-6 inline-flex items-center justify-center w-10 h-10"
                style={{
                  border: `1px solid ${step.accent}50`,
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.75rem",
                  color: step.accent,
                  letterSpacing: "0.05em",
                }}
              >
                {step.num}
              </div>

              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.62rem",
                  color: step.accent,
                  letterSpacing: "0.2em",
                  marginBottom: "0.5rem",
                }}
              >
                {step.subtitle}
              </div>

              <h3
                className="mb-4"
                style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: "1.6rem",
                  color: "#f0f0f8",
                  letterSpacing: "0.04em",
                  lineHeight: 1,
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.9rem",
                  color: "#6b6b80",
                  lineHeight: 1.8,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Connecting arrow row */}
        <div className="hidden md:flex items-center justify-center gap-0 mt-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex-1 flex items-center justify-center"
            >
              {i < steps.length - 1 ? (
                <div
                  className="w-full h-px relative overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                >
                  <div
                    className="absolute left-0 top-0 h-full w-12"
                    style={{
                      background: `linear-gradient(90deg, ${step.accent}, transparent)`,
                      animation: "scanRight 3s linear infinite",
                    }}
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scanRight {
          from { transform: translateX(-100%); }
          to { transform: translateX(900%); }
        }
      `}</style>
    </section>
  );
}
