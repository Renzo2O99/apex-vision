import { useTranslations } from "next-intl";

export default function DesktopContent({ index }: { index: number }) {
  const t = useTranslations("headset_section");

  const names = t("headset_items.names").split(",");
  const descriptions = t("headset_items.descriptions").split(".,");

  return (
    <div className="hidden md:inline-block absolute bottom-0 bg-white/20 backdrop-blur-md max-w-80 md:min-h-36 p-4">
      <h4 className="font-semibold text-lg lg:text-xl md:mb-2">
        {names[index]}
      </h4>

      <p className="hidden text-sm md:flex">
        {descriptions[index]}
      </p>
    </div>
  );
}
