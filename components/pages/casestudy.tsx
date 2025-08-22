"use client";

import { caseStudies} from "@/lib/data";
import { motion } from "motion/react";
import { CardSpotlight } from "@/components/common/card-spotlight"

export default function CaseStudy() {

  return (
    <section id="caseStudies" className="w-full py-27 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-5xl font-serif tracking-tight leading-tight mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Case Studies
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
           
          </motion.p>
        </div>

        <div className="flex justify-center">
          < div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-3 items-center">
            {caseStudies.map((study) => (
                <div key={study.id || study.name}>
                  <CardSpotlight className="h-auto w-full max-w-sm p-4 sm:p-6">
                    {/* Project Name */}
                    <p className="text-xl font-bold relative z-20 mt-2 text-white">
                    {study.name}
                    </p>

                    {/* Problem / Solution / What I Built / Outcome */}
                    <div className="text-neutral-200 mt-4 relative z-20 text-sm">
                    <ul className="list-none mt-2 space-y-2">
                        <Step title={`Problem: ${study.problem}`} />
                        <Step title={`Solution: ${study.solution}`} />
                        <Step title={`What I Built: ${study.whatIBuilt}`} />
                        <Step title={`Outcome: ${study.outcome}`} />
                    </ul>
                    </div>

                    {/* Stack */}
                    <div className="text-neutral-300 mt-4 relative z-20 text-sm flex flex-wrap gap-2">
                    {study.stack.map((tech, i) => (
                        <span
                        key={i}
                        className="bg-white/20 rounded-sm px-2 py-1 text-xs font-medium"
                        >
                        {tech}
                        </span>
                    ))}
                    </div>
                </CardSpotlight>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};
 
const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};