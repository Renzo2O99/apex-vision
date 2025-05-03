import { useTranslations } from "next-intl";
import Container from "../utils/Container";
import Section from "../utils/Section";
import { HeroVideo } from "../layout/HeroVideo/HeroVideo";
import Title from "../utils/Title";

export default function VideoSection() {
  const t = useTranslations("VideoSection");
  
  return (
    <Section>
      <Container className="xl:max-w-3/5">
        <div className="px-4">
          <Title 
            dataAnimation="fade"
            dataOffset="400"
            className="mx-auto max-w-11/12 text-2xl md:text-3xl lg:text-4xl lg:text-center lg:max-w-4/5">
            {t("title")}
          </Title>

          <HeroVideo />
        </div>
      </Container>
    </Section>
  )
}