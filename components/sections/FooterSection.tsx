import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function FooterSection() {
  const t = useTranslations("footer_section");
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
        <span className="flex-1 inline-flex gap-x-5 mb-6 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start order-1 lg:order-3 lg:mb-0 lg:justify-end">
          {socials.map((social) => (
            <Link
              key={social.id}
              href={social.href}
              target="_blank"
              className="text-gray-400 hover:text-orange-500 transition-all ease-in-out duration-300"
            >
              {social.icon}
            </Link>
          ))}
        </span>

        <Link 
          href="#Home"
          className="flex title-font font-medium items-center md:justify-start justify-center gap-2 text-white cursor-none order-2"
        >
          <span className="ml-3">
            {t("about")} { }
          </span>
        </Link>

        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4 order-3 lg:order-2">
          &copy; Apex Vision {currentYear} - 
          <span className="text-gray-500 ml-1">
            {t("copyright")}
          </span>
        </p>
      </div>
    </footer>
  );
}
