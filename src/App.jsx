import React, { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Blocks,
  Check,
  ChevronRight,
  ClipboardCheck,
  Code2,
  Cpu,
  Factory,
  Gauge,
  Lightbulb,
  Mail,
  Menu,
  Network,
  PenTool,
  Settings2,
  ShieldCheck,
  TrainFront,
  Wrench,
  X,
  Zap,
} from "lucide-react";

const languageOptions = [["fr", "Français"], ["en", "English"], ["it", "Italiano"]];
const serviceIcons = [PenTool, Blocks, Code2, ClipboardCheck, Wrench];
const industryIcons = [Factory, Settings2, Cpu, Zap, TrainFront, Lightbulb];

const translations = {
  fr: {
    language: "Langue",
    nav: [["Services", "services"], ["Méthode", "process"], ["Secteurs", "industries"], ["À propos", "about"], ["Contact", "contact"]],
    cta: "Parler de votre projet",
    menu: "Ouvrir la navigation",
    logoTagline: "INGÉNIERIE · DÉVELOPPEMENT · LIVRAISON",
    hero: {
      eyebrow: "Partenaire d'ingénierie de la définition à la livraison",
      lines: ["Ingénierie.", "Développement.", "Livraison."],
      copy: "Nous aidons les entreprises à transformer leurs défis techniques et leurs idées de produits en solutions pratiques et fiables grâce aux études d'ingénierie, au développement logiciel et automatisé, au prototypage, à l'intégration et au pilotage de projets.",
      services: "Découvrir nos services",
      strengths: [["01", "Vision système"], ["02", "Équipes flexibles"], ["03", "Responsabilité de livraison"]],
    },
    services: {
      eyebrow: "Services",
      title: "Des expertises structurées autour du projet, pas d'une technologie.",
      copy: "Nous intervenons là où votre projet a besoin d'analyse, de développement, de coordination ou de mise en œuvre.",
      cards: [
        ["Études d'ingénierie", "Analyse technique, études de faisabilité, définition des besoins, développement de concepts et documentation d'ingénierie."],
        ["Développement de produits & prototypes", "Développement de produits, machines, systèmes et prototypes fonctionnels, du concept jusqu'à la validation."],
        ["Solutions logicielles & automatisation", "Logiciels sur mesure, systèmes automatisés, contrôle-commande, capteurs, acquisition de données et outils techniques."],
        ["Gestion de projets techniques", "Planification, coordination, gestion des fournisseurs, leadership technique et soutien à l'exécution du projet."],
        ["Intégration & mise en œuvre", "Assemblage, intégration système, essais, mise en service et accompagnement jusqu'à une solution opérationnelle."],
      ],
    },
    process: {
      eyebrow: "Notre méthode",
      title: "Une progression claire, de la question initiale au résultat.",
      copy: "La méthode s'adapte au projet, mais chaque étape reste orientée vers une décision, une validation ou un livrable concret.",
      steps: [
        ["01", "Comprendre", "Clarifier le besoin, le contexte, les contraintes et les objectifs."],
        ["02", "Définir", "Structurer les exigences, le concept, le périmètre et le plan d'action."],
        ["03", "Développer", "Concevoir et réaliser la solution avec les disciplines nécessaires."],
        ["04", "Valider", "Tester les fonctions, les performances, les risques et l'adéquation au besoin."],
        ["05", "Livrer", "Finaliser, documenter, intégrer et accompagner le déploiement."],
      ],
    },
    industries: {
      eyebrow: "Secteurs",
      title: "Une approche applicable à plusieurs environnements techniques.",
      copy: "Notre valeur réside dans la capacité à relier les disciplines et à faire avancer des projets complexes.",
      items: ["Industrie manufacturière", "Équipements industriels", "Automatisation & Robotique", "Énergie & Systèmes fluides", "Transport & Mobilité", "Technologie & Startups hardware"],
    },
    about: {
      eyebrow: "À propos",
      title: "Votre département d'ingénierie flexible.",
      p1: "Synertia Solutions apporte un soutien d'ingénierie flexible aux entreprises qui développent des produits, des équipements et des projets techniques.",
      p2: "Nous combinons expertise d'ingénierie, développement logiciel, prototypage, intégration et leadership de projet pour transformer les idées en solutions pratiques et fiables.",
      coverage: "Basés en France. Nous accompagnons des projets d'ingénierie partout en Europe.",
      points: ["Conseil technique indépendant", "Compétences adaptées au projet", "Un interlocuteur de coordination", "Engagement jusqu'au résultat"],
      panelTitle: "Un partenaire.",
      panelCopy: "Plusieurs disciplines. Un objectif commun.",
    },
    contact: {
      eyebrow: "Échangeons",
      title: "Vous avez un défi technique ou une idée de produit ?",
      copy: "Parlons de la manière de la transformer en une solution fiable et réalisable.",
      scopeTitle: "Périmètre multidisciplinaire",
      scopeCopy: "Ingénierie, logiciel, automatisation, prototype et livraison.",
      privacyTitle: "Confidentialité par défaut",
      privacyCopy: "Votre cahier des charges est traité avec discrétion professionnelle.",
      name: "Nom", company: "Entreprise", email: "E-mail", description: "Description du projet",
      namePlaceholder: "Votre nom", companyPlaceholder: "Nom de l'entreprise",
      descriptionPlaceholder: "Décrivez le besoin, le contexte et le résultat attendu...",
      send: "Envoyer la demande", success: "Votre demande est enregistrée.", again: "Envoyer un autre message",
    },
    footer: "De la définition à la livraison.",
  },
  en: {
    language: "Language",
    nav: [["Services", "services"], ["Process", "process"], ["Industries", "industries"], ["About", "about"], ["Contact", "contact"]],
    cta: "Discuss a Project", menu: "Toggle navigation",
    logoTagline: "ENGINEERING · DEVELOPMENT · DELIVERY",
    hero: {
      eyebrow: "Engineering partner from definition to delivery",
      lines: ["Engineering.", "Development.", "Delivery."],
      copy: "We help companies transform technical challenges and product ideas into practical, reliable solutions through engineering studies, software and automation development, prototyping, integration, and technical project leadership.",
      services: "Explore our services",
      strengths: [["01", "Systems perspective"], ["02", "Flexible teams"], ["03", "Delivery ownership"]],
    },
    services: {
      eyebrow: "Services", title: "Expertise structured around the project, not one technology.",
      copy: "We contribute wherever your project needs analysis, development, coordination, or implementation.",
      cards: [
        ["Engineering Studies", "Technical analysis, feasibility studies, requirements definition, concept development, and engineering documentation."],
        ["Product & Prototype Development", "Development of products, machines, systems, and functional prototypes from concept through validation."],
        ["Software & Automation Solutions", "Custom software, automation systems, control applications, sensors, data acquisition, and technical tools."],
        ["Technical Project Management", "Planning, coordination, supplier management, technical leadership, and project execution support."],
        ["Integration & Implementation", "Assembly, system integration, testing, commissioning, and support through to an operational solution."],
      ],
    },
    process: {
      eyebrow: "How we work", title: "A clear progression from the initial question to the result.",
      copy: "The method adapts to the project, but every stage is tied to a decision, validation, or concrete deliverable.",
      steps: [
        ["01", "Understand", "Clarify the need, context, constraints, and objectives."],
        ["02", "Define", "Structure the requirements, concept, scope, and action plan."],
        ["03", "Develop", "Design and build the solution with the disciplines required."],
        ["04", "Validate", "Test functions, performance, risks, and fit with the need."],
        ["05", "Deliver", "Finalize, document, integrate, and support deployment."],
      ],
    },
    industries: {
      eyebrow: "Industries", title: "An approach that works across technical environments.",
      copy: "Our value is the ability to connect disciplines and move complex projects forward.",
      items: ["Manufacturing", "Industrial Equipment", "Automation & Robotics", "Energy & Fluid Systems", "Transportation & Mobility", "Technology & Hardware Startups"],
    },
    about: {
      eyebrow: "About", title: "Your flexible engineering department.",
      p1: "Synertia Solutions provides flexible engineering support for companies developing products, equipment, and technical projects.",
      p2: "We combine engineering expertise, software development, prototyping, integration, and project leadership to transform ideas into practical and reliable solutions.",
      coverage: "Based in France. Supporting engineering projects across Europe.",
      points: ["Independent technical advice", "Project-specific capabilities", "One coordination point", "Commitment through delivery"],
      panelTitle: "One partner.", panelCopy: "Multiple disciplines. One shared objective.",
    },
    contact: {
      eyebrow: "Start a conversation", title: "Have a technical challenge or product idea?",
      copy: "Let's discuss how to turn it into a reliable and achievable solution.",
      scopeTitle: "Cross-disciplinary scope", scopeCopy: "Engineering, software, automation, prototypes, and delivery.",
      privacyTitle: "Confidential by default", privacyCopy: "Your technical brief is handled with professional discretion.",
      name: "Name", company: "Company", email: "Email", description: "Project Description",
      namePlaceholder: "Your name", companyPlaceholder: "Company name",
      descriptionPlaceholder: "Describe the need, context, and expected outcome...",
      send: "Send Project Brief", success: "Your request has been recorded.", again: "Send another message",
    },
    footer: "From definition to delivery.",
  },
  it: {
    language: "Lingua",
    nav: [["Servizi", "services"], ["Metodo", "process"], ["Settori", "industries"], ["Chi siamo", "about"], ["Contatti", "contact"]],
    cta: "Parliamo del progetto", menu: "Apri la navigazione",
    logoTagline: "INGEGNERIA · SVILUPPO · CONSEGNA",
    hero: {
      eyebrow: "Partner ingegneristico dalla definizione alla consegna",
      lines: ["Ingegneria.", "Sviluppo.", "Consegna."],
      copy: "Aiutiamo le aziende a trasformare sfide tecniche e idee di prodotto in soluzioni pratiche e affidabili attraverso studi di ingegneria, sviluppo software e automazione, prototipazione, integrazione e leadership tecnica di progetto.",
      services: "Scopri i nostri servizi",
      strengths: [["01", "Visione di sistema"], ["02", "Team flessibili"], ["03", "Responsabilità di consegna"]],
    },
    services: {
      eyebrow: "Servizi", title: "Competenze strutturate attorno al progetto, non a una tecnologia.",
      copy: "Interveniamo dove il progetto necessita di analisi, sviluppo, coordinamento o implementazione.",
      cards: [
        ["Studi di ingegneria", "Analisi tecnica, studi di fattibilità, definizione dei requisiti, sviluppo del concetto e documentazione ingegneristica."],
        ["Sviluppo prodotti e prototipi", "Sviluppo di prodotti, macchine, sistemi e prototipi funzionali dal concetto alla validazione."],
        ["Soluzioni software e automazione", "Software su misura, sistemi automatizzati, applicazioni di controllo, sensori, acquisizione dati e strumenti tecnici."],
        ["Gestione tecnica dei progetti", "Pianificazione, coordinamento, gestione fornitori, leadership tecnica e supporto all'esecuzione."],
        ["Integrazione e implementazione", "Assemblaggio, integrazione dei sistemi, test, messa in servizio e supporto fino alla soluzione operativa."],
      ],
    },
    process: {
      eyebrow: "Come lavoriamo", title: "Un percorso chiaro dalla domanda iniziale al risultato.",
      copy: "Il metodo si adatta al progetto, ma ogni fase porta a una decisione, una validazione o un risultato concreto.",
      steps: [
        ["01", "Comprendere", "Chiarire il bisogno, il contesto, i vincoli e gli obiettivi."],
        ["02", "Definire", "Strutturare requisiti, concetto, perimetro e piano d'azione."],
        ["03", "Sviluppare", "Progettare e realizzare la soluzione con le discipline necessarie."],
        ["04", "Validare", "Testare funzioni, prestazioni, rischi e coerenza con il bisogno."],
        ["05", "Consegnare", "Finalizzare, documentare, integrare e supportare il deployment."],
      ],
    },
    industries: {
      eyebrow: "Settori", title: "Un approccio applicabile a diversi ambienti tecnici.",
      copy: "Il nostro valore consiste nel collegare le discipline e far avanzare progetti complessi.",
      items: ["Produzione industriale", "Attrezzature industriali", "Automazione e Robotica", "Energia e Sistemi fluidici", "Trasporti e Mobilità", "Tecnologia e Startup hardware"],
    },
    about: {
      eyebrow: "Chi siamo", title: "Il vostro reparto di ingegneria flessibile.",
      p1: "Synertia Solutions offre supporto ingegneristico flessibile alle aziende che sviluppano prodotti, attrezzature e progetti tecnici.",
      p2: "Combiniamo competenze ingegneristiche, sviluppo software, prototipazione, integrazione e leadership di progetto per trasformare le idee in soluzioni pratiche e affidabili.",
      coverage: "Con sede in Francia. Supportiamo progetti di ingegneria in tutta Europa.",
      points: ["Consulenza tecnica indipendente", "Competenze adatte al progetto", "Un unico punto di coordinamento", "Impegno fino alla consegna"],
      panelTitle: "Un solo partner.", panelCopy: "Più discipline. Un obiettivo comune.",
    },
    contact: {
      eyebrow: "Iniziamo a parlare", title: "Avete una sfida tecnica o un'idea di prodotto?",
      copy: "Parliamo di come trasformarla in una soluzione affidabile e realizzabile.",
      scopeTitle: "Competenze multidisciplinari", scopeCopy: "Ingegneria, software, automazione, prototipi e consegna.",
      privacyTitle: "Riservatezza fin dall'inizio", privacyCopy: "Il vostro brief tecnico viene gestito con discrezione professionale.",
      name: "Nome", company: "Azienda", email: "E-mail", description: "Descrizione del progetto",
      namePlaceholder: "Il vostro nome", companyPlaceholder: "Nome dell'azienda",
      descriptionPlaceholder: "Descrivete il bisogno, il contesto e il risultato atteso...",
      send: "Invia la richiesta", success: "La richiesta è stata registrata.", again: "Invia un altro messaggio",
    },
    footer: "Dalla definizione alla consegna.",
  },
};

function Logo({ tagline }) {
  return (
    <a href="#top" className="flex items-center" aria-label="Synertia Solutions home">
      <img src="./synertia-mark.png" alt="Synertia Solutions" className="h-11 w-11 object-contain sm:hidden" />
      <span className="hidden sm:block">
        <img src="./synertia-logo-light.png" alt="Synertia Solutions" className="h-8 w-auto object-contain" />
        <span className="mt-0.5 block text-center text-[6px] font-bold tracking-[.19em] text-slate-400">{tagline}</span>
      </span>
    </a>
  );
}

function Heading({ eyebrow, title, copy, light = false }) {
  return (
    <div className="max-w-2xl" data-reveal>
      <p className={`eyebrow mb-5 text-xs font-bold uppercase tracking-[.22em] ${light ? "text-signal" : "text-blueprint"}`}>{eyebrow}</p>
      <h2 className={`text-3xl font-black leading-[1.08] tracking-[-.035em] sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {copy && <p className={`mt-5 max-w-xl text-base leading-7 ${light ? "text-slate-300" : "text-steel"}`}>{copy}</p>}
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = useState(() => {
    const query = new URLSearchParams(window.location.search).get("lang");
    if (translations[query]) return query;
    try {
      const saved = localStorage.getItem("synertia-rework-language");
      return translations[saved] ? saved : "fr";
    } catch { return "fr"; }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
    try { localStorage.setItem("synertia-rework-language", language); } catch { /* Preview may block storage. */ }
  }, [language]);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -48px" });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const selectLanguage = (value) => {
    setLanguage(value);
    setSubmitted(false);
  };

  return (
    <div id="top" className="overflow-x-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/90 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <Logo tagline={t.logoTagline} />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {t.nav.map(([label, id]) => <a key={id} href={`#${id}`} className="text-sm font-semibold text-slate-300 hover:text-white">{label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <label className="relative flex h-10 items-center border border-white/20">
              <span className="sr-only">{t.language}</span>
              <select value={language} onChange={(e) => selectLanguage(e.target.value)} aria-label={t.language} className="h-full cursor-pointer appearance-none bg-transparent pl-3 pr-8 text-[11px] font-extrabold uppercase tracking-wider">
                {languageOptions.map(([code, label]) => <option key={code} value={code} className="bg-white text-ink">{label}</option>)}
              </select>
              <ArrowDown size={13} className="pointer-events-none absolute right-2 text-slate-400" />
            </label>
            <a href="#contact" className="hidden items-center gap-2 bg-blueprint px-5 py-3 text-sm font-bold hover:bg-signal xl:flex">{t.cta}<ArrowRight size={16} /></a>
            <button className="grid h-10 w-10 place-items-center border border-white/20 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={t.menu}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
          </div>
        </div>
        {menuOpen && <nav className="border-t border-white/10 bg-ink px-5 py-5 lg:hidden">{t.nav.map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="flex items-center justify-between border-b border-white/10 py-4 text-sm font-bold text-slate-200">{label}<ChevronRight size={16} /></a>)}</nav>}
      </header>

      <main>
        <section className="relative flex min-h-[760px] items-center overflow-hidden bg-ink pt-[76px] text-white lg:min-h-[850px]">
          <img src="./engineering-hero.png" alt="" className="hero-image absolute inset-0 h-full w-full object-cover object-[68%_center]" />
          <div className="hero-mask absolute inset-0" />
          <div className="technical-grid absolute inset-0 opacity-20" />
          <div className="relative mx-auto w-full max-w-7xl px-5 py-24 lg:px-8">
            <div className="hero-content max-w-4xl">
              <p className="hero-item mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[.25em] text-signal"><span className="h-px w-9 bg-signal" />{t.hero.eyebrow}</p>
              <h1 className="hero-item text-[clamp(3rem,7vw,6.4rem)] font-black leading-[.92] tracking-[-.055em]">
                {t.hero.lines[0]}<span className="block text-signal">{t.hero.lines[1]}</span>{t.hero.lines[2]}
              </h1>
              <p className="hero-item mt-8 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">{t.hero.copy}</p>
              <div className="hero-item mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="action-link flex items-center justify-center gap-3 bg-blueprint px-7 py-4 text-sm font-extrabold hover:bg-signal">{t.cta}<ArrowRight size={17} /></a>
                <a href="#services" className="action-link flex items-center justify-center gap-3 border border-white/30 bg-white/5 px-7 py-4 text-sm font-extrabold hover:border-white/60 hover:bg-white/10">{t.hero.services}<ArrowDown size={17} /></a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 hidden w-full max-w-7xl -translate-x-1/2 grid-cols-3 border-x border-t border-white/10 bg-ink/75 md:grid">
            {t.hero.strengths.map(([n,text]) => <div key={n} className="flex items-center gap-4 border-r border-white/10 px-8 py-5 last:border-0"><span className="font-mono text-xs text-signal">{n}</span><span className="text-xs font-bold uppercase tracking-[.16em] text-slate-300">{text}</span></div>)}
          </div>
        </section>

        <section id="services" className="scroll-mt-20 bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Heading eyebrow={t.services.eyebrow} title={t.services.title} copy={t.services.copy} />
            <div className="mt-14 grid gap-px bg-slate-200 md:grid-cols-2 lg:grid-cols-5">
              {t.services.cards.map(([title,copy],i) => {
                const Icon = serviceIcons[i];
                return <article key={title} data-reveal style={{ "--reveal-delay": `${i * 70}ms` }} className="interactive-card group bg-white p-7 hover:bg-mist lg:p-8">
                  <div className="mb-9 flex items-start justify-between"><span className="grid h-12 w-12 place-items-center bg-blueprint text-white"><Icon size={23} /></span><span className="font-mono text-xs text-slate-400">0{i+1}</span></div>
                  <h3 className="text-lg font-extrabold tracking-tight">{title}</h3><p className="mt-4 text-sm leading-6 text-steel">{copy}</p><div className="mt-7 h-0.5 w-8 bg-blueprint transition-all group-hover:w-16" />
                </article>;
              })}
            </div>
          </div>
        </section>

        <section id="process" className="scroll-mt-20 bg-navy py-24 text-white lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Heading eyebrow={t.process.eyebrow} title={t.process.title} copy={t.process.copy} light />
            <div className="relative mt-16 grid gap-8 lg:grid-cols-5 lg:gap-0">
              <div className="absolute left-0 right-0 top-6 hidden h-px bg-white/15 lg:block" />
              {t.process.steps.map(([n,title,copy],i) => <article key={n} data-reveal style={{ "--reveal-delay": `${i * 90}ms` }} className="relative lg:pr-8"><div className="process-node relative z-10 mb-7 grid h-12 w-12 place-items-center border border-signal bg-navy font-mono text-xs font-bold text-signal">{n}</div><h3 className="text-lg font-extrabold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{copy}</p></article>)}
            </div>
          </div>
        </section>

        <section id="industries" className="technical-grid scroll-mt-20 bg-mist py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-8">
            <Heading eyebrow={t.industries.eyebrow} title={t.industries.title} copy={t.industries.copy} />
            <div className="grid gap-3 sm:grid-cols-2">
              {t.industries.items.map((label,i) => { const Icon=industryIcons[i]; return <div key={label} data-reveal style={{ "--reveal-delay": `${i * 65}ms` }} className="interactive-card card-cut flex items-center gap-5 border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(7,20,38,.04)]"><span className="grid h-11 w-11 place-items-center bg-blueprint/5 text-blueprint"><Icon size={21} /></span><span className="text-sm font-extrabold">{label}</span></div>; })}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 bg-white py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
            <div className="relative min-h-[390px] overflow-hidden bg-ink p-8" data-reveal>
              <div className="technical-grid absolute inset-0 opacity-20" />
              <div className="relative grid h-full min-h-[326px] place-items-center">
                <div className="system-orbit relative grid h-52 w-52 place-items-center rounded-full border border-signal/40">
                  <div className="grid h-32 w-32 place-items-center rounded-full border border-signal bg-blueprint/10"><Network size={46} className="text-signal" /></div>
                  {[["-top-3 left-1/2",Code2],["bottom-4 -left-2",Cpu],["bottom-4 -right-2",Gauge]].map(([pos,Icon]) => <span key={pos} className={`absolute ${pos} grid h-11 w-11 place-items-center bg-blueprint text-white`}><Icon size={20} /></span>)}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 bg-blueprint p-7 text-white"><p className="text-3xl font-black">{t.about.panelTitle}</p><p className="mt-1 text-sm text-blue-100">{t.about.panelCopy}</p></div>
            </div>
            <div data-reveal><Heading eyebrow={t.about.eyebrow} title={t.about.title} /><p className="mt-7 text-lg leading-8 text-steel">{t.about.p1}</p><p className="mt-5 text-lg leading-8 text-steel">{t.about.p2}</p><p className="mt-6 border-l-2 border-signal pl-4 text-sm font-black uppercase tracking-[0.14em] text-ink">{t.about.coverage}</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{t.about.points.map(item => <div key={item} className="flex items-center gap-3 text-sm font-bold"><span className="grid h-5 w-5 place-items-center bg-blueprint text-white"><Check size={13} /></span>{item}</div>)}</div></div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 bg-ink py-24 text-white lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
            <div data-reveal><Heading eyebrow={t.contact.eyebrow} title={t.contact.title} light /><p className="mt-6 max-w-md text-lg leading-8 text-slate-300">{t.contact.copy}</p>
              <div className="mt-10 space-y-5 border-t border-white/10 pt-8">
                <div className="flex gap-4"><Network className="text-signal" size={21} /><div><p className="text-sm font-bold">{t.contact.scopeTitle}</p><p className="mt-1 text-sm text-slate-400">{t.contact.scopeCopy}</p></div></div>
                <div className="flex gap-4"><ShieldCheck className="text-signal" size={21} /><div><p className="text-sm font-bold">{t.contact.privacyTitle}</p><p className="mt-1 text-sm text-slate-400">{t.contact.privacyCopy}</p></div></div>
              </div>
            </div>
            <div className="bg-white p-6 text-ink sm:p-9 lg:p-11" data-reveal style={{ "--reveal-delay": "100ms" }}>
              {submitted ? <div className="flex min-h-[410px] flex-col items-center justify-center text-center"><span className="grid h-16 w-16 place-items-center bg-blueprint text-white"><Check size={30} /></span><h3 className="mt-6 text-2xl font-black">{t.contact.success}</h3><button onClick={() => setSubmitted(false)} className="mt-7 text-sm font-bold text-blueprint">{t.contact.again}</button></div> :
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); e.currentTarget.reset(); }}>
                <div className="grid gap-6 sm:grid-cols-2">
                  {[[t.contact.name,"name",t.contact.namePlaceholder],[t.contact.company,"company",t.contact.companyPlaceholder]].map(([label,name,placeholder]) => <label key={name} className="text-xs font-bold uppercase tracking-[.14em] text-steel">{label}<input required name={name} placeholder={placeholder} className="mt-2 w-full border border-slate-200 bg-mist px-4 py-3.5 text-sm normal-case tracking-normal text-ink focus:border-blueprint" /></label>)}
                  <label className="text-xs font-bold uppercase tracking-[.14em] text-steel sm:col-span-2">{t.contact.email}<input required type="email" name="email" placeholder="name@company.com" className="mt-2 w-full border border-slate-200 bg-mist px-4 py-3.5 text-sm normal-case tracking-normal text-ink focus:border-blueprint" /></label>
                  <label className="text-xs font-bold uppercase tracking-[.14em] text-steel sm:col-span-2">{t.contact.description}<textarea required name="description" rows="5" placeholder={t.contact.descriptionPlaceholder} className="mt-2 w-full resize-y border border-slate-200 bg-mist px-4 py-3.5 text-sm normal-case leading-6 tracking-normal text-ink focus:border-blueprint" /></label>
                </div>
                <button className="mt-7 flex w-full items-center justify-center gap-3 bg-blueprint px-7 py-4 text-sm font-extrabold text-white hover:bg-signal sm:w-auto">{t.contact.send}<ArrowRight size={17} /></button>
              </form>}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 bg-ink py-8 text-white"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8"><Logo tagline={t.logoTagline} /><p className="text-xs text-slate-500">© {new Date().getFullYear()} Synertia Solutions. {t.footer}</p><a href="mailto:contact@synertia-solutions.com" className="flex items-center gap-2 text-xs font-bold text-slate-300"><Mail size={14} />contact@synertia-solutions.com</a></div></footer>
    </div>
  );
}
