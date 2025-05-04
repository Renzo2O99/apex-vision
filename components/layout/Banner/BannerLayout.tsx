import Button from "@/components/utils/Button";
import Container from "@/components/utils/Container";
import Title from "@/components/utils/Title";
import img from "@/public/img/layout/banner-img.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import UsersComponent from "./components/UsersComponent";
import HoverLink from "@/components/utils/HoverLink";
import Description from "@/components/utils/Description";
import { AnimatedSectionPropsI } from "@/interface";
import FlexContainer from "@/components/utils/FlexContainer";

export default function BannerLayout({ dataAnimation, dataDuration, dataDelay }: AnimatedSectionPropsI) {
  const t = useTranslations("Banner");

  return (
    <section className="min-h-[38rem] pt-16 pb-12 text-center relative lg:pb-0 lg:text-left">
      <Container>
        <div className="flex flex-col lg:flex-row">
          <div>
            <Title
              dataAnimation={dataAnimation}
              dataDuration={dataDuration}
              dataDelay={dataDelay}
            >
              {t("titlePart1")} <br />
              {t("titlePart2")}
            </Title>

            <Description
              dataAnimation={dataAnimation}
              dataDuration={dataDuration}
              dataDelay="400"
            >
              {t("description")}
            </Description>

            <FlexContainer 
              dataAnimation={dataAnimation}
              dataDuration={dataDuration}
              dataDelay="200"
              className="max-w-80 gap-x-8 mx-auto mb-12 space-y-8 lg:space-x-8 lg:max-w-none"
            >
              <Button className="mx-auto lg:mx-0 lg:my-auto">
                {t("buttonText")}
              </Button>

              <HoverLink
                href="/"
                className="cursor-none"
              >
                {t("linkText")}
              </HoverLink>
            </FlexContainer>

            <UsersComponent />
          </div>

          <div 
            data-aos="fade-up"
            data-aos-duration={dataDuration}
            data-aos-delay="600"
            className="grid justify-center items-center lg:-mt-24 max-w-xs w-full mx-auto"
          >
            <Image 
              src={img}
              alt="Banner Image"
              width={0} // Set initial width to 0 for responsive scaling
              height={0} // Set initial height to 0 for responsive scaling
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
