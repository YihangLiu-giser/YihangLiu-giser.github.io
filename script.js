(() => {
  const source = window.PORTFOLIO_CONTENT;
  const profile = source.profile;
  const $ = (id) => document.getElementById(id);
  const stored = localStorage.getItem("portfolio-language");
  let language = stored === "zh" || stored === "en" ? stored : source.settings.defaultLanguage;

  function node(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function reset(id) {
    const element = $(id);
    element.replaceChildren();
    return element;
  }

  function text(id, value) {
    $(id).textContent = value || "";
  }

  function externalLink(label, href) {
    const link = node("a", "", label);
    link.href = href;
    link.target = "_blank";
    link.rel = "noreferrer";
    return link;
  }

  function renderNavigation(content) {
    const nav = reset("site-nav");
    content.nav.forEach(([label, href]) => {
      const link = node("a", "", label);
      link.href = href;
      nav.append(link);
    });
  }

  function renderProfile(content) {
    text("profile-role", content.hero.eyebrow);
    text("profile-name", language === "zh" ? `${profile.chineseName} / ${profile.name}` : `${profile.name} / ${profile.chineseName}`);
    text("profile-intro", content.hero.intro);
    text("profile-location", profile.location);
    $("profile-image").src = profile.avatar;

    const links = reset("profile-links");
    const email = node("a", "", profile.email);
    email.href = `mailto:${profile.email}`;
    links.append(
      email,
      externalLink("GitHub", profile.github),
      externalLink("ResearchGate", profile.researchGate),
      externalLink("LinkedIn", profile.linkedIn),
    );
  }

  function renderOverview(content) {
    text("about-heading", content.about.label);
    const copy = reset("about-copy");
    content.about.paragraphs.forEach((paragraph) => copy.append(node("p", "", paragraph)));
    const interestLabel = language === "zh" ? "研究兴趣" : "Research interests";
    text("interest-line", `${interestLabel}: ${content.about.interests.join(" · ")}`);

    text("education-heading", content.education.title);
    text("education-school", content.education.school);
    text("education-degree", content.education.degree);
    text("education-unit", content.education.schoolUnit);
    text("education-details", content.education.details);
    text("education-coursework", content.education.coursework);
  }

  function renderResearch(content) {
    text("research-heading", content.research.label);
    text("research-note", language === "zh" ? "精选项目" : "Selected projects");
    const list = reset("research-list");

    content.research.projects.forEach((project) => {
      const article = node("article", "research-entry");
      const heading = node("div", "entry-heading");
      heading.append(node("h3", "", project.title), node("time", "", project.period));
      article.append(
        heading,
        node("p", "", project.summary),
        node("p", "entry-outcome", project.outcome),
      );
      list.append(article);
    });
  }

  function renderExperience(content) {
    text("experience-heading", content.experience.label);
    const list = reset("experience-list");

    content.experience.items.forEach((item) => {
      const article = node("article", "compact-entry");
      const heading = node("div", "entry-heading");
      heading.append(node("h3", "", item.role), node("time", "", item.period));
      article.append(heading, node("p", "entry-organization", item.organization), node("p", "", item.description));
      list.append(article);
    });

    text("awards-heading", content.highlights.awardsTitle);
    const awards = reset("awards-list");
    content.highlights.awards.forEach((award) => awards.append(node("li", "", award)));
  }

  function renderBottom(content) {
    text("code-heading", content.highlights.codeTitle);
    const repositories = reset("repository-list");
    content.highlights.repositories.forEach((repository) => {
      repositories.append(externalLink(repository.name, repository.href));
    });

    text("contact-heading", content.contact.label);
    text("contact-copy", content.contact.text);
    text("contact-email", profile.email);
    $("contact-email").href = `mailto:${profile.email}`;
  }

  function render() {
    const content = source[language];
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = content.meta.title;
    document.querySelector('meta[name="description"]').content = content.meta.description;
    document.querySelector('meta[property="og:title"]').content = content.meta.title;
    document.querySelector('meta[property="og:description"]').content = content.meta.description;

    renderNavigation(content);
    renderProfile(content);
    renderOverview(content);
    renderResearch(content);
    renderExperience(content);
    renderBottom(content);
    text("language-button", content.languageButton);
    text("year", new Date().getFullYear());
  }

  $("language-button").addEventListener("click", () => {
    language = language === "en" ? "zh" : "en";
    localStorage.setItem("portfolio-language", language);
    render();
  });

  render();
})();
