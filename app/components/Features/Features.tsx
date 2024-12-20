import Image from 'next/image';

const Features = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Explore Our Features
        </h2>
        <p className="text-lg text-gray-600">The easy way of getting things</p>
      </div>

      <div className="flex flex-wrap justify-center gap-12 md:gap-20">
        {/* First Image */}
        <div
          className="w-[150px] h-[200px] sm:w-[180px] sm:h-[230px] md:w-[200px] md:h-[250px] relative"
          style={{
            transform: "rotate(-10.496deg)",
            borderRadius: "50px",
            boxShadow: "0px 0px 100px 10px rgba(255, 255, 255, 0.5)",
          }}
        >
          <Image
            src="/images/pizza.png"
            alt="Feature 1"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "50px" }}
            priority
          />
        </div>

        {/* Second Image */}
        <div
          className="w-[150px] h-[200px] sm:w-[180px] sm:h-[230px] md:w-[200px] md:h-[250px] relative"
          style={{
            transform: "rotate(-5.58deg)",
            borderRadius: "50px",
            boxShadow: "0px 0px 100px 10px rgba(255, 255, 255, 0.5)",
          }}
        >
          <Image
            src="/images/pens.png"
            alt="Feature 2"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "50px" }}
            priority
          />
        </div>

        {/* Third Image */}
        <div
          className="w-[150px] h-[200px] sm:w-[180px] sm:h-[230px] md:w-[200px] md:h-[250px] relative"
          style={{
            transform: "rotate(-10.496deg)",
            borderRadius: "50px",
            boxShadow: "0px 0px 100px 10px rgba(255, 255, 255, 0.5)",
          }}
        >
          <Image
            src="/images/stationary.png"
            alt="Feature 3"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "50px" }}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
