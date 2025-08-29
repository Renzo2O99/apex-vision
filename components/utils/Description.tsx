import { AnimatedComponentPropsI } from "@/interface";
import { cn } from "@/lib/utils";

export default function Description({ dataAnimation, dataDuration, dataDelay, children, className}: AnimatedComponentPropsI) {
  const staticClasses = "font-secondary text-lg text-center mb-12 max-w-[32rem] mx-auto md:text-xl lg:text-left";
  
  return (
    <p 
      data-aos={dataAnimation}
      data-aos-duration={dataDuration}
      data-aos-delay={dataDelay}
      className={cn(staticClasses, className)}
    >
      {children}
    </p>
  )
}