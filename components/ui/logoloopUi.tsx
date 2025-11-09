'use client';
import LogoLoop from '../LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb, SiMongoose, SiJavascript } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiReact />, title: "ReactJs", href: "https://tailwindcss.com" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs />, title: "NodeJs", href: "https://tailwindcss.com" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://tailwindcss.com" },
  { node: <SiMongoose />, title: "Mongoose ODM", href: "https://tailwindcss.com" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

export function LogoLoopUi() {
  return (
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}} className='max-w-[1175px] mx-auto'>
      <LogoLoop
        logos={techLogos}
        speed={90}
        direction="left"
        logoHeight={55}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#141313"
        ariaLabel="Technology partners"
      />
    </div>
  );
}