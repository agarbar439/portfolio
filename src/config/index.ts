import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Antonio García — Web Developer & System Administrator",
  author: "Antonio García",
  description:
    "Software Developer skilled in JavaScript, Express.js, Java, Spring Boot and PHP, backed by a strong foundation in system administration open to learning new technologies and frameworks that help me grow as a developer and bring more value to the projects I work on.",
   
  lang: "en",
  siteLogo: "/antonio.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/antonio-garcia-barrera/" },
    { text: "Github", href: "https://github.com/agarbar439" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Antonio García",
    specialty: "Web Developer & System Administrator",
    summary:
      "Software Developer specializing with expertise in JavaScript, Express.js, Java and PHP, backed by a strong foundation in system administration.",
      techStack: ["node","expressjs","java","php", "javascript"],
    email: "antoniogarci0309@gmail.com",
    
  },
  experience: [
    {
      company: "Universo Web",
      position: "Internship Web Developer",
      startDate: "Feb 2025",
      endDate: "May 2025",
      summary: [
        "Mandatory Internship in Web Application Development.",
        "Creation and management of web forms using PHP for user data collection, field validation and error handling.",
        "Design and development of responsive websites using WordPress and Elementor, creating attractive and easy to use pages for clients...",
        "Responsible for fixing errors, implementing client-requested modifications, and ensuring smooth functionality of web pages.",
       
      ],
    },
    {
      company: "Axarnet",
      position: "Customer Client",
      startDate: "Oct 2023",
      endDate: "Mar 2024",
      summary: [
        "Customer support through ticket and call-based inquiries.",
        "Managed domain administration, DNS configurations, and SSL certificates.",
        "Developed and implemented a script to automate the verification of DNS records across a large list of domains, improving efficiency and accuracy.",
        "Gained valuable experience in client communication, domain and DNS configurations.",
      ],
    },
    {
      company: "Aerodynamics Academy",
      position: "Systems Administrator and Flight Simulator Maintenance",
      startDate: "Summer position | June 2023",
      endDate: "Sept 2023",
      summary: [
        "Maintained A320 flight simulators, ALSIM AL200, and ALSIM AL250.",
        "Assisted employees with IT-related tasks and ensured the proper functioning, maintenance, and repair of equipment.",
        "Developed a strong understanding of hardware troubleshooting, system configurations, and technical support in a high-tech environment.",
      ],
    },
    {
      company: "Internship Erasmus+ | Köln, Germany",
      position: "LightLife Gesellschaft für audiovisuelle Erlebnisse mbH",
      startDate: "Mar 2023",
      endDate: "Jun 2023",
      summary:[
        "Erasmus internship in Network Systems Administration in Cologne, Germany.",
        "Developed a web interface with Pharos Designer using HTML and JavaScript to control bulbs and LED panels via buttons, intensity bars, and a color picker.",
      ],
    },
  ],
  projects: [
    {
      name: "Inventory Management",
      summary: "Inventory management system with secure API routes, JWT auth, and a responsive frontend built in vanilla JS.",
      linkSource: "https://github.com/agarbar439/gestion-inventario",
      techStack: ["expressjs","node", "javascript"] ,
      image: "/gestion-inventario.png",
    },
    {
      name: "Employee Management App",
      summary: "Full-stack employee management app with React and Spring Boot. Supports CRUD operations, advanced search, and Excel export.",
      linkSource: "https://github.com/agarbar439/employee-control-app",
      techStack: ["java", "spring-boot", "react"],
      image: "/employee.png",
    },
    
  ],
  about: {
    description: `
    👋 Hi, I'm Antonio García
I'm a Junior Full Stack Developer and System Administrator with a strong technical foundation and hands-on experience in both web development and IT infrastructure.

💻 I work with technologies like JavaScript, PHP, Express.js, Java, Spring Boot, and MySQL, and I'm familiar with tools like Docker, Git, Postman, and AWS.
🔧 My background in system administration includes Linux servers, DNS management, and network troubleshooting, which gives me a holistic understanding of how web systems operate from the ground up.
🌍 I completed an Erasmus+ internship in Germany, where I built interactive web interfaces to control lighting systems — combining front-end skills with real-world hardware interaction.
🚀 I'm a fast learner, always curious, and eager to explore new technologies to improve my development workflow and bring greater value to the teams I work with.

I'm open to relocation within Europe and excited to join a team where I can grow, contribute, and collaborate on innovative projects.

👉 Feel free to explore my portfolio and reach out if you'd like to connect or work together!
  `,
    image: "/yo.png",
  },
};

// #5755ff
