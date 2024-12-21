'use client'; // Add this line to mark the file as a client component

import { useState } from 'react';
import Image from 'next/image';
import { firestore } from '../../lib/firebase';  // Import Firestore from lib/firebase
import { collection, doc, addDoc } from 'firebase/firestore'; // Import the necessary Firestore functions

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [remarks, setRemarks] = useState('');

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    if (!name || !email || !remarks) {
      alert('Please fill in all fields!');
      return;
    }

    try {
      // Reference to the 'queries' collection inside 'demo/mailqueries'
      const queriesRef = collection(doc(firestore, 'demo', 'mailqueries'), 'queries');
      
      // Add new document to 'queries' collection
      await addDoc(queriesRef, {
        name,
        email,
        remarks,
        timestamp: new Date(),
      });

      // Clear form fields after successful submission
      setName('');
      setEmail('');
      setRemarks('');

      // Provide success feedback
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message: ', error);
      alert('There was an error. Please try again.');
    }
  };

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

          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 mb-4 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {/* Email Input */}
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 mb-4 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Remarks Textarea */}
            <div className="relative mb-4">
              <textarea
                placeholder="Your Remarks"
                className="w-full px-4 py-4 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none h-40"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
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
