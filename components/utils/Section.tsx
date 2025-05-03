import { AnimatedComponentPropsI } from "@/interface";
import { twMerge } from "tailwind-merge";
import { SmoothCursor } from "../ui/smooth-cursor";

interface SectionPropsInterface extends AnimatedComponentPropsI {
  id?: string;
  bg?: string;
  cursor?: boolean;
  ref?: React.RefObject<HTMLElement | null>
}

export default function Section({ id, dataAnimation, dataDuration, dataOffset, dataDelay, children, bg, cursor, ref, className, ...props }: SectionPropsInterface) {
  const staticClasses = "mb-12";
  return (
    <>
      {cursor && (
        <SmoothCursor />
      )}

      <section
        id={id}
        ref={ref}
        data-aos={dataAnimation}
        data-aos-duration={dataDuration}
        data-aos-offset={dataOffset}
        data-aos-delay={dataDelay}
        className={twMerge(staticClasses, bg, className)}
        {...props}
      >
        {children}
      </section>
    </>
  );
}
