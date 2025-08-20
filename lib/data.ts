// lib/data.ts
import { Briefcase, Code, GraduationCap } from "lucide-react";

// Define and export the type for a single project
export type Project = {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    live: string;
    github: string;
};

// Define and export your projects array
export const projects: Project[] = [
    {
      id: 1,
      title: "MeDo",
      description:
        "Healthcare made simple. MeDo is a full-stack healthcare platform that allows users to connect with doctors anytime, anywhere. Patients can book appointments, consult via secure video, and manage their healthcare journey in one integrated platform. Features authentication, appointment scheduling, real-time communication, and a modern responsive UI.",
      technologies: [
        "Next.js",
        "Prisma",
        "PostgreSQL",
        "Clerk Auth",
        "Tailwind CSS",
        "Shadcn UI",
        "Zod",
        "React Hook Form",
        "Vonage API",
        "Vercel"
      ],
      image: "/Medo.png",
      live: "https://medo-sooty.vercel.app/",
      github: "https://github.com/l3o9-reborn/medo",
    },
    {
      id: 2,
      title: "Contact Pro",
      description:
        "Contact Pro believes in the power of people and the strength of community.Our mission is clear: empower skilled individuals, simplify access to services, and uplift local communities.Through Contact Pro, local service providers — from electricians to tutors, cleaners to makeup artists — can showcase their talents, build their reputation, and earn fairly from their skills. At the same time, people can quickly find reliable, affordable help right in their neighborhood.Every connection made on Contact Pro fuels the local economy, keeps money within the community, and strengthens the bonds that tie us together.Whether you’re offering your expertise or searching for trusted support, Contact Pro bridges the gap — locally, transparently, and with purpose.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "GSAP",
        "Leaflet",
        "Lottie",
        "vercel",

      ],
      image: "/cp.png",
      live: "https://local-service-provider-six.vercel.app/",
      github: "https://github.com/l3o9-reborn/localServiceProvider",
    },
    {
      id: 3,
      title: "Quick Rock Technologies",
      description:
        "QuickRock Technologies Your trusted Software Development Partner .A top tier software development team assisting owners and decision makers to implement digital initiatives to achieve lasting financial success",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Shadcn UI",
        "Tailwind CSS",
        "React Lottie",
        "Framer Motion",
      ],
      image: "/QR.jpg",
      live: "https://quickrocktechnologies-6ihr.vercel.app/", 
      github: "https://github.com/l3o9-reborn/quickrocktechnologies"
    },
     {
      id: 4,
      title: "InsightHub (Next.js Blog)",
      description:
        "With InsightHub Explore the World Through Words. Discover insightful articles, thought-provoking stories, and expert perspectives on technology, lifestyle, and innovation.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "NextAuth / Clerk (Authentication)"
      ],
      image: "/insightHub.png",
      live: "https://next-blog-pi-self.vercel.app/", 
      github: "https://github.com/l3o9-reborn/next_blog"
    },
     {
      id: 5,
      title: "ToDoFication",
      description:
        "Todofication is a smart task management app that goes beyond just to-dos. It tracks deadlines with a live countdown, visualizes progress through interactive charts, and automatically cleans up expired tasks using cron jobs. Users also receive a daily email summary of their tasks, ensuring productivity and accountability every day.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "Magic Link (Authentication)",
        "node-cron (Scheduling)",
        "Vercel",
      ],
      image: "/tdf.png",
      live: "https://todofication.vercel.app/",
      github: "https://github.com/l3o9-reborn/todofication"
    },

    {
        id: 6,
        title: "Portfolio Website",
        description: "A modern, SEO-optimized portfolio showcasing my skills and projects. Built from the ground up with Next.js, Tailwind CSS, and Framer Motion to create a fast and engaging user experience.",
        technologies: ["Next.js", "React", "TypeScript", "Shadcn UI", "Tailwind CSS"],
        image: "/portfolio.jpg",
        live: "",
        github: "https://github.com/l3o9-reborn/portfolio-website",
    },
    {
        id: 7,
        title: "House Renting App",
        description: " A full-stack house renting application that allows users to list, search, and manage rental properties. Features include user authentication, property listings, and a responsive design.",
        technologies: ["Nodejs","Expressjs" ,"Next.js", "React", "TypeScript", "Shadcn UI", "Tailwind CSS"],
        image: "/renthouse.png",
        live: "",
        github: "https://github.com/l3o9-reborn/HouseRentingApp",
    },
    {
        id: 8,
        title: "saas_starter_next_prisma(Auth, Dashboard, Payment)",
        description:" A Open Source SaaS starter template built with Next.js and Prisma, featuring user authentication, a dashboard, and Stripe payment integration. Ideal for quickly launching SaaS applications with a modern tech stack.",
        technologies: ["Next.js", "React", "TypeScript", "Shadcn UI", "Tailwind CSS", "Zod","Stripe Payment"],
        image: "/saasStarter.png",
        live: "",
        github: "https://github.com/l3o9-reborn/saas_starter_next_prisma",
    },

];

export const historyData = [
  {
    icon: GraduationCap,
    title: "BSc (Hons) in Electrical and Electronic Engineering",
    institution: "Begum Rokeya University, Rangpur",
    date: "2019 - 2025",
    description:
      "Graduating with a strong academic foundation while simultaneously building expertise in software engineering and full-stack web development.",
  },
  {
    icon: Code,
    title: "Competitive Programming",
    company: "Online Judges (Codeforces, CodeChef, etc.)",
    date: "2019 - 2021",
    description:
      "Practiced problem-solving and algorithms through competitive programming. Built strong foundations in data structures, algorithms, and analytical thinking.",
  },
  {
    icon: Briefcase,
    title: "Instructor (DSA & Competitive Programming)",
    company: "RoboHunters BRUR",
    date: "Sep 2021 - 2024",
    description:
      "Taught Data Structures, Algorithms, and Competitive Programming to students. Helped learners strengthen their problem-solving skills and prepare for contests.",
  },
  {
    icon: Code,
    title: "Machine Learning & Web Scraping",
    company: "Personal Projects & Self Learning",
    date: "2021 - 2022",
    description:
      "Explored machine learning fundamentals and applied them in small projects. Gained experience in Python-based web scraping and automation.",
  },
  {
    icon: Code,
    title: "Full-Stack Web Development Journey",
    company: "Personal Projects & Self Learning",
    date: "2023 - Present",
    description:
      "Built multiple full-stack projects using the PERN stack, Next.js, Prisma, and Supabase. Explored authentication, role-based permissions, rental listing platforms, medical OCR apps, and social media clones. Learned to design scalable APIs, integrate databases, and manage frontend-backend workflows.",
  },
  {
    icon: Briefcase,
    title: "Full Stack Developer",
    company: "Freelance & Open Source Contributions",
    date: "2024 - Present",
    description:
      "Currently working as a freelance full-stack developer, contributing to open source projects, and continuously enhancing my skills in web development.",
  },
];


export const frontendTech = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn UI",
    "GSAP",
    "Framer Motion",
];

export const backendTech = [
    "Next.js",
    "Node.js",
    "Express",
    "Prisma",
    "Supabase",
    "PostgreSQL",
    "FastAPI (Python microservice)",

];

export const toolsAndDevops = ["GitHub", "Vercel", "Linux", "Vitest", "Jest",  "Postman", "Prisma Studio"];

export const programmingLanguages = ["JavaScript","TypeScript", "C++", "Python", "SQL", "Prisma Query Language"];

