import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Tech from "./components/Tech"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
  <>
  <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
  <div className="flex flex-col items-center justify-between h-[100vh]">
    <Analytics/>
    <SpeedInsights/>
    <NavBar/>
    <Hero/>
    <Tech/>
    <Experience/>
    <Projects/>
    <Contact/>
  </div>
  
  </>
  )
}
export default App
