// lib/data.ts
import { Briefcase, Code, GraduationCap } from "lucide-react";
import { id } from "zod/v4/locales";

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
      live: "https://medo-meetdoc-k8kz.vercel.app/",
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
      id: 4,
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
      image: "/QR.png",
      live: "https://quickrocktechnologies-6ihr.vercel.app/", 
      github: "https://github.com/l3o9-reborn/quickrocktechnologies"
    },
     {
      id: 5,
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


export const caseStudies = [
  {
  id: 1,
  name: "MeDo — Healthcare Platform",
  problem: "Patients often had to wait in long queues to see their doctors. For those with limited mobility or when visiting clinics was difficult, accessing timely healthcare was challenging.",
  solution: "MeDo is a digital healthcare platform that reduces physical movement and increases accessibility. Patients can schedule appointments and consult with doctors anytime, anywhere using MeDo's digital tools.",
  whatIBuilt: "Auth, scheduling, real-time consultations, responsive UI using shadcn/ui, and integration with video calls via Vonage.",
  outcome: "Improved accessibility for patients; reduced waiting time and enabled healthcare access remotely.",
  stack: ["Next.js", "Prisma", "PostgreSQL", "Clerk", "shadcn/ui", "Vonage"]
},
  {
    id: 2,
    name: "Contact Pro — Local Service Provider",
    problem: "People needed a fast way to find trusted local service providers without middlemen or long waits.",
    solution: "Location-based app that lets users browse professionals near them and call directly, showing the nearest providers with phone numbers.",
    whatIBuilt: "Search and filtering by location, real-time contact access, responsive UI, and provider profiles.",
    outcome: "Enabled users to connect with local experts instantly; simplified service access and supported local economy.",
    stack: ["Next.js", "React", "TypeScript", "Leaflet js", "Tailwind CSS", "PostgreSQL", "GSAP", "Lottie","Prisma", "Custom Magic Link (Authentication)", "Vercel"]
  },
  {
    id: 3,
    name: "Todofication — Task Management & Notifications",
    problem: "Users wanted a simple way to track daily todos, get reminders, and monitor task completion trends.",
    solution: "Todo app with deadlines, automated nightly email reminders, progress graphs, automatic expired task cleanup using Node-Cron.",
    whatIBuilt: "Todo creation with deadlines, email notifications for due tasks, monthly analytics graphs, and nightly auto-deletion of expired todos.",
    outcome: "Helped users stay on top of tasks consistently; increased task completion rate and improved productivity tracking.",
    stack: ["Next.js", "React", "PostgreSQL", "Tailwind CSS", "Node-Cron", "Nodemailer", "Custom Magic Link (Authentication)", "Prisma"]
  }
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

export const testimonials = [
  {
    quote:
      "Leon brought our idea to life with precision and speed. The MVP he delivered allowed us to validate our product in record time.",
    name: "Brooke Cagle",
    designation: "Founder of Tributary Studio ",
    src: "/brooke-cagle.jpg",
  },
  {
    quote:
      "His ability to handle both frontend and backend seamlessly was impressive. The deployment and Stripe integration worked flawlessly.",
    name: "Alexander Hemip",
    designation: "A photographer and Designer",
    src: "/alexander-hipp.jpg",
  },
  {
    quote:
      "The app Leon built simplified our internal processes and boosted team productivity. The UI was intuitive and well thought-out.",
    name: "Laura Chouette",
    designation:"Travel and lifestyle blogger",
    src: "/laura-chouette.jpg",
  },
  {
    quote:
      "Leon's attention to performance was outstanding. He optimized our database and frontend, cutting load times by more than half.",
    name: "George Dagore",
    designation: "Creative Entrepreneur & Designer",
    src: "/george_dagerotip.jpg",
  },
  {
    quote:
      "From planning to launch, Leon was proactive and reliable. The scalability of the solution he built gave us confidence to grow fast.",
    name: "Linda Thompson",
    designation: "Event planner and entrepreneur",
    src: "/lisa.jpg",
  },
];



  export const services = [
  {
    id: 1,
    name: "MVP Sprint",
    price: "$2,500–$4,500 (2–3 weeks)",
    features: [
      "Authentication & secure database setup",
      "Core feature implementation",
      "Payment integration with Stripe",
      "Deployment on Vercel (production-ready)",
      "Comprehensive documentation",
      "Handoff video walkthrough"
    ],
  },
  {
    id: 2,
    name: "SaaS Turbo",
    price: "$6,000–$9,000 (4–6 weeks)",
    features: [
      "Advanced roles & permissions",
      "Subscription billing system",
      "Custom dashboards",
      "Automated email notifications",
      "Audit logs & activity tracking",
      "Analytics integration",
      "2 weeks of post-launch support & iterations"
    ],
  },
  {
    id: 3,
    name: "Performance Rescue",
    price: "$1,200 (3–5 days)",
    features: [
      "Improve TTFB & LCP for faster load times",
      "Image & font optimization",
      "Database query/index tuning",
      "Before & after performance report with metrics"
    ],
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

