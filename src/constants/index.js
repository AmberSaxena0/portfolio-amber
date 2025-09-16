import {
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  git,
  figma,
  android,
  apple,
  vscode,
  slack,
  etelligens,
  unhu,
  HobbyTwin,
  Crypt,
  dotsquares,
  _apple,
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
    title: "ReactJs Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Android Developer",
    icon: android,
  },
  {
    title: "iOS Developer",
    icon: _apple,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "android",
    icon: android,
  },
  {
    name: "apple",
    icon: apple,
  },
  {
    name: "vscode",
    icon: vscode,
  },
  {
    name: "slack",
    icon: slack,
  },
];

const experiences = [
  {
    title: "Programmer",
    company_name: "Dotsquare Technologies",
    icon: dotsquares,
    iconBg: "#E6DEDD",
    date: "June 2025 - Present",
    points: [
      "Worked on code migration and version upgrades in React Native projects to enhance stability and support new features.",
      "Collaborated with clients to gather feedback and implemented fixes to improve react native application.",
      "Collaborated with cross-functional teams through Scrum calls, ensuring timely updates and project alignment.",
      "Implemented EAS build and OTA update workflows in Expo to streamline app deployment and delivery.",
    ],
  },
  {
    title: "Associate Software Developer",
    company_name: "Etelligens Technologies",
    icon: etelligens,
    iconBg: "#383E56",
    date: "February 2023 - May 2025",
    points: [
      "Created and maintained mobile applications using React Native, improving application performance by 20% through code optimisation.",
      "Worked in an Agile team environment, participating in daily stand-ups, sprint planning, and retrospectives to enhance team productivity and project outcomes.",
      "Diagnosed and resolved software bugs and issues, reducing application load time by 25% and improving overall application stability.",
      "Conducted peer code reviews to ensure adherence to best practices and coding standards, contributing to a 10% decrease in post- deployment defects.",
    ],
  },
  {
    title: "Software Developer Engineer Intern",
    company_name: "Unhu School Of Business  ",
    icon: unhu,
    iconBg: "#E6DEDD",
    date: "September 2019 - April 2020",
    points: [
      "Assisted in the design and development of user interfaces using HTML, CSS, and JavaScript, contributing to a 15% increase in user engagement on the company’s primary web application.",
      "Applied responsive web design principles to develop applications that adapt seamlessly to various devices and screen sizes, enhancing usability and user experience which leads to a 30% increase in mobile user engagement and a more consistent experience across platforms.",
      "Designed reusable UI components and integrated them into existing projects using React, reducing development time by 20% for new features.",
      "Worked closely with senior developers and designers to translate wireframes and mockups into functional, high-quality code.",
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
    name: "Hobby Twin",
    description:
      "It helps people find others who share their hobbies or interests, making it easier to bond and form friendships. Hobbytwins can work together on creative projects or participate in activities they both enjoy.",
    tags: [
      {
        name: "Apple App Store",
        color: "blue-text-gradient",
        onPress:
          "https://apps.apple.com/in/app/hobbytwin-make-hobby-friends/id1488601826",
      },
      {
        name: "Google Play Store",
        color: "blue-text-gradient",
        onPress:
          "https://play.google.com/store/apps/details?id=com.hobbytwin.hobbytwin&pcampaignid=web_share",
      },
    ],
    image: HobbyTwin,
    source_code_link: "https://github.com/",
  },
  {
    name: "Crypt",
    description:
      "Developed a secure and user-friendly web application enabling seamless Ethereum transactions between accounts, leveraging blockchain technology and tools like Web3.js and MetaMask integration.",
    tags: [
      {
        name: "Github",
        color: "blue-text-gradient",
        onPress: "https://github.com/AmberSaxena0/Crypt",
      },
      {
        name: "Website",
        color: "blue-text-gradient",
        onPress: "https://crypto-52ef2.web.app/",
      },
    ],
    image: Crypt,
    source_code_link: "https://github.com/",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
