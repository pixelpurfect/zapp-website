// components/Intro/Intro.tsx

import Image from 'next/image';
import Link from 'next/link';

const Intro = () => {
  return (
    <section
      className="w-full h-[400px] md:h-[500px] relative flex items-center justify-start px-6 py-10 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/seller1.png')", // Set the background image
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Optional overlay to darken background */}
      
      <div className="relative z-10 text-left text-white max-w-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">For Students,</h2>
        <p className="text-lg mb-6">Become a delivery partner and start earning today.</p>
        
        <Link href="/join">
          <button className="bg-black text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all">
            Join Us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Intro;
