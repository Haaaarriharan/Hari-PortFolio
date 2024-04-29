import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  nestlogo,
  postgreslogo,
  tripguide,
} from "../assets";
import faso from "../assets/company/faso.jpg";
import firm from "../assets/company/firmerp.jpg";
import todi from "../assets/company/todi.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Nest JS",
    icon: nestlogo,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Postgres",
    icon: postgreslogo,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "KPR info solutions",
    project_name: "FIRM (ERP)",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2022 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "ERP systems to meet the unique needs of different organizations...",
      "ERP modules, such as Finance, Supply Chain Management, Product Management , Price Managerment and invoice.",
      "ERP systems, including applying patches, troubleshooting issues, and ensuring system stability and performance over time",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "KPR info solutions",
    project_name: "FASO",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Feb 2023",
    points: [
      "Ability to develop cross-platform mobile applications using React Native, allowing for code reuse across iOS and Android platforms.",
      "Implementing user interfaces and user experiences (UI/UX) for mobile applications using React Native.",
      "Integrating React Native applications with native modules or libraries to access device features or optimize performance.",
      "Have working with CI/CD pipelines for React Native applications to automate the build, testing, and deployment process",
    ],
  },

  {
    title: "Full stack Developer",
    company_name: "KPR info solutions",
    project_name: "TODI",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Worked as a lead developer for this projects and we migrated express js to nest js.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer(seniour)",
    company_name: "KPR info solutions",
    project_name: "Goldi's",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2024 - May 2024",
    points: [
      "Design, develop, and maintain software applications, websites, or systems according to project requirements and industry best practices.",
      "Write clean, efficient, and maintainable code using programming languages such as JavaScript, Python or others, depending on the project's requirements.",
      "Unit tests, integration tests, and end-to-end tests to ensure software quality and reliability will reduce QA bugs",
      " Git to manage codebase changes, collaborate with team members, and track project history",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "FIRM (ERP)",
    description:
      "FIRM is an ERP (Enterprise Resource Planning) textile application is a software solution designed specifically for businesses operating in the textile industry. Textile ERP systems provide comprehensive tools to manage various aspects of textile manufacturing, including production planning, inventory management, supply chain, quality control, sales, finance, and more. ",
    tags: [
      {
        name: "Ract js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Sails js",
        color: "green-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
    ],
    image: firm,
    source_code_link: "https://github.com/",
  },
  {
    name: "FASO",
    description:
      "It is software application designed to enhance and streamline various aspects of marketing activities for businesses",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "React native",
        color: "blue-text-gradient",
      },
      {
        name: "Next js(BE)",
        color: "green-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
    ],
    image: faso,
    source_code_link: "https://github.com/",
  },
  {
    name: "TODI",
    description:
      "TODI is software application that facilitates the integration, management, and interaction with various social media platforms. These apps are designed to enhance social media presence, streamline content sharing, and enable communication with audiences across different social networks.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Nest js(BE)",
        color: "green-text-gradient",
      },
      {
        name: "Postgres",
        color: "green-text-gradient",
      },
      {
        name: "Mantine(ui-librarey)",
        color: "pink-text-gradient",
      },
    ],
    image: todi,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
