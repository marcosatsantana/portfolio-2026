import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  accent: string;
}

const stats: StatItem[] = [
  { value: 8, suffix: "", label: "ANOS", sublabel: "EXPERIÊNCIA TOTAL", accent: "#00ff88" },
  { value: 48, suffix: "+", label: "PROJETOS", sublabel: "ENTREGUES COM SUCESSO", accent: "#ff0055" },
  { value: 5, suffix: "", label: "EMPRESAS", sublabel: "ATUAÇÃO PROFISSIONAL", accent: "#00d4ff" },
  { value: 100, suffix: "%", label: "DEDICAÇÃO", sublabel: "EM CADA ENTREGA", accent: "#00ff88" },
];

function Counter({ value, suffix, accent }: { value: number; suffix: string; accent: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const t = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(t);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref}>
      <span style={{ color: accent }}>{count}</span>
      <span style={{ color: accent }}>{suffix}</span>
    </div>
  );
}

export function Stats() {
  return (
    <section
      style={{ background: "#040407", borderTop: "1px solid rgba(0,255,136,0.08)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ borderLeft: "1px solid rgba(255,255,255,0.07)" }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col justify-between p-8 group transition-all duration-300 relative overflow-hidden"
              style={{
                borderRight: "1px solid rgba(255,255,255,0.07)",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `${stat.accent}06` }}
              />

              <div
                className="relative"
                style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: "clamp(3rem, 5vw, 5rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                <Counter value={stat.value} suffix={stat.suffix} accent={stat.accent} />
              </div>

              <div className="relative mt-4">
                <div
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: "1.2rem",
                    color: "#f0f0f8",
                    letterSpacing: "0.05em",
                  }}
                >
                  {stat.label}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.65rem",
                    color: "#6b6b80",
                    letterSpacing: "0.12em",
                    marginTop: "4px",
                  }}
                >
                  {stat.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
