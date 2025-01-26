import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Services = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    '/darling.gif',
    '/Cars Gallery (5).gif'
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
      {/* Hero Carousel */}
      <section className="relative h-[500px] mb-12">
        <div className="relative h-full">
          <img
            src={slides[activeSlide]}
            alt={`Slide ${activeSlide + 1}`}
            className="w-full h-full object-cover"
          />
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/75 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/75 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Interior Design Section */}
      <section className="py-12">
        <h2 id="ic" className="text-3xl font-bold text-center mb-8">Interior Design</h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CarBrand
              title="BMW"
              images={[
                'bmint.jpeg',
                'bmds.jpeg',
                'BMW M3 ds.jpeg',
                'intds.jpeg',
                'bminn.jpeg'
              ]}
            />
            <CarBrand
              title="FERRARI"
              images={[
                'fds.jpeg',
                'frds.jpeg',
                'int des.jpeg',
                'freedsr.jpeg',
                'Ferrari 29.jpeg'
              ]}
            />
            <CarBrand
              title="Mercedes"
              images={[
                'MERDESI.jpeg',
                'DS2.jpeg',
                'HG2.jpeg',
                'LM3.jpeg',
                'CAR2.jpeg'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Car Models Section */}
      <section className="py-12">
        <h2 id="med" className="text-3xl font-bold text-center mb-8">Discover New Car Models</h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CarModel
              image="BMW M8.jpeg"
              title="BMW M Series"
              description="Experience the ultimate driving performance with the M Series."
            />
            <CarModel
              image="Ferrari.jpeg"
              title="Ferrari"
              description="Iconic design and unmatched speed in every Ferrari model."
            />
            <CarModel
              image="lmb.jpeg"
              title="Lamborghini"
              description="Unleash the power of innovation with Lamborghini's supercars."
            />
            <CarModel
              image="merslog.jpeg"
              title="Mercedes"
              description="Luxury and comfort redefined with every Mercedes model."
            />
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Performance</h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* BMW Performance Cards */}
            <PerformanceCard
              title="BMW M3"
              image="bm3.jpeg"
              specs={{
                engine: "3.0L twin-turbo inline-6 engine",
                power: "473 horsepower (Standard) / 503 horsepower (Competition)",
                acceleration: "0-60 mph in 3.8 seconds (Competition)",
                topSpeed: "155 mph (electronically limited)",
                description: "A legendary sports sedan that delivers a perfect balance of performance and luxury, with precise handling and a high-tech interior."
              }}
            />
            <PerformanceCard
              title="BMW M5"
              image="bmw m5 (2).jpeg"
              specs={{
                engine: "4.4L twin-turbo V8 engine",
                power: "617 horsepower (Competition)",
                acceleration: "0-60 mph in 3.1 seconds",
                topSpeed: "190 mph (electronically limited)",
                description: "A high-performance sports sedan, the M5 blends luxury and raw power, offering unmatched driving precision."
              }}
            />
            <PerformanceCard
              title="BMW M8"
              image="m8.jpeg"
              specs={{
                engine: "4.4L twin-turbo V8 engine",
                power: "617 horsepower",
                acceleration: "0-60 mph in 3.0 seconds (Competition)",
                topSpeed: "155 mph (electronically limited)",
                description: "The M8 combines luxurious comfort with exceptional performance, offering a grand tourer experience."
              }}
            />
          </div>
          
          {/* Ferrari Performance Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <PerformanceCard
              title="Ferrari 296 GTB"
              image="296 GTB Ferrari.jpeg"
              specs={{
                engine: "2.9L twin-turbo V6 hybrid engine with an electric motor",
                power: "818 horsepower (combined)",
                acceleration: "0-60 mph in 2.9 seconds",
                topSpeed: "205 mph",
                description: "The 296 GTB is a plug-in hybrid supercar that offers an incredible combination of performance, efficiency, and driving pleasure."
              }}
            />
            <PerformanceCard
              title="Ferrari F8 Tributo"
              image="F8 Tributo.jpeg"
              specs={{
                engine: "3.9L twin-turbo V8 engine",
                power: "710 horsepower",
                acceleration: "0-60 mph in 2.9 seconds",
                topSpeed: "211 mph",
                description: "The F8 Tributo is a mid-engine sports car that delivers astonishing power and agility, with a design inspired by Ferrari's racing heritage."
              }}
            />
            <PerformanceCard
              title="Ferrari SF90 Stradale"
              image="Ferrari sf90.jpeg"
              specs={{
                engine: "4.0L twin-turbo V8 hybrid engine with three electric motors",
                power: "986 horsepower (combined)",
                acceleration: "0-60 mph in 2.5 seconds",
                topSpeed: "211 mph",
                description: "The SF90 Stradale is Ferrari's most powerful production car to date, combining cutting-edge hybrid technology with track-level performance."
              }}
            />
          </div>

          {/* Lamborghini Performance Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <PerformanceCard
              title="Lamborghini Revuelto"
              image="Lamborghini Revuelto - Black Bird Concept.jpeg"
              specs={{
                engine: "6.5L V12 hybrid with three electric motors",
                power: "1,001 horsepower",
                acceleration: "0-60 mph in 2.5 seconds",
                topSpeed: "Over 217 mph",
                description: "Lamborghini's first plug-in hybrid supercar combines legendary V12 performance with cutting-edge hybrid technology."
              }}
            />
            <PerformanceCard
              title="Lamborghini Huracán Tecnica"
              image="Lamborghini Huracán Tecnica LP 640-2 2022- ₹4 Crore _ Real-life review.jpeg"
              specs={{
                engine: "5.2L naturally aspirated V10 engine",
                power: "631 horsepower",
                acceleration: "0-60 mph in 3.2 seconds",
                topSpeed: "202 mph",
                description: "The Huracán Tecnica offers the perfect balance between thrilling performance and daily usability."
              }}
            />
            <PerformanceCard
              title="Lamborghini Urus S"
              image="Lamborghini Urus Aesthetic.jpeg"
              specs={{
                engine: "4.0L twin-turbocharged V8 engine",
                power: "657 horsepower",
                acceleration: "0-60 mph in 3.5 seconds",
                topSpeed: "190 mph",
                description: "The Urus S is the luxury version of Lamborghini's performance SUV, blending high-end comfort with exhilarating power."
              }}
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12">
        <h2 id="gl" className="text-3xl font-bold text-center mb-8">Gallery</h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <GalleryItem type="image" src="BMW X3.jpeg" alt="Gallery Image 1" />
            <GalleryItem type="video" src="drift1.mp4" />
            <GalleryItem type="image" src="bmww.jpeg" alt="Gallery Image 2" />
            <GalleryItem type="video" src="ppp.mp4" />
            <GalleryItem type="video" src="casash.mp4" />
            <GalleryItem type="image" src="frg.jpeg" alt="Gallery Image 3" />
            <GalleryItem type="video" src="bugati.mp4" />
            <GalleryItem type="image" src="mersds.jpeg" alt="Gallery Image 4" />
            <GalleryItem type="image" src="BMW M4 r.jpeg" alt="Gallery Image 5" />
            <GalleryItem type="video" src="drift2.mp4" />
            <GalleryItem type="image" src="bm2.jpeg" alt="Gallery Image 6" />
            <GalleryItem type="video" src="money.mp4" />
            <GalleryItem type="video" src="drift3.mp4" />
            <GalleryItem type="image" src="bvc.jpeg" alt="Gallery Image 7" />
            <GalleryItem type="video" src="prsh.mp4" />
            <GalleryItem type="image" src="rww.jpeg" alt="Gallery Image 8" />
          </div>
        </div>
      </section>
    </div>
  );
};

const CarBrand = ({ title, images }) => (
  <div className="space-y-4">
    <h3 className="text-2xl font-bold text-center">{title}</h3>
    <div className="grid gap-4">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${title} Interior ${index + 1}`}
          className="w-full h-64 object-cover rounded-lg transition-transform hover:scale-105"
        />
      ))}
    </div>
  </div>
);

const CarModel = ({ image, title, description }) => (
  <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden transform hover:scale-105 transition-transform">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

const PerformanceCard = ({ title, image, specs }) => (
  <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="space-y-2 text-sm">
        <p><strong>Engine:</strong> {specs.engine}</p>
        <p><strong>Power Output:</strong> {specs.power}</p>
        <p><strong>Acceleration:</strong> {specs.acceleration}</p>
        <p><strong>Top Speed:</strong> {specs.topSpeed}</p>
        <p className="mt-4 text-gray-300">{specs.description}</p>
      </div>
    </div>
  </div>
);

const GalleryItem = ({ type, src, alt }) => (
  <div className="rounded-lg overflow-hidden">
    {type === 'image' ? (
      <img
        src={src}
        alt={alt}
        className="w-full h-64 object-cover transition-transform hover:scale-105"
      />
    ) : (
      <video
        controls
        className="w-full h-64 object-cover"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )}
  </div>
);

export default Services;