import Hero from '@/components/ui/hero'
import Navbar from '@/components/ui/navbar';
import { LogoLoopUi } from '@/components/ui/logoloopUi'
import About from '@/components/ui/aboutMe';
import Projects from '@/components/ui/projects'
import Contact from '@/components/ui/contact';
import Copyright from '@/components/ui/copyright';
import Footer from '@/components/ui/footer';

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <LogoLoopUi/>
      <About/>
      <Projects/>
      <Contact/>
        <Footer/>
      <Copyright/>
    </>    
  );
}
