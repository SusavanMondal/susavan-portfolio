import { Mail, Phone, MapPin, Linkedin, Instagram, Send } from "lucide-react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactMe = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Message sent! Thank you for your message. I'll get back to you soon.");
      setIsSubmitting(false);
      e.target.reset(); // Reset form after submission
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      value: "susovanmondal550@gmail.com",
      href: "mailto:susovanmondal550@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      value: "+91 6295779038",
      href: "tel:+916295779038",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      value: "Budge Budge, Kolkata, West Bengal, 700137",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6 text-primary hover:text-blue-700 transition-colors" />,
      href: "https://www.linkedin.com/in/susavan-mondal-0a2aa6244/",
    },
    {
      icon: <Instagram className="w-6 h-6 text-primary hover:text-pink-500 transition-colors" />,
      href: "https://www.instagram.com/_suso_van/",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative bg-gradient-to-b from-secondary/30 to-secondary/10">
      <div className="container mx-auto max-w-5xl">
        {/* Header section remains the same */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {/* Contact Information Column */}
          <div className="backdrop-blur-sm bg-card/30 p-8 rounded-2xl border border-primary/10 hover:border-primary/20 transition-all flex flex-col">
            <h3 className="text-2xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Contact Information
            </h3>
            
            <div className="space-y-6 flex-grow">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-6 group p-4 rounded-xl hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                    {item.icon}
                  </div>
                  <div className="space-y-1 min-w-0"> {/* Added min-w-0 for proper text wrapping */}
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block break-words w-full text-sm sm:text-base"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-muted-foreground break-words w-full text-sm sm:text-base">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links at bottom */}
            <div className="pt-6 mt-6 border-t border-primary/10">
              <h4 className="font-medium text-xl mb-6">Connect With Me</h4>
              <div className="flex space-x-6 justify-center">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-110 transition-transform"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Send Message Column */}
          <div className="backdrop-blur-sm bg-card/30 p-8 rounded-2xl border border-primary/10 hover:border-primary/20 transition-all">
            <h3 className="text-2xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Send Message
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium block">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                  placeholder="Your name..."
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium block">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium block">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50 resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cosmic-button w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} className={isSubmitting ? 'animate-pulse' : ''} />
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastClassName="backdrop-blur-sm"
        style={{ zIndex: 9999 }}
      />
    </section>
  );
};