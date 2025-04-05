import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Antonio García — Web Developer & System Administrator",
  author: "Antonio García",
  description:
    "Developer specializing in web application development with expertise in JavaScript, Express.js, Java and PHP, backed by a strong foundation in system administration.",
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
        "Internship in Web Application Development.",
        "Working with WordPress and Elementor to design websites.",
        "Responsible for fixing errors, implementing client-requested modifications, and ensuring smooth functionality of web pages.",
       
      ],
    },
    {
      company: "Axarnet",
      position: "Customer Client",
      startDate: "Oct 2023",
      endDate: "Mar 2024",
      summary: [
        "Customer Support, handling ticket and call-based inquiries.",
        "Managed domain administration, DNS configurations, and SSL certificates.",
        "I developed a script to verify the existence of records across a large list of domains",
      ],
    },
    {
      company: "Aerodynamics Academy",
      position: "Systems Administrator and Flight Simulator Maintenance",
      startDate: "Summer position | June 2023",
      endDate: "Sept 2023",
      summary: [
        "Maintained A320 flight simulators, ALSIM AL200, and ALSIM AL250.",
        "Assisted employees with IT-related tasks and ensured the proper functioning and repair of equipment.",
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
    Hi, I'm a Web Developer 💻 with a solid foundation in System Administration ⚙️. I specialize in technologies such as:

    HTML5, CSS3, JavaScript
    Node.js, PHP, Symfony, and Express.js

    Through hands-on experience with personal projects, I've developed expertise in:

    API integration 🔗
    JWT authentication 🔐
    Dynamic routing 🛣️
    MySQL databases 🗃️
    Responsive design with Bootstrap 📱

    My goal is to continue improving my skills and best practices, always striving to add value to the projects I work on. I'm fluent in English and open to relocation, both within Spain and internationally, to contribute to innovative teams 🌍.

    Feel free to explore my work, and don't hesitate to reach out if you'd like to collaborate 🤝.
  `,
    image: "/antonio.png",
  },
};

// #5755ff
