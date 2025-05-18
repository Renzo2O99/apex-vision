import { AnimatedComponentPropsI } from "@/interface";
import { twMerge } from "tailwind-merge";

export default function Description({ dataAnimation, dataDuration, dataDelay, children, className}: AnimatedComponentPropsI) {
  const staticClasses = "font-secondary text-lg text-center mb-12 max-w-[32rem] mx-auto md:text-xl lg:text-left";
  
  return (
    <p 
      data-aos={dataAnimation}
      data-aos-duration={dataDuration}
      data-aos-delay={dataDelay}
      className={twMerge(staticClasses, className)}
    >
      {children}
    </p>
  )
}