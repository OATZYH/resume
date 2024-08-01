export const Data = {
  profile: {
    name: "Sarun Khumthai",
    ocupation: "OAT",
    location: "Bangkok, Thailand",
    email: "sarun.khumthai@gmail.com",
    telephone: "0634124268",
    image: "images/profiles2-1.jpg",
  },
  aboutMe: {
    label: "Profile",
    description:
      `I have strong skills in learning topics of interest effectively. I also keep learning new tools, which allows me to start work quickly.
      I have excellent skills as a team member and take high responsibility in any task assigned to me.
      `,
  },
  skills: {
    technicalLabel: "Technologies and Languages",
    softLabel: "Skills",
    technicalSkills: {
      Languages: [
        "C",
        "Javascript",
        "SQL",
        "Python",
        "Dart",
        // "Typescript",
        // "Golang",
      ],
      "Libraries & Frameworks": [
        "React",
        "Nextjs",
        "NextUI",
        "Tailwindcss",
        "Vite",
        "Nodejs",
        "Express",
        "Flutter",
      ],
      Tools: [
        "Git",
        "GitHub",
        "Figma",
      ],
      Others: [
        "MySQL",
        "MongoDB",
        "PostgreSQL",
        "Prisma",
        "Docker",
      ]
    },
    softSkills: [
      "Great communication",
      "Leadership",
      "Self-motivation",
      "Self-learner",
      "Attention to detail",
      "Adaptability",
      "Problem solving",
    ],
  },
  socialMedia: {
    label: "SOCIAL",
    social: [
      {
        label: "Visit My profile on LinkedIn",
        name: "linkedin",
        url: "https://www.linkedin.com/in/sarun-khumthai",
        className: "bxl-linkedin-square",
      },
      {
        label: "Visit My profile on GitHub",
        name: "github",
        url: "https://github.com/OATZYH",
        className: "bxl-github",
      },
    ],
  },
  experience: {
    works: [
      {
        title: "FULL-STACK DEVELOPER",
        period: "Oct. 2021 - Actualidad",
        company: "Banco Ripley",
        description: [
          "Desarrollo y mejora continua de microservicios REST en Java y Node.js(JS/TS).",
          "Desarrollo y mejora continua de PWA en las tecnologías Angular, Ionic y Cordova.",
          "Canalización CI/CD con Bitbucket, Jenkins y AWS como infraestructura."
        ],
      },
      {
        title: "FULL-STACK DEVELOPER",
        period: "Oct. 2019 - Oct. 2021",
        company: "Altiuz",
        description: [
          "Desarrollo de Web Services REST en Java y Nodejs(JS/TS) acompañado de diferentes motores de BD como Mysql, Oracle, MariaDB, MongoDB e IBM API Connect y 3scale como API Gateway.",
          "Desarrollo de Frontend y Mobile con tecnologías como Angular, React, React Native, Ionic y Cordova.",
        ],
      },
    ],
    academic: [
      {
        career: "B.Eng. Computer Engineering, TH.",
        date: "2022-Present (Expected May 2026)",
        institution: "King Mongkut's University of Technology Thonburi, Thailand",
      },
    ],
    projects: [
      // {
      //   name: "Admin Dashboard",
      //   company: "Banco de Chile",
      //   period: "Nov. 2019 - Ene. 2020",
      //   stack:"NextJS, MUI, MySQL",
      //   description: [
      //     "Control, desarrollo, securitización y despliegue de APIs en plataforma IBM API Connect.",
      //   ],
      // },
      // {
      //   name: "E-commerce Store",
      //   company: "Banco de Chile",
      //   period: "Nov. 2019 - Ene. 2020",
      //   stack:"NextJS, MUI, Redux",
      //   description: [
      //     "Control, seguimiento, securitización y despliegue de APIs en plataforma IBM API Connect.",
      //   ],
      // },
      {
        name: "Expense tracker",
        company: "Banco de Chile",
        period: "Nov. 2019 - Ene. 2020",
        stack:"NextJS, NextUI, PostrgeSQL, Prisma",
        description: [
          `This expense tracker project efficiently manages income and expenses. 
          It offers a responsive user interface and secure data handling, create CRUD operations with Prisma and PostgreSQL.`,
        ],
      },  
      {
        name: "Mobil Support - ExxonMobil IT Bootcathon 2024",
        company: "Banco de Chile",
        period: "Nov. 2019 - Ene. 2020",
        stack:"React, daisyUI, Express, MongoDB",
        description: [
          "This schedule platform integrates AI [Typhoon API] for car service appointments, problem consultations, and upcoming workshop tools, enhancing my frontend skills with React and daisyUI.",
        ],
      },
      
    ],
  },
  activities: {
    label: "Activities",
    activities: [
     {
      name: "ExxonMobil IT Bootcathon 2024",
      company: "ExxonMobil",
      period: "Nov. 2019 - Ene. 2020",
      description: [
        "We got runner up in the ExxonMobil IT Bootcathon 2024. We have opputunity to learn how corporation using Auzure DevOps and how to work in a team.",
      ],
     },
     {
      name: "Microsoft AI for Accessibility Hackathon 2023",
      company: "Microsoft",
      period: "Nov. 2019 - Ene. 2020",
      description: [
        "We got 2nd place in this hackathon. We have opputunity to learn how to use AI to help people with disabilities. We have a chance to contact with FOUNDATION FOR THE BLIND IN THAILAND UNDER THE ROYAL PATRONAGE OF H.M. THE QUEEN to do some research.",
      ],
     },
      {
        name: "Digital Innovation Sandbox 2022-2023",
        company: "KMUTT",
        period: "Nov. 2019 - Ene. 2020",
        description: [
          "I have opportunity to learn from the expert in the field of digital innovation. And How I bulid a startup from scratch. We have a chance to pitch our idea to the investor and got a runner up.",
        ],
      },
    ],
  },
  certifications: {
    label: "Certifications",
    certifications: [
     
    ],
  },
  interests : {
    label: "Interest",
    interests: [
      {
        name: "Reading",
        description: "Self-improvement books, manga, manhwa.",
        
      },
      {
        name: "Music",
        description: "K-pop, J-pop, Pop, Hip-hop, Indies.",

      },
      {
        name: "Games",
        description: "MOBA, RPG, FPS, Indie, Strategy.",
      }
    ],
  },
};
