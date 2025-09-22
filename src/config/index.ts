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
      "Software Developer | DevOps | Full Stack (Java, Spring Boot, Python, React, Node.js, Docker, AWS).",
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
        "I developed more than 15 websites with WordPress, using Elementor and adding JavaScript functionalities for interactive features",
        "Design and development of responsive websites using WordPress and Elementor, creating attractive and easy to use pages for clients...",
        "Developed a PHP plugin for product synchronization between WooCommerce and an ERP, enabling automatic updates of products.",
       
      ],
    },
     {
      company: "Pulsia",
      position: "Internship Web Developer",
      startDate: "Mar 2024",
      endDate: "May 2024",
      summary: [
        "Mandatory Internship in Web Application Development.",
        "I used JavaScript for the implementation of functionalities in user interfaces, such as dynamic content update or manipulation of DOM elements.",
        "I collaborated in the creation and improvement of HTML/CSS user interfaces.",       
      ],
    },
    {
      company: "Axarnet",
      position: "IT Support Specialist",
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
      linkPreview: "https://inventarioapp.es",
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
    {
      name: "Weather API",
      summary: "App that fetches weather data for a city on a specific date or date range, using the VisualCrossing API and Redis for caching results to improve efficiency.",
      linkSource: "https://github.com/agarbar439/weather",
      techStack: ["node", "expressjs"],
      image: "/weather.jpg",
    },
    
  ],
  about: {
    description: `
    👋 Hi, I'm Antonio García
💻 Junior Full Stack Developer and DevOps with experience in full-stack web development and application deployment.

✅ Frontend: React, JavaScript, HTML5, CSS3.
✅ Backend: Java, Spring Boot, Python, PHP, and Node.js.
✅ Databases: MySQL, SQL Server and MongoDB.
✅ DevOps/SysAdmin: Docker, Git, Bash, PowerShell, Linux, Windows Server, AWS, Apache, DNS,
DHCP, FTP, SMTP, HTTP.
✅ Extras: CI/CD Pipelines, Virtualization (VMware, VirtualBox), Network and Services Administration

🔹 During my internship, I developed more than 15 websites with WordPress, using Elementor and adding JavaScript functionalities for interactive features.

🔹 Among my personal projects, I developed a web app for inventory management with Node.js, Express.js, JavaScript, HTML, and CSS3, including product/category management, stock control, protected zones, chat, and user authentication. The application is deployed on AWS EC2 and features continuous integration (CI/CD) for automated deployments.

🔹 I also have experience managing servers, including Windows Active Directory and Linux, web servers with Apache, and services like DNS, FTP, HTTP, SSH, and SMTP. This helps me deploy and maintain applications in real environments.

🌍 Based in Málaga, B2 English level, available to relocate in Europe. I aim to continue growing as a web developer, delivering efficient solutions, and contributing to development teams.
  `,
    image: "/yo.png",
  },
};

// #5755ff
