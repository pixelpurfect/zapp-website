

import Image from 'next/image';

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center px-6">
        {/* Left Side: Heading and Blurb */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold text-black mb-4">About Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            We are a team of passionate individuals committed to providing fast and reliable delivery services to your campus. Our mission is to ensure you never have to wait long for your favorite meals.
          </p>
          
          {/* Call to Action Button */}
          <a
            href="#deep-into-us"
            className="inline-block bg-black text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all"
          >
            Deep into us!
          </a>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/laptop.png" // Ensure this image is in the /public/images folder
            alt="Laptop"
            width={500} // Adjust the width and height as needed
            height={500}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
