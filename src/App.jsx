
import NavBar from "../components/NavBar"

import HomeSection from "../sections/HomeSection"



function App() {
  return (
    <>
    

    <div className="bg-surface">
      <NavBar />
      <main className="pt-16">
        <HomeSection />
        <section className="h-screen flex items-center justify-center border-2 border-red-300">
          <h1>About Me</h1>
        </section>

        <section className="h-screen flex items-center justify-center border-2 border-yellow-300">
          <h1>Projects</h1>
        </section>

        <section className="h-screen flex items-center justify-center border-2 border-green-300">
          <h1>Contact Me</h1>
        </section>
      </main>
    </div>

    </>
  )
}

export default App
