const siteContent = window.SITE_CONTENT;

function setText(id, value) {
  const node = document.getElementById(id);
  if (node) {
    node.textContent = value || "";
  }
}

function setHtml(id, value) {
  const node = document.getElementById(id);
  if (node) {
    node.innerHTML = value || "";
  }
}

function createLink({ href, label, className }) {
  const anchor = document.createElement("a");
  anchor.href = href;
  anchor.textContent = label;
  if (className) {
    anchor.className = className;
  }
  return anchor;
}

function createSectionCard(title, html) {
  const article = document.createElement("article");
  const heading = document.createElement("h3");
  const body = document.createElement("div");

  article.className = "detail-card";
  body.className = "rich-text";
  heading.textContent = title;
  body.innerHTML = html || "";
  article.append(heading, body);

  return article;
}

function renderNav(items) {
  const nav = document.getElementById("site-nav");
  items.forEach((item) => {
    nav.append(createLink({ href: item.href, label: item.label }));
  });
}

function renderHero(hero, brand) {
  setText("sidebar-name", brand);
  setText("hero-eyebrow", hero.eyebrow);
  setText("hero-title", hero.title);
  setText("hero-text", hero.text);
  setText("hero-card-label", hero.panel.label);
  setText("hero-card-title", hero.panel.title);
  setText("hero-card-text", hero.panel.text);

  const actions = document.getElementById("hero-actions");
  hero.actions.forEach((action) => {
    actions.append(
      createLink({
        href: action.href,
        label: action.label,
        className: `button ${action.variant}`,
      })
    );
  });

  const stats = document.getElementById("hero-stats");
  hero.stats.forEach((item) => {
    const article = document.createElement("article");
    const label = document.createElement("span");
    const value = document.createElement("strong");

    article.className = "stat-item";
    label.textContent = item.label;
    value.textContent = item.value;
    article.append(label, value);
    stats.append(article);
  });

  const media = document.getElementById("hero-media");
  if (!hero.image || !hero.image.src) {
    media.hidden = true;
    return;
  }

  media.hidden = false;
  const img = document.createElement("img");
  img.src = hero.image.src;
  img.alt = hero.image.alt || hero.title;
  media.append(img);

  if (hero.image.caption) {
    const caption = document.createElement("p");
    caption.className = "profile-caption";
    caption.textContent = hero.image.caption;
    media.append(caption);
  }
}

function renderAbout(about) {
  setText("about-eyebrow", about.eyebrow);
  setText("about-title", about.title);
  setHtml("about-summary", about.summaryHtml || about.summary || "");

  const container = document.getElementById("about-points");
  about.points.forEach((item) => {
    container.append(createSectionCard(item.title, item.html || `<p>${item.text || ""}</p>`));
  });
}

function renderProjects(projects) {
  setText("projects-eyebrow", projects.eyebrow);
  setText("projects-title", projects.title);

  const grid = document.getElementById("project-grid");
  projects.items.forEach((item) => {
    const article = document.createElement("article");
    const tag = document.createElement("p");
    const heading = document.createElement("h3");
    const body = document.createElement("div");

    article.className = "project-entry";
    body.className = "rich-text";
    tag.className = "project-tag";
    tag.textContent = item.tag;
    heading.textContent = item.title;
    body.innerHTML = item.html || `<p>${item.text || ""}</p>`;
    article.append(tag, heading, body);

    if (item.image && item.image.src) {
      const media = document.createElement("div");
      const img = document.createElement("img");
      media.className = "project-media";
      img.src = item.image.src;
      img.alt = item.image.alt || item.title;
      media.append(img);
      article.append(media);
    }

    if (item.href && item.linkLabel) {
      article.append(
        createLink({
          href: item.href,
          label: item.linkLabel,
          className: "inline-link",
        })
      );
    }

    grid.append(article);
  });
}

function renderJourney(journey) {
  setText("journey-eyebrow", journey.eyebrow);
  setText("journey-title", journey.title);

  const timeline = document.getElementById("timeline");
  journey.items.forEach((item) => {
    const article = document.createElement("article");
    const period = document.createElement("span");
    const content = document.createElement("div");
    const heading = document.createElement("h3");
    const body = document.createElement("div");

    article.className = "timeline-entry";
    period.className = "timeline-period";
    body.className = "rich-text";
    period.textContent = item.period;
    heading.textContent = item.title;
    body.innerHTML = item.html || `<p>${item.text || ""}</p>`;
    content.append(heading, body);
    article.append(period, content);
    timeline.append(article);
  });
}

function renderSidebarContacts(items) {
  const sideContainer = document.getElementById("sidebar-contact");
  items.forEach((item) => {
    const row = document.createElement(item.href ? "a" : "span");
    row.className = "contact-item";
    row.textContent = item.label;

    if (item.href) {
      row.href = item.href;
    }

    sideContainer.append(row);
  });
}

function renderContact(contact) {
  setText("contact-eyebrow", contact.eyebrow);
  setText("contact-title", contact.title);
  const node = document.getElementById("contact-card");
  if (!node) {
    return;
  }

  if (!contact.bodyHtml) {
    node.hidden = true;
    node.innerHTML = "";
    return;
  }

  node.hidden = false;
  setHtml("contact-card", `<div class="contact-copy rich-text">${contact.bodyHtml}</div>`);
}

function renderFooter(footer) {
  const currentYear = new Date().getFullYear();
  setText("footer-text", `Copyright ${currentYear} ${footer.name}.`);
}

function renderSite(content) {
  document.title = content.meta.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", content.meta.description);
  }

  const brandLink = document.getElementById("brand-link");
  brandLink.textContent = content.brand;

  renderNav(content.navigation);
  renderHero(content.hero, content.brand);
  renderAbout(content.about);
  renderProjects(content.projects);
  renderJourney(content.journey);
  renderSidebarContacts(content.sidebarContacts || []);
  renderContact(content.contact);
  renderFooter(content.footer);
}

function initReveal() {
  const revealNodes = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  revealNodes.forEach((node, index) => {
    node.style.transitionDelay = `${Math.min(index * 50, 180)}ms`;
    revealObserver.observe(node);
  });
}

renderSite(siteContent);
initReveal();
