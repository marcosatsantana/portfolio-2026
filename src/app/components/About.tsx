import { Download } from "lucide-react";
import eu from "../../../assets/about.jpg";
export function About() {
  return (
    <section
      id="about"
      style={{ background: "#040407" }}
    >
      {/* Diagonal top */}
      <div
        style={{
          height: "80px",
          background: "#08080f",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)",
          marginBottom: "-1px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Left — image block */}
          <div className="relative">
            <div className="relative">
              {/* Offset frame */}
              <div
                className="absolute -top-3 -left-3 w-full h-full"
                style={{ border: "1px solid rgba(0,255,136,0.2)" }}
              />
              <div
                className="absolute -bottom-3 -right-3 w-full h-full"
                style={{ border: "1px solid rgba(255,0,85,0.2)" }}
              />

              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "4/5", background: "#08080f" }}
              >
                <img
                  src={eu}
                  alt="Marcos Santana - Desenvolvedor FullStack"
                  className="w-full h-full object-cover"
                  style={{ filter: "grayscale(20%) contrast(1.05)" }}
                />
                {/* Scan overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to bottom, transparent 70%, rgba(4,4,7,0.8) 100%)",
                  }}
                />

                {/* Corner tag */}
                <div
                  className="absolute bottom-4 left-4 px-3 py-2"
                  style={{
                    background: "#00ff88",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.12em",
                    color: "#040407",
                    fontWeight: 500,
                  }}
                >
                  DISPONÍVEL_AGORA
                </div>
              </div>
            </div>
          </div>

          {/* Right — content */}
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
              // SOBRE_MIM
            </div>

            <h2
              className="mb-8"
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
                lineHeight: 0.95,
                letterSpacing: "0.01em",
                color: "#f0f0f8",
              }}
            >
              DESIGNER<br />
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1.5px #00ff88",
                }}
              >
                E PROGRAMADOR.
              </span>
            </h2>

            <p
              className="mb-6"
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "1.05rem",
                color: "#8a8a9a",
                lineHeight: 1.85,
                fontWeight: 300,
              }}
            >
              Desenvolvedor Frontend e Backend com forte base em arquitetura SOLID.
              Construo sistemas que escalam, interfaces que convertem e experiências
              que os usuários não esquecem.
            </p>

            <p
              className="mb-10"
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "1.05rem",
                color: "#8a8a9a",
                lineHeight: 1.85,
                fontWeight: 300,
              }}
            >
              Cada projeto é tratado como produto — com atenção aos detalhes técnicos,
              visuais e de negócio. Não escrevo só código. Entrego soluções.
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {[
                "Arquitetura SOLID",
                "UI/UX Design",
                "APIs RESTful",
                "Banco de Dados",
                "Integrações SaaS",
                "Entrega Ágil",
              ].map((feat) => (
                <div
                  key={feat}
                  className="flex items-center gap-2"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.72rem",
                    letterSpacing: "0.06em",
                    color: "#f0f0f8",
                  }}
                >
                  <span style={{ color: "#00ff88", fontSize: "0.8rem" }}>▸</span>
                  {feat}
                </div>
              ))}
            </div>

            <button
              className="group relative overflow-hidden flex items-center gap-3 px-7 py-3.5"
              style={{ border: "1px solid #00ff88" }}
            >
              <div
                className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                style={{ background: "#00ff88" }}
              />
              <Download size={16} className="relative z-10 transition-colors duration-300 group-hover:text-[#040407]" style={{ color: "#00ff88" }} />
              <span
                className="relative z-10 transition-colors duration-300 group-hover:text-[#040407]"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.72rem",
                  letterSpacing: "0.12em",
                  color: "#00ff88",
                }}
              >
                DOWNLOAD_CV
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
