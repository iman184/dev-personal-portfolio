import { Heart } from "lucide-react";
import { FaGithub, FaLinkedin  } from "react-icons/fa6";
import { BrandMark } from "@/components/BrandMark";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/iman184", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/zighed-imen-2589b31bb/", label: "LinkedIn" },];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="flex items-center gap-3 justify-center md:justify-start">
              <BrandMark className="w-10 h-10 shrink-0" />
              <span className="text-xl font-bold tracking-tight"></span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Zighed Imen. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
