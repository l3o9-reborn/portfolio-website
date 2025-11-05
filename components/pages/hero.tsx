import GithubIcon from "@/app/assets/github.svg";
import LinkedinIcon from "@/app/assets/linkedin.svg";
import { Mail, FileDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import profilePhoto from "@/public/headshot.jpg";
import { AuroraBackground } from "../ui/aurora-background";
export default function Hero() {
  return (
    <section
      id="home"
      className="flex items-center min-h-screen justify-center lg:justify-start sticky top-0 "
    >
      <AuroraBackground
        className="absolute inset-0 -z-10"
        showRadialGradient={true}
      />

      <div className="flex flex-col justify-center items-center md:flex-row gap-0 md:gap-4  lg:px-[15%]  content-center  ">
        <Image
          src={profilePhoto}
          alt="Profile Photo"
          className="rounded-full flex-shrink-0 w-52 h-52 md:w-52 md:h-52 lg:w-64 lg:h-64  "
          width={512}
          height={512}
          priority={true}
        />

        <div className="flex-col flex  justify-center">
          <div className="flex-row  justify-center md:justify-start flex gap-4 order-last md:order-first pt-5 md:pt-0">
            <Link
              href="https://github.com/l3o9-reborn"
              target="_blank"
              className="social-link"
              aria-label="Visit my GitHub profile"
            >
              <Image
                src={GithubIcon}
                alt="GitHub"
                className="invert-0 dark:invert transition-all duration-300"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/munna-hasan-leon-26b33b19a"
              target="_blank"
              className="social-link"
              aria-label="Visit my LinkedIn profile"
            >
              <Image
                src={LinkedinIcon}
                alt="LinkedIn"
                className="invert-0 dark:invert transition-all duration-300"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="mailto:getleon09@gmail.com"
              target="_blank"
              className="social-link"
              aria-label="Send me an email"
            >
              <Mail width={24} height={24} />
            </Link>
            <Link
              href="/munnahleonresume.pdf"
              target="_blank"
              className="social-link"
              aria-label="Download My Resume"
            >
              <FileDown width={24} height={24} />
            </Link>
          </div>
          <h1 className="text-7xl md:pt-4 lg:pt-8 font-serif text-center md:text-left  text-primary">
            <span>Munna H.</span> {/* Add a space for the inline view */}
            <span className="block lg:inline text-primary">Leon</span>
          </h1>
          <p className="font-serif text-xl pt-4 lg:pt-9 text-muted-foreground pl-5 md:pl-0 text-center md:text-left">
           I build scalable, production-ready web apps. Experienced in delivering SaaS, MVPs, and full-stack platforms with modern tech stacks. Open to remote roles & freelance projects.
          </p>          
        </div>
      </div>
    </section>
  );
}
