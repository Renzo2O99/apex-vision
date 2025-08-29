import { ComponentPropsInterface } from "@/interface"
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavLinkProps extends ComponentPropsInterface {
  href: string;
}

export default function NavLink({ children, className, href }: NavLinkProps) {  
  const staticClass = "relative flex items-center w-full text-center lg:after:w-6 lg:after:h-1 lg:after:absolute lg:after:left-0 lg:after:-bottom-2 lg:after:rounded-full lg:after:bg-transparent hover:lg:after:bg-pink-500 lg:after:transition-all lg:after:duration-300 text-lg md:text-4xl";

  return (
    <li className={cn(staticClass, className)}>
      <Link href={href} className="cursor-none">
        {children}
      </Link>
    </li>
  )
}
