
import NavBar from "../components/NavBar"

import HomeSection from "../sections/HomeSection"
import AboutSection from "../sections/AboutSection"



function App() {
  return (
    <>
    

    <NavBar />
    <main className="h-dvh">

      <HomeSection id="home" />

      <AboutSection id="about" />

      {/* <section id="about" className="h-screen flex items-center justify-center border-2 border-red-300">
        <h1>About Me</h1>
      </section> */}

      <section id="projects" className="h-screen flex items-center justify-center border-2 border-yellow-300">
        <h1>Projects</h1>
      </section>

      <section id="contact" className="h-screen flex items-center justify-center border-2 border-green-300">
        <h1>Contact Me</h1>
      </section>
    </main>

    </>
  )
}

export default App
