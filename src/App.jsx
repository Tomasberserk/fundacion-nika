import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function App() {
  return (
    <div className="bg-nika-navy min-h-screen text-nika-cream">
      <Navbar />
      <main>
        <Hero />

        <section
          id="about"
          className="min-h-screen flex items-center justify-center"
        >
          <p className="text-nika-cream text-2xl font-cinzel">About Us — próximamente</p>
        </section>

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
