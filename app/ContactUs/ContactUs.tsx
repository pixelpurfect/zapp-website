// components/ContactUs/ContactUs.tsx

import Image from 'next/image';

const ContactUs = () => {
  return (
    <section id="contact" className="w-full py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center px-6">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <Image
            src="/images/phones.png" // Ensure this image is in the /public/images folder
            alt="Phones"
            width={500} // Adjust the size as needed
            height={500}
            className="object-contain"
            priority
          />
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold text-black mb-6">Contact Us</h2>

          <form action="#" method="POST">
            {/* Name Input */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 mb-4 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            {/* Email Input */}
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 mb-4 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            {/* Remarks Textarea */}
            <div className="relative mb-4">
              <textarea
                placeholder="Your Remarks"
                className="w-full px-4 py-4 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none h-40"
              ></textarea>
              
              {/* Send Button inside the Textarea */}
              <button
                type="submit"
                className="absolute bottom-4 right-4 bg-orange-500 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-orange-400 transition-all"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

