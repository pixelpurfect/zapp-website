'use client'; // Mark this as a client component

import Image from 'next/image';
import Link from 'next/link'; // Use Link for navigation to the SellersPage

const HeroSection = () => {
  return (
    <section className="relative w-full bg-white pt-30 md:pt-35 pb-50 md:pb-24 ">
      <div className="relative z-10 flex flex-wrap items-center justify-between mx-auto px-6">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4 leading-tight">
            Your campus. Your delivery route!
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We provide fast and reliable delivery service, bringing delicious meals to your doorstep in no time.
          </p>
          <Link href="/SellersPage"> {/* Use Link for navigation */}
            <button className="bg-orange-500 text-black py-3 px-8 rounded-lg text-lg font-semibold hover:bg-orange-400 transition-all">
              Get Started
            </button>
          </Link>
        </div>

        {/* Image Content */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end overflow-hidden">
          <Image
            src="/images/biryani.png"
            alt="Biryani"
            width={600}
            height={600}
            className="object-contain max-w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

