import { AnimatedComponentPropsI } from "@/interface";
import { cn } from "@/lib/utils";

export default function FlexContainer({ dataAnimation, dataDuration, dataDelay, dataOnce, children, className }: AnimatedComponentPropsI) {
  const staticClasses = "flex flex-col justify-center items-center space-x-5 space-y-2 lg:flex-row lg:space-y-0 lg:justify-start lg:items-center"

  return (
    <div
      data-aos={dataAnimation}
      data-aos-duration={dataDuration}
      data-aos-delay={dataDelay}
      data-aos-once={dataOnce}  
      className={cn(staticClasses, className)}
    >
      {children}
    </div>
  )
}