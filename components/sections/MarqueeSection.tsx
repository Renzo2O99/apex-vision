import Marquee from "react-fast-marquee";
import Section from "../utils/Section";
import NextSvg from "../utils/NextSvg";
import { JSX } from "react";

const logos = [
  { src: "/svg/facebook.svg", alt: "Facebook Logo" },
  { src: "/svg/microsoft.svg", alt: "Microsoft Logo" },
  { src: "/svg/asus.svg", alt: "Asus Logo" },
  { src: "/svg/netflix.svg", alt: "Netflix Logo" },
  { src: "/svg/youtube.svg", alt: "YouTube Logo" },
];

/**
 * @returns {JSX.Element} La sección de marquesina con los logos de las marcas.
 * @description Un componente que muestra una marquesina de logos de empresas.
 * Utiliza el componente NextSvg para una carga optimizada de las imágenes.
 */
export default function MarqueeSection(): JSX.Element {
  return (
    <Section className="my-15">
        <Marquee autoFill={true} direction="right" gradientWidth={50} gradient={true} gradientColor="#060606c8" speed={100} className="flex items-center">
          {logos.map((logo) => (
            <NextSvg
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              className="w-20 h-20 mx-10 lg:w-32 lg:h-32 lg:mx-20"
            />
          ))}
        </Marquee>
    </Section>
  )
}
