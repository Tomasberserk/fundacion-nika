import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'

export default function App() {
  return (
    <div className="bg-nika-navy min-h-screen text-nika-cream">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />

        <section
          id="donaciones"
          className="min-h-screen flex items-center justify-center"
        >
          <p className="text-nika-cream text-2xl font-cinzel">Donaciones — próximamente</p>
        </section>
      </main>
    </div>
  )
}
