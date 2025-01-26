const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white text-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url(/SFMotors SF7 suv EV body lines.gif)',
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      <div className="relative z-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-xl mb-8">Your journey starts here. Explore our services and products.</p>
        <a 
          href="#about" 
          className="inline-block px-8 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}

export default Hero;