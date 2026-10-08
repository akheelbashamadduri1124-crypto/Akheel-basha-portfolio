import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone,
  Download, Menu, X, Code2, Database, Server, ShieldCheck,
  Braces, Globe2, GitBranch, Send
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Akheel Basha Madduri",
  role: "Java Backend Developer",
  subtitle: "Java Full Stack Developer",
  location: "Bangalore, Karnataka",
  phone: "+91-7093099598",
  email: "akheelbashamadduri1124@gmail.com",
  linkedin: "https://www.linkedin.com/in/akheel-basha-madduri",
  github: "https://github.com/akheelbashamadduri1124-crypto",
};

const skills = [
  { icon: Braces, title: "Java", items: ["Core Java", "OOP", "Collections", "Exception Handling", "Java 8+", "Streams", "Lambda"] },
  { icon: Server, title: "Backend", items: ["Spring Boot", "REST APIs", "Spring Data JPA", "Hibernate", "JDBC", "WebSocket"] },
  { icon: Database, title: "Databases", items: ["MySQL", "PostgreSQL", "SQL", "CRUD", "Joins", "Transactions"] },
  { icon: ShieldCheck, title: "Security", items: ["Spring Security", "JWT Authentication"] },
  { icon: Globe2, title: "Frontend", items: ["HTML5", "CSS3", "JavaScript"] },
  { icon: GitBranch, title: "Tools", items: ["Git", "GitHub", "Maven", "Postman"] },
];

const projects = [
  {
    title: "Real-Time Chat Application",
    category: "Backend / Real-Time",
    stack: ["Java", "Spring Boot", "WebSocket", "MySQL"],
    description:
      "A real-time browser-based chat application with backend functionality for users, conversations, messages and group communication.",
    points: [
      "Built real-time communication using WebSocket.",
      "Implemented persistence for users, conversations, participants and messages.",
      "Used repository-based database access for backend persistence.",
      "Used Maven, Git and GitHub for development workflow."
    ]
  },
  {
    title: "Nexora AI",
    category: "Backend / API",
    stack: ["Java 21", "Spring Boot", "PostgreSQL", "JPA", "Hibernate", "JWT"],
    description:
      "A Spring Boot backend application using PostgreSQL for persistent application data and REST-based API communication.",
    points: [
      "Implemented REST endpoints for backend application functionality.",
      "Integrated PostgreSQL with Spring Data JPA and Hibernate.",
      "Tested REST API requests and responses with Postman.",
      "Worked with Spring Security and JWT authentication concepts."
    ]
  },
  {
    title: "Student Management System",
    category: "Java / JDBC",
    stack: ["Core Java", "JDBC", "MySQL", "Maven"],
    description:
      "A console-based CRUD application for managing student records with relational database persistence.",
    points: [
      "Implemented Add, View, View All, Update and Delete operations.",
      "Used PreparedStatement and ResultSet for database operations.",
      "Added input validation and exception handling.",
      "Implemented commit and rollback for transaction consistency."
    ]
  },
  {
    title: "Employee Management System",
    category: "Java / ORM",
    stack: ["Core Java", "Hibernate", "MySQL"],
    description:
      "An employee management application demonstrating Hibernate ORM, entity mapping and relational database operations.",
    points: [
      "Implemented employee data retrieval using Hibernate Session.",
      "Worked with entity mapping and ORM-based persistence.",
      "Used Hibernate configuration, SessionFactory and Session."
    ]
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const ids = ["home", "about", "skills", "projects", "education", "contact"];
      const current = ids.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 150 && r.bottom >= 150;
      });
      if (current) setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="app">
      <header className="nav">
        <button className="brand" onClick={() => go("home")}>
          <span className="brand-mark">&lt;/&gt;</span>
          <span>AKHEEL<span className="accent">.</span></span>
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["home", "about", "skills", "projects", "education", "contact"].map((id) => (
            <button key={id} className={active === id ? "active" : ""} onClick={() => go(id)}>
              {id}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="icon-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a>
          <a className="icon-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X/> : <Menu/>}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-glow glow-one"/>
          <div className="hero-glow glow-two"/>
          <div className="hero-content">
            <p className="eyebrow"><span className="pulse"/> AVAILABLE FOR OPPORTUNITIES</p>
            <h1>Hi, I'm <span>Akheel Basha</span><br/>a Java Backend Developer.</h1>
            <p className="hero-copy">
              I build backend applications, REST APIs and database-driven systems
              using Java, Spring Boot and SQL—with a growing focus on secure,
              maintainable and real-time applications.
            </p>
            <div className="hero-buttons">
              <button className="primary-btn" onClick={() => go("projects")}>View My Work <ArrowUpRight size={18}/></button>
              <button className="secondary-btn" onClick={() => go("contact")}>Let's Connect <Send size={17}/></button>
            </div>
            <div className="quick-facts">
              <span><MapPin size={15}/> Bangalore, India</span>
              <span><Code2 size={15}/> Java • Spring Boot • SQL</span>
            </div>
          </div>
          <div className="hero-card">
            <div className="terminal-top"><i/><i/><i/><span>akheel.java</span></div>
            <div className="terminal-body">
              <p><b>class</b> <em>Developer</em> {"{"}</p>
              <p>&nbsp;&nbsp;<b>String</b> role = <span>"Java Backend"</span>;</p>
              <p>&nbsp;&nbsp;<b>String[]</b> stack = {"{"}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<span>"Java"</span>, <span>"Spring Boot"</span>,</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<span>"JPA"</span>, <span>"PostgreSQL"</span></p>
              <p>&nbsp;&nbsp;{"}"};</p>
              <p>&nbsp;&nbsp;<b>boolean</b> learning = <em>true</em>;</p>
              <p>{"}"}</p>
              <div className="terminal-cursor"/>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <p className="eyebrow">01 — ABOUT</p>
            <h2>Building with purpose.</h2>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p className="lead">
                I'm a Java Backend Developer and Java Full Stack Developer fresher
                focused on building practical, database-driven applications.
              </p>
              <p>
                My work centers on Core Java, Spring Boot, REST APIs, JDBC,
                Spring Data JPA, Hibernate, MySQL and PostgreSQL. I've built
                applications involving CRUD workflows, ORM persistence, REST
                services and WebSocket-based real-time communication.
              </p>
              <p>
                I enjoy understanding how systems work behind the interface:
                API design, database interactions, authentication, error handling
                and clean backend structure.
              </p>
            </div>
            <div className="about-stats">
              <div><strong>04</strong><span>Backend Projects</span></div>
              <div><strong>Java</strong><span>Primary Language</span></div>
              <div><strong>Spring</strong><span>Backend Ecosystem</span></div>
              <div><strong>SQL</strong><span>Database Foundation</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-dark">
          <div className="section-heading">
            <p className="eyebrow">02 — SKILLS</p>
            <h2>My technical toolkit.</h2>
          </div>
          <div className="skills-grid">
            {skills.map(({icon: Icon, title, items}) => (
              <article className="skill-card" key={title}>
                <div className="skill-icon"><Icon size={21}/></div>
                <h3>{title}</h3>
                <div className="chips">{items.map(x => <span key={x}>{x}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading projects-heading">
            <div>
              <p className="eyebrow">03 — PROJECTS</p>
              <h2>Things I've built.</h2>
            </div>
            <p className="heading-note">A selection of backend and database-driven work.</p>
          </div>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <article className="project-card" key={p.title}>
                <div className="project-number">0{i + 1}</div>
                <div className="project-category">{p.category}</div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <ul>{p.points.map(point => <li key={point}>{point}</li>)}</ul>
                <div className="project-stack">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section section-dark">
          <div className="section-heading">
            <p className="eyebrow">04 — EDUCATION & TRAINING</p>
            <h2>My foundation.</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-dot"/>
              <div className="timeline-year">2026</div>
              <div>
                <h3>B.Tech — Electrical and Electronics Engineering</h3>
                <p>Vaagdevi Institute of Technology and Sciences</p>
                <strong>76%</strong>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot"/>
              <div className="timeline-year">2020 — 2023</div>
              <div>
                <h3>Diploma — Electrical and Electronics Engineering</h3>
                <p>Government Polytechnic College, Proddatur</p>
                <strong>67.47%</strong>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot"/>
              <div className="timeline-year">Training</div>
              <div>
                <h3>Java Full Stack Development — JSPiders</h3>
                <p>Marathahalli, Bangalore</p>
                <span className="timeline-tags">Core Java · SQL · JDBC · Hibernate · HTML · CSS · JavaScript · Selenium</span>
              </div>
            </div>
          </div>
          <div className="cert-row">
            <span>Certifications</span>
            <b>Java Full Stack Development Certification</b>
            <b>NPTEL — Smart Grid</b>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-card">
            <div>
              <p className="eyebrow">05 — CONTACT</p>
              <h2>Let's build something useful.</h2>
              <p>
                I'm looking for opportunities as a Java Backend Developer or
                Java Full Stack Developer. If you're hiring for an entry-level
                role, I'd be happy to connect.
              </p>
            </div>
            <div className="contact-links">
              <a href={`mailto:${profile.email}`}><Mail size={18}/><span>{profile.email}</span><ArrowUpRight size={16}/></a>
              <a href={`tel:${profile.phone}`}><Phone size={18}/><span>{profile.phone}</span><ArrowUpRight size={16}/></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18}/><span>LinkedIn</span><ArrowUpRight size={16}/></a>
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18}/><span>GitHub</span><ArrowUpRight size={16}/></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Akheel Basha Madduri</span>
        <span>Built with React & Vite</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
