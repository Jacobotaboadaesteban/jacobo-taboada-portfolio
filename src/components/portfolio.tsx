"use client";

import { AnimatePresence, MotionConfig, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { capabilities, copy, identity, profile, projects, roles, skillGroups, timeline, type Language, type Project } from "@/data/portfolio";
import { BrandMark, Drink, Shelves } from "./bar-art";

function Arrow({ down = false }: { down?: boolean }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={down ? "M12 4v16m-6-6 6 6 6-6" : "M5 19 19 5M5 5h14v14"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

const anchors = ["inicio", "historia", "bar", "contacto"];
const shelfProjects = projects.filter(project => !project.offMenu);
const projectShelves = Array.from({ length: Math.ceil(shelfProjects.length / 3) }, (_, index) => shelfProjects.slice(index * 3, index * 3 + 3));
const recommendedProjectIds = new Set(["faceid-desk", "survival-analysis"]);

export function Portfolio({ hasPhoto }: { hasPhoto: boolean }) {
  const [language, setLanguage] = useState<Language>("es");
  const [role, setRole] = useState(0);
  const [paused, setPaused] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [selected, setSelected] = useState<Project | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = copy[language].pageTitle;
  }, [language]);

  useEffect(() => {
    if (reducedMotion || paused) return;
    const interval = window.setInterval(() => setRole(current => (current + 1) % roles.length), 4200);
    return () => window.clearInterval(interval);
  }, [reducedMotion, paused]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActiveSection(entry.target.id);
    }, { rootMargin: "-15% 0px -60% 0px", threshold: 0 });
    anchors.forEach(id => { const element = document.getElementById(id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);

  function openProject(project: Project, element: HTMLElement) {
    opener.current = element;
    setSelected(project);
  }

  return <MotionConfig reducedMotion="user">
    <div className={`portfolio ${paused ? "motion-paused" : ""}`}>
      <a className="skip-link" href="#contenido">{t.skip}</a>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label={`${identity.name} — ${t.homeLabel}`}><BrandMark /><span>JACOBO TABOADA<span>ESTEBAN</span></span></a>
        <nav aria-label={t.navigation} className="nav-capsule">
          <div className="nav-links">{anchors.map((anchor, i) => <a key={anchor} className={activeSection === anchor ? "is-active" : ""} href={`#${anchor}`} aria-current={activeSection === anchor ? "location" : undefined}>{t.nav[i]}</a>)}</div>
          <div className="language-switch" role="group" aria-label={t.language}>{(["es", "en"] as const).map(lang => <button key={lang} type="button" aria-label={lang === "es" ? "Español" : "English"} aria-pressed={language === lang} onClick={() => setLanguage(lang)} lang={lang}>{lang.toUpperCase()}</button>)}</div>
        </nav>
        <a className="header-contact" href="#contacto">{t.write} <Arrow /></a>
      </header>

      <main id="contenido">
        <section id="inicio" className="hero section-anchor">
          <div className="hero-topline mono"><span><i className="status-dot" />{t.welcome}</span><span>{t.edition}</span></div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{t.disciplines}</p>
              <h1 aria-label={identity.name}><span>JACOBO</span><span>TABOADA</span><span className="name-outline">ESTEBAN<span className="title-period">.</span></span></h1>
              <div className="role-sign"><span className="status-dot" /><span className="sr-only">{t.roleLabel}: {roles.map(item => item[language]).join(", ")}</span><AnimatePresence mode="wait" initial={false}><motion.span aria-hidden="true" key={`${language}-${role}`} initial={{ opacity: 0, y: reducedMotion ? 0 : 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reducedMotion ? 0 : -6 }} transition={{ duration: .18 }}>{roles[role][language]}</motion.span></AnimatePresence></div>
              <p className="hero-description">{t.headline}</p>
              <div className="hero-actions"><a className="button button-gold" href="#contacto">{t.contactCta}<Arrow /></a><a className="text-link" href="#bar">{t.projectsCta}<Arrow down /></a></div>
            </div>
            <div className="hero-visual">
              <div className="hero-arch"><Shelves hero /><div className="pendant pendant-left" /><div className="pendant pendant-right" /></div>
              <div className="portrait-card">
                <div className={`portrait ${hasPhoto ? "has-photo" : ""}`}>
                  {hasPhoto ? <Image src={identity.photo} alt={t.photoAlt} fill sizes="(max-width: 700px) 80vw, 340px" priority /> : <><div className="portrait-orbit orbit-one" /><div className="portrait-orbit orbit-two" /><span className="portrait-monogram" aria-hidden="true">JT<span>✳</span></span><p className="portrait-note mono">{t.photoNote}</p></>}
                </div>
                <div className="portrait-bottom mono"><span>{identity.name}</span></div>
              </div>
              <div className="hero-counter" />
              <p className="visual-caption mono">{t.photoCaption}</p>
            </div>
          </div>
          <a href="#historia" className="hero-scroll mono"><span>{t.scroll}</span><Arrow down /></a>
        </section>

        <div className="skills-ribbon" role="region" aria-label={t.ribbon} tabIndex={0}>
          <div className="marquee-viewport"><div className="marquee-track">{[0, 1].map(duplicate => <div className="marquee-group" key={duplicate} aria-hidden={duplicate === 1 ? true : undefined}>{["Python", "SQL", ...capabilities.map(item => item[language]), "OpenCV", "JavaScript"].map(skill => <span key={skill}>{skill}<span className="marquee-star" aria-hidden="true">✳</span></span>)}</div>)}</div></div>
          <button type="button" className="motion-toggle" onClick={() => setPaused(!paused)} aria-label={paused ? t.play : t.pause} aria-pressed={paused}>{paused ? "▶" : "Ⅱ"}</button>
        </div>

        <section id="historia" className="story section-anchor">
          <div className="section-heading"><div><p className="eyebrow">{t.storyEyebrow}</p><h2>{t.storyTitle}</h2></div></div>
          <motion.div className="story-dossier" initial={{ y: reducedMotion ? 0 : 18 }} whileInView={{ y: 0 }} transition={{ duration: .4 }} viewport={{ once: true, amount: .1 }}>
            <div className="dossier-label mono"><span>{t.dossier}</span><span>JT — 001</span></div>
            <div className="dossier-content">
              <div className="profile-column"><span className="file-index mono">A / {t.profile}</span><h3>{identity.name}</h3><p className="profile-location mono">{t.origin}</p>{profile.map((paragraph, i) => <p key={i}>{paragraph[language]}</p>)}<div className="profile-signature" aria-hidden="true">Jacobo T.</div><p className="mono profile-foot">UC3M ↔ PURDUE</p></div>
              <div className="timeline-column"><span className="file-index mono">B / {t.trajectory}</span><ol className="timeline">{timeline.map((item, i) => <li key={item.organization}><div className="timeline-marker" aria-hidden="true">{String(i + 1).padStart(2, "0")}</div><div><p className="timeline-date mono">{item.period[language]}</p><h4>{item.organization}</h4><p className="timeline-title">{item.title[language]}</p><p className="timeline-description">{item.description[language]}</p></div></li>)}</ol></div>
            </div>
            <div className="toolkit"><div className="toolkit-heading"><div><span className="file-index mono">C / {t.toolkit}</span><p>{t.toolkitNote}</p></div><span className="toolkit-star" aria-hidden="true">✳</span></div><div className="skill-grid">{skillGroups.map(group => <div key={group.title.es}><h4 className="mono">{group.title[language]}</h4><div className="skill-tags">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>)}</div><div className="capabilities mono">{capabilities.map(item => <span key={item.es}>{item[language]}</span>)}</div></div>
          </motion.div>
        </section>

        <section id="bar" className="bar-section section-anchor">
          <motion.div className="section-heading" initial={{ y: reducedMotion ? 0 : 14 }} whileInView={{ y: 0 }} transition={{ duration: .35 }} viewport={{ once: true }}><div><p className="eyebrow">{t.barEyebrow}</p><h2>{t.barTitle}</h2></div><p className="section-intro">{t.barIntro}</p></motion.div>
          <div className="bar-layout">
            <div className="bar-scene" role="group" aria-label={t.scene}>
              <div className="scene-top mono"><span><i className="status-dot" />{t.scene}</span><span>JTE</span></div>
              <div className="backbar"><div className="backbar-arch" /><div className="bar-neon" aria-hidden="true">{identity.name}<span>{t.sceneTag}</span></div></div>
              <div className="project-shelves" aria-label={t.shelfDisplay}>{projectShelves.map((shelf, shelfIndex) => <div className="project-shelf-row" key={`shelf-${shelfIndex}`}>{shelf.map((project, itemIndex) => {
                const projectIndex = shelfIndex * 3 + itemIndex;
                const status = project.repository ? t.projectAvailable : project.status?.[language] ?? t.comingSoon;
                return <motion.button type="button" key={project.id} className={`drink-choice ${project.repository ? "has-repository" : "is-upcoming"} ${project.id === "pulso" ? "is-new-drink" : ""}`} onClick={event => openProject(project, event.currentTarget)} whileHover={reducedMotion ? undefined : { y: -5 }} whileTap={reducedMotion ? undefined : { scale: .97 }} aria-label={`${t.openProject}: ${project.name}. ${status}`} aria-haspopup="dialog"><span className="drink-number mono">/ {String(projectIndex + 1).padStart(2, "0")}</span>{project.id === "pulso" && <span className="drink-new mono">{t.featured}</span>}<span className="drink-illustration"><Drink style={project.glass} color={project.color} /></span><span className="drink-name">{project.name}</span><span className="drink-year mono">{project.year}</span>{project.status && <span className="drink-status mono">{project.status[language]}</span>}</motion.button>;
              })}</div>)}</div>
              <div className="scene-bottom mono"><span>{t.sceneNote}</span><span aria-hidden="true">↓</span></div>
            </div>
            <div className="project-menu">
              <div className="menu-heading"><div><span className="mono">{t.menuSub}</span><h3>{t.menu}<span aria-hidden="true">✳</span></h3></div><span className="menu-count mono">{String(projects.length).padStart(2, "0")}</span></div>
              <div className="menu-list">{projects.map(project => {
                const isFeatured = project.id === "pulso";
                const isRecommended = recommendedProjectIds.has(project.id);
                const isUpcoming = !project.repository;
                return <button type="button" className={`menu-item ${isFeatured ? "is-featured" : ""} ${project.offMenu ? "is-off-menu" : ""}`} key={project.id} onClick={event => openProject(project, event.currentTarget)} aria-label={`${t.openProject}: ${project.name}${isRecommended ? `. ${t.recommended}` : ""}${isUpcoming ? `. ${t.menuComingSoon}` : ""}${isFeatured ? `. ${t.featured}` : ""}${project.offMenu ? `. ${t.offMenu}` : ""}`} aria-haspopup="dialog">
                  <span className="menu-item-title"><span className="menu-project-name">{project.name}</span><span className="menu-item-meta">
                    {isFeatured && <span className="menu-featured mono">{t.featured}</span>}
                    {project.offMenu && <span className="menu-off-menu mono">{t.offMenu}</span>}
                    {isRecommended && <span className="menu-recommended mono">{t.recommended}</span>}
                    {isUpcoming && <span className="menu-status mono">{t.menuComingSoon}</span>}
                    <Arrow />
                  </span></span>
                </button>;
              })}</div>
              <p className="menu-footer">{t.menuFoot}</p>
            </div>
          </div>
        </section>

        <section id="contacto" className="contact-section section-anchor">
          <div className="contact-main"><div><p className="eyebrow">{t.contactEyebrow}</p><h2>{t.contactTitle}</h2><p className="contact-intro">{t.contactIntro}</p><a className="button button-gold" href={`mailto:${identity.email}`}>{t.write}<Arrow /></a></div><div className="contact-emblem" aria-hidden="true"><div className="emblem-circle"><span>{t.emblemTop}</span><span className="emblem-star">✳</span><span>{t.emblemBottom}</span></div><span className="emblem-side mono">{identity.name.toUpperCase()}</span></div></div>
          <div className="contact-links"><a href={`mailto:${identity.email}`}><span className="mono">{t.email}<Arrow /></span><span className="contact-value">{identity.email}</span></a><a href={identity.phoneHref}><span className="mono">{t.phone}<Arrow /></span><span className="contact-value">{identity.phone}</span></a><a href={identity.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${t.linkedin} — ${t.external}`}><span className="mono">LINKEDIN<Arrow /></span><span className="contact-value">Jacobo Taboada Esteban</span></a><div className="contact-location"><span className="mono">{t.location}</span><span className="contact-value">{t.contactLocation}</span></div></div>
        </section>
      </main>

      <footer className="site-footer"><a href="#inicio" aria-label={t.homeLabel}><BrandMark /></a><p className="mono">© {identity.copyrightYear} {identity.name}<span>{t.rights}</span></p><p className="mono footer-motto">{t.footer}</p><a className="back-top mono" href="#inicio">{t.top}<Arrow /></a></footer>
      <AnimatePresence>{selected && <ProjectDetail key={selected.id} project={selected} language={language} onClose={() => setSelected(null)} opener={opener.current} />}</AnimatePresence>
    </div>
  </MotionConfig>;
}

function ProjectDetail({ project, language, onClose, opener }: { project: Project; language: Language; onClose: () => void; opener: HTMLElement | null }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [activeTab, setActiveTab] = useState<"summary" | "preparation" | "results" | "technologies">("summary");
  const reducedMotion = useReducedMotion();
  const t = copy[language];
  const tabs = [
    { id: "summary" as const, label: t.projectTabs.summary },
    { id: "preparation" as const, label: t.projectTabs.preparation },
    { id: "results" as const, label: t.projectTabs.results },
    { id: "technologies" as const, label: t.projectTabs.technologies },
  ];
  const tabId = (tab: string) => `project-tab-${project.id}-${tab}`;
  useEffect(() => {
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
      requestAnimationFrame(() => opener?.focus({ preventScroll: true }));
    };
  }, [opener]);

  return <motion.dialog ref={dialog} className="project-dialog" aria-labelledby="project-title" aria-describedby="project-summary" onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === event.currentTarget) onClose(); }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reducedMotion ? 0 : .2 }}>
    <motion.div className="project-panel" initial={{ x: reducedMotion ? 0 : "100%" }} animate={{ x: 0 }} exit={{ x: reducedMotion ? 0 : "100%" }} transition={{ duration: reducedMotion ? 0 : .3, ease: [.22, 1, .36, 1] }}>
      <div className="panel-top mono"><span>{t.projectFile} / {project.year}</span><button type="button" onClick={onClose} aria-label={t.close} autoFocus><svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 5 14 14M19 5 5 19" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg></button></div>
      <div className={`panel-art ${project.id === "pulso" ? "panel-art-tropical" : ""}`}><Drink style={project.glass} color={project.color} /><span className="mono">{project.category[language]}</span></div>
      {project.id === "pulso" && <p className="panel-new mono">{t.featured}</p>}
      {project.offMenu && <p className="panel-off-menu mono">{t.offMenu} · {t.offMenuNote}</p>}
      <p className="eyebrow">{project.year} / {project.category[language]}</p><h2 id="project-title">{project.name}</h2><p className="panel-summary" id="project-summary">{project.summary[language]}</p>
      <div className="panel-section panel-project-type"><h3 className="mono">{t.collaboration}</h3><p>{project.collaboration[language]}</p></div>
      <div className="project-detail-tabs" role="tablist" aria-label={project.name}>
        {tabs.map(tab => <button key={tab.id} id={tabId(tab.id)} type="button" role="tab" aria-selected={activeTab === tab.id} aria-controls={`project-panel-${project.id}`} tabIndex={activeTab === tab.id ? 0 : -1} onClick={() => setActiveTab(tab.id)} onKeyDown={event => {
          if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
          event.preventDefault();
          const currentIndex = tabs.findIndex(item => item.id === activeTab);
          const nextIndex = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : (currentIndex + (event.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length;
          const nextTab = tabs[nextIndex];
          setActiveTab(nextTab.id);
          requestAnimationFrame(() => document.getElementById(tabId(nextTab.id))?.focus());
        }}>{tab.label}</button>)}
      </div>
      <div className="panel-section project-tab-content" id={`project-panel-${project.id}`} role="tabpanel" aria-labelledby={tabId(activeTab)} tabIndex={0}>
        {activeTab === "summary" && <><h3 className="mono">{t.aboutProject}</h3><p id="project-description">{project.description[language]}</p></>}
        {activeTab === "preparation" && <><h3 className="mono">{t.preparationSteps}</h3><ol className="project-steps">{project.preparation.map((step, index) => <li key={`${project.id}-step-${index}`}>{step[language]}</li>)}</ol></>}
        {activeTab === "results" && <><h3 className="mono">{t.results}</h3><p>{project.results[language]}</p></>}
        {activeTab === "technologies" && <><h3 className="mono">{t.technologies}</h3><div className="skill-tags">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div></>}
      </div>
      {project.repository ? <a className="button button-gold repository-button" href={project.repository} target="_blank" rel="noopener noreferrer" aria-label={`${t.repository}: ${project.name} — ${t.external}`}>{t.repository}<Arrow /></a> : project.status && <div className="project-coming-soon"><span className="project-status-badge mono">{project.status[language]}</span><p>{project.statusNote?.[language] ?? t.comingSoon}</p></div>}
      {project.id === "tees-for-kindness" && <p className="original-repo mono">{t.originalRepo} · Franc0-ux / TeesForKindness</p>}
    </motion.div>
  </motion.dialog>;
}
