import { Rail, RailMobile, STAGES } from "./components/Rail.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Stack } from "./components/Stack.jsx";
import { Projects } from "./components/Projects.jsx";
import { Experience } from "./components/Experience.jsx";
import { Contact } from "./components/Contact.jsx";
import { useScrollSpy } from "./useScrollSpy.js";

const IDS = STAGES.map((s) => s.id);

function App() {
  const { passedIndex } = useScrollSpy(IDS);

  return (
    <>
      <RailMobile activeIndex={passedIndex} />
      <div className="shell">
        <Rail activeIndex={passedIndex} />
        <main className="content">
          <Hero />
          <About />
          <Stack />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
