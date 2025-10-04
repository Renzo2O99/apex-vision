import { useTranslations } from "next-intl";
import Container from "../utils/Container";
import Section from "../utils/Section";
import Title from "../utils/Title";
import headsetSet1 from "@/public/img/sections/headsets/headset-1.png";
import headsetSet2 from "@/public/img/sections/headsets/headset-2.png";
import headsetSet3 from "@/public/img/sections/headsets/headset-3.png";
import headsetSet4 from "@/public/img/sections/headsets/headset-4.png";
import HeadsetLayout from "../layout/Headset/HeadsetLayout";
import Subtitle from "../utils/Subtitle";

export default function HeadsetsSection() {
  const t = useTranslations("headset_section");

  const images = [headsetSet1, headsetSet2, headsetSet3, headsetSet4];
  
  return (
    <Section className="my-12 lg:my-24">
      <Container>
        <Title
          dataAnimation="fade-up"
          dataDuration="800"
          dataOffset="300"
          className="text-2xl lg:text-center md:mb-12"
        >
          {t("headset_title")}
        </Title>

        <Subtitle
          dataAnimation="fade-up"
          dataDuration="800"
          dataOffset="300"
          dataDelay="100"
          className="text-center text-pretty font-semibold mx-auto px-4 mb-8 text-gray-700 md:px-0 lg:max-w-1/2 lg:pb-8">
          {t("headset_description")}
        </Subtitle>

        <div className="grid gap-10 md:grid-cols-2 2xl:gap-x-0">
          {images.map((image, index) => (
            <HeadsetLayout
              key={index}
              dataAnimation="zoom-in"
              dataOffset="100"
              dataDuration="800"
              dataDelay="200"
              image={image}
              index={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}