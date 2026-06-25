import { Github, Linkedin, Instagram } from "lucide-react";

const links = [
  { label: "SOBRE", id: "about" },
  { label: "STACK", id: "stack" },
  { label: "PORTFÓLIO", id: "portfolio" },
  { label: "CONTATO", id: "contact" },
];

export function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      style={{
        background: "#040407",
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-9 h-9 flex items-center justify-center"
                style={{ border: "1px solid #00ff88" }}
              >
                <span
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: "0.85rem",
                    color: "#00ff88",
                    letterSpacing: "0.02em",
                  }}
                >
                  MT
                </span>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: "0.95rem",
                    color: "#f0f0f8",
                    letterSpacing: "0.08em",
                  }}
                >
                  marcosteles.me
                </div>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.58rem",
                    color: "#00ff88",
                    letterSpacing: "0.1em",
                  }}
                >
                  FULLSTACK_DEVELOPER
                </div>
              </div>
            </div>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 300,
                fontSize: "0.85rem",
                color: "#6b6b80",
                lineHeight: 1.75,
              }}
            >
              Construindo sistemas, interfaces e experiências que fazem diferença.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-2 md:items-center">
            {links.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="transition-colors duration-200"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.72rem",
                  letterSpacing: "0.15em",
                  color: "#6b6b80",
                  textAlign: "left",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#f0f0f8")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#6b6b80")}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-3 md:justify-end">
            {[
              { Icon: Github, label: "GitHub" },
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Instagram, label: "Instagram" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center transition-all duration-200 group"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#6b6b80",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#00ff88";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#00ff88";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#6b6b80";
                }}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              color: "#3a3a48",
            }}
          >
            © 2025 marcosteles.me. TODOS OS DIREITOS RESERVADOS.
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              color: "#3a3a48",
            }}
          >
            GOIÂNIA — BR / ONLINE_24H
          </div>
        </div>
      </div>
    </footer>
  );
}
