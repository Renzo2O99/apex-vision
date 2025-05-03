import { Link } from "@/i18n/navigation";
import { ComponentPropsInterface } from "@/interface";
import { twMerge } from "tailwind-merge";

interface HoverLinkProps extends ComponentPropsInterface {
  href: string;
}

const staticClass = "underline lg:no-underline text-white leading-loose relative border-b-2 border-transparent before:content-[''] before:w-[0] before:h-[2px] before:rounded-[2px] before:bg-white before:absolute before:-bottom-[.25rem] before:left-2/4 before:[transition:width_.4s,_left_.4s] hover:before:w-full hover:before:left-[0] transition-all ease-in-out duration-300";

export default function HoverLink({ children, className, href }: HoverLinkProps) {
  return (
    <Link 
      href={href}
      className={twMerge(staticClass, className)}
    >
      <p>{children}</p>
    </Link>
  )
}