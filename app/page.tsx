import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white text-gray-900">

      <header className="w-full py-6 px-4 bg-transparent text-black shadow-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="font-bold text-2xl">Zapp</h1>
          <nav className="space-x-6">
            <a href="#features" className="hover:text-secondary">Features</a>
            <a href="#about" className="hover:text-secondary">About</a>
            <a href="#contact" className="hover:text-secondary">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative w-full h-screen bg-white">
        <div className="relative z-10 flex items-center justify-between max-w-7xl mx-auto px-6 mt-0">
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-4xl font-extrabold text-black mb-4">Your campus. Your delivery route!</h2>
            <p className="text-lg mb-6 text-black">
              We provide fast and reliable delivery service, bringing delicious meals to your doorstep in no time.
            </p>
            <a
              href="#get-started"
              className="bg-orange-500 text-black py-3 px-8 rounded-lg text-lg font-semibold hover:bg-orange-400 transition-all"
            >
              Get Started
            </a>
          </div>

          <div className="relative w-full md:w-1/2 flex justify-end overflow-hidden">
            <Image
              src="/images/biryani.png"
              alt="Biryani"
              width={800}
              height={800}
              className="object-cover max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      <footer className="py-8 bg-primary text-white text-center">
        <p>&copy; 2024 Zapp | All Rights Reserved</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:text-secondary">Privacy Policy</a>
          <a href="#" className="hover:text-secondary">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}

