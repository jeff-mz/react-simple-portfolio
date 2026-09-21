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
    category: "code",
  },
  {
    id: 2,
    icon: FaLinkedinIn,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/jafar-mirzapoor-b69b3b293/",
    text: "Jafar Mirzapoor",
    category: "professional",
  },
  {
    id: 3,
    icon: FaTwitter,
    title: "Twitter",
    link: "https://twitter.com/mzj8181",
    text: "@mzj8181",
    category: "social",
  },
  {
    id: 4,
    icon: FaWhatsapp,
    title: "WhatsApp",
    link: "https://wa.link/9c4ycv",
    text: "00989016806715",
    category: "direct",
  },
  {
    id: 5,
    icon: FaEnvelopeOpen,
    title: "Email",
    link: "mailto:jafarmirzapoor11@gmail.com",
    text: "jafarmirzapoor11@gmail.com",
    category: "direct",
  },
];

function Contact() {
  return (
    <section className="container mx-auto px-4 py-16 h-screen flex flex-col justify-center" id="contact">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header with refined typography */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-light-text-primary dark:text-dark-text-primary mb-6 leading-tight">
            Get in touch
          </h1>
          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to collaborate on something meaningful.
          </p>
        </div>

        {/* Contact Cards with varied layouts */}
        <div className="space-y-4">
          {/* Primary Contact - Full Width Email */}
          {contactInfo
            .filter((contact) => contact.id === 5)
            .map((contact) => (
              <a
                key={contact.id}
                href={contact.link}
                className="group block bg-light-secondary dark:bg-dark-secondary rounded-lg p-8 transition-all duration-300 border border-transparent hover:border-green-pale/30 dark:hover:border-green-pale/30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 flex-1">
                    <div className="p-4 bg-green-pale/5 rounded-lg group-hover:bg-green-pale/10 transition-colors duration-300">
                      <contact.icon className="text-3xl text-green-pale" />
                    </div>
                    <div>
                      <h3 className="text-light-text-primary dark:text-dark-text-primary font-semibold text-lg mb-1">
                        {contact.title}
                      </h3>
                      <p className="text-light-text-secondary dark:text-dark-text-secondary font-mono text-sm">
                        {contact.text}
                      </p>
                    </div>
                  </div>
                  <div className="text-2xl text-green-pale opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-4">
                    →
                  </div>
                </div>
              </a>
            ))}

          {/* Secondary Contacts - Grid of 2 columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {contactInfo
              .filter((contact) => contact.id !== 5)
              .map((contact) => (
                <a
                  key={contact.id}
                  href={contact.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group bg-light-secondary dark:bg-dark-secondary rounded-lg p-6 transition-all duration-300 border border-transparent hover:border-green-pale/20 dark:hover:border-green-pale/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-pale/5 rounded-lg group-hover:bg-green-pale/10 transition-colors duration-300 flex-shrink-0">
                      <contact.icon className="text-xl text-green-pale group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-light-text-primary dark:text-dark-text-primary font-semibold mb-1">
                        {contact.title}
                      </h3>
                      <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm truncate group-hover:text-green-pale/80 transition-colors duration-300">
                        {contact.text}
                      </p>
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
