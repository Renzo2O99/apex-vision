import { useTranslations } from "next-intl";

export default function DesktopContent({ index }: { index: number }) {
  const t = useTranslations("HeadsetsSection");

  return (
    <div className="hidden md:inline-block absolute bottom-0 bg-white/20 backdrop-blur-md max-w-80 md:min-h-36 p-4">
      <h4 className="font-semibold text-lg lg:text-xl md:mb-2">
        {t(`headsetTitles.${index}`)}
      </h4>

      <p className="hidden text-sm md:flex">
        {t(`headsetDescriptions.${index}`)}
      </p>
    </div>
  );
}
