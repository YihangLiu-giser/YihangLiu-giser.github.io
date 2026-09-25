(() => {
  const source = window.PORTFOLIO_CONTENT;
  const profile = source.profile;
  const $ = (id) => document.getElementById(id);
  const savedLanguage = localStorage.getItem("portfolio-language");
  let language = savedLanguage === "zh" || savedLanguage === "en" ? savedLanguage : source.settings.defaultLanguage;

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function clear(id) {
    const node = $(id);
    node.replaceChildren();
    return node;
  }

  function setText(id, text) {
    $(id).textContent = text;
  }

  function renderNav(content) {
    const nav = clear("nav");
    content.nav.forEach(([label, href]) => {
      const link = element("a", "nav-link", label);
      link.href = href;
      nav.append(link);
    });
  }

  function renderHero(content) {
    setText("hero-eyebrow", content.hero.eyebrow);
    setText("hero-title", content.hero.title);
    setText("hero-intro", content.hero.intro);
    setText("hero-primary", content.hero.primaryAction);
    setText("hero-secondary", content.hero.secondaryAction);
    setText("hero-status", content.hero.status);
    $("hero-secondary").href = `mailto:${profile.email}`;
    $("profile-photo").src = profile.avatar;
    setText("portrait-name", language === "zh" ? `${profile.chineseName} · ${profile.name}` : `${profile.name} · ${profile.chineseName}`);
    setText("portrait-location", profile.location);
  }

  function renderFacts(content) {
    const container = clear("facts");
    content.facts.forEach((fact) => {
      const item = element("div", "fact");
      item.append(element("strong", "fact-value", fact.value), element("span", "fact-label", fact.label));
      container.append(item);
    });
  }

  function renderAbout(content) {
    setText("about-label", content.about.label);
    setText("about-title", content.about.title);
    const copy = clear("about-copy");
    content.about.paragraphs.forEach((paragraph) => copy.append(element("p", "", paragraph)));
    const interests = clear("interest-list");
    content.about.interests.forEach((interest, index) => {
      const item = element("div", "interest-item");
      item.append(element("span", "interest-index", String(index + 1).padStart(2, "0")), element("span", "", interest));
      interests.append(item);
    });
  }

  function renderResearch(content) {
    setText("research-label", content.research.label);
    setText("research-title", content.research.title);
    const list = clear("research-list");
    content.research.projects.forEach((project) => {
      const article = element("article", "research-card");
      article.setAttribute("data-reveal", "");
      const index = element("span", "research-number", project.number);
      const body = element("div", "research-body");
      const header = element("div", "research-header");
      header.append(element("h3", "", project.title), element("span", "research-period", project.period));
      const bullets = element("ul", "research-points");
      project.bullets.forEach((point) => bullets.append(element("li", "", point)));
      body.append(header, element("p", "research-summary", project.summary), bullets, element("p", "research-outcome", project.outcome));
      article.append(index, body);
      list.append(article);
    });
  }

  function renderExperience(content) {
    setText("experience-label", content.experience.label);
    setText("experience-title", content.experience.title);
    const list = clear("experience-list");
    content.experience.items.forEach((item) => {
      const row = element("article", "timeline-item");
      row.setAttribute("data-reveal", "");
      const date = element("time", "timeline-period", item.period);
      const body = element("div", "timeline-body");
      body.append(element("h3", "", item.role), element("p", "timeline-org", item.organization), element("p", "timeline-description", item.description));
      row.append(date, body);
      list.append(row);
    });
  }

  function renderHighlights(content) {
    setText("highlights-label", content.highlights.label);
    setText("highlights-title", content.highlights.title);
    setText("awards-title", content.highlights.awardsTitle);
    setText("code-title", content.highlights.codeTitle);

    const awards = clear("award-list");
    content.highlights.awards.forEach((award) => awards.append(element("li", "", award)));

    const repositories = clear("repo-list");
    content.highlights.repositories.forEach((repository) => {
      const link = element("a", "repo-card");
      link.href = repository.href;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.append(element("strong", "", repository.name), element("span", "", repository.language), element("span", "repo-arrow", "↗"));
      repositories.append(link);
    });
  }

  function renderContact(content) {
    setText("contact-label", content.contact.label);
    setText("contact-title", content.contact.title);
    setText("contact-text", content.contact.text);
    setText("contact-email", content.contact.button);
    $("contact-email").href = `mailto:${profile.email}`;

    const links = clear("social-links");
    [["GitHub", profile.github], ["ResearchGate", profile.researchGate], ["LinkedIn", profile.linkedIn]].forEach(([label, href]) => {
      const link = element("a", "", `${label} ↗`);
      link.href = href;
      link.target = "_blank";
      link.rel = "noreferrer";
      links.append(link);
    });
  }

  function observeReveal() {
    const nodes = document.querySelectorAll("[data-reveal]:not(.is-visible)");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
  }

  function render() {
    const content = source[language];
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = content.meta.title;
    document.querySelector('meta[name="description"]').content = content.meta.description;
    document.querySelector('meta[property="og:title"]').content = content.meta.title;
    document.querySelector('meta[property="og:description"]').content = content.meta.description;

    renderNav(content);
    renderHero(content);
    renderFacts(content);
    renderAbout(content);
    renderResearch(content);
    renderExperience(content);
    renderHighlights(content);
    renderContact(content);
    setText("language-button", content.languageButton);
    setText("footer-name", profile.name);
    setText("footer-copy", content.footer);
    setText("year", new Date().getFullYear());
    observeReveal();
  }

  $("language-button").addEventListener("click", () => {
    language = language === "en" ? "zh" : "en";
    localStorage.setItem("portfolio-language", language);
    render();
  });

  render();
})();
