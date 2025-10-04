import FlexContainer from '@/components/utils/FlexContainer';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { BsFillCircleFill } from 'react-icons/bs';

export default function UsersComponent() {
  const t = useTranslations("banner_section");
  const imageFilenames = [ "avt1.png", "avt2.png", "avt3.png", "avt4.png"];

  return (
    <FlexContainer
      className="mx-auto z-10"
      dataAnimation="fade-down"
      dataDuration="1400"
      dataDelay="100"
      dataOnce={true}
    >
      <div className="flex -space-x-2 space-y-2">
        {imageFilenames.map((filename, index) => (
          <div 
            key={filename}
            className="w-12 h-12 rounded-full"
          >
            <Image 
              src={`/img/avatar/${filename}`} 
              alt={`Imagen Avatar ${index}`} 
              width={50} height={50}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center space-x-2 font-secondary font-medium">
        <BsFillCircleFill className="text-xs text-green-500 animate-pulse"/>

        <p>{t("banner_users_text")}</p>
      </div>
    </FlexContainer>
  )
}