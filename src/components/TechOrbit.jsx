import React, { useState, useRef } from "react";
import "./TechOrbit.css";

const TECH_DATA = [
  // Orbit 1 (Innermost)
  { id: "selenium", name: "Selenium", category: "Testing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg", description: "Automated browser testing and web app validation framework.", orbitIndex: 1, angle: 0 },
  { id: "python", name: "Python", category: "Backend / AI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", description: "High-level programming language for web development, data science, and AI.", orbitIndex: 1, angle: 120 },
  { id: "postman", name: "Postman", category: "API Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", description: "API platform for building, testing, and documenting APIs.", orbitIndex: 1, angle: 240 },

  // Orbit 2
  { id: "netcore", name: ".NET Core", category: "Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg", description: "Cross-platform framework for building cloud-based software applications.", orbitIndex: 2, angle: 30 },
  { id: "wordpress", name: "WordPress", category: "CMS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg", description: "Popular open-source content management system and website builder.", orbitIndex: 2, angle: 110 },
  { id: "laravel", name: "Laravel", category: "PHP Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", description: "Web application framework with expressive, elegant syntax.", orbitIndex: 2, angle: 190 },
  { id: "gitlab", name: "GitLab", category: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", description: "DevOps platform combining Git repository management and CI/CD.", orbitIndex: 2, angle: 270 },

  // Orbit 3 (Middle)
  { id: "react", name: "React", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", description: "JavaScript library for building dynamic user interfaces.", orbitIndex: 3, angle: 15 },
  { id: "jenkins", name: "Jenkins", category: "CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", description: "Open source automation server for building and deploying software.", orbitIndex: 3, angle: 85 },
  { id: "grafana", name: "Grafana", category: "Observability", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg", description: "Analytics platform for metrics visualization and monitoring dashboards.", orbitIndex: 3, angle: 155 },
  { id: "mysql", name: "MySQL", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", description: "Relational database management system for scalable data storage.", orbitIndex: 3, angle: 225 },
  { id: "flutter", name: "Flutter", category: "Mobile", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", description: "UI toolkit for building natively compiled mobile and web applications.", orbitIndex: 3, angle: 295 },

  // Orbit 4
  { id: "docker", name: "Docker", category: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", description: "Containerization platform to package applications with dependencies.", orbitIndex: 4, angle: 45 },
  { id: "oracle", name: "Oracle", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg", description: "Enterprise relational database management system.", orbitIndex: 4, angle: 135 },
  { id: "elasticsearch", name: "Elasticsearch", category: "Search / Analytics", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg", description: "Distributed search and analytics engine.", orbitIndex: 4, angle: 225 },
  { id: "angular", name: "Angular", category: "Frontend Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", description: "TypeScript-based framework for single-page web apps.", orbitIndex: 4, angle: 315 },

  // Orbit 5 (Outermost)
  { id: "aws", name: "AWS", category: "Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", description: "Comprehensive cloud services platform by Amazon.", orbitIndex: 5, angle: 0 },
  { id: "kubernetes", name: "Kubernetes", category: "Container Orchestration", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", description: "System for automating container deployment and scaling.", orbitIndex: 5, angle: 72 },
  { id: "terraform", name: "Terraform", category: "IaC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", description: "Infrastructure as Code tool to build and change cloud resources safely.", orbitIndex: 5, angle: 144 },
  { id: "nodejs", name: "Node.js", category: "Runtime", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", description: "JavaScript runtime environment built on Chrome's V8 engine.", orbitIndex: 5, angle: 216 },
  { id: "github", name: "GitHub", category: "Version Control", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", description: "Cloud repository service for Git code management and collaboration.", orbitIndex: 5, angle: 288 },
];

export default function TechOrbit() {
  const [activeTech, setActiveTech] = useState(null);
  const [activeOrbitIndex, setActiveOrbitIndex] = useState(null);
  const [modalPos, setModalPos] = useState({ top: 0, left: 0 });
  const containerRef = useRef(null);

  const handleMouseEnter = (tech, event) => {
    const btnRect = event.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    setModalPos({
      top: btnRect.top - containerRect.top - 115,
      left: btnRect.left - containerRect.left + btnRect.width / 2,
    });

    setActiveTech(tech);
    setActiveOrbitIndex(tech.orbitIndex); // Only freeze this specific ring
  };

  const handleMouseLeave = () => {
    setActiveTech(null);
    setActiveOrbitIndex(null); // Resume all rings
  };

  return (
    <section className="tech-section">
      <div className="orbit-container" ref={containerRef}>
        {/* Center Core Logo */}
        <div className="center-core">
          {/* <img src="" alt="Logo" className="core-logo" /> */}
          <a href="#home" className="font-display font-semibold text-ink text-lg tracking-tight">
            SL<span className="text-signal-cyan">.</span>dev
          </a>
        </div>

        {/* 5 Orbit Rings */}
        {[1, 2, 3, 4, 5].map((ringIndex) => {
          const duration = 20 + ringIndex * 8; // Clockwise speed per orbit
          const itemsOnRing = TECH_DATA.filter((item) => item.orbitIndex === ringIndex);
          const isRingPaused = activeOrbitIndex === ringIndex;

          return (
            <div
              key={`ring-${ringIndex}`}
              className={`orbit-ring ring-${ringIndex} ${isRingPaused ? "is-paused" : ""}`}
              style={{ animationDuration: `${duration}s` }}
            >
              {itemsOnRing.map((tech) => (
                <div
                  key={tech.id}
                  className="tech-node-positioner"
                  style={{
                    transform: `rotate(${tech.angle}deg) translate(var(--radius-${ringIndex})) rotate(-${tech.angle}deg)`,
                  }}
                >
                  {/* Inverse counter-rotation to keep logo straight */}
                  <div
                    className={`tech-node-counter ${isRingPaused ? "is-paused" : ""}`}
                    style={{ animationDuration: `${duration}s` }}
                  >
                    <button
                      className={`tech-btn ${activeTech?.id === tech.id ? "active" : ""}`}
                      onMouseEnter={(e) => handleMouseEnter(tech, e)}
                      onMouseLeave={handleMouseLeave}
                      onFocus={(e) => handleMouseEnter(tech, e)}
                      onBlur={handleMouseLeave}
                      aria-label={tech.name}
                    >
                      <img src={tech.icon} alt={tech.name} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          );
        })}

        {/* Floating Modal Card */}
        {activeTech && (
          <div
            className="tech-floating-modal"
            style={{
              top: `${modalPos.top}px`,
              left: `${modalPos.left}px`,
            }}
          >
            <span className="modal-tag">{activeTech.category}</span>
            <h4 className="modal-title">{activeTech.name}</h4>
            <p className="modal-desc">{activeTech.description}</p>
          </div>
        )}
      </div>
    </section>
  );
}