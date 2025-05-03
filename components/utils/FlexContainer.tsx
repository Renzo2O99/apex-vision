import { AnimatedComponentPropsI } from "@/interface";
import { twMerge } from "tailwind-merge";

export default function FlexContainer({ dataAnimation, dataDuration, dataDelay, children, className }: AnimatedComponentPropsI) {
  const staticClasses = "flex flex-col justify-center items-center space-x-5 space-y-2 lg:flex-row lg:space-y-0 lg:justify-start lg:items-center"

  return (
    <div
      data-aos={dataAnimation}
      data-aos-duration={dataDuration}
      data-aos-delay={dataDelay}
      className={twMerge(staticClasses, className)}
    >
      {children}
    </div>
  )
}
