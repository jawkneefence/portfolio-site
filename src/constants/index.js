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
    beavs,
    brain,
    kotlin,
    data,
    cookbook,
    appleclone,
    headsync,
    pokedex
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
      title: "UI/UX Expert",
      icon: backend,
    },
    {
      title: "3D-Animations",
      icon: creator,
    },
    {
      title: "Mobile Developer",
      icon: mobile,
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
    },
    {
      title: "Data Structures & Algorithms",
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
      title: "Web Development & Database Operations",
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
      title: "Psychology Minor: Human-Computer Interaction, UI/UX Design",
      company_name: "Oregon State University",
      icon: brain,
      iconBg: "#E6DEDD",
      date: "Dec 2021 - June 2022",
      points: [
        "Collaborated with teams including designers, product managers, and other developers to create high-quality web/mobile apps.",
        "Learned to use Figma, studying best practices/strategies in styling and UI implementation.",
      ],
    },

    {
      title: "Info/Scientific Visualization",
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
      title: "Senior Capstone Project",
      company_name: "Oregon State University",
      icon: beavs,
      iconBg: "#383E56",
      date: "Sep 2021 - Sep 2022",
      points: [
        "Worked with a non-technical project manager to create a charity-based website with  and campaign features and Paypal donation",
        "Agile/Scrum environment"
      ],
    }
  ];
  
  const projects = [
    {
      name: "Headsync",
      description:
        "Purely a front-end showcase of what I can display on a page. Responsive design, interactive animations, and a user experience that is pleasing to both the eyes and the brain.",
      tags: [
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "bento-grids",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "blue-text-gradient",
        },
        {
          name: "HCI-design",
          color: "pink-text-gradient",
        },
      ],
      image: headsync,
      source_code_link: "https://github.com/jawkneefence/headsync",
      site_link: "https://www.headsyncjc.cloud",
    },
    {
      name: "Apple Clone",
      description:
        "An exact copy of the front page of Apple's original iPhone 15 website. The goal of this project was to improve my 3D-animation skills.",
      tags: [
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "Threejs",
          color: "blue-text-gradient",
        },
        {
          name: "GSAP",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "blue-text-gradient",
        },
      ],
      image: appleclone,
      source_code_link: "https://github.com/jawkneefence/appleclone",
      site_link: "https://appleclonejc.com",
    },
    {
      name: "My Pokedex",
      description:
        "A small Pokemon-browser that I've been updating occasionally over the years. Uses an input-buffering search bar and fetch requests from https://www.pokeapi.co. I use this site to experiment with small/new features.",
      tags: [
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "Nextjs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "blue-text-gradient",
        },        
      ],
      image: pokedex,
      source_code_link: "https://github.com/jawkneefence/pokedex",
      site_link: "https://www.mypokedex.live",
    },
  ];
  
  export { services, technologies, experiences, projects };