'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from "react";

export function AccordionComp() {
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const [isOpen1, SetIsOpen1] = useState<boolean>(false);
  const [isOpen2, SetIsOpen2] = useState<boolean>(false);
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full grid grid-rows-1 gap-3"
      defaultValue=""
    >
      <AccordionItem value="item-1 ">
        <AccordionTrigger 
          className={`${isOpen ? 'text-green-600': ''}`} 
          onClick={() => {
            SetIsOpen(!isOpen); 
            SetIsOpen1(false);
            SetIsOpen2(false);
          }}>
          Web Developer
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="">
            I am a Full Stack Developer focused on building responsive and scalable web applications using <span className="text-purple-500">Node.js, MongoDB, React.js, Express.js</span>.
          </p>
          <p className="">
            Experienced in developing RESTful APIs and integrating dynamic front-end interfaces.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger 
          className={`${isOpen1 ? 'text-green-600': ''}`} 
          onClick={() => {
            SetIsOpen1(!isOpen1); 
            SetIsOpen2(false);
            SetIsOpen(false);
          }}>
            Problem Solver
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            I Enjoy solving complex problems and writing clean, maintainable code.
          </p>
         
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger 
          className={`${isOpen2 ? 'text-green-600': ''}`} 
          onClick={() => {
            SetIsOpen1(false); 
            SetIsOpen2(!isOpen2);
            SetIsOpen(false);
          }}>
            Learner Forever
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Always exploring new technologies to improve performance and user experience.
          </p>
          <p>
            When I’m not coding, I’m probably exploring new technologies, trends or tech blogs.
          </p>
          
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
