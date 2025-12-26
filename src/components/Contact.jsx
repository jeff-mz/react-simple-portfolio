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
    link: "https://wa.link/9c4ycv",
    text: "00989016806715",
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
  return (
    <section className="container mx-auto px-4 h-max" id="contact">
      <div className="max-w-6xl mx-auto h-max">
        {/* Header */}
        <div className="text-left mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">
            Get In Touch
          </h1>
          <p className="text-left text-light-text-secondary dark:text-dark-text-secondary text-lg max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>
        </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-20">
            {contactInfo.map((contact) => (
              <a
                key={contact.id}
                href={contact.link}
                target="_blank"
                rel="noreferrer"
                className={`group bg-light-secondary dark:bg-dark-secondary rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                  contact.isFullWidth ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-pale/10 rounded-lg group-hover:bg-green-pale/20 transition-colors duration-300">
                    <contact.icon className="text-2xl text-green-pale" />
                  </div>
                  <div>
                    <h3 className="text-light-text-primary dark:text-dark-text-primary font-medium">
                      {contact.title}
                    </h3>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">
                      {contact.text}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
      </div>
    </section>
  );
}

export default Contact;
