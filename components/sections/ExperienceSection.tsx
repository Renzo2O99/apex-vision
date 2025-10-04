import Image from "next/image";
import Container from "../utils/Container";
import expImage1 from "@/public/img/sections/experience/exp-img-1.png";
import expImage2 from "@/public/img/sections/experience/exp-img-2.png";
import { useTranslations } from "next-intl";
import { replaceHyphensWithSpaces } from "@/lib/utils";
import Title from "../utils/Title";
import Description from "../utils/Description";
import Section from "../utils/Section";
import { MagicButton } from "../utils/MagicButton";

export default function ExperienceSection() {
  const t = useTranslations("experience_section");

  return (
    <Section>
      <Container>
        <div className="grid lg:min-h-[30rem] lg:grid-cols-2 lg:flex-row lg:gap-x-20">
          <div className="flex mt-10 order-1 lg:order-0 justify-center gap-x-6 items-center lg:mt-0 lg:gap-x-12">
            <div 
              data-aos="fade-down"
              data-aos-offset="100"
              data-aos-delay="400"
              data-aos-duration="1000"
              className="self-start"
            >
              <Image 
                src={expImage1}
                alt={replaceHyphensWithSpaces("experience-image-1")}
              />
            </div>

            <div 
              data-aos="fade-up"
              data-aos-offset="400"
              data-aos-delay="0"
              data-aos-duration="1000"
              className="self-end"
            >
              <Image
                src={expImage2}
                alt={replaceHyphensWithSpaces("experience-image-2")}
              />
            </div>
          </div>

          <div 
            data-aos="fade-left"
            data-aos-offset="400"
            data-aos-delay="0"
            data-aos-duration="1000"
            className="flex flex-col justify-center items-center lg:items-start mt-6 mb-10 lg:my-0"
          >
            <Title className="lg:text-4xl">
              {t("experience_title")}
            </Title>

            <Description className="mb-6 lg:mx-0">
              {t("experience_description")}
            </Description>

            <MagicButton className="lg:max-w-60">
              {t("experience_button_text")}
            </MagicButton>
          </div>
        </div>
      </Container>
    </Section>
  )
}