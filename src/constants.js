// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import sqlLogo from './assets/tech_logo/sql.png';
import electronLogo from './assets/tech_logo/electron.png';
import xxampLogo from './assets/tech_logo/xxamp.png';
import phpLogo from './assets/tech_logo/php.png';
import gitlabLogo from './assets/tech_logo/gitlab.png';

// Experience Section Logo's
import dataphiLogo from './assets/company_logo/dataphi.png'
import compsoftLogo from './assets/company_logo/compsoft.png'

// Education Section Logo's
import paceLogo from './assets/education_logo/pace.png';
import kpbLogo from './assets/education_logo/kpb.png';
import islahiLogo from './assets/education_logo/Islahi.png';

// Project Section Logo's
import imagesearchLogo from './assets/work_logo/image_search.png';
import anugrahaLogo from './assets/work_logo/Anugraha.png';
import textutilsLogo from './assets/work_logo/textutils.png';
import excelmapperLogo from './assets/work_logo/excelmapper.png';
import grocoLogo from './assets/work_logo/groco.png';
import newshubLogo from './assets/work_logo/newshub.png';
// import tictactoeLogo from './assets/work_logo/tictactoe.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Electron JS', logo: electronLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Xxamp', logo: xxampLogo },
      { name: 'PHP', logo: phpLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C', logo: cLogo },
      { name: 'Sql', logo: sqlLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'GitLab', logo: gitlabLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      // { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: dataphiLogo,
    role: "Fullstack Developer",
    company: "Dataphi Labs",
    date: "August 2023 - March 2025",
    desc: "Developed dynamic and scalable web applications, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Python",
      "Django",
      "Tailwind CSS",
      "Material UI",
      "Gitlab",
      "Xml",
      "SQL",
    ],
  },
  {
    id: 1,
    img: dataphiLogo,
    role: "Fullstack Developer Intern",
    company: "Dataphi Labs",
    date: "April 2023 - July 2024",
    desc: "Automated data mapping with xlwings and Python for accurate Excel template transfers based on predefined rules. Developed a user-friendly interface with Electron, React, and Node.js to optimize data upload and mapping efficiency.",
    skills: [
      "ReactJS",
      "Electronjs",
      "JavaScript",
      "Python",
      "Bootstrap CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    id: 2,
    img: compsoftLogo,
    role: "Machine Learning Intern",
    company: "Compsoft Technologies",
    date: "September 2022 - October 2022",
    desc: "Developed a machine learning model to predict crop demand and supply trends, supporting informed agricultural decision-making. Conducted extensive testing to ensure accuracy and reliability, optimizing agricultural planning and productivity.",
    skills: [
      "Python",
      "Jupyter",
      "Numpy",
      "Pandas",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: paceLogo,
    school: "PACE, Mangalore",
    date: "Aug 2019 - Mar 2023",
    grade: "7.4 CGPA",
    desc: "I completed my Bachelor's degree in Computer Science (BE) from PACE College, Mangalore. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Engineering - BE (Computer Science)",
  },
  {
    id: 1,
    img: kpbLogo,
    school: "K.Pandyarajah Ballal College, Mangalore",
    date: "Oct 2017 - Apr 2019",
    grade: "68%",
    desc: "I completed my class 12 education from K.Pandyarajah Ballal College, Mangalore, under the Karnataka State board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "PCM with Computer Science",
  },
  {
    id: 2,
    img: islahiLogo,
    school: "Islahi English Medium School, Mangalore",
    date: "Feb 2016 - May 2017",
    grade: "71%",
    desc: "I completed my class 10 education from Islahi English Medium School, Mangalore, under the Karnataka State board, where I studied Science with Computer.",
    degree: "SSLC",
  },
];

export const projects = [
  {
    id: 0,
    title: "Anugraha Education Trust Website",
    description:
      "Developed and deployed a responsive educational website for Anugraha Education Trust. Implemented a clean and user-friendly interface. Integrated features like course listings, institution details, gallery, and contact forms. Focused on SEO optimization, cross-browser compatibility, and mobile responsiveness to ensure a smooth user experience.",
    image: anugrahaLogo,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP"],
    webapp: "https://www.anugrahaeducationtrust.com/",
  },
  {
    id: 1,
    title: "Newshub",
    description:
      "Newshub is a news aggregator website that provides users with a curated selection of articles from various sources, ensuring a diverse and up-to-date collection of news content.",
    image: newshubLogo,
    tags: ["React JS", "HTML", "CSS", "Bootstrap", "JavaScript"],
    github: "https://github.com/shahil-07/Newshub-React",
    webapp: "https://newshub-react-seven.vercel.app/",
  },
  {
    id: 2,
    title: "Textutils",
    description:
      "Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count. Experience seamless text manipulation directly in your browser, eliminating the need for additional software installations. Textutils ensures compatibility across various browsers, offering a consistent and user-friendly experience for all users.",
    image: textutilsLogo,
    tags: ["React JS", "HTML", "CSS", "Bootstrap", "JavaScript"],
    github: "https://github.com/shahil-07/Textutils-React",
    webapp: "https://textutils-websites.netlify.app/",
  },
  {
    id: 3,
    title: "Excel Mapper App",
    description:
      "Automated data mapping with xlwings and Python for accurate Excel template transfers based on predefined rules. Developed a user-friendly interface with Electron, React, and Node.js to optimize data upload and mapping efficiency.",
    image: excelmapperLogo,
    tags: ["React JS", "Electron JS", "Node JS", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/shahil-07/Excel_mapper-Electron-react.git",
  },
  {
    id: 4,
    title: "Groco Website",
    description:
      "Groco is an online platform for ordering groceries and food items, offering a user-friendly interface for browsing and purchasing essentials.",
    image: grocoLogo,
    tags: ["HTML", "CSS", "JavaScript", "xxamp", "MySql"],
    github: "https://github.com/shahil-07/Groco-website.git",
    webapp: "https://groco-website.vercel.app/",
  },
  {
    id: 5,
    title: "Image Search App",
    description:
      "A image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    image: imagesearchLogo,
    tags: ["HTML", "CSS", "API", "Javascript"],
    github: "https://github.com/shahil-07/Search-images-app.git",
    webapp: "https://search-images-app.vercel.app/",
  },
];  