import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { About } from "./components/About";
import { TechStack } from "./components/TechStack";
import { Skills } from "./components/Skills";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Qualifications } from "./components/Qualifications";
import { Portfolio } from "./components/Portfolio";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[999] transition-transform duration-75"
      style={{
        left: pos.x - 200,
        top: pos.y - 200,
        width: 400,
        height: 400,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,255,136,0.04) 0%, transparent 70%)",
        transform: "translate(0,0)",
      }}
    />
  );
}

export default function App() {
  return (
    <div
      style={{
        fontFamily: "'Barlow', 'Anton', 'DM Mono', sans-serif",
        background: "#040407",
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <style>{`
        html {
          scroll-behavior: smooth;
          cursor: none;
        }

        * {
          cursor: none !important;
        }

        /* Custom cursor */
        .mk-cursor {
          position: fixed;
          z-index: 9999;
          pointer-events: none;
          mix-blend-mode: difference;
        }

        .mk-cursor-dot {
          width: 6px;
          height: 6px;
          background: #00ff88;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease;
        }

        .mk-cursor-ring {
          width: 28px;
          height: 28px;
          border: 1px solid rgba(0,255,136,0.5);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.15s ease;
        }

        body:has(button:hover) .mk-cursor-ring,
        body:has(a:hover) .mk-cursor-ring {
          transform: translate(-50%, -50%) scale(1.5);
          background: rgba(0,255,136,0.05);
        }

        /* Grain overlay */
        body::after {
          content: '';
          position: fixed;
          inset: 0;
          z-index: 1000;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.35;
          mix-blend-mode: overlay;
        }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #040407; }
        ::-webkit-scrollbar-thumb { background: #00ff88; }

        /* Text selection */
        ::selection {
          background: rgba(0,255,136,0.25);
          color: #f0f0f8;
        }

        /* Input placeholder */
        ::placeholder { color: #3a3a52 !important; }

        /* Hide scrollbar while not scrolling */
        * {
          scrollbar-width: thin;
          scrollbar-color: #00ff88 #040407;
        }

        /* Glitch animation */
        @keyframes glitch-clip-1 {
          0%, 100% { clip-path: polygon(0 10%, 100% 10%, 100% 30%, 0 30%); transform: translateX(-4px); }
          50% { clip-path: polygon(0 50%, 100% 50%, 100% 70%, 0 70%); transform: translateX(4px); }
        }

        @keyframes glitch-clip-2 {
          0%, 100% { clip-path: polygon(0 60%, 100% 60%, 100% 80%, 0 80%); transform: translateX(3px); }
          50% { clip-path: polygon(0 20%, 100% 20%, 100% 40%, 0 40%); transform: translateX(-3px); }
        }
      `}</style>

      <CursorGlow />
      <CustomCursor />

      <Navbar />
      <Hero />
      <Stats />
      <About />
      <TechStack />
      <Skills />
      <Services />
      <Process />
      <Qualifications />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ring, setRing] = useState({ x: -100, y: -100 });
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      requestAnimationFrame(() => setRing({ x: e.clientX, y: e.clientY }));
    };
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <>
      <div
        className="mk-cursor"
        style={{ left: pos.x, top: pos.y }}
      >
        <div
          className="mk-cursor-dot"
          style={{ transform: `translate(-50%, -50%) scale(${clicking ? 0.5 : 1})` }}
        />
      </div>
      <div
        className="mk-cursor"
        style={{ left: ring.x, top: ring.y }}
      >
        <div
          className="mk-cursor-ring"
          style={{ transform: `translate(-50%, -50%) scale(${clicking ? 0.8 : 1})` }}
        />
      </div>
    </>
  );
}
