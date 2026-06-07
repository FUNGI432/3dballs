import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    nav: {
      portfolio: "PORTFOLIO",
      services: "SERVICES",
      team: "TEAM",
      contact: "CONTACT",
    },
    hero: {
      titlePart1: "digital products built to ",
      titlePart2: "stand out",
      pricingBtn: "See Pricing",
      bookCallBtn: "Book a 15 min Call",
      availableNow: "Available now",
    },
    whatWeDo: {
      label: "What We Do",
      titlePart1: "We don't just write code. We architect systems and ship digital products ",
      titlePart2: "That become Iconic."
    },
    weMoveIdeas: {
      line1: "We",
      line2: "Move",
      line3: "ideas",
      line4: "Forward",
      subtitle: "(Three key stages)",
      desc: "We anticipate the technical challenges of scaling before they break your app, which makes the difference for a successful launch!"
    },
    portfolio: {
      title: "portfolio",
      descPart1: "A curated selection of the high-performance SaaS applications, enterprise systems, and ",
      descHighlight: "scalable digital products",
      descPart2: " we have engineered and shipped."
    },
    philosophy: {
      line1: "clients don't",
      line2: "remember the code",
      line3: "they remember",
      line4: "how it felt"
    },
    services: {
      title: "services",
      items: {
        1: "SaaS & E-commerce Architectures",
        2: "Premium Web & Mobile Development",
        3: "World Class UI/UX Design",
        4: "Company Portals & Tools",
        5: "Strategic Advisory & Planning"
      }
    },
    arrivePrepared: {
      statement: "We don't just show up. We arrive prepared, committed, and thinking several steps ahead. That's what makes the difference when the show is on the line.",
      items: [
        { q: "Tight Deadline?", a: "It's what we do!" },
        { q: "Tech Stack Pivot?", a: "We react before it’s a problem." },
        { q: "Traffic Spike?", a: "We adapt on the fly." },
        { q: "API Integration?", a: "Consider it done." },
        { q: "Business Ideation/ Pitching?", a: "We help your ideas come to reality, stylish!" }
      ]
    },
    statsAndTrust: {
      stats: [
        { num: "99.9%", desc: "Saaaaatisfaction" },
        { num: "0", desc: "years of active experience as Lead Driver with Technical Debt Tolerated" },
        { num: "100%", desc: "In-House Senior Developers & Designers" },
        { num: "24/7", desc: "Server Monitoring & Code Support" }
      ],
      trustHeading: "TRUST BUILT OVER TIME",
      clientSatisfaction: {
        title: "Client Satisfaction.",
        desc: "Over 40+ happy users all over the world"
      },
      expertSquad: {
        title: "Expert Squad.",
        desc: "We don't just build products; we build the future of your brand through precision engineering and multidisciplinary design.",
        name: "Dheemant Mishra",
        rating: "4.9 Rating"
      },
      impressions: {
        title: "IMPRESSIONS",
        desc: "+120% Organic Traffic Growth"
      },
      cta: {
        titlePart1: "Ready?",
        titlePart2: "Let's push to Excellence.",
        desc: "Let's talk about your product roadmap and how our experts can accelerate it.",
        btn: "Book a 15 min Call",
        status: "Available now"
      }
    },
    footer: {
      address: "20 Wenlock Road, London",
      privacy: "Privacy Policy",
      cookies: "Cookies Preferences",
      move: {
        title: "Move.",
        desc: "Get your gear moving.\nSafe and on point.",
        btn: "Book a 15 min Call",
        status: "Available now"
      },
      join: {
        title: "Join.",
        desc: "Work behind the scenes\nof iconic works!",
        btnTeam: "Team"
      },
      social: {
        title: "Social.",
        desc: "Follow the movement. Cmon, don't be shy!"
      }
    }
  },
  it: {
    nav: {
      portfolio: "PORTFOLIO",
      services: "SERVIZI",
      team: "TEAM",
      contact: "CONTATTO",
    },
    hero: {
      titlePart1: "prodotti digitali creati per ",
      titlePart2: "spiccare",
      pricingBtn: "Vedi Prezzi",
      bookCallBtn: "Prenota una Call di 15 min",
      availableNow: "Disponibile ora",
    },
    whatWeDo: {
      label: "Cosa Facciamo",
      titlePart1: "Non scriviamo solo codice. Progettiamo sistemi e sviluppiamo prodotti digitali ",
      titlePart2: "che si fanno ricordare."
    },
    weMoveIdeas: {
      line1: "Facciamo",
      line2: "Avanzare",
      line3: "le",
      line4: "idee",
      subtitle: "(Tre fasi chiave)",
      desc: "Anticipiamo le sfide tecniche di scalabilità prima che compromettano la tua app, facendo la differenza per un lancio di successo!"
    },
    portfolio: {
      title: "portfolio",
      descPart1: "Una selezione curata di applicazioni SaaS ad alte prestazioni, sistemi aziendali e ",
      descHighlight: "prodotti digitali scalabili",
      descPart2: " che abbiamo progettato e sviluppato."
    },
    philosophy: {
      line1: "i clienti non",
      line2: "ricordano il codice",
      line3: "ricordano",
      line4: "come si sono sentiti"
    },
    services: {
      title: "servizi",
      items: {
        1: "Architetture SaaS & E-commerce",
        2: "Sviluppo Web & Mobile Premium",
        3: "Design UI/UX di Classe Mondiale",
        4: "Portali Aziendali & Strumenti",
        5: "Consulenza Strategica & Pianificazione"
      }
    },
    arrivePrepared: {
      statement: "Non ci limitiamo a presentarci. Arriviamo preparati, impegnati e pensando a diversi passi avanti. Questo è ciò che fa la differenza quando lo show è a rischio.",
      items: [
        { q: "Scadenza Stretta?", a: "È quello che facciamo!" },
        { q: "Pivot del Tech Stack?", a: "Reagiamo prima che sia un problema." },
        { q: "Picco di Traffico?", a: "Ci adattiamo al volo." },
        { q: "Integrazione API?", a: "Consideralo fatto." },
        { q: "Ideazione di Business / Pitching?", a: "Aiutiamo le tue idee a diventare realtà, con stile!" }
      ]
    },
    statsAndTrust: {
      stats: [
        { num: "99.9%", desc: "Soddisfaaaazione" },
        { num: "0", desc: "anni di esperienza attiva come Lead Driver con Debito Tecnico Tollerato" },
        { num: "100%", desc: "Sviluppatori & Designer Senior Interni" },
        { num: "24/7", desc: "Monitoraggio Server & Supporto Codice" }
      ],
      trustHeading: "FIDUCIA COSTRUITA NEL TEMPO",
      clientSatisfaction: {
        title: "Soddisfazione del Cliente.",
        desc: "Oltre 40+ utenti felici in tutto il mondo"
      },
      expertSquad: {
        title: "Team di Esperti.",
        desc: "Non costruiamo solo prodotti; costruiamo il futuro del tuo brand attraverso ingegneria di precisione e design multidisciplinare.",
        name: "Dheemant Mishra",
        rating: "Valutazione 4.9"
      },
      impressions: {
        title: "IMPRESSION",
        desc: "+120% di Crescita del Traffico Organico"
      },
      cta: {
        titlePart1: "Pronto?",
        titlePart2: "Spingiamo verso l'Eccellenza.",
        desc: "Parliamo della roadmap del tuo prodotto e di come i nostri esperti possono accelerarla.",
        btn: "Prenota una Call di 15 min",
        status: "Disponibile ora"
      }
    },
    footer: {
      address: "20 Wenlock Road, Londra",
      privacy: "Politica sulla Riservatezza",
      cookies: "Preferenze Cookie",
      move: {
        title: "Muoviti.",
        desc: "Fai muovere le tue idee.\nSicuro e al punto.",
        btn: "Prenota una Call di 15 min",
        status: "Disponibile ora"
      },
      join: {
        title: "Unisciti.",
        desc: "Lavora dietro le quinte\ndi opere iconiche!",
        btnTeam: "Team"
      },
      social: {
        title: "Social.",
        desc: "Segui il movimento. Dai, non essere timido!"
      }
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState('en');

  const t = (path) => {
    const keys = path.split('.');
    let result = translations[locale];
    for (const key of keys) {
      if (result && result[key] !== undefined) {
        result = result[key];
      } else {
        return path;
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
