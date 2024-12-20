import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* Header Section */}
      <header className="w-full py-6 px-4 bg-primary text-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="font-bold text-2xl">Zapp</h1>
          <nav className="space-x-6">
            <a href="#features" className="hover:text-secondary">Features</a>
            <a href="#about" className="hover:text-secondary">About</a>
            <a href="#contact" className="hover:text-secondary">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary py-24 px-4 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Get Your Food Fast and Easy with Zapp</h2>
        <p className="text-lg md:text-xl mb-8">Delivering fresh and delicious food, right to your doorstep.</p>
        <a
          href="#features"
          className="bg-white text-primary py-2 px-6 rounded-lg text-lg font-semibold hover:bg-gray-200 transition"
        >
          Explore Features
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-primary mb-8">Why Choose Zapp?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 bg-white rounded-xl shadow-lg">
              <h4 className="text-2xl font-semibold mb-4">Fast Delivery</h4>
              <p className="text-lg text-gray-700">
                We deliver your food quickly, so you can enjoy your meals without the wait.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="p-8 bg-white rounded-xl shadow-lg">
              <h4 className="text-2xl font-semibold mb-4">Affordable Pricing</h4>
              <p className="text-lg text-gray-700">
                Enjoy your favorite dishes at the best prices, without breaking the bank.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="p-8 bg-white rounded-xl shadow-lg">
              <h4 className="text-2xl font-semibold mb-4">Variety of Choices</h4>
              <p className="text-lg text-gray-700">
                From local favorites to global cuisines, we have something for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-primary mb-8">About Zapp</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Zapp is your go-to food delivery service, bringing the best restaurants and local kitchens
            straight to your door. We aim to make ordering food faster, easier, and more convenient.
          </p>
        </div>
      </section>

      {/* Footer Section */}
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
