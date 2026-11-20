// The app's layout and routes (which page shows for which url).
// Every page fills the screen: nav on top, the page in the middle.
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Nav from "./components/Nav";
import SoftBackground from "./components/SoftBackground";
import TerminalHero from "./components/TerminalHero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./pages/NotFound";

// On every page change, start at the top.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    // reducedMotion="user" tones down animations for people who prefer less motion
    <MotionConfig reducedMotion="user">
      <SoftBackground />
      <ScrollToTop />
      <div className="flex min-h-[100dvh] flex-col">
        <Nav />
        <main className="flex flex-1 flex-col">
          <Routes>
            <Route path="/" element={<TerminalHero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </MotionConfig>
  );
}
