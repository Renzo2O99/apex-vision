import { ComponentPropsInterface } from '@/interface'
import { cn } from '@/lib/utils'

export default function Container({ children, className }: ComponentPropsInterface) {
  return (
    <div className={cn("container mx-auto p-6 lg:p-8", className)}>{children}</div>
  )
}