'use client';

import LetterGlitch from '@/components/LetterGlitch';
import { AccordionComp } from './accordianComp';

export default function About() {
  return (
    <div className='grid lg:grid-cols-2 gap-16 overflow-hidden montserrat mb-24 mx-auto max-w-[1175px]'>
      <div className='px-4'>
        <p 
        className='montserrat text-white text-3xl md:text-4xl font-semibold text-center lg:text-start mb-6'>
          About Me.
        </p>
        <AccordionComp/>
      </div>
      <div className='lg:h-[350px] h-[400px] px-6 md:px-0'>
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={true}
          smooth={true}
        />
      </div>
    </div>
  )
} 