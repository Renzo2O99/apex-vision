import Button from "@/components/utils/Button";
import Container from "@/components/utils/Container";
import Title from "@/components/utils/Title";
import { useTranslations } from "next-intl";
import UsersComponent from "./components/UsersComponent";
import HoverLink from "@/components/utils/HoverLink";
import Description from "@/components/utils/Description";
import { AnimatedSectionPropsI } from "@/interface";
import FlexContainer from "@/components/utils/FlexContainer";
import Image from "next/image";
import img from "@/public/img/layout/banner-img.svg";


export default function BannerLayout({ dataAnimation, dataDuration, dataDelay }: AnimatedSectionPropsI) {
  const t = useTranslations("banner_section");
  const title = t("banner_title");
  const [titlePart1, titlePart2] = title.split("T");

  return (
    <div className="min-h-[38rem] pt-12 xl:pt-16 text-center relative lg:pb-0 lg:text-center">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-12">
          <div className="col-span-3 grid mx-auto">
            <Title
              dataAnimation={dataAnimation}
              dataDuration={dataDuration}
              dataDelay={dataDelay}
              className="grid grid-rows-2 mx-auto"
            >
              <span className="row-span-1 flex items-end mx-auto">
                {titlePart1}
              </span>
              <span className="row-span-1 text-center">T{titlePart2}</span>
            </Title>

            <Description
              dataAnimation={dataAnimation}
              dataDuration={dataDuration}
              dataDelay="400"
              className="lg:text-center"
            >
              {t("banner_description")}
            </Description>

            <FlexContainer
              dataAnimation={dataAnimation}
              dataDuration={dataDuration}
              dataDelay="200"
              className="max-w-80 gap-x-8 mx-auto mb-12 space-y-8 lg:space-x-8 lg:max-w-none"
            >
              <Button className="mx-auto lg:mx-0 lg:my-auto">
                {t("banner_button_text")}
              </Button>

              <HoverLink href="/" className="cursor-none">
                {t("banner_link_text")}
              </HoverLink>
            </FlexContainer>

            <UsersComponent />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
            className="grid justify-center items-center mx-auto max-w-xs w-full col-span-2 max-h-[40rem] h-full -z-100 mt-4 lg:mt-0"
            >
            <Image
              src={img}
              alt={t("banner_alt_image")}
              priority
              width={0} // Set initial width to 0 for responsive scaling
              height={0} // Set initial height to 0 for responsive scaling
              className="w-full h-auto object-cover"
            />

            {/*
                        <Spline
              scene="https://prod.spline.design/t-23dZiaN6tLH9wS/scene.splinecode"
            />
            */}
          </div>
        </div>
      </Container>
    </div>
  );
}
