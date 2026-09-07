import { Rail, RailMobile, STAGES } from "./components/Rail.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Stack } from "./components/Stack.jsx";
import { Projects } from "./components/Projects.jsx";
import { Recommendations } from "./components/Recommendations.jsx";
import { Experience } from "./components/Experience.jsx";
import { Contact } from "./components/Contact.jsx";
import { useScrollSpy } from "./useScrollSpy.js";
import { useTheme } from "./useTheme.jsx";

const IDS = STAGES.map((s) => s.id);

function App() {
  const { passedIndex } = useScrollSpy(IDS);
  const { theme, toggle } = useTheme();

  return (
    <>
      <RailMobile activeIndex={passedIndex} theme={theme} toggleTheme={toggle} />
      <div className="shell">
        <Rail activeIndex={passedIndex} theme={theme} toggleTheme={toggle} />
        <main className="content">
          <Hero />
          <About />
          <Stack />
          <Projects />
          <Recommendations />
          <Experience />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
