
// COMPONENTS IMPORTS
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import About from "./pageSection/About"
import Blog from "./pageSection/Blog"
import Characters from "./pageSection/Characters"

// SECTIONS IMPORTS
import Hero from "./pageSection/Hero"


function App() {

  return (
    <main className="bg-orange md:p-20 p-5">
      <Navbar />
      <Hero />
      <Characters />
      <Blog />
      <About />
      <Footer />
    </main>
  )
}

export default App
