import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/Ishantcommerceclasses/",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/ishantclasses/",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/@IshantCommerceClasses",
  },
];

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "About Tutor", href: "/about-tutor" },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ],
  subjects: [
    { name: "Accountancy", href: "/subjects/accountancy" },
    { name: "Business", href: "/subjects/business" },
    { name: "Economics", href: "/subjects/economics" },
  ],
  cities: [
    { name: "Palwal", href: "/cities/palwal" },
    { name: "Faridabad", href: "/cities/faridabad" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Ishant Commerce Classes"
                width={40}
                height={40}
                className="rounded-full"
              />
              <h3 className="text-lg font-semibold">Ishant Commerce Classes</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering students with quality education in Commerce and
              Business Studies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subjects</h3>
            <ul className="space-y-2">
              {footerLinks.subjects.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  85, behind Attri Property, HUDA Sector-2, Palwal, Haryana
                  121102
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <a
                  href="tel:09138405051"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  091384 05051
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a
                  href="mailto:ishantvermasrcc@gmail.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  ishantvermasrcc@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Ishant Commerce Classes. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
