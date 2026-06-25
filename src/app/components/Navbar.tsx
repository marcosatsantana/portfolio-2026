import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "INÍCIO", href: "home" },
  { label: "SOBRE", href: "about" },
  { label: "STACK", href: "stack" },
  { label: "SERVIÇOS", href: "services" },
  { label: "PORTFÓLIO", href: "portfolio" },
  { label: "CONTATO", href: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
      setScrolled(scrollTop > 50);

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].href);
        if (section && section.getBoundingClientRect().top <= 120) {
          setActive(navLinks[i].href);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* Scroll progress */}
      <div
        className="fixed top-0 left-0 z-[60] h-[2px] transition-all duration-100"
        style={{ width: `${progress}%`, background: "linear-gradient(90deg, #00ff88, #ff0055)" }}
      />

      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(4,4,7,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,255,136,0.12)" : "none",
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2 group"
          >
            <div
              className="relative w-9 h-9 flex items-center justify-center overflow-hidden"
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
                MK
              </span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "rgba(0,255,136,0.12)" }}
              />
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
                MKDESIGNERS
              </div>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.6rem",
                  color: "#00ff88",
                  letterSpacing: "0.1em",
                }}
              >
                FULLSTACK_DEV
              </div>
            </div>
          </button>

          <ul className="hidden md:flex items-center gap-0">
            {navLinks.map(({ label, href }) => {
              const isActive = active === href;
              return (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="relative px-4 py-2 group overflow-hidden"
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.72rem",
                      letterSpacing: "0.12em",
                      color: isActive ? "#00ff88" : "#6b6b80",
                    }}
                  >
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-0 right-0 h-[1px]"
                        style={{ background: "#00ff88" }}
                      />
                    )}
                    <span className="relative z-10 transition-colors duration-200 group-hover:text-[#f0f0f8]">
                      {label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <button
            className="hidden md:flex items-center gap-2 px-5 py-2 transition-all duration-200 group overflow-hidden relative"
            style={{ border: "1px solid #00ff88" }}
            onClick={() => scrollTo("contact")}
          >
            <div
              className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
              style={{ background: "#00ff88" }}
            />
            <span
              className="relative z-10 transition-colors duration-300 group-hover:text-[#040407]"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                color: "#00ff88",
              }}
            >
              FALE_COMIGO
            </span>
          </button>

          <button className="md:hidden" style={{ color: "#f0f0f8" }} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {menuOpen && (
          <div
            className="md:hidden px-6 pb-6 flex flex-col gap-1"
            style={{ background: "rgba(4,4,7,0.98)", borderTop: "1px solid rgba(0,255,136,0.1)" }}
          >
            {navLinks.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className="text-left py-3 px-2 transition-colors"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  color: active === href ? "#00ff88" : "#6b6b80",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
