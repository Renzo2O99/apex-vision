import { AnimatedComponentPropsI } from '@/interface';
import { twMerge } from 'tailwind-merge';

export default function Title({ dataAnimation, dataDelay, dataOffset, dataDuration, children, className }: AnimatedComponentPropsI) {
  const staticClasses = "text-3xl text-center leading-tight font-bold mb-8 md:text-4xl lg:text-5xl lg:text-left lg:leading-snug";



  return (
    <h2 
      data-aos={dataAnimation}
      data-aos-duration={dataDuration}
      data-aos-offset={dataOffset}
      data-aos-delay={dataDelay}
      className={twMerge(staticClasses, className)}
    >
      {children}
    </h2>
  )
}