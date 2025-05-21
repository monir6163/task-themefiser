import Banner from "@/components/banner/Banner";
import Blog from "@/components/blog/Blog";
import Contact from "@/components/contact/Contact";
import Header from "@/components/Header";
import NavBar from "@/components/Navbar";
import Portfolio from "@/components/portfolio/Portfolio";
import Pricing from "@/components/pricing/Pricing";
import Resume from "@/components/resume/Resume";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <main>
      <div className="hidden lg:block">
        <Header />
      </div>
      <div className="lg:flex">
        <NavBar />
        <Banner />
      </div>
      <Resume />
      <Skills />
      <Portfolio />
      <Blog />
      <Pricing />
      <Contact />
    </main>
  );
}
