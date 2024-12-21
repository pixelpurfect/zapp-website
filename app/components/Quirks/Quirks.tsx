import React from 'react';
import Image from 'next/image'; // Assuming you're using Next.js

const Quirks: React.FC = () => {
  return (
    <section className="w-full h-screen relative">
      <div className="absolute inset-0">
        <Image
          src="/images/seller2.png" // Replace with your actual image path
          alt="Biryani"
          layout="fill"
          objectFit="cover"
          className="z-[-1] backdrop-blur-sm" // Apply slight blur
          priority
        />
      </div>
      <div className="relative z-10 flex items-center justify-center w-screen h-screen">
        <div className="w-full h-full bg-white bg-opacity-50 p-12 rounded-lg shadow-lg text-center backdrop-blur-lg">
          <h1 className="text-5xl font-bold text-gray-800">Quirks</h1>
          <p className="mt-4 text-xl text-gray-600">Delicious surprises waiting for you!</p>
        </div>
      </div>
    </section>
  );
};

export default Quirks;
