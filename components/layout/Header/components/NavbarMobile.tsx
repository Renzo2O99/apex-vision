import { IoClose } from "react-icons/io5";
import { twMerge } from "tailwind-merge";
import NavbarComponent from "./NavbarComponent";

interface ComponentPropsInterface {
  navMobile: boolean;
  setNavMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavbarMobile({ navMobile, setNavMobile }: ComponentPropsInterface) {
  // Usamos translate-x-full para ocultar y translate-x-0 para mostrar
  const staticContentClass = "fixed top-0 bottom-0 right-0 w-60 md:w-76 transition-transform duration-300 ease-in-out";
  const dynamicContentClass = navMobile ? "translate-x-0" : "translate-x-full";

  return (
    <div className={twMerge(staticContentClass, dynamicContentClass)}>
      <NavbarComponent
        navClass="bg-section-500/50 w-full h-[80%] lg:hidden bg-clip-padding backdrop-filter backdrop-blur-lg"
        ulClass="flex flex-col gap-y-8 justify-end items-center h-[50%] font-secondary"
        icon={
          <IoClose 
            onClick={() => setNavMobile(false)}
            className="text-4xl absolute right-5 top-12 cursor-pointer"
          />
        }
      />
    </div>
  )
}