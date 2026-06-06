import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import { useTheme } from "@/hooks/useTheme"; // adjust path
import { SunMedium, MoonStar } from "lucide-react";
function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      {/* Floating theme toggle */}
      <button
        type="button"
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all z-50"
      >
        {theme === "dark" ? <SunMedium size={18} /> : <MoonStar size={18} />}
      </button>
    </div>
  );
}

export default App;
