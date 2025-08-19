import React, { useState } from "react";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_m286w16",
        "template_gcyg76k",
        e.target,
        "Qe-GF0OxVEl18mm0O"
      )
      .then(
        () => {
          toast({
            title: "✅ Message sent!",
            description:
              "Thank you for your message. I'll get back to you soon.",
          });
          setIsSubmitting(false);
          e.target.reset();
        },
        (error) => {
          toast({
            title: "❌ Error!",
            description: "Failed to send message. Please try again later.",
            variant: "destructive",
          });
          setIsSubmitting(false);
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get In{" "}
          <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
        
        Open to collaborations and new projects, with a focus on creating innovative and meaningful solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="space-y-10">
            <h3 className="text-2xl font-semibold">Contact Information</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-sm hover:shadow-md transition">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:shabbirahmed.devv@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    shabbirahmed.devv@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-sm hover:shadow-md transition">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+923190225136"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +92-319-0225136
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-sm hover:shadow-md transition">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Islamabad, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-10 text-center">
              <h4 className="font-medium text-lg mb-6">Connect With Me</h4>
              <div className="flex justify-center gap-6">
                <a
                  href="http://www.linkedin.com/in/m-shabbir-ahmed-a0649928a"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-full bg-primary/10 hover:bg-primary/20 transition transform hover:scale-110"
                >
                  <Linkedin className="w-7 h-7 text-primary" />
                </a>
                <a
                  href="https://github.com/shabbir28"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-full bg-primary/10 hover:bg-primary/20 transition transform hover:scale-110"
                >
                  <Github className="w-7 h-7 text-primary" />
                </a>
                <a
                  href="https://www.instagram.com/m_shabbirrahmed"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-full bg-primary/10 hover:bg-primary/20 transition transform hover:scale-110"
                >
                  <Instagram className="w-7 h-7 text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-card p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="title" value="Contact Form" />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Shabbir Ahmed..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
