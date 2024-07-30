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
    eagles,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    pokedex,
    helpingmyfriend,
    cookbook,
    beavs,
    brain,
    kotlin,
    data,
    steam,
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
      title: "Team - Oriented",
      icon: backend,
    },
    {
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Content Creator",
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
      name: "Three JS",
      icon: threejs,
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [

    {
      title: "Info Visualization, Scientific Visualization",
      company_name: "Oregon State University",
      icon: data,
      iconBg: "#383E56",
      date: "June 2022 - Dec 2022",
      points: [
        "Displayed data from various input sources in C.",
        "Learned OpenGL; created complex 3D objects, terrains, lighting, and animations.",
      ],
    },

    {
      title: "Psychology Minor: Human-Computer Interaction, UI/UX Design",
      company_name: "Oregon State University",
      icon: brain,
      iconBg: "#E6DEDD",
      date: "Dec 2021 - June 2022",
      points: [
        "Collaborated with teams including designers, product managers, and other developers to create high-quality web/mobile apps.",
        "Studied best practices/strategies in styling and UI implementation.",
      ],
    },

    {
      title: "Mobile Development",
      company_name: "Oregon State University",
      icon: kotlin,
      iconBg: "#383E56",
      date: "March 2021 - June 2021",
      points: [
        "Used Android Studio to create multiple projects in Kotlin",
        "Learned to work with activities, fragments, recycler/list views, navcontrollers, device permissions, and API calls.",
      ],
    },

    {
      title: "Web Development, Database Operations",
      company_name: "Oregon State University",
      icon: mongodb,
      iconBg: "#E6DEDD",
      date: "Sept 2020 - March 2021",
      points: [
        "Worked with a partner to develop a Magic the Gathering market-list website",
        "Used Nodejs, Handlebars, and MongoDB",
        "Implemented responsive design cross-browser compatibility.",
        "Implement and query a database on MongoDB",
        "Practiced queries/operations in MySQL",
      ],
    },

    {
      title: "Data Structures, Algorithms",
      company_name: "Oregon State University",
      icon: beavs,
      iconBg: "#383E56",
      date: "Sept 2019 - June 2020",
      points: [
        "Operated on more complex data types such as vectors, linked lists, trees, heaps in C",
        "Used abstract data types (collections, stacks, queues) in C",
        "Managed time complexities and space/memory utilization in C",
        "Solved recurrence relations",
        "Calculate time complexities of algorithms",
        "Programed recursive and dynamic algorithms in Python",
      ],
    },

    {
      title: "Robotics Club & AP Computer Science",
      company_name: "George Washington High School",
      icon: eagles,
      iconBg: "#E6DEDD",
      date: "Sept 2016 - June 2018",
      points: [
        "My first programming language: Java, paired with the BlueJ compiler.",
        "Became familiar with pointers as well as some basic data structures and algorithms",
        "Programming electronics with Arduino and Raspberry Pi PCBs.",
        "Participated in Robot-Fighting competitions with other schools.",
      ],
    }
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
      name: "My Pokedex",
      description:
        "Web application that fetches and displays detailed information about every Pokemon. Made with NextJS and data from https://pokeapi.co/",
      tags: [
        {
          name: "frontend",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
        
      ],
      image: pokedex,
      source_code_link: "https://github.com/jawkneefence/pokedex",
      site_link: "https://mypokedex.site",
    },
    {
      name: "CookBook",
      description:
        "Mobile application that allows users to create accounts and upload images and ingredient-lists of recipes to a Firebase database. Made with Angular and Ionic Capacitor (convertible to iOS via Swift or Android via Kotlin)",
      tags: [
        {
          name: "fullstack",
          color: "green-text-gradient",
        },
        {
          name: "angular",
          color: "pink-text-gradient",
        },
        {
          name: "ionic",
          color: "blue-text-gradient",
        },
        {
          name: "kotlin",
          color: "green-text-gradient",
        },
        {
          name: "swift",
          color: "blue-text-gradient",
        },
      ],
      image: cookbook,
      source_code_link: "https://github.com/jawkneefence/CookBook",
      site_link: "https://play.google.com/store/apps/details?id=com.johnnys.cookbook",
    },
    {
      name: "Helping My Friend",
      description:
        "University Senior Project - collaborated with a team of 4; I collaborated in all areas of development and led the frontend team in implementing feature designs given by a non-technical third party. ",
      tags: [
        {
          name: "fullstack",
          color: "green-text-gradient",
        },
        {
          name: "ejs",
          color: "pink-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "docker",
          color: "blue-text-gradient",
        },
      ],
      image: helpingmyfriend,
      source_code_link: "https://github.com/",
      site_link: "https://www.helpingmyfriend.com",
    },
    {
      name: "Data Visualization Project",
      description:
        "Currently in-progress; focusing on using D3.",
      tags: [
        {
          name: "D3.js",
          color: "pink-text-gradient",
        },
        {
          name: "in-progress",
          color: "pink-text-gradient",
        },
      ],
      image: steam,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };