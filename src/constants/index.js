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
  tripguide,
  threejs,
  acordofav,
  gritacademyfav,
  salesrepfav,
  github,
  javaicon,
  kotlinicon,
  springbooticon,
  chatappfrontpage,
  firebaseicon,
  improvedpotatopage,
} from "../assets";

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
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
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
  /*   {
    name: "Tailwind CSS",
    icon: tailwind,
  }, */
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  /*   {
    name: "git",
    icon: git,
  }, */
  {
    name: "Java",
    icon: javaicon,
  },
  {
    name: "Kotlin",
    icon: kotlinicon,
  },
  {
    name: "Springboot",
    icon: springbooticon,
  },
  /*   {
    name: "Firebase",
    icon: firebaseicon,
  }, */
];

const experiences = [
  {
    title: "React, TypeScript Hobby Developer",
    company_name: "-",
    icon: github,
    iconBg: "#383E56",
    date: "Jun 2023 - Present",
    points: [
      "Dedicated spare time to develop a comprehensive full-stack ERP system utilizing TypeScript.",
      "Utilized a diverse tech stack including React, Auth0, MariaDB, and Node.js for backend functionalities.",
      "I've also created this portfolio website using Three.js and Tilt.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Acordo Systems AB",
    icon: acordofav,
    iconBg: "#383E56",
    date: "Jan 2023 - May 2023",
    points: [
      "Developed and maintained web applications using React.js, Redux, Node.js, and MySQL database tools.",
      "Designed and implemented a new filtering feature within the application, encompassing the development of a new UI component and backend functionalities.",
      "Contributed to code reviews, offering constructive feedback to peers and incorporating feedback received to enhance coding practices.",
    ],
  },
  {
    title: "Javadeveloper Student",
    company_name: "Grit Academy",
    icon: gritacademyfav,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - May 2023",
    points: [
      "Studied Java development at Grit Academy, gaining proficiency in Java, Spring Boot, JUnit, Mockito, JSP, SQL, Git, and GitHub.",
      "Developed diverse projects, demonstrating skills in backend development, test-driven development, and web development using technologies like Java, HTML5, CSS, and JavaScript.",
      "Highlights include a 5-month internship and various projects showcased on my GitHub repositories: (https://github.com/Fredrikkarm/) and (https://github.com/karmsten). Please note that not all my projects are public.",
      "Focused coursework in Consultant methodologies, Agile Development, Database Management, and Mobile Development using Java & Kotlin, culminating in a comprehensive understanding of backend development.",
    ],
  },
  {
    title: "Sales Representative",
    company_name: "Inquiry about details",
    icon: salesrepfav,
    iconBg: "#383E56",
    date: "Mar 2012 - Aug 2021",
    points: [
      "Worked as a B2B sales representative across multiple industries, gaining experience in selling diverse products and services, ranging from security systems to IT solutions.",
      "Developed strong communication and negotiation skills, consistently meeting sales targets and building successful client relationships.",
    ],
  },
];

/* const testimonials = [
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
]; */

const projects = [
  {
    name: "Chatapp",
    description:
      "Chatapp written in Kotlin using Firebase as database. Project was written in Android Studio and is a school project. The app is a simple chatapp where you can create a user and chat with other users",
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Android Studio",
        color: "pink-text-gradient",
      },
    ],
    image: chatappfrontpage,
    source_code_link: "https://github.com/Fredrikkarm/ChatApp",
  },
  {
    name: "Improved Potato",
    description:
      "Improved Potato is a fullstack web application written in TypeScript using React, Node.js, Express, MariaDB, and Auth0. The application is a simple ERP system where you can create users, products, and orders. The application also has a login system with authentication and authorization.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Auth0 & MariaDB",
        color: "pink-text-gradient",
      },
    ],
    image: improvedpotatopage,
    source_code_link: "https://github.com/karmsten/IP",
  },
];

export { services, technologies, experiences, projects };
