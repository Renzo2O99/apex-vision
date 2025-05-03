import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function FooterSection() {
  const t = useTranslations("FooterSection");
  const currentYear = new Date().getFullYear();

  const socials = [
    { id: "github", icon: <Github />, href: "#" }, // Add actual links later
    { id: "instagram", icon: <Instagram />, href: "#" },
    { id: "linkedin", icon: <Linkedin />, href: "#" },
    { id: "facebook", icon: <Facebook />, href: "#" },
  ];

  return (
    <footer className="text-gray-400 bg-purple-400/10">
      <div className="container px-4 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link 
          href="#Home"
          className="flex title-font font-medium items-center md:justify-start justify-center gap-2 text-white"
        >
          {/* <svg */}
          <span className="ml-3">
            {t("about")} { }
          </span>
        </Link>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          &copy; {t("company")} {currentYear} - 
          <a
            href="https://twitter.com/knyttneve"
            className="text-gray-500 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("copyright")}
          </a>
        </p>
        <span className="inline-flex gap-x-5 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {socials.map((social) => (
            <Link
              key={social.id}
              href={social.href} // Use href from object
              target="_blank" // Open social links in new tab
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-all ease-in-out duration-300"
            >
              {social.icon}
            </Link>
          ))}
        </span>
      </div>
    </footer>
  );
}
