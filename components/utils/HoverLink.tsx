import { Link } from "@/i18n/navigation";
import { ComponentPropsInterface } from "@/interface";
import { cn } from "@/lib/utils";

interface HoverLinkProps extends ComponentPropsInterface {
  href: string;
}

const staticClass = "no-underline text-white leading-loose relative border-b-2 cursor-none border-transparent before:content-[''] before:w-[0] before:h-[2px] before:rounded-[2px] before:bg-white before:absolute before:-bottom-[.25rem] before:left-2/4 before:[transition:width_.4s,_left_.4s] hover:before:w-full hover:before:left-[0] transition-all ease-in-out hover:cursor-none duration-300";

export default function HoverLink({ children, className, href }: HoverLinkProps) {
  return (
    <Link 
      href={href}
      className={cn(staticClass, className)}
    >
      <p>{children}</p>
    </Link>
  )
}