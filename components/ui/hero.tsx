'use client';
import TextType from '@/components/TextType';
import { Social } from './social';
import ShinyText from '../ShinyText';

export default function Hero() {
    return(
        <div className="grid grid-rows-2 lg:flex justify-center lg:mb-20 max-w-[1175px] w-[90%] md:w-full mx-auto">
          <div className="grid grid-rows-3 items-end lg:items-center lg:w-[65%] montserrat justify-items-center lg:justify-items-start">
            <ShinyText 
              text="Hi, I'm Atul Verma" 
              disabled={false} 
              speed={3} 
              className='custom-class text-base lg:text-xl' 
            />
            <TextType 
              className='text-center text-3xl lg:text-5xl lg:w-[70%] xl:w-[60%] pb-3 lg:h-[100px]'
              text={["Full Stack Developer"]}
              typingSpeed={75}
              pauseDuration={1000}
              showCursor={true}
              cursorCharacter="."
              
            />
            <div className='flex gap-2 '>
              <Social title='GitHub' image='/github-mark-white.svg' href='https://github.com/wiredbrat'/>
              <Social title='LinkedIn' image='/linkedin-icon-logo.svg' href='https://www.linkedin.com/in/atul-verma-wired/'/>
              <Social title='Gmail' image='/gmail-icon.svg' href='https://mail.google.com/mail/?view=cm&fs=1&to=vermaatul291002@gmail.com&su=Hey%20Atul!'/>
              <Social title='LeetCode' image='/leetcode.svg' href='https://leetcode.com/u/TfkATLnNy6/'/>
            </div>
          </div>
          <div className="grid grid-rows-1 items-center px-6 lg:px-0 text-center lg:text-start lg:text-2xl text-gray-400 py-5 montserrat">
            <div>
              <p className='inline'>
                Transforming ideas into interactive and seamless digital experiences with cutting-edge 
              </p>
              <span className="ms-2">
                <ShinyText 
                  text="Full Stack" 
                  disabled={false} 
                  speed={3} 
                  className='text-purple-700 ' 
                />
              </span> Development.
            </div>
          </div>
        </div>
    )
}