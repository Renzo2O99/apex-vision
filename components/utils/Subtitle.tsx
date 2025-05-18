import { AnimatedComponentPropsI } from "@/interface";
import { twMerge } from "tailwind-merge";

export default function Subtitle({ dataAnimation, dataDelay, dataOffset, dataDuration, children, className}: AnimatedComponentPropsI) {
  return (
    <p 
      data-aos={dataAnimation}
      data-aos-duration={dataDuration}
      data-aos-offset={dataOffset}
      data-aos-delay={dataDelay}
      className={twMerge("text-md lg:text-lg leading-relaxed mb-8 lg:mb-10", className)}
    >
      {children}
    </p>
  )
}