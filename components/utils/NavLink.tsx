import { ComponentPropsInterface } from "@/interface"
import { twMerge } from "tailwind-merge"

export default function NavLink({ children, className }: ComponentPropsInterface) {
  const staticClass = "relative w-full text-center lg:after:w-6 lg:after:h-1 lg:after:absolute lg:after:left-0 lg:after:-bottom-2 lg:after:rounded-full lg:after:bg-transparent hover:lg:after:bg-pink-500 lg:after:transition-all lg:after:duration-300 text-lg md:text-4xl";

  return (
    <li className={twMerge(staticClass, className)}>
      {children}
    </li>
  )
}
