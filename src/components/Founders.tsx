const Founders = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Our Founders</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <FounderCard
            image="/amina.webp"
            name="OUAQQA OU RAHO Amina"
            github="https://github.com/oneameeeena"
            linkedin="http://www.linkedin.com/in/ameena-ou-17b609289"
            instagram="https://www.instagram.com/_ameeeeeena_/#"
          />
          <FounderCard
            image="/mio.jpg"
            name="EL MOUSSAOUI Abdelaziz"
            github="https://github.com/anothergithub"
            linkedin="https://linkedin.com/in/anotherlinkedin"
            instagram="https://instagram.com/anotherinstagram"
          />
        </div>
      </div>
    </section>
  );
}

const FounderCard = ({ image, name, github, linkedin, instagram }) => {
  return (
    <div className="bg-gradient-to-b from-black/20 to-white/15 p-6 rounded-lg text-center transform hover:-translate-y-1 transition-transform">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h4 className="text-xl font-semibold text-white mb-4">{name}</h4>
      <div className="flex justify-center space-x-4">
        <SocialLink href={github} icon="github" />
        <SocialLink href={linkedin} icon="linkedin" />
        <SocialLink href={instagram} icon="instagram" />
      </div>
    </div>
  );
}

const SocialLink = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-blue-500 transition-colors"
    >
      <i className={`fab fa-${icon} text-2xl`}></i>
    </a>
  );
}

export default Founders;