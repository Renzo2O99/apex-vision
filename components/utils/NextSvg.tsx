import Image from "next/image";
import { JSX } from "react";

interface NextSvgProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * Un componente para renderizar imágenes SVG usando next/image para optimización.
 * Utiliza la propiedad 'fill', por lo que el contenedor padre debe tener un tamaño definido y estar posicionado.
 *
 * @param {NextSvgProps} props - Las propiedades para el componente.
 * @param {string} props.src - La ruta de origen de la imagen SVG.
 * @param {string} props.alt - El texto alternativo para la imagen SVG.
 * @param {string} [props.className] - Clases CSS opcionales para estilizar el contenedor.
 * @returns {JSX.Element} El componente de imagen SVG renderizado.
 */
export default function NextSvg({ src, alt, className }: NextSvgProps): JSX.Element {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill={true}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
