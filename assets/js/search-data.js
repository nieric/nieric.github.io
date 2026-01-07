// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A collection of my current and past projects. Page under construction.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "My academic CV in PDF-form can be found by clicking the PDF icon to the right.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-sucessfully-defended-my-licentiate-thesis-half-way-thesis-you-can-read-it-here",
          title: 'I sucessfully defended my Licentiate thesis (“half-way” thesis). You can read it here....',
          description: "",
          section: "News",},{id: "news-i-m-going-to-leiden-as-a-visiting-researcher-in-the-group-of-prof-koenraad-schalm-until-december",
          title: 'I’m going to Leiden as a visiting researcher in the group of Prof....',
          description: "",
          section: "News",},{id: "news-i-won-a-best-poster-award-travel-money-at-this-years-area-of-advance-nano-community-building-event-you-view-the-poster-here",
          title: 'I won a Best Poster Award (+ travel money) at this years’ “Area...',
          description: "",
          section: "News",},{id: "news-my-visit-to-leiden-has-paid-off-our-paper-on-quantum-critical-theories-in-periodic-potentials-is-out-on-arxiv-check-it-out-here",
          title: 'My visit to Leiden has paid off: our paper on Quantum critical theories...',
          description: "",
          section: "News",},{id: "projects-2d-fermi-liquids",
          title: '2D Fermi Liquids',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2DFL/";
            },},{id: "projects-dynamical-electromagnetism-in-holography",
          title: 'Dynamical Electromagnetism in Holography',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/DynamicEM/";
            },},{id: "projects-holographic-effective-medium-theory",
          title: 'Holographic Effective Medium Theory',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/HolographicEMT/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%69%65%72%69%63@%63%68%61%6C%6D%65%72%73.%73%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/nieric", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/2799609", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/ericnilssson", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-1055-8329", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/https://www.researchgate.net/profile/Eric-Nilsson-3?ev=hdr_xprf/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=XgKzI7IAAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://research.chalmers.se/en/person/nieric", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
