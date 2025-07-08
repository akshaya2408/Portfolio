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


// Education Section Logo's
import cbitLogo from './assets/education_logo/cbit.png';
import chaiLogo from './assets/education_logo/chaitanya.png';
import schlLogo from './assets/education_logo/triveni.png';

// Project Section Logo's
import placementLogo from './assets/work_logo/placement.png';
import studentLogo from './assets/work_logo/student.png';
import todoLogo from './assets/work_logo/todo.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
    ],
  },
];

  
  
  export const education = [
    {
      id: 0,
      img: cbitLogo,
      school: "Chaitanya Bharathi Institute Of Technology(A),Hyderabad",
      date: "2023-present",
      grade: "9.85 CGPA",
      desc: "I have completed my Bachelor's degree (B.E) in Computer Science And Engineering from Chaitanya Bharathi Institute Of Technology, Hyderabad. During my time at CBIT, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge.",
      degree: "Bachelor of Engineering - B.E (Computer Science And Engineering)",
    },
    {
      id: 1,
      img: chaiLogo,
      school: "Sri Chaitanya Junior College,Madinaguda",
      date: "2021-2023",
      grade: "98%",
      desc: "I completed my intermediate from Sri Chaitanya Junior College, Madinaguda, under the state board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "Intermediate(XII)-MPC",
    },
    {
      id: 2,
      img: schlLogo,
      school: "Triveni Talent School,Miyapur",
      date: "2020-2021",
      grade: "100%",
      desc: "I completed my class 10 education from Triveni Talent School, Miyapur, under the Telanagana State board.",
      degree: "State Board Of Secondary Education",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Placement Portal",
      description:
        "A responsive placement portal for CBIT to streamline student and company interactions, featuring dashboards, placement reports, and recruiter showcases. Integrated modern UI elements with smooth navigation and social media links.",
      image: placementLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/akshaya2408/Placement-Portal.git",
      webapp: "https://placement-portal-xxid.onrender.com",
    },
    {
      id: 1,
      title: "Student Management System",
      description:
        "A full-stack Student Management System using the MERN stack to manage student records with intuitive navigation, CRUD operations, and responsive UI. Includes student listing, addition, and dashboard features for efficient record management.",
      image: studentLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/akshaya2408/Student-Management-System.git",
      webapp: "https://student-management-system-1-rbn6.onrender.com",
    },
    {
      id: 2,
      title: "To-Do List",
      description:
        "A simple To-Do List web application built using HTML, CSS, and JavaScript. It allows users to add and manage their daily tasks interactively in a browser.When the Add Task button is clicked, the task is added to the list below.Clicking on a task once will toggle a “completed” style (e.g., strikethrough via CSS if implemented).Double-clicking on any task will remove it from the list entirely.",
      image: todoLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/akshaya2408/To-Do-List.git",
      webapp: "https://to-do-list-nu6b.onrender.com",
    },
    
  ];  
