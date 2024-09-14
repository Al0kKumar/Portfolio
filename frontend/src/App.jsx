import './App.css'
import Navbar from './components/navbar'
import Intro from './components/Intro'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {

  return (
    
      <div className='bg-slate-900 text-cyan-400 min-h-screen'>
      <Navbar className="m-0"/>
      <Intro className="m-0"/>
      <Skills id="skills"/>
      <Projects id="projects"/>
      <Footer/>
      </div>
       
    
  )
}

export default App
