// import React, { useState, useRef } from "react";
// import "./TechOrbit.css";

// const TECH_DATA = [
//   // Orbit 1 (Innermost)
//   { id: "selenium", name: "Selenium", category: "Testing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg", description: "Automated browser testing and web app validation framework.", orbitIndex: 1, angle: 0 },
//   { id: "python", name: "Python", category: "Backend / AI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", description: "High-level programming language for web development, data science, and AI.", orbitIndex: 1, angle: 120 },
//   { id: "postman", name: "Postman", category: "API Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", description: "API platform for building, testing, and documenting APIs.", orbitIndex: 1, angle: 240 },

//   // Orbit 2
//   { id: "netcore", name: ".NET Core", category: "Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg", description: "Cross-platform framework for building cloud-based software applications.", orbitIndex: 2, angle: 30 },
//   { id: "wordpress", name: "WordPress", category: "CMS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg", description: "Popular open-source content management system and website builder.", orbitIndex: 2, angle: 110 },
//   { id: "laravel", name: "Laravel", category: "PHP Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", description: "Web application framework with expressive, elegant syntax.", orbitIndex: 2, angle: 190 },
//   { id: "gitlab", name: "GitLab", category: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", description: "DevOps platform combining Git repository management and CI/CD.", orbitIndex: 2, angle: 270 },

//   // Orbit 3 (Middle)
//   { id: "react", name: "React", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", description: "JavaScript library for building dynamic user interfaces.", orbitIndex: 3, angle: 15 },
//   { id: "jenkins", name: "Jenkins", category: "CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", description: "Open source automation server for building and deploying software.", orbitIndex: 3, angle: 85 },
//   { id: "grafana", name: "Grafana", category: "Observability", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg", description: "Analytics platform for metrics visualization and monitoring dashboards.", orbitIndex: 3, angle: 155 },
//   { id: "mysql", name: "MySQL", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", description: "Relational database management system for scalable data storage.", orbitIndex: 3, angle: 225 },
//   { id: "flutter", name: "Flutter", category: "Mobile", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", description: "UI toolkit for building natively compiled mobile and web applications.", orbitIndex: 3, angle: 295 },

//   // Orbit 4
//   { id: "docker", name: "Docker", category: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", description: "Containerization platform to package applications with dependencies.", orbitIndex: 4, angle: 45 },
//   { id: "oracle", name: "Oracle", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg", description: "Enterprise relational database management system.", orbitIndex: 4, angle: 135 },
//   { id: "elasticsearch", name: "Elasticsearch", category: "Search / Analytics", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg", description: "Distributed search and analytics engine.", orbitIndex: 4, angle: 225 },
//   { id: "angular", name: "Angular", category: "Frontend Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", description: "TypeScript-based framework for single-page web apps.", orbitIndex: 4, angle: 315 },

//   // Orbit 5 (Outermost)
//   { id: "aws", name: "AWS", category: "Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", description: "Comprehensive cloud services platform by Amazon.", orbitIndex: 5, angle: 0 },
//   { id: "kubernetes", name: "Kubernetes", category: "Container Orchestration", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", description: "System for automating container deployment and scaling.", orbitIndex: 5, angle: 72 },
//   { id: "terraform", name: "Terraform", category: "IaC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", description: "Infrastructure as Code tool to build and change cloud resources safely.", orbitIndex: 5, angle: 144 },
//   { id: "nodejs", name: "Node.js", category: "Runtime", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", description: "JavaScript runtime environment built on Chrome's V8 engine.", orbitIndex: 5, angle: 216 },
//   { id: "github", name: "GitHub", category: "Version Control", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", description: "Cloud repository service for Git code management and collaboration.", orbitIndex: 5, angle: 288 },
// ];

// export default function TechOrbit() {
//   const [activeTech, setActiveTech] = useState(null);
//   const [activeOrbitIndex, setActiveOrbitIndex] = useState(null);
//   const [modalPos, setModalPos] = useState({ top: 0, left: 0 });
//   const containerRef = useRef(null);

//   const handleMouseEnter = (tech, event) => {
//     const btnRect = event.currentTarget.getBoundingClientRect();
//     const containerRect = containerRef.current.getBoundingClientRect();

//     setModalPos({
//       top: btnRect.top - containerRect.top - 115,
//       left: btnRect.left - containerRect.left + btnRect.width / 2,
//     });

//     setActiveTech(tech);
//     setActiveOrbitIndex(tech.orbitIndex); // Only freeze this specific ring
//   };

//   const handleMouseLeave = () => {
//     setActiveTech(null);
//     setActiveOrbitIndex(null); // Resume all rings
//   };

//   return (
//     <section className="tech-section">
//       <div className="orbit-container" ref={containerRef}>
//         {/* Center Core Logo */}
//         <div className="center-core">
//           {/* <img src="" alt="Logo" className="core-logo" /> */}
//           <a href="#home" className="font-display font-semibold text-ink text-lg tracking-tight">
//             SL<span className="text-signal-cyan">.</span>dev
//           </a>
//         </div>

//         {/* 5 Orbit Rings */}
//         {[1, 2, 3, 4, 5].map((ringIndex) => {
//           const duration = 20 + ringIndex * 8; // Clockwise speed per orbit
//           const itemsOnRing = TECH_DATA.filter((item) => item.orbitIndex === ringIndex);
//           const isRingPaused = activeOrbitIndex === ringIndex;

//           return (
//             <div
//               key={`ring-${ringIndex}`}
//               className={`orbit-ring ring-${ringIndex} ${isRingPaused ? "is-paused" : ""}`}
//               style={{ animationDuration: `${duration}s` }}
//             >
//               {itemsOnRing.map((tech) => (
//                 <div
//                   key={tech.id}
//                   className="tech-node-positioner"
//                   style={{
//                     transform: `rotate(${tech.angle}deg) translate(var(--radius-${ringIndex})) rotate(-${tech.angle}deg)`,
//                   }}
//                 >
//                   {/* Inverse counter-rotation to keep logo straight */}
//                   <div
//                     className={`tech-node-counter ${isRingPaused ? "is-paused" : ""}`}
//                     style={{ animationDuration: `${duration}s` }}
//                   >
//                     <button
//                       className={`tech-btn ${activeTech?.id === tech.id ? "active" : ""}`}
//                       onMouseEnter={(e) => handleMouseEnter(tech, e)}
//                       onMouseLeave={handleMouseLeave}
//                       onFocus={(e) => handleMouseEnter(tech, e)}
//                       onBlur={handleMouseLeave}
//                       aria-label={tech.name}
//                     >
//                       <img src={tech.icon} alt={tech.name} />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           );
//         })}

//         {/* Floating Modal Card */}
//         {activeTech && (
//           <div
//             className="tech-floating-modal"
//             style={{
//               top: `${modalPos.top}px`,
//               left: `${modalPos.left}px`,
//             }}
//           >
//             <span className="modal-tag">{activeTech.category}</span>
//             <h4 className="modal-title">{activeTech.name}</h4>
//             <p className="modal-desc">{activeTech.description}</p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import "./TechOrbit.css";

// const TECH_DATA = [
//   // Orbit 1
//   {
//     id: "selenium",
//     name: "Selenium",
//     category: "Testing",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
//     description:
//       "Automated browser testing and web app validation framework.",
//     orbitIndex: 1,
//     angle: 0,
//   },
//   {
//     id: "python",
//     name: "Python",
//     category: "Backend / AI",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
//     description:
//       "High-level programming language for web development, data science, and AI.",
//     orbitIndex: 1,
//     angle: 120,
//   },
//   {
//     id: "postman",
//     name: "Postman",
//     category: "API Tools",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
//     description:
//       "API platform for building, testing, and documenting APIs.",
//     orbitIndex: 1,
//     angle: 240,
//   },

//   // Orbit 2
//   {
//     id: "netcore",
//     name: ".NET Core",
//     category: "Framework",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
//     description:
//       "Cross-platform framework for building cloud-based software applications.",
//     orbitIndex: 2,
//     angle: 30,
//   },
//   {
//     id: "wordpress",
//     name: "WordPress",
//     category: "CMS",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
//     description:
//       "Popular open-source content management system and website builder.",
//     orbitIndex: 2,
//     angle: 110,
//   },
//   {
//     id: "laravel",
//     name: "Laravel",
//     category: "PHP Framework",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
//     description:
//       "Web application framework with expressive, elegant syntax.",
//     orbitIndex: 2,
//     angle: 190,
//   },
//   {
//     id: "gitlab",
//     name: "GitLab",
//     category: "DevOps",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
//     description:
//       "DevOps platform combining Git repository management and CI/CD.",
//     orbitIndex: 2,
//     angle: 270,
//   },

//   // Orbit 3
//   {
//     id: "react",
//     name: "React",
//     category: "Frontend",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//     description:
//       "JavaScript library for building dynamic user interfaces.",
//     orbitIndex: 3,
//     angle: 15,
//   },
//   {
//     id: "jenkins",
//     name: "Jenkins",
//     category: "CI/CD",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
//     description:
//       "Open source automation server for building and deploying software.",
//     orbitIndex: 3,
//     angle: 85,
//   },
//   {
//     id: "grafana",
//     name: "Grafana",
//     category: "Observability",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
//     description:
//       "Analytics platform for metrics visualization and monitoring dashboards.",
//     orbitIndex: 3,
//     angle: 155,
//   },
//   {
//     id: "mysql",
//     name: "MySQL",
//     category: "Database",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
//     description:
//       "Relational database management system for scalable data storage.",
//     orbitIndex: 3,
//     angle: 225,
//   },
//   {
//     id: "flutter",
//     name: "Flutter",
//     category: "Mobile",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
//     description:
//       "UI toolkit for building natively compiled mobile and web applications.",
//     orbitIndex: 3,
//     angle: 295,
//   },

//   // Orbit 4
//   {
//     id: "docker",
//     name: "Docker",
//     category: "DevOps",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
//     description:
//       "Containerization platform to package applications with dependencies.",
//     orbitIndex: 4,
//     angle: 45,
//   },
//   {
//     id: "oracle",
//     name: "Oracle",
//     category: "Database",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
//     description:
//       "Enterprise relational database management system.",
//     orbitIndex: 4,
//     angle: 135,
//   },
//   {
//     id: "elasticsearch",
//     name: "Elasticsearch",
//     category: "Search / Analytics",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
//     description:
//       "Distributed search and analytics engine.",
//     orbitIndex: 4,
//     angle: 225,
//   },
//   {
//     id: "angular",
//     name: "Angular",
//     category: "Frontend Framework",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
//     description:
//       "TypeScript-based framework for single-page web apps.",
//     orbitIndex: 4,
//     angle: 315,
//   },

//   // Orbit 5
//   {
//     id: "aws",
//     name: "AWS",
//     category: "Cloud",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
//     description:
//       "Comprehensive cloud services platform by Amazon.",
//     orbitIndex: 5,
//     angle: 0,
//   },
//   {
//     id: "kubernetes",
//     name: "Kubernetes",
//     category: "Container Orchestration",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
//     description:
//       "System for automating container deployment and scaling.",
//     orbitIndex: 5,
//     angle: 72,
//   },
//   {
//     id: "terraform",
//     name: "Terraform",
//     category: "IaC",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
//     description:
//       "Infrastructure as Code tool to build and change cloud resources safely.",
//     orbitIndex: 5,
//     angle: 144,
//   },
//   {
//     id: "nodejs",
//     name: "Node.js",
//     category: "Runtime",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
//     description:
//       "JavaScript runtime environment built on Chrome's V8 engine.",
//     orbitIndex: 5,
//     angle: 216,
//   },
//   {
//     id: "github",
//     name: "GitHub",
//     category: "Version Control",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
//     description:
//       "Cloud repository service for Git code management and collaboration.",
//     orbitIndex: 5,
//     angle: 288,
//   },
// ];

const TECH_DATA = [
  // =====================================================
  // ORBIT 1 — FRONTEND
  // =====================================================

  {
    id: "html",
    name: "HTML5",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    description:
      "Markup language used to structure and build the foundation of web pages.",
    orbitIndex: 1,
    angle: 0,
  },
  {
    id: "css",
    name: "CSS3",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    description:
      "Stylesheet language used to design responsive and visually engaging web interfaces.",
    orbitIndex: 1,
    angle: 90,
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    category: "CSS Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    description:
      "Popular CSS framework for building responsive and mobile-first web interfaces.",
    orbitIndex: 1,
    angle: 180,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "CSS Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    description:
      "Utility-first CSS framework for rapidly building custom and responsive interfaces.",
    orbitIndex: 1,
    angle: 270,
  },

  // =====================================================
  // ORBIT 2 — JAVA / BACKEND
  // =====================================================
  {
  id: "javascript",
  name: "JavaScript",
  category: "Programming Language",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  description:
    "Versatile programming language used to build interactive web applications and modern frontend and backend solutions.",
  orbitIndex: 5,
  angle: 288,
},
  {
    id: "java",
    name: "Java",
    category: "Programming Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    description:
      "Object-oriented programming language used for backend applications and enterprise software.",
    orbitIndex: 2,
    angle: 30,
  },
  {
    id: "springboot",
    name: "Spring Boot",
    category: "Backend Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    description:
      "Java framework for building production-ready REST APIs and backend applications.",
    orbitIndex: 2,
    angle: 120,
  },
  {
    id: "express",
    name: "Express.js",
    category: "Backend Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    description:
      "Minimal and flexible Node.js framework for building REST APIs and web applications.",
    orbitIndex: 2,
    angle: 210,
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Runtime",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description:
      "JavaScript runtime environment used to build scalable server-side applications.",
    orbitIndex: 2,
    angle: 300,
  },

  // =====================================================
  // ORBIT 3 — FULL STACK / DATABASE / API
  // =====================================================

  {
    id: "react",
    name: "React",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description:
      "JavaScript library for building dynamic and reusable user interfaces.",
    orbitIndex: 3,
    angle: 15,
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "NoSQL Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    description:
      "Document-oriented NoSQL database used for flexible and scalable application data.",
    orbitIndex: 3,
    angle: 87,
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    description:
      "Relational database management system used for structured application data.",
    orbitIndex: 3,
    angle: 159,
  },
  {
    id: "postman",
    name: "Postman",
    category: "API Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    description:
      "API platform used for building, testing, and documenting REST APIs.",
    orbitIndex: 3,
    angle: 231,
  },
  
  // =====================================================
  // ORBIT 4 — DEVOPS / DEVELOPMENT TOOLS
  // =====================================================

  {
    id: "docker",
    name: "Docker",
    category: "DevOps",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    description:
      "Containerization platform used to package applications and their dependencies.",
    orbitIndex: 4,
    angle: 45,
  },
  {
    id: "jenkins",
    name: "Jenkins",
    category: "CI/CD",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    description:
      "Automation server commonly used for continuous integration and continuous delivery.",
    orbitIndex: 4,
    angle: 135,
  },
  {
    id: "gitlab",
    name: "GitLab",
    category: "DevOps",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
    description:
      "DevOps platform providing Git repositories, CI/CD, and software development tools.",
    orbitIndex: 4,
    angle: 225,
  },
  {
    id: "github",
    name: "GitHub",
    category: "Version Control",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    description:
      "Platform for Git-based source code management, collaboration, and project hosting.",
    orbitIndex: 4,
    angle: 315,
  },

  // =====================================================
  // ORBIT 5 — CLOUD / INFRASTRUCTURE
  // =====================================================

  {
    id: "aws",
    name: "AWS",
    category: "Cloud",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    description:
      "Cloud computing platform providing infrastructure, storage, networking, and application services.",
    orbitIndex: 5,
    angle: 0,
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    category: "Container Orchestration",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    description:
      "Container orchestration platform used to deploy, manage, and scale containerized applications.",
    orbitIndex: 5,
    angle: 72,
  },
  {
    id: "terraform",
    name: "Terraform",
    category: "Infrastructure as Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
    description:
      "Infrastructure as Code tool used to provision and manage cloud infrastructure.",
    orbitIndex: 5,
    angle: 144,
  },
  {
    id: "python",
    name: "Python",
    category: "Programming Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    description:
      "High-level programming language used for scripting, automation, backend development, and data applications.",
    orbitIndex: 5,
    angle: 216,
  },
  {
    id: "git",
    name: "Git",
    category: "Version Control",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    description:
      "Distributed version control system used to track code changes and manage development workflows.",
    orbitIndex: 5,
    angle: 288,
  },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const handleChange = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return isMobile;
}

function MobileTechGrid() {
  return (
    <section className="tech-mobile-section">
      <div className="tech-mobile-header">
        <span className="tech-mobile-eyebrow">TECHNOLOGY</span>

        <h3 className="tech-mobile-title">
          Tools I work with
        </h3>

        <p className="tech-mobile-subtitle">
          Technologies and tools I use across development, databases,
          cloud, testing, and DevOps.
        </p>
      </div>

      <div className="tech-mobile-grid">
        {TECH_DATA.map((tech) => (
          <div key={tech.id} className="tech-mobile-card">
            <div className="tech-mobile-icon">
              <img src={tech.icon} alt="" loading="lazy" />
            </div>

            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function TechOrbit() {
  const isMobile = useIsMobile();

  const [activeTech, setActiveTech] = useState(null);
  const [activeOrbitIndex, setActiveOrbitIndex] = useState(null);
  const [modalPos, setModalPos] = useState({
    top: 0,
    left: 0,
  });

  const containerRef = useRef(null);

  const handleMouseEnter = (tech, event) => {
    if (!containerRef.current) return;

    const btnRect = event.currentTarget.getBoundingClientRect();
    const containerRect =
      containerRef.current.getBoundingClientRect();

    setModalPos({
      top:
        btnRect.top -
        containerRect.top -
        115,

      left:
        btnRect.left -
        containerRect.left +
        btnRect.width / 2,
    });

    setActiveTech(tech);
    setActiveOrbitIndex(tech.orbitIndex);
  };

  const handleMouseLeave = () => {
    setActiveTech(null);
    setActiveOrbitIndex(null);
  };

  /*
   * IMPORTANT:
   * Mobile does not render the expensive animated orbit.
   * Instead, it renders a lightweight static grid.
   */
  if (isMobile) {
    return <MobileTechGrid />;
  }

  return (
    <section className="tech-section">
      <div
        className="orbit-container"
        ref={containerRef}
      >
        {/* Center Core */}
        <div className="center-core">
          <a
            href="#home"
            className="font-display font-semibold text-ink text-lg tracking-tight"
          >
            SL<span className="text-signal-cyan">.</span>dev
          </a>
        </div>

        {/* Five Orbit Rings */}
        {[1, 2, 3, 4, 5].map((ringIndex) => {
          const duration = 20 + ringIndex * 8;

          const itemsOnRing = TECH_DATA.filter(
            (item) => item.orbitIndex === ringIndex
          );

          const isRingPaused =
            activeOrbitIndex === ringIndex;

          return (
            <div
              key={`ring-${ringIndex}`}
              className={`orbit-ring ring-${ringIndex} ${
                isRingPaused ? "is-paused" : ""
              }`}
              style={{
                animationDuration: `${duration}s`,
              }}
            >
              {itemsOnRing.map((tech) => (
                <div
                  key={tech.id}
                  className="tech-node-positioner"
                  style={{
                    transform: `
                      rotate(${tech.angle}deg)
                      translate(var(--radius-${ringIndex}))
                      rotate(-${tech.angle}deg)
                    `,
                  }}
                >
                  <div
                    className={`tech-node-counter ${
                      isRingPaused ? "is-paused" : ""
                    }`}
                    style={{
                      animationDuration: `${duration}s`,
                    }}
                  >
                    <button
                      type="button"
                      className={`tech-btn ${
                        activeTech?.id === tech.id
                          ? "active"
                          : ""
                      }`}
                      onMouseEnter={(event) =>
                        handleMouseEnter(
                          tech,
                          event
                        )
                      }
                      onMouseLeave={handleMouseLeave}
                      onFocus={(event) =>
                        handleMouseEnter(
                          tech,
                          event
                        )
                      }
                      onBlur={handleMouseLeave}
                      aria-label={tech.name}
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        loading="lazy"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          );
        })}

        {/* Floating Modal */}
        {activeTech && (
          <div
            className="tech-floating-modal"
            style={{
              top: `${modalPos.top}px`,
              left: `${modalPos.left}px`,
            }}
          >
            <span className="modal-tag">
              {activeTech.category}
            </span>

            <h4 className="modal-title">
              {activeTech.name}
            </h4>

            <p className="modal-desc">
              {activeTech.description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}