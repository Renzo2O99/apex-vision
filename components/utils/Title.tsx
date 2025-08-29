import { AnimatedComponentPropsI } from '@/interface';
import { cn } from '@/lib/utils';

export default function Title({ dataAnimation, dataDelay, dataOffset, dataDuration, children, className }: AnimatedComponentPropsI) {
  const staticClasses = "text-[clamp(1.5rem,2.5vw,2.25rem)] new-title text-center leading-tight font-bold mb-8 md:text-[clamp(1.75rem,3.5vw,3rem)] lg:text-left lg:leading-snug";

  return (
    <h2 
      data-aos={dataAnimation}
      data-aos-duration={dataDuration}
      data-aos-offset={dataOffset}
      data-aos-delay={dataDelay}
      className={cn(staticClasses, className)}
    >
      {children}
    </h2>
  )
}