import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Donaciones from './components/Donaciones'

export default function App() {
  return (
    <div className="bg-nika-navy min-h-screen text-nika-cream">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Donaciones />
      </main>
    </div>
  )
}
