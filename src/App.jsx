import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="bg-nika-navy min-h-screen text-nika-cream">
      <Navbar />
      <main>
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center pt-16"
        >
          <p className="text-nika-gold text-2xl font-cinzel">Hero — próximamente</p>
        </section>

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
