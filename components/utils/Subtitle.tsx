import { ComponentPropsInterface } from "@/interface";
import { twMerge } from "tailwind-merge";

export default function Subtitle({ children, className}: ComponentPropsInterface) {
  return (
    <p className={twMerge("text-md lg:text-lg leading-relaxed mb-8 lg:mb-10", className)}>
      {children}
    </p>
  )
}