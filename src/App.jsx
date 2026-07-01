
import NavBar from "../components/NavBar"

import HomeSection from "../sections/HomeSection"
import SkillsSection from "../sections/SkillsSection"
import AboutSection from "../sections/AboutSection"
import ProjectSection from "../sections/ProjectSection"



function App() {
  return (
    <>
    

    <NavBar />
    <main className="h-dvh">

      <HomeSection id="home" />

      <SkillsSection id="skills" />

      {/* <section id="skills" className="h-screen flex items-center justify-center">
        <h1>Skills</h1>
      </section> */}

      <AboutSection id="about" />

      <ProjectSection id="projects" />

      {/* <section id="about" className="h-screen flex items-center justify-center border-2 border-red-300">
        <h1>About Me</h1>
      </section> */}

      {/* <section id="projects" className="h-screen flex items-center justify-center border-2 border-yellow-300">
        <h1>Projects</h1>
      </section> */}

      <section id="contact" className="h-screen flex items-center justify-center border-2 border-green-300">
        <h1>Contact Me</h1>
      </section>
    </main>

    </>
  )
}

export default App
