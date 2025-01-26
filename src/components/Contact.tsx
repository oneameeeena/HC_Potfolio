import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-b from-black/20 to-white/15 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Contact Us</h2>
            <ul className="space-y-6">
              <ContactItem
                icon={<Phone className="w-6 h-6" />}
                text="+212 720 176 802"
              />
              <ContactItem
                icon={<Mail className="w-6 h-6" />}
                text="housecars@gmail.com"
              />
              <ContactItem
                icon={<MapPin className="w-6 h-6" />}
                text="Casablanca, Morocco"
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const ContactItem = ({ icon, text }) => {
  return (
    <li className="flex items-center text-white">
      <span className="text-gray-400 mr-4">{icon}</span>
      <span>{text}</span>
    </li>
  );
}

export default Contact;