import { useState } from "react";
import { Mail, MessageCircle, Facebook, Send, Check } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "marcost.santana@hotmail.com",
    href: "mailto:marcost.santana@hotmail.com",
    accent: "#6366f1",
  },
  {
    icon: MessageCircle,
    label: "WHATSAPP",
    value: "+55 (62) 9 8590-5272",
    href: "https://wa.me/5562985905272",
    accent: "#00ff88",
  },
  {
    icon: Facebook,
    label: "MESSENGER",
    value: "user.fb123",
    href: "#",
    accent: "#00d4ff",
  },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", project: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", project: "" });
  };

  return (
    <section
      id="contact"
      style={{ background: "#08080f" }}
    >
      <div
        style={{
          height: "60px",
          background: "#040407",
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
              // CONTATO
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
              VAMOS<br />
              <span style={{ color: "transparent", WebkitTextStroke: "1.5px #ff0055" }}>
                CONVERSAR.
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
            Tem um projeto? Uma ideia? Precisa de um dev que entrega?
            Escolha o canal e me chame.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12">
          {/* Left — methods */}
          <div className="flex flex-col gap-3">
            {contactMethods.map(({ icon: Icon, label, value, href, accent }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-4 p-5 transition-all duration-200"
                style={{
                  border: "1px solid rgba(255,255,255,0.07)",
                  background: "#08080f",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = accent;
                  (e.currentTarget as HTMLAnchorElement).style.background = `${accent}08`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "#08080f";
                }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ border: `1px solid ${accent}40`, background: `${accent}10` }}
                >
                  <Icon size={16} style={{ color: accent }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.62rem",
                      letterSpacing: "0.15em",
                      color: accent,
                      marginBottom: "2px",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    className="truncate"
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "0.9rem",
                      color: "#f0f0f8",
                    }}
                  >
                    {value}
                  </div>
                </div>
                <Send
                  size={14}
                  className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: accent }}
                />
              </a>
            ))}

            {/* CTA box */}
            <div
              className="mt-4 p-6 relative overflow-hidden"
              style={{ background: "#00ff88" }}
            >
              <div
                className="absolute top-0 right-0 w-24 h-24 opacity-10"
                style={{
                  background: "#040407",
                  clipPath: "polygon(100% 0, 100% 100%, 0 0)",
                }}
              />
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.15em",
                  color: "#040407",
                  marginBottom: "0.5rem",
                  opacity: 0.7,
                }}
              >
                STATUS_ATUAL
              </div>
              <div
                style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: "1.3rem",
                  color: "#040407",
                  letterSpacing: "0.03em",
                  lineHeight: 1.1,
                }}
              >
                DISPONÍVEL PARA<br />NOVOS PROJETOS
              </div>
            </div>
          </div>

          {/* Right — form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            style={{
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "2rem",
              background: "#06060a",
            }}
          >
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                color: "#6b6b80",
                marginBottom: "0.5rem",
              }}
            >
              CONTE-ME SOBRE SEU PROJETO
            </div>

            {[
              { key: "name", label: "NOME", placeholder: "Seu nome", type: "text" },
              { key: "email", label: "EMAIL", placeholder: "seu@email.com", type: "email" },
            ].map(({ key, label, placeholder, type }) => (
              <div key={key}>
                <label
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.62rem",
                    letterSpacing: "0.15em",
                    color: "#6b6b80",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  {label}
                </label>
                <input
                  type={type}
                  placeholder={placeholder}
                  value={form[key as "name" | "email"]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  required
                  className="w-full px-4 py-3 outline-none transition-all duration-200"
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.95rem",
                    background: "#08080f",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#f0f0f8",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(0,255,136,0.5)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                />
              </div>
            ))}

            <div>
              <label
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.15em",
                  color: "#6b6b80",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                PROJETO
              </label>
              <textarea
                placeholder="Descreva seu projeto..."
                value={form.project}
                onChange={(e) => setForm({ ...form, project: e.target.value })}
                required
                rows={4}
                className="w-full px-4 py-3 outline-none resize-none transition-all duration-200"
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "0.95rem",
                  background: "#08080f",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#f0f0f8",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(0,255,136,0.5)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>

            <button
              type="submit"
              className="relative overflow-hidden flex items-center justify-center gap-2 py-4 transition-all duration-300"
              style={{
                background: sent ? "#00ff88" : "transparent",
                border: `1px solid ${sent ? "#00ff88" : "rgba(0,255,136,0.5)"}`,
              }}
            >
              {!sent && (
                <div
                  className="absolute inset-0 -translate-x-full hover:translate-x-0 transition-transform duration-300"
                  style={{ background: "rgba(0,255,136,0.08)" }}
                />
              )}
              <span
                className="relative z-10 flex items-center gap-2"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.72rem",
                  letterSpacing: "0.15em",
                  color: sent ? "#040407" : "#00ff88",
                }}
              >
                {sent ? <><Check size={14} /> MENSAGEM_ENVIADA</> : <><Send size={14} /> ENVIAR_MENSAGEM</>}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
