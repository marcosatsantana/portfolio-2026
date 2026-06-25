import { useState, useEffect } from "react";
import { ArrowUpRight, X, ChevronRight } from "lucide-react";

interface Project {
  title: string;
  problem: string;
  solution: string;
  challenge: string;
  image: string;
  tags: string[];
  link?: string;
  year: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "Ferramentaria S.A. — Gestão de Ativos",
    problem: "Perda de rastreabilidade de ferramentas industriais de alto custo, lentidão no checkout de equipamentos para mecânicos e falta de validação com ordens de serviço (O.S.) ativas no ERP.",
    solution: "Controle de Acesso Multifilial (RBAC), Módulo de Empréstimos Automatizado, Assinatura Digital de Termos (Paperless), Comunicação Omnichannel, Inventário Dinâmico.",
    challenge: "Integração Direta com ERP via Banco de Dados: Para garantir consistência sem onerar a operação ou depender de APIs de terceiros, a validação de Ordens de Serviço (O.S.) foi implementada consultando diretamente a base de dados relacional do ERP da empresa, garantindo performance e integridade transacional.",
    image: "https://storage.carpalnewholland.cloud/uploads/f4f658e50104b1b06b30d197a41f3861-1782397490610.png",
    tags: ["Node.js (Express)", "PostgreSQL", "OracleDB", "JWT", "Multer", "whatsapp-web.js", "date-fns", "React (Vite)", "TailwindCSS", "Lucide Icons", "Axios"],
    year: "2024",
    category: "SISTEMA"
  },
  {
    title: "Levantamento de Mercado",
    problem: "Falta de dados centralizados sobre a fatia de mercado regional de máquinas vendidas, dificultando o acompanhamento e as tomadas de decisões gerenciais.",
    solution: "Plataforma para registro de máquinas vendidas por região, marca e data. Inclui gerenciamento de catálogos, emissão de relatórios PDF e dashboard analítico.",
    challenge: "Estruturação de consultas complexas para agrupar e cruzar grandes volumes de dados regionais, garantindo a renderização rápida e precisa dos gráficos no dashboard.",
    image: "https://storage.carpalnewholland.cloud/uploads/52aa77f186e28f9790851f3827a6e294-1782397537179.png",
    tags: ["Vite", "TailwindCSS", "Lucide Icons", "date-fns", "Zod", "Recharts", "Bcrypt", "CORS", "JWT", "Knex", "Multer", "PDFKit"],
    year: "2024",
    category: "SISTEMA"
  },
  {
    title: "DRE Manager",
    problem: "Dificuldade e engessamento na organização e criação da estrutura do DRE (Demonstrativo de Resultado do Exercício) exportado para o Power BI.",
    solution: "Sistema com interface 'clica e arrasta' para pré-visualização e montagem da estrutura do DRE, gerenciamento de orçamentos e impressão de relatórios.",
    challenge: "Conexão direta com o sistema ERP NBS via banco de dados OracleDB para busca de informações financeiras em tempo real sem impactar a performance do banco de produção.",
    image: "https://storage.carpalnewholland.cloud/uploads/551ea66cd38534a4e9d5a0790b82ac39-1782397875560.png",
    tags: ["Vite", "TailwindCSS", "Lucide Icons", "jsPDF", "CORS", "Express", "OracleDB"],
    year: "2024",
    category: "SISTEMA"
  },
  {
    title: "Sistema de Totem",
    problem: "Falta de um canal interativo e autônomo para clientes consultarem informações, especificações e mídias de insumos da área de agricultura digital.",
    solution: "Aplicação interativa de autoatendimento exibindo imagens e vídeos de produtos, conectada a uma área administrativa para gestão contínua do catálogo.",
    challenge: "Desenvolvimento de uma interface de usuário altamente fluida e imersiva adaptada especificamente para telas de toque (touchscreen) em quiosques físicos.",
    image: "https://storage.carpalnewholland.cloud/uploads/1d508ab9ed0e02f78806f3a95efe4a04-1782397899295.png",
    tags: ["Vite", "TailwindCSS", "Lucide Icons", "Framer Motion", "Zod", "CORS", "Express", "Knex", "Multer", "PostgreSQL"],
    year: "2024",
    category: "SISTEMA"
  },
  {
    title: "Sistema de Admissão",
    problem: "Processo de integração de novos funcionários lento, repetitivo e manual, exigindo replicação de dados em três sistemas distintos do RH.",
    solution: "Formulário digital de admissão que, após análise e aprovação do DP, automatiza e dispara a integração dos dados simultaneamente nos sistemas TRON, Tangerino e Arquivar.",
    challenge: "Orquestrar a comunicação entre sistemas legados distintos, utilizando drivers nativos (ODBC) para garantir a integridade dos dados inseridos.",
    image: "https://storage.carpalnewholland.cloud/uploads/948ec02c7108a8b5c34f2f4f62e465f7-1782397914724.png",
    tags: ["Vite", "TailwindCSS", "Zod", "Lucide Icons", "Axios", "Bcryptjs", "CORS", "date-fns", "Express", "JWT", "Knex", "Lodash", "Martian", "Multer", "ODBC", "PostgreSQL", "UUID"],
    year: "2024",
    category: "SISTEMA"
  },
  {
    title: "Gestão de Imagens",
    problem: "Trabalho altamente manual para extrair e manter imagens, cubagem e descrições dos produtos atualizados de acordo com o e-commerce da fabricante.",
    solution: "Ferramenta de extração automatizada (scraping) do e-commerce da fabricante com recurso de envio e atualização em massa de múltiplos SKUs.",
    challenge: "Lidar com a extração e manipulação automatizada de arquivos de mídia em larga escala, garantindo o mapeamento correto e a substituição sem falhas no sistema interno.",
    image: "https://storage.carpalnewholland.cloud/uploads/f801106cacbf0e71bfe2815590c10184-1782397943011.png",
    tags: ["Vite", "TailwindCSS", "Zod", "Lucide Icons", "Axios", "CORS", "Express", "Knex", "Multer", "PostgreSQL"],
    year: "2024",
    category: "SISTEMA"
  },
  {
    title: "DP Fluxos",
    problem: "Gargalo operacional e falta de escalabilidade para enviar documentos seguros (folha de ponto, recibos e avisos de férias) aos colaboradores.",
    solution: "Plataforma integrada ao sistema gerencial (TRON) para disparo em massa de documentos aos funcionários, incluindo dashboard de monitoramento de status.",
    challenge: "Gerenciar e manter estáveis múltiplas conexões com diferentes bancos de dados (PostgreSQL, OracleDB, Firebird) de forma concorrente durante envios em massa.",
    image: "https://storage.carpalnewholland.cloud/uploads/1323cb7d66919a7e46ad0c603de1f6c0-1782397958571.png",
    tags: ["React Query", "Axios", "TailwindCSS", "Lucide React", "Framer Motion", "Recharts", "date-fns", "React Signature Canvas", "Vite", "Express", "Knex", "PostgreSQL", "OracleDB", "Node-Firebird", "ODBC", "JWT", "PM2"],
    year: "2024",
    category: "SISTEMA"
  },
  {
    title: "Chamados Carpal",
    problem: "Ausência de métricas claras sobre a porcentagem de atendimento de tickets e o tempo médio de resposta da equipe de Tecnologia da Informação.",
    solution: "Dashboard gerencial focado na equipe de suporte, listando atendentes, porcentagem de conclusão, tempo de resposta e filtros históricos dos últimos chamados.",
    challenge: "Implementar rotinas automatizadas em background para compilar dados operacionais do suporte e alimentar a interface em tempo real.",
    image: "https://storage.carpalnewholland.cloud/uploads/6a0e4a405fa18dc59457d65bad5da939-1782397971002.png",
    tags: ["React Query", "Axios", "TailwindCSS", "Radix UI", "Lucide React", "Recharts", "date-fns", "Vite", "Express", "Knex", "MySQL2", "PostgreSQL", "OracleDB", "Nodemailer", "Node Cron", "CSV Writer"],
    year: "2024",
    category: "SISTEMA"
  },
  {
    title: "NHPV / Key Account",
    problem: "O sistema ERP padrão não possuía mecanismo para sinalizar e priorizar o atendimento de clientes classificados como estratégicos (Key Account / NHPV).",
    solution: "Módulo conectável à base do ERP para tagueamento de clientes especiais, garantindo rápida identificação nas telas de atendimento e emissão de relatórios.",
    challenge: "Realizar a manipulação e a marcação de registros operando de forma direta e segura sob a estrutura da base relacional legada do ERP.",
    image: "https://storage.carpalnewholland.cloud/uploads/3a06fda95fdcb0d10590a677b27c0cb0-1782397993079.png",
    tags: ["React Query", "Axios", "TailwindCSS", "Lucide React", "Framer Motion", "Sonner", "Vite", "Express", "OracleDB", "JWT", "CSV Stringify", "PM2", "Multer"],
    year: "2024",
    category: "SISTEMA"
  },
  {
    title: "Sincronização VTEX & NBS",
    problem: "Desalinhamento contínuo entre os preços e o estoque físico mapeado no ERP e o que estava publicado de forma online na plataforma VTEX.",
    solution: "Serviço autônomo focado em consumir as APIs da VTEX e os dados do ERP interno, mantendo estoques, preços e novos produtos perfeitamente sincronizados.",
    challenge: "Garantir o processamento assíncrono e contínuo de atualizações respeitando rigorosamente os limites de taxa de requisição (Rate Limit) impostos pela API da VTEX.",
    image: "https://storage.carpalnewholland.cloud/uploads/4d5304d2a6949deec4431b13c4c0f0c5-1782398005530.png",
    tags: ["React", "React DOM", "Axios", "TailwindCSS", "Radix UI", "Lucide React", "Vite", "Express", "Prisma", "PostgreSQL", "Node Cron", "PM2", "Form Data"],
    year: "2024",
    category: "SISTEMA"
  },
  {
    title: "Carpal Cloud",
    problem: "Dependência de serviços externos para hospedagem e entrega de arquivos estáticos gerados e consumidos pelas aplicações internas.",
    solution: "Plataforma in-house de armazenamento em nuvem para listar, fazer upload via tokens seguros e servir arquivos utilizando Node.js.",
    challenge: "Implementar um pipeline eficiente de upload capaz de realizar transformações on-the-fly, otimizando as imagens armazenadas sem perder qualidade.",
    image: "https://storage.carpalnewholland.cloud/uploads/de91532b7f52523e1b1e939fc4804d49-1782398018888.png",
    tags: ["Axios", "Lucide React", "Vite", "Serve", "Express", "Prisma", "PostgreSQL", "Multer", "Sharp", "JWT", "Bcryptjs"],
    year: "2024",
    category: "SISTEMA"
  },
  {
    title: "Integração Campos Dealer",
    problem: "Operação isolada sem fluxo automático de informações críticas (notas fiscais, frota e clientes) entre o ERP e o software de CRM.",
    solution: "Middleware responsável por buscar os registros necessários no ERP e enviá-los de modo automático e auditável à API do sistema Campos Dealer.",
    challenge: "Assegurar a confiabilidade do transporte dos dados entre os ambientes e oferecer uma documentação OpenAPI completa do fluxo para manutenções futuras.",
    image: "https://storage.carpalnewholland.cloud/uploads/864bb590fb51784041900e1c11e176ba-1782398031665.png",
    tags: ["React Query", "Axios", "TailwindCSS", "Radix UI", "React Hook Form", "Zod", "Vitest", "Vite", "Express", "Knex", "PostgreSQL", "AssemblyAI", "Swagger", "JWT", "PM2"],
    year: "2024",
    category: "SISTEMA"
  }
];

const categories = ["TODOS", ...Array.from(new Set(projects.map(p => p.category)))];

export function Portfolio() {
  const [filter, setFilter] = useState("TODOS");
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = filter === "TODOS" ? projects : projects.filter((p) => p.category === filter);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  return (
    <section
      id="portfolio"
      style={{ background: "#08080f", position: "relative" }}
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
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
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
              // PORTFÓLIO
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
              PROJETOS<br />
              <span style={{ color: "transparent", WebkitTextStroke: "1.5px #00ff88" }}>
                ENTREGUES.
              </span>
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="px-3 py-1.5 transition-all duration-200 hover:scale-105"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  color: filter === cat ? "#040407" : "#6b6b80",
                  background: filter === cat ? "#00ff88" : "transparent",
                  border: filter === cat ? "1px solid #00ff88" : "1px solid rgba(255,255,255,0.1)",
                  cursor: "none"
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.07)" }}>
          {filtered.map((project, i) => (
            <div
              key={i}
              onClick={() => setSelectedProject(project)}
              className="group relative overflow-hidden flex flex-col cursor-none"
              style={{ background: "#08080f" }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  style={{ filter: hovered === i ? "grayscale(0) contrast(1.05)" : "grayscale(30%)" }}
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(to top, #08080f 0%, rgba(8,8,15,0.4) 60%, transparent 100%)",
                  }}
                />

                {/* Category badge */}
                <div
                  className="absolute top-4 left-4 px-2.5 py-1 z-10 shadow-lg"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.62rem",
                    letterSpacing: "0.12em",
                    color: "#040407",
                    background: "#00ff88",
                  }}
                >
                  {project.category}
                </div>

                {/* Year */}
                <div
                  className="absolute top-4 right-4 z-10"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.08em",
                    color: "#f0f0f8",
                    opacity: 0.8,
                    background: "rgba(0,0,0,0.5)",
                    padding: "2px 8px",
                    borderRadius: "4px"
                  }}
                >
                  {project.year}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3
                    style={{
                      fontFamily: "'Anton', sans-serif",
                      fontSize: "1.25rem",
                      color: "#f0f0f8",
                      letterSpacing: "0.04em",
                      lineHeight: 1.1,
                    }}
                  >
                    {project.title.toUpperCase()}
                  </h3>
                  <div
                    className="flex-shrink-0 w-8 h-8 flex items-center justify-center transition-all duration-200 group-hover:border-[#00ff88] group-hover:text-[#00ff88] group-hover:bg-[rgba(0,255,136,0.1)] rounded-full"
                    style={{
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "#6b6b80",
                    }}
                  >
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                <p
                  className="mb-4 flex-1 line-clamp-3"
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.9rem",
                    color: "#8888a0",
                    lineHeight: 1.6,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }}
                >
                  {project.problem}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-[rgba(255,255,255,0.05)]">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.62rem",
                        letterSpacing: "0.06em",
                        color: "#00ff88",
                        border: "1px solid rgba(0,255,136,0.2)",
                        padding: "2px 6px",
                        background: "rgba(0,255,136,0.05)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.62rem",
                        letterSpacing: "0.06em",
                        color: "#6b6b80",
                        padding: "2px 6px",
                      }}
                    >
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Overlay for Project Details */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
          style={{ background: "rgba(4,4,7,0.85)", backdropFilter: "blur(8px)" }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-5xl max-h-[90vh] overflow-y-auto relative flex flex-col md:flex-row shadow-2xl border border-[rgba(255,255,255,0.1)]"
            style={{ background: "#08080f", scrollbarWidth: 'thin' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:text-[#00ff88] hover:bg-black transition-colors"
              style={{ cursor: "none" }}
            >
              <X size={20} />
            </button>

            {/* Left side: Image */}
            <div className="w-full md:w-2/5 relative min-h-[300px] md:min-h-full flex-shrink-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to right, transparent, #08080f)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080f] via-transparent to-transparent md:hidden" />
              <div className="absolute bottom-6 left-6 right-6">
                <span
                  className="inline-block px-3 py-1 mb-3"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    color: "#040407",
                    background: "#00ff88",
                  }}
                >
                  {selectedProject.category}
                </span>
                <h2
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: "clamp(2rem, 3vw, 2.5rem)",
                    lineHeight: 1,
                    color: "#f0f0f8",
                    letterSpacing: "0.02em",
                  }}
                >
                  {selectedProject.title.toUpperCase()}
                </h2>
              </div>
            </div>

            {/* Right side: Content */}
            <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col gap-8">

              <div>
                <h4 className="flex items-center gap-2 mb-3" style={{ color: "#ff0055", fontFamily: "'DM Mono', monospace", fontSize: "0.85rem", letterSpacing: "0.1em" }}>
                  <ChevronRight size={16} /> O PROBLEMA
                </h4>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, color: "#a0a0b8", lineHeight: 1.7, fontSize: "1.05rem" }}>
                  {selectedProject.problem}
                </p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 mb-3" style={{ color: "#00ff88", fontFamily: "'DM Mono', monospace", fontSize: "0.85rem", letterSpacing: "0.1em" }}>
                  <ChevronRight size={16} /> SOLUÇÃO & FUNCIONALIDADES
                </h4>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, color: "#e0e0e8", lineHeight: 1.7, fontSize: "1.05rem" }}>
                  {selectedProject.solution}
                </p>
              </div>

              <div className="p-6 border-l-2" style={{ borderColor: "#ffaa00", background: "rgba(255, 170, 0, 0.05)" }}>
                <h4 className="flex items-center gap-2 mb-3" style={{ color: "#ffaa00", fontFamily: "'DM Mono', monospace", fontSize: "0.85rem", letterSpacing: "0.1em" }}>
                  DESAFIO TÉCNICO SUPERADO
                </h4>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, color: "#d0d0e0", lineHeight: 1.7, fontSize: "1rem" }}>
                  {selectedProject.challenge}
                </p>
              </div>

              <div>
                <h4 className="mb-4" style={{ color: "#6b6b80", fontFamily: "'DM Mono', monospace", fontSize: "0.85rem", letterSpacing: "0.1em" }}>
                  STACK TECNOLÓGICA
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.75rem",
                        color: "#a0a0b8",
                        border: "1px solid rgba(255,255,255,0.1)",
                        padding: "6px 12px",
                        borderRadius: "2px",
                        background: "rgba(255,255,255,0.03)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
