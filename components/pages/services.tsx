"use client";

import { services } from "@/lib/data";
import { frontendTech, backendTech, toolsAndDevops, programmingLanguages } from "@/lib/data";
import { motion } from "motion/react";
import { BackgroundGradient } from "@/components/common/background-gradient";


export default function Services() {
  const techCategories = [
    { title: "Frontend", data: frontendTech || [] },
    { title: "Backend", data: backendTech || [] },
    { title: "Tools & DevOps", data: toolsAndDevops || [] },
    { title: "Languages", data: programmingLanguages || [] }
  ];

  return (
    <section id="services" className="w-full py-27 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-5xl font-serif tracking-tight leading-tight mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Services
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I help startups and businesses turn ideas into scalable digital products. From MVPs to full-featured SaaS platforms, I deliver solutions that are fast, reliable, and tailored to your goals. 
          </motion.p>
        </div>

        <div className="flex justify-center">
          < div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-3 items-center">
            {services.map((service, index) => (
                <div key={service.id} >
                    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                        <p className="text-base flex flex-col items-center  sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                          <span>{service.name}</span>
                          <span className="text-sm text-emerald-800">{service.price}</span>
                        </p>
                
                        <div className="text-sm text-neutral-600 dark:text-neutral-400  ">
                            <ul className=" ">
                                {
                                    service.features.map((feature, index) => (
                                         <li key={index} className="flex items-center gap-2"><span className="text-4xl text-pink-800">•</span>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        {/* <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                        <span>Buy now </span>
                        <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                            $100
                        </span>
                        </button> */}
                    </BackgroundGradient>
                 </div>

            ))}
          </div>
        </div>
      </div>
    </section>
  );
}