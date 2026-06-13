import React, { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Blocks,
  Bot,
  Box,
  Check,
  ChevronRight,
  ClipboardCheck,
  Cog,
  Cpu,
  Factory,
  Gauge,
  Mail,
  Menu,
  Network,
  PenTool,
  Settings2,
  ShieldCheck,
  X,
} from "lucide-react";

const serviceIcons = [PenTool, Bot, Cog, Box, Blocks, ClipboardCheck];
const industryIcons = [Factory, Settings2, Cog, Bot, Gauge, Cpu];
const languageOptions = [
  ["en", "English"],
  ["fr", "Français"],
  ["it", "Italiano"],
];

const translations = {
  en: {
    language: "Language",
    nav: [["Services", "services"], ["Process", "process"], ["Industries", "industries"], ["About", "about"], ["Contact", "contact"]],
    discuss: "Discuss a Project",
    menu: "Toggle navigation",
    hero: {
      eyebrow: "End-to-end technical solutions",
      line1: "Industrial Engineering.",
      line2: "Automation.",
      line3: "Prototyping. Integration.",
      copy: "We help companies transform technical challenges and product ideas into complete engineered solutions, from diagnosis and concept design to prototype, automation, assembly, and delivery.",
      services: "Our Services",
      strengths: [["01", "Engineering-led"], ["02", "Supplier-independent"], ["03", "Delivery-focused"]],
    },
    services: {
      eyebrow: "Capabilities",
      title: "Engineering support across the full project lifecycle.",
      copy: "From an unresolved production issue to a commissioned machine, we bring the technical disciplines and delivery structure needed to move forward.",
      note: "One accountable engineering partner. The right specialists assembled around each challenge.",
      cards: [
        ["Engineering Consulting", "Technical diagnosis, feasibility studies, concept development, and expert guidance for complex industrial challenges."],
        ["Automation & Robotics", "Automation cells, robotic applications, controls, and process improvements built around your production reality."],
        ["Special Machine Development", "Purpose-built machines and fixtures engineered for unique products, processes, and performance requirements."],
        ["Prototype Development", "Functional prototypes that validate mechanics, electronics, software, manufacturability, and commercial potential."],
        ["Assembly & Integration", "Hands-on assembly, supplier coordination, system integration, commissioning, and production support."],
        ["Technical Project Management", "Clear technical leadership across scope, suppliers, schedules, risks, documentation, testing, and delivery."],
      ],
    },
    process: {
      eyebrow: "How we work",
      title: "A direct path from uncertainty to a working solution.",
      copy: "Every project is different. The logic is consistent: define the real problem, build the right solution, and verify that it performs.",
      steps: [
        ["01", "Diagnose", "Understand the challenge, constraints, targets, and current system."],
        ["02", "Design", "Define the concept, architecture, specifications, and delivery path."],
        ["03", "Build the Team", "Select the right technical specialists, suppliers, and production partners."],
        ["04", "Prototype / Implement", "Turn the concept into a functional prototype or integrated solution."],
        ["05", "Test & Deliver", "Validate performance, document the system, and support final deployment."],
      ],
    },
    industries: {
      eyebrow: "Industries",
      title: "Built for industrial reality.",
      copy: "We support established manufacturers and ambitious product teams where mechanical, electrical, software, and operational requirements meet.",
      link: "Tell us about your application",
      items: ["Manufacturing", "Industrial Equipment", "Special Machines", "Robotics", "Pumps & Fluid Systems", "Hardware Startups"],
    },
    about: {
      label1: "One partner.",
      label2: "Multidisciplinary execution.",
      eyebrow: "About Synertia",
      title: "Your flexible engineering department.",
      p1: "Synertia Solutions brings together multidisciplinary expertise in mechatronics, electronics, automation, software, mechanical design, logistics, and supplier coordination.",
      p2: "We act as a flexible engineering partner for companies that need complete technical solutions without building a full internal engineering department.",
      points: ["Independent technical advice", "Scalable specialist teams", "Single point of coordination", "Practical delivery ownership"],
    },
    contact: {
      eyebrow: "Start a conversation",
      title: "Have an industrial challenge or product idea?",
      copy: "Let's discuss how to turn it into a working solution.",
      scopeTitle: "Cross-disciplinary scope",
      scopeCopy: "Mechanical, electrical, controls, software, and delivery.",
      privacyTitle: "Confidential by default",
      privacyCopy: "Your technical brief is handled with professional discretion.",
      successTitle: "Project brief noted.",
      successCopy: "This demonstration form is static. Connect it to your preferred form service before launch.",
      again: "Send another message",
      name: "Name",
      namePlaceholder: "Your name",
      company: "Company",
      companyPlaceholder: "Company name",
      email: "Email",
      description: "Project Description",
      descriptionPlaceholder: "Describe the challenge, application, or product idea...",
      send: "Send Project Brief",
    },
    diagram: ["ENGINEER", "CONTROL", "INTEGRATE", "DELIVER"],
    footer: "Industrial engineering, delivered.",
  },
  fr: {
    language: "Langue",
    nav: [["Services", "services"], ["Méthode", "process"], ["Secteurs", "industries"], ["À propos", "about"], ["Contact", "contact"]],
    discuss: "Parler de votre projet",
    menu: "Ouvrir la navigation",
    hero: {
      eyebrow: "Solutions techniques de bout en bout",
      line1: "Ingénierie industrielle.",
      line2: "Automatisation.",
      line3: "Prototypage. Intégration.",
      copy: "Nous aidons les entreprises à transformer leurs défis techniques et leurs idées de produits en solutions d'ingénierie complètes, du diagnostic et de la conception au prototypage, à l'automatisation, à l'assemblage et à la livraison.",
      services: "Nos services",
      strengths: [["01", "Pilotage technique"], ["02", "Indépendance fournisseurs"], ["03", "Orienté livraison"]],
    },
    services: {
      eyebrow: "Expertises",
      title: "Un accompagnement d'ingénierie sur l'ensemble du cycle projet.",
      copy: "D'un problème de production non résolu à une machine mise en service, nous réunissons les disciplines techniques et la structure de pilotage nécessaires pour avancer.",
      note: "Un partenaire d'ingénierie responsable. Les bons spécialistes réunis autour de chaque défi.",
      cards: [
        ["Conseil en ingénierie", "Diagnostic technique, études de faisabilité, développement de concepts et expertise pour les défis industriels complexes."],
        ["Automatisation & Robotique", "Cellules automatisées, applications robotiques, contrôle-commande et amélioration des procédés adaptés à votre production."],
        ["Machines spéciales", "Machines et outillages sur mesure conçus pour des produits, procédés et exigences de performance spécifiques."],
        ["Développement de prototypes", "Prototypes fonctionnels pour valider la mécanique, l'électronique, le logiciel, l'industrialisation et le potentiel commercial."],
        ["Assemblage & Intégration", "Assemblage, coordination des fournisseurs, intégration système, mise en service et support à la production."],
        ["Gestion de projets techniques", "Pilotage technique clair du périmètre, des fournisseurs, des délais, des risques, de la documentation, des essais et de la livraison."],
      ],
    },
    process: {
      eyebrow: "Notre méthode",
      title: "Un chemin direct de l'incertitude à une solution opérationnelle.",
      copy: "Chaque projet est différent. La logique reste la même : définir le vrai problème, construire la bonne solution et vérifier ses performances.",
      steps: [
        ["01", "Diagnostiquer", "Comprendre le défi, les contraintes, les objectifs et le système existant."],
        ["02", "Concevoir", "Définir le concept, l'architecture, les spécifications et le plan de réalisation."],
        ["03", "Constituer l'équipe", "Sélectionner les spécialistes techniques, fournisseurs et partenaires de production adaptés."],
        ["04", "Prototyper / Réaliser", "Transformer le concept en prototype fonctionnel ou en solution intégrée."],
        ["05", "Tester & Livrer", "Valider les performances, documenter le système et accompagner le déploiement final."],
      ],
    },
    industries: {
      eyebrow: "Secteurs",
      title: "Conçu pour la réalité industrielle.",
      copy: "Nous accompagnons les industriels établis et les équipes produit ambitieuses à l'intersection des exigences mécaniques, électriques, logicielles et opérationnelles.",
      link: "Parlez-nous de votre application",
      items: ["Industrie manufacturière", "Équipements industriels", "Machines spéciales", "Robotique", "Pompes & Systèmes fluides", "Startups hardware"],
    },
    about: {
      label1: "Un partenaire.",
      label2: "Une exécution multidisciplinaire.",
      eyebrow: "À propos de Synertia",
      title: "Votre bureau d'études flexible.",
      p1: "Synertia Solutions réunit des expertises multidisciplinaires en mécatronique, électronique, automatisation, logiciel, conception mécanique, logistique et coordination des fournisseurs.",
      p2: "Nous agissons comme un partenaire d'ingénierie flexible pour les entreprises qui ont besoin de solutions techniques complètes sans constituer un département d'ingénierie interne.",
      points: ["Conseil technique indépendant", "Équipes de spécialistes adaptables", "Interlocuteur de coordination unique", "Responsabilité concrète de la livraison"],
    },
    contact: {
      eyebrow: "Échangeons",
      title: "Vous avez un défi industriel ou une idée de produit ?",
      copy: "Discutons de la manière de la transformer en une solution opérationnelle.",
      scopeTitle: "Expertise multidisciplinaire",
      scopeCopy: "Mécanique, électricité, automatisme, logiciel et livraison.",
      privacyTitle: "Confidentialité par défaut",
      privacyCopy: "Votre cahier des charges technique est traité avec une discrétion professionnelle.",
      successTitle: "Votre demande est enregistrée.",
      successCopy: "Ce formulaire de démonstration est statique. Il doit être connecté à un service de formulaires avant la mise en ligne.",
      again: "Envoyer un autre message",
      name: "Nom",
      namePlaceholder: "Votre nom",
      company: "Entreprise",
      companyPlaceholder: "Nom de l'entreprise",
      email: "E-mail",
      description: "Description du projet",
      descriptionPlaceholder: "Décrivez le défi, l'application ou l'idée de produit...",
      send: "Envoyer la demande",
    },
    diagram: ["CONCEVOIR", "CONTRÔLER", "INTÉGRER", "LIVRER"],
    footer: "L'ingénierie industrielle, livrée.",
  },
  it: {
    language: "Lingua",
    nav: [["Servizi", "services"], ["Metodo", "process"], ["Settori", "industries"], ["Chi siamo", "about"], ["Contatti", "contact"]],
    discuss: "Parliamo del progetto",
    menu: "Apri la navigazione",
    hero: {
      eyebrow: "Soluzioni tecniche complete",
      line1: "Ingegneria industriale.",
      line2: "Automazione.",
      line3: "Prototipazione. Integrazione.",
      copy: "Aiutiamo le aziende a trasformare sfide tecniche e idee di prodotto in soluzioni ingegneristiche complete, dalla diagnosi e progettazione concettuale alla prototipazione, automazione, assemblaggio e consegna.",
      services: "I nostri servizi",
      strengths: [["01", "Guidati dall'ingegneria"], ["02", "Indipendenti dai fornitori"], ["03", "Orientati alla consegna"]],
    },
    services: {
      eyebrow: "Competenze",
      title: "Supporto ingegneristico lungo l'intero ciclo di progetto.",
      copy: "Da un problema produttivo irrisolto a una macchina messa in servizio, mettiamo a disposizione le discipline tecniche e la struttura operativa necessarie per avanzare.",
      note: "Un unico partner responsabile. Gli specialisti giusti riuniti attorno a ogni sfida.",
      cards: [
        ["Consulenza ingegneristica", "Diagnosi tecnica, studi di fattibilità, sviluppo di concetti e consulenza specialistica per sfide industriali complesse."],
        ["Automazione e Robotica", "Celle automatizzate, applicazioni robotiche, sistemi di controllo e miglioramento dei processi adattati alla vostra produzione."],
        ["Sviluppo di macchine speciali", "Macchine e attrezzature su misura progettate per prodotti, processi e requisiti prestazionali specifici."],
        ["Sviluppo di prototipi", "Prototipi funzionali per validare meccanica, elettronica, software, industrializzazione e potenziale commerciale."],
        ["Assemblaggio e Integrazione", "Assemblaggio operativo, coordinamento fornitori, integrazione dei sistemi, messa in servizio e supporto alla produzione."],
        ["Gestione tecnica dei progetti", "Leadership tecnica chiara su ambito, fornitori, tempi, rischi, documentazione, collaudi e consegna."],
      ],
    },
    process: {
      eyebrow: "Come lavoriamo",
      title: "Un percorso diretto dall'incertezza a una soluzione funzionante.",
      copy: "Ogni progetto è diverso. La logica resta la stessa: definire il vero problema, costruire la soluzione giusta e verificarne le prestazioni.",
      steps: [
        ["01", "Diagnosticare", "Comprendere la sfida, i vincoli, gli obiettivi e il sistema esistente."],
        ["02", "Progettare", "Definire il concetto, l'architettura, le specifiche e il percorso di realizzazione."],
        ["03", "Creare il team", "Selezionare gli specialisti tecnici, i fornitori e i partner produttivi più adatti."],
        ["04", "Prototipare / Implementare", "Trasformare il concetto in un prototipo funzionale o in una soluzione integrata."],
        ["05", "Testare e Consegnare", "Validare le prestazioni, documentare il sistema e supportare la messa in servizio finale."],
      ],
    },
    industries: {
      eyebrow: "Settori",
      title: "Progettato per la realtà industriale.",
      copy: "Supportiamo produttori consolidati e team di prodotto ambiziosi dove convergono requisiti meccanici, elettrici, software e operativi.",
      link: "Parlateci della vostra applicazione",
      items: ["Produzione industriale", "Attrezzature industriali", "Macchine speciali", "Robotica", "Pompe e Sistemi fluidici", "Startup hardware"],
    },
    about: {
      label1: "Un solo partner.",
      label2: "Esecuzione multidisciplinare.",
      eyebrow: "Chi è Synertia",
      title: "Il vostro reparto di ingegneria flessibile.",
      p1: "Synertia Solutions riunisce competenze multidisciplinari in meccatronica, elettronica, automazione, software, progettazione meccanica, logistica e coordinamento dei fornitori.",
      p2: "Operiamo come partner ingegneristico flessibile per le aziende che necessitano di soluzioni tecniche complete senza creare un intero reparto di ingegneria interno.",
      points: ["Consulenza tecnica indipendente", "Team di specialisti scalabili", "Un unico punto di coordinamento", "Responsabilità concreta della consegna"],
    },
    contact: {
      eyebrow: "Iniziamo a parlare",
      title: "Avete una sfida industriale o un'idea di prodotto?",
      copy: "Parliamo di come trasformarla in una soluzione funzionante.",
      scopeTitle: "Competenze multidisciplinari",
      scopeCopy: "Meccanica, elettrica, controlli, software e consegna.",
      privacyTitle: "Riservatezza fin dall'inizio",
      privacyCopy: "Il vostro brief tecnico viene gestito con discrezione professionale.",
      successTitle: "Richiesta di progetto registrata.",
      successCopy: "Questo modulo dimostrativo è statico. Prima della pubblicazione deve essere collegato al servizio di moduli scelto.",
      again: "Invia un altro messaggio",
      name: "Nome",
      namePlaceholder: "Il vostro nome",
      company: "Azienda",
      companyPlaceholder: "Nome dell'azienda",
      email: "E-mail",
      description: "Descrizione del progetto",
      descriptionPlaceholder: "Descrivete la sfida, l'applicazione o l'idea di prodotto...",
      send: "Invia la richiesta",
    },
    diagram: ["PROGETTARE", "CONTROLLARE", "INTEGRARE", "CONSEGNARE"],
    footer: "Ingegneria industriale, consegnata.",
  },
};

function Logo({ light = false }) {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label="Synertia Solutions home">
      <img
        src="./synertia-mark.png"
        alt="Synertia Solutions"
        className="h-11 w-11 object-contain sm:hidden"
      />
      <img
        src={light ? "./synertia-logo-light.png" : "./synertia-logo-color.png"}
        alt="Synertia Solutions"
        className="hidden h-12 w-auto object-contain transition-opacity group-hover:opacity-90 sm:block"
      />
    </a>
  );
}

function SectionHeading({ eyebrow, title, copy, light = false }) {
  return (
    <div className="max-w-2xl">
      <p className={`eyebrow mb-5 text-xs font-bold uppercase tracking-[0.22em] ${light ? "text-signal" : "text-blueprint"}`}>
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-black leading-[1.08] tracking-[-0.035em] sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {copy && <p className={`mt-5 max-w-xl text-base leading-7 ${light ? "text-slate-300" : "text-steel"}`}>{copy}</p>}
    </div>
  );
}

function TechnicalDiagram({ labels }) {
  return (
    <svg viewBox="0 0 600 360" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#3b9cff" />
          <stop offset="1" stopColor="#0c65d8" stopOpacity=".2" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#line)" strokeWidth="2">
        <path d="M50 85h120l45 45h115" />
        <path d="M50 280h145l45-45h115l35-35h155" />
        <path d="M335 85h115l35 35h75" />
      </g>
      <g fill="#0a1b30" stroke="#3b9cff" strokeWidth="2">
        <rect x="215" y="97" width="120" height="66" />
        <rect x="355" y="203" width="125" height="65" />
        <circle cx="91" cy="85" r="22" />
        <circle cx="510" cy="120" r="22" />
        <circle cx="195" cy="280" r="9" />
      </g>
      <g fill="#3b9cff">
        <circle cx="50" cy="85" r="4" />
        <circle cx="50" cy="280" r="4" />
        <circle cx="560" cy="120" r="4" />
        <circle cx="550" cy="200" r="4" />
      </g>
      <g fill="#9bb1c9" fontFamily="Arial" fontSize="12" letterSpacing="2">
        <text x="237" y="124">{labels[0]}</text>
        <text x="237" y="145">{labels[1]}</text>
        <text x="377" y="230">{labels[2]}</text>
        <text x="377" y="250">{labels[3]}</text>
      </g>
    </svg>
  );
}

export default function App() {
  const [language, setLanguage] = useState(() => {
    const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
    if (translations[requestedLanguage]) {
      return requestedLanguage;
    }
    try {
      const savedLanguage = localStorage.getItem("synertia-language");
      return translations[savedLanguage] ? savedLanguage : "fr";
    } catch {
      return "fr";
    }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
    const pageTitles = {
      en: "Synertia Solutions | Industrial Engineering & Automation",
      fr: "Synertia Solutions | Ingénierie industrielle & Automatisation",
      it: "Synertia Solutions | Ingegneria industriale e Automazione",
    };
    document.title = pageTitles[language];
    try {
      localStorage.setItem("synertia-language", language);
    } catch {
      // Local file previews may disable storage; the switch still works for the session.
    }
  }, [language]);

  const changeLanguage = (nextLanguage) => {
    setLanguage(nextLanguage);
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div id="top" className="overflow-x-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/90 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <Logo light />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {t.nav.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="text-sm font-semibold text-slate-300 transition-colors hover:text-white">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <label className="relative flex h-10 items-center border border-white/20 bg-ink">
              <span className="sr-only">{t.language}</span>
              <select
                value={language}
                onChange={(event) => changeLanguage(event.target.value)}
                aria-label={t.language}
                className="h-full cursor-pointer appearance-none bg-transparent py-0 pl-3 pr-8 text-[11px] font-extrabold uppercase tracking-wider text-white"
              >
                {languageOptions.map(([code, label]) => (
                  <option key={code} value={code} className="bg-white text-ink">
                    {label}
                  </option>
                ))}
              </select>
              <ArrowDown className="pointer-events-none absolute right-2 text-slate-400" size={13} />
            </label>
            <a href="#contact" className="hidden items-center gap-2 bg-blueprint px-5 py-3 text-sm font-bold transition-colors hover:bg-signal xl:flex">
              {t.discuss} <ArrowRight size={16} />
            </a>
            <button
              className="grid h-10 w-10 place-items-center border border-white/20 lg:hidden"
              onClick={() => setMenuOpen((value) => !value)}
              aria-expanded={menuOpen}
              aria-label={t.menu}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-white/10 bg-ink px-5 py-5 lg:hidden" aria-label="Mobile navigation">
            {t.nav.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between border-b border-white/10 py-4 text-sm font-bold text-slate-200"
              >
                {label} <ChevronRight size={16} />
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section className="relative flex min-h-[760px] items-center overflow-hidden bg-ink pt-[76px] text-white lg:min-h-[850px]">
          <img
            src="./industrial-hero.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[68%_center]"
          />
          <div className="hero-mask absolute inset-0" />
          <div className="absolute inset-0 opacity-25 technical-grid" />
          <div className="relative mx-auto w-full max-w-7xl px-5 py-24 lg:px-8">
            <div className="max-w-4xl">
              <p className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-signal">
                <span className="h-px w-9 bg-signal" /> {t.hero.eyebrow}
              </p>
              <h1 className="max-w-4xl text-[clamp(2.8rem,7vw,6.25rem)] font-black leading-[0.93] tracking-[-0.055em]">
                {t.hero.line1}
                <span className="block text-signal">{t.hero.line2}</span>
                {t.hero.line3}
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                {t.hero.copy}
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="flex items-center justify-center gap-3 bg-blueprint px-7 py-4 text-sm font-extrabold transition hover:bg-signal">
                  {t.discuss} <ArrowRight size={17} />
                </a>
                <a href="#services" className="flex items-center justify-center gap-3 border border-white/30 bg-white/5 px-7 py-4 text-sm font-extrabold backdrop-blur transition hover:bg-white/10">
                  {t.hero.services} <ArrowDown size={17} />
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 hidden w-full max-w-7xl -translate-x-1/2 grid-cols-3 border-x border-t border-white/10 bg-ink/70 backdrop-blur-md md:grid">
            {t.hero.strengths.map(([n, text]) => (
              <div key={n} className="flex items-center gap-4 border-r border-white/10 px-8 py-5 last:border-r-0">
                <span className="font-mono text-xs text-signal">{n}</span>
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-300">{text}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="scroll-mt-20 bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <SectionHeading
                eyebrow={t.services.eyebrow}
                title={t.services.title}
                copy={t.services.copy}
              />
              <p className="max-w-sm border-l-2 border-blueprint pl-5 text-sm leading-6 text-steel">
                {t.services.note}
              </p>
            </div>
            <div className="mt-14 grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
              {t.services.cards.map(([title, copy], index) => {
                const Icon = serviceIcons[index];
                const number = String(index + 1).padStart(2, "0");
                return (
                <article key={title} className="group relative bg-white p-7 transition-colors hover:bg-mist lg:p-9">
                  <div className="mb-10 flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center bg-blueprint text-white">
                      <Icon size={23} strokeWidth={1.8} />
                    </span>
                    <span className="font-mono text-xs text-slate-400">{number}</span>
                  </div>
                  <h3 className="text-xl font-extrabold tracking-tight text-ink">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-steel">{copy}</p>
                  <div className="mt-7 h-0.5 w-8 bg-blueprint transition-all duration-300 group-hover:w-16" />
                </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="process" className="scroll-mt-20 bg-navy py-24 text-white lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow={t.process.eyebrow}
              title={t.process.title}
              copy={t.process.copy}
              light
            />
            <div className="relative mt-16 grid gap-8 lg:grid-cols-5 lg:gap-0">
              <div className="absolute left-0 right-0 top-6 hidden h-px bg-white/15 lg:block" />
              {t.process.steps.map(([number, title, copy], index) => (
                <article key={title} className="relative lg:pr-8">
                  <div className="relative z-10 mb-7 flex h-12 w-12 items-center justify-center border border-signal bg-navy font-mono text-xs font-bold text-signal">
                    {number}
                    {index < t.process.steps.length - 1 && <span className="absolute -right-1.5 h-2.5 w-2.5 bg-signal lg:hidden" />}
                  </div>
                  <h3 className="text-lg font-extrabold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="industries" className="scroll-mt-20 technical-grid bg-mist py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <SectionHeading
                  eyebrow={t.industries.eyebrow}
                  title={t.industries.title}
                  copy={t.industries.copy}
                />
                <a href="#contact" className="mt-8 inline-flex items-center gap-3 text-sm font-extrabold text-blueprint hover:text-signal">
                  {t.industries.link} <ArrowRight size={17} />
                </a>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {t.industries.items.map((label, index) => {
                  const Icon = industryIcons[index];
                  return (
                  <div key={label} className="card-cut flex items-center gap-5 border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(7,20,38,0.04)]">
                    <span className="grid h-11 w-11 shrink-0 place-items-center border border-blueprint/20 bg-blueprint/5 text-blueprint">
                      <Icon size={21} strokeWidth={1.8} />
                    </span>
                    <span className="text-sm font-extrabold">{label}</span>
                  </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 bg-white py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
            <div className="relative min-h-[390px] overflow-hidden bg-ink">
              <TechnicalDiagram labels={t.diagram} />
              <div className="absolute bottom-0 left-0 bg-blueprint p-6 text-white sm:p-8">
                <p className="text-3xl font-black">{t.about.label1}</p>
                <p className="mt-1 text-sm text-blue-100">{t.about.label2}</p>
              </div>
            </div>
            <div>
              <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
              <p className="mt-7 text-lg leading-8 text-steel">
                {t.about.p1}
              </p>
              <p className="mt-5 text-lg leading-8 text-steel">
                {t.about.p2}
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {t.about.points.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-bold text-ink">
                    <span className="grid h-5 w-5 place-items-center bg-blueprint text-white"><Check size={13} /></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 bg-ink py-24 text-white lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} light />
              <p className="mt-6 max-w-md text-lg leading-8 text-slate-300">
                {t.contact.copy}
              </p>
              <div className="mt-10 space-y-5 border-t border-white/10 pt-8">
                <div className="flex gap-4">
                  <Network className="mt-0.5 text-signal" size={21} />
                  <div>
                    <p className="text-sm font-bold">{t.contact.scopeTitle}</p>
                    <p className="mt-1 text-sm text-slate-400">{t.contact.scopeCopy}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <ShieldCheck className="mt-0.5 text-signal" size={21} />
                  <div>
                    <p className="text-sm font-bold">{t.contact.privacyTitle}</p>
                    <p className="mt-1 text-sm text-slate-400">{t.contact.privacyCopy}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 text-ink sm:p-9 lg:p-11">
              {submitted ? (
                <div className="flex min-h-[410px] flex-col items-center justify-center text-center">
                  <span className="grid h-16 w-16 place-items-center bg-blueprint text-white"><Check size={30} /></span>
                  <h3 className="mt-6 text-2xl font-black">{t.contact.successTitle}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-steel">
                    {t.contact.successCopy}
                  </p>
                  <button onClick={() => setSubmitted(false)} className="mt-7 text-sm font-bold text-blueprint hover:text-signal">
                    {t.contact.again}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="text-xs font-bold uppercase tracking-[0.14em] text-steel">
                      {t.contact.name}
                      <input required name="name" autoComplete="name" className="mt-2 w-full border border-slate-200 bg-mist px-4 py-3.5 text-sm normal-case tracking-normal text-ink transition focus:border-blueprint" placeholder={t.contact.namePlaceholder} />
                    </label>
                    <label className="text-xs font-bold uppercase tracking-[0.14em] text-steel">
                      {t.contact.company}
                      <input required name="company" autoComplete="organization" className="mt-2 w-full border border-slate-200 bg-mist px-4 py-3.5 text-sm normal-case tracking-normal text-ink transition focus:border-blueprint" placeholder={t.contact.companyPlaceholder} />
                    </label>
                    <label className="text-xs font-bold uppercase tracking-[0.14em] text-steel sm:col-span-2">
                      {t.contact.email}
                      <input required type="email" name="email" autoComplete="email" className="mt-2 w-full border border-slate-200 bg-mist px-4 py-3.5 text-sm normal-case tracking-normal text-ink transition focus:border-blueprint" placeholder="name@company.com" />
                    </label>
                    <label className="text-xs font-bold uppercase tracking-[0.14em] text-steel sm:col-span-2">
                      {t.contact.description}
                      <textarea required name="description" rows="5" className="mt-2 w-full resize-y border border-slate-200 bg-mist px-4 py-3.5 text-sm normal-case leading-6 tracking-normal text-ink transition focus:border-blueprint" placeholder={t.contact.descriptionPlaceholder} />
                    </label>
                  </div>
                  <button type="submit" className="mt-7 flex w-full items-center justify-center gap-3 bg-blueprint px-7 py-4 text-sm font-extrabold text-white transition hover:bg-signal sm:w-auto">
                    {t.contact.send} <ArrowRight size={17} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-ink py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Logo light />
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Synertia Solutions. {t.footer}</p>
          <a href="mailto:contact@synertia-solutions.com" className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white">
            <Mail size={14} /> contact@synertia-solutions.com
          </a>
        </div>
      </footer>
    </div>
  );
}
