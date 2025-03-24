import { useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
  FaEnvelopeOpen,
} from "react-icons/fa";

const contactInfo = [
  {
    id: 1,
    icon: FaGithub,
    title: "GitHub",
    link: "https://github.com/jeff-mz",
    text: "@jeff-mz",
    isFullWidth: false,
  },
  {
    id: 2,
    icon: FaLinkedinIn,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/jafar-mirzapoor-b69b3b293/",
    text: "Jafar Mirzapoor",
    isFullWidth: false,
  },
  {
    id: 3,
    icon: FaTwitter,
    title: "Twitter",
    link: "https://twitter.com/mzj8181",
    text: "@mzj8181",
    isFullWidth: false,
  },
  {
    id: 4,
    icon: FaWhatsapp,
    title: "WhatsApp",
    link: "https://wa.me/qr/G6DFXUI7MZ6QN1",
    text: "+1234567890",
    isFullWidth: false,
  },
  {
    id: 5,
    icon: FaEnvelopeOpen,
    title: "Email",
    link: "mailto:jafarmirzapoor11@gmail.com",
    text: "jafarmirzapoor11@gmail.com",
    isFullWidth: true,
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="container mx-auto px-4 h-max" id="contact">
      <div className="max-w-6xl mx-auto h-max ">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-4">
            Get In Touch
          </h1>
          <p className="text-light/80 text-lg max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-dark-secondary rounded-xl p-5 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <label htmlFor="name" className="block text-light mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-dark-primary border border-green-pale/20 rounded-lg text-light focus:outline-none focus:border-green-pale transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-light mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-dark-primary border border-green-pale/20 rounded-lg text-light focus:outline-none focus:border-green-pale transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-light mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 bg-dark-primary border border-green-pale/20 rounded-lg text-light focus:outline-none focus:border-green-pale transition-colors"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-green-pale text-dark-secondary font-medium rounded-lg hover:bg-green-light transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-20">
            {contactInfo.map((contact) => (
              <a
                key={contact.id}
                href={contact.link}
                target="_blank"
                rel="noreferrer"
                className={`group bg-dark-secondary rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                  contact.isFullWidth ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-pale/10 rounded-lg group-hover:bg-green-pale/20 transition-colors duration-300">
                    <contact.icon className="text-2xl text-green-pale" />
                  </div>
                  <div>
                    <h3 className="text-light font-medium">{contact.title}</h3>
                    <p className="text-light/60 text-sm">{contact.text}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
