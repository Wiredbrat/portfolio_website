'use client';
import ProjectCard from "./projectCard";
import ShinyText from "../ShinyText";
import { Button } from "./button";
export default function Projects() {
  return (
    <div className="border-t ">

      <div className="p-8 montserrat  max-w-[1100px] mx-auto">
          <ShinyText 
            text="My Work" 
            disabled={false} 
            speed={3} 
            className='montserrat text-base lg:text-xl mb-2 text-purple-500' 
          />
          <p className="montserrat text-2xl lg:text-4xl font-medium mb-5">
            Projects
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Animania"
              image="/projectImages/animania.png"
              tagline="Search your favorite anime"
              codeUrl="https://github.com/Wiredbrat/Animania"
              liveUrl="https://animania-black.vercel.app/"
            />
            <ProjectCard
              title="E-Lib"
              image="/projectImages/elib.png"
              tagline="Libaray for everyone"
              codeUrl="https://github.com/Wiredbrat/elib"
              liveUrl="https://elib-rary.vercel.app/"
            />
            <ProjectCard
              title="DemoCon"
              image="/projectImages/democon.png"
              tagline="Website"
              codeUrl="https://github.com/Wiredbrat/DemoCon-Website"
              liveUrl="https://democon2025.vercel.app/"
            />
            {/* <ProjectCard
              title="MoviesForDevs"
              image="/projectImages/animania.png"
              tagline="Deployed"
              codeUrl="https://github.com/yourusername/moviesfordevs"
              liveUrl="https://moviesfordevs.vercel.app"
            /> */}
          </div>
          <Button
            className='w-full my-6 h-12 rounded-2xl bg-transparent border border-zinc-800 hover:scale-105 duration-300 hover:rounded-full ease-in-out'
            variant='secondary'
          >
            <a href="" className="my-3 montserrat text-zinc-400 text-xl ">More Projects on <img src="/github-mark-white.svg" alt="" className="inline h-6 px-1"/></a>
          </Button>
      </div>
    </div>
  )
}