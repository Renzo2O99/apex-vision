import { useTranslations } from "next-intl";
import Container from "../utils/Container";
import Section from "../utils/Section";
import Title from "../utils/Title";
import headsetSet1 from "@/public/img/sections/headsets/headset-1.png";
import headsetSet2 from "@/public/img/sections/headsets/headset-2.png";
import headsetSet3 from "@/public/img/sections/headsets/headset-3.png";
import headsetSet4 from "@/public/img/sections/headsets/headset-4.png";
import HeadsetLayout from "../layout/Headset/HeadsetLayout";

export default function HeadsetsSection() {
  const t = useTranslations("HeadsetsSection");

  const images = [ headsetSet1, headsetSet2, headsetSet3, headsetSet4 ]

  return (
    <Section 
      className="my-12 lg:my-24"
    >
      <Container>
        <Title 
          dataAnimation="fade-up"
          dataDuration="1000"
          dataOffset="300"
          className="text-2xl lg:text-center md:mb-12"
        >
          {t("title")}
        </Title>

        <div className="grid gap-10 md:grid-cols-2 2xl:gap-x-0">
          {images.map((image, index) => (
            <HeadsetLayout
              key={index}
              dataAnimation="zoom-in"
              dataOffset="300"
              dataDuration="1000"
              dataDelay="100"
              image={image}
              index={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}