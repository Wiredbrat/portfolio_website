'use client';
import LogoLoop from '../LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb, SiMongoose, SiJavascript, SiVercel, SiHtml5, SiCss3, SiExpress, SiMysql } from 'react-icons/si';

const techLogos = [
  { node: <SiHtml5 />, title: "HTML5", href: "https://html.spec.whatwg.org/" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com/" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org/en" },
  { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com/" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiMongoose />, title: "Mongoose ODM", href: "https://mongoosejs.com/" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com/docs/atlas/" },
  { node: <SiVercel />, title: "ReactJs", href: "https://vercel.com/" },
];


export function LogoLoopUi() {
  return (
    <div className='h-[120px] lg:h-[200px] relative overflow-hidden max-w-[1175px] mx-auto'>
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