const About = () => {
  return (
    <section id="about" className="py-20 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img src="/logooo.jpeg" alt="About" className="rounded-lg w-full" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg">
            Welcome to House Cars, where luxury meets performance. We bring you the latest models 
            from iconic brands like BMW, Ferrari, and Mercedes-Benz, showcasing unmatched innovation, 
            interior elegance, and powerful performance. Explore a world of automotive excellence 
            tailored for enthusiasts and dreamers alike.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;