import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

export default function MobileContent({ index }: { index: number }) {
  const t = useTranslations("headset_section");

  const names = t("headset_items.names").split(",");
  const descriptions = t("headset_items.descriptions").split(".,");

  return (
    <>
      <Accordion type="single" collapsible className="max-w-lg my-4 w-full absolute -bottom-4 md:hidden">
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-section-500 first:rounded-t-md last:rounded-b-md px-4 rounded-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20"
          >
            <AccordionTrigger className="text-sm p-2 text-center">
              {names[index]}
            </AccordionTrigger>

            <AccordionContent className="text-center">
              {descriptions[index]}
            </AccordionContent>
          </AccordionItem>
      </Accordion>
    </>
  );
}
