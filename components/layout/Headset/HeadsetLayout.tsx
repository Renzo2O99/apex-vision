import Image, { StaticImageData } from "next/image";
import MobileContent from "./components/MobileContent";
import DesktopContent from "./components/DesktopContent";
import { AnimatedSectionPropsI } from "@/interface";

interface HeadsetLayoutProps extends AnimatedSectionPropsI {
  image: StaticImageData;
  index: number;
}

export default function HeadsetLayout({ dataAnimation, dataDuration, dataOffset, dataDelay, image, index }: HeadsetLayoutProps) {
  return (
    <>
      <div 
        data-aos={dataAnimation}
        data-aos-duration={dataDuration}
        data-aos-offset={dataOffset}
        data-aos-delay={dataDelay}
        className="w-full max-w-xs mx-auto min-h-60 md:min-h-[24rem] md:max-w-xl lg:min-h-[22rem] xl:min-h-[26rem]"
      >
        <div className="relative w-full h-full rounded-3xl aspect-video overflow-hidden">
          <Image
            src={image}
            alt={`Headset Set ${index + 1}`}
            fill
            className="object-cover"
          />

          <DesktopContent index={index} />

          <MobileContent index={index} />
        </div>
      </div>
    </>
  );
}
