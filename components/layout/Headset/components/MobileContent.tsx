import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

export default function MobileContent({ index }: { index: number }) {
  const t = useTranslations("HeadsetsSection");

  return (
    <>
      <Accordion type="single" collapsible className="max-w-lg my-4 w-full absolute -bottom-4 md:hidden">
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-section-500 first:rounded-t-md last:rounded-b-md px-4 rounded-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20"
          >
            <AccordionTrigger className="text-sm p-2 text-center">
              {t(`headsetHeaders.${index}`)}
            </AccordionTrigger>

            <AccordionContent className="text-center">
              {t(`headsetDescriptions.${index}`)}
            </AccordionContent>
          </AccordionItem>
      </Accordion>
    </>
  );
}
