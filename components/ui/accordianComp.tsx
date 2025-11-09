'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionComp() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full grid grid-rows-1 gap-3"
      defaultValue=""
    >
      <AccordionItem value="item-1 ">
        <AccordionTrigger>Web Developer</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            I am a full stack web developer with hands on experience in MERN technology
          </p>
          {/* <p> */}
            {/* Key features include advanced processing capabilities, and an */}
            {/* intuitive user interface designed for both beginners and experts. */}
          {/* </p> */}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Mobile Development</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We offer worldwide shipping through trusted courier partners.
            Standard delivery takes 3-5 business days, while express shipping
            ensures delivery within 1-2 business days.
          </p>
         
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Return Policy</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We stand behind our products with a comprehensive 30-day return
            policy. If you&apos;re not completely satisfied, simply return the
            item in its original condition.
          </p>
          
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
