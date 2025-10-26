import Header from "../components/header";
import Footer from "../components/footer";
import HeroWave from "../components/herowave";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-white">
      
      <Header />
      <main className="relative flex-1 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <section className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center py-24 md:py-32">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Manage Your <span className="text-blue-600">Tickets</span> <br />
            Seamlessly Across All Platforms
          </h1>
          <p className="text-gray-600 mt-4 max-w-lg mx-auto">
            Build, track, and manage tickets effortlessly. Stay organized and
            deliver efficient support with ease.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/login"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-100 transition"
            >
              Learn More
            </a>
          </div>
        </section>

       
        <div className="relative z-0 pointer-events-none">
          <HeroWave />
        </div>
      </main>

      <section id="features" className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Core Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 mx-auto flex items-center justify-center rounded-full mb-4 text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold mb-3">Ticket Management</h3>
            <p className="text-gray-600">
              Create, view, edit, and delete tickets easily. Manage statuses and
              track progress efficiently.
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 mx-auto flex items-center justify-center rounded-full mb-4 text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold mb-3">Dashboard Overview</h3>
            <p className="text-gray-600">
              View key statistics at a glance — open, resolved, and total tickets — all in one clean interface.
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 mx-auto flex items-center justify-center rounded-full mb-4 text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold mb-3">Secure Authentication</h3>
            <p className="text-gray-600">
              Simulated authentication with session tokens ensures a safe and
              personalized experience.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-200 text-black py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute left-10 bottom-10 w-24 h-24 bg-white/20 rounded-full blur-xl pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition">
              <h3 className="text-xl font-semibold mb-3">1. Sign Up or Login</h3>
              <p className="text-gray-100">
                Create an account or log in to start managing your tickets securely.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition">
              <h3 className="text-xl font-semibold mb-3">2. Manage Your Tickets</h3>
              <p className="text-gray-100">
                Create new tickets, update progress, and track all your tasks in real-time.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition">
              <h3 className="text-xl font-semibold mb-3">3. Track and Resolve</h3>
              <p className="text-gray-100">
                Monitor open and resolved tickets, ensuring smooth and efficient workflows.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
