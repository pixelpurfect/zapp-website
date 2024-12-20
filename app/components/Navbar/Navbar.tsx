// components/Navbar/Navbar.tsx

import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="w-full py-4 px-4 bg-transparent text-black shadow-none fixed top-0 left-0 z-50">
      <div className="mx-auto flex justify-between items-center">
        <div className="w-32 h-auto">
          <Image
            src="/images/zapp.png"
            alt="Zapp Logo"
            width={128}
            height={40}
            className="object-contain"
          />
        </div>
        <nav className="space-x-6">
          <a href="#features" className="hover:text-secondary">
            Features
          </a>
          <a href="#about" className="hover:text-secondary">
            About
          </a>
          <a href="#contact" className="hover:text-secondary">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
