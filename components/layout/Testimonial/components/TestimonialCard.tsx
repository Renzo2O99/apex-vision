import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TestimonialCardProps } from "@/interface";
import { BadgeCheck, Star } from "lucide-react";
import { useTranslations } from "next-intl";

export default function TestimonialCard({ testimonial, activeIndex, index, showVerifiedBadge }: TestimonialCardProps) {
  const t = useTranslations("TestimonialsSection"); 

  return (
    <Card
      key={testimonial.id}
      className={`bg-gray-900 border-none py-2 lg:py-4 lg:px-2 text-white absolute inset-0 min-h-[22rem] transition-all duration-500 ${index === activeIndex ? "opacity-100 translate-x-0 shadow-lg" : "opacity-0 translate-x-[100px] pointer-events-none"}`}
    >
      <CardContent className="p-4 md:p-8 h-full flex flex-col">
        <div className="relative flex justify-between items-start mb-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12 lg:h-18 lg:w-18 border-2 border-primary/10">
              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <h4 className="font-semibold mb-2 lg:text-xl font-primary">
                {testimonial.name}
              </h4>

              <p className="text-sm text-muted-foreground lg:text-lg">
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
          </div>
          <div className="flex">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
            ))}
          </div>
        </div>

        <Separator className="my-4" />

        <p className="flex-1 italic text-base/relaxed lg:text-xl">
          &quot;{testimonial.content}&quot;
        </p>

        {showVerifiedBadge && (
          <div className="flex items-center gap-x-1 lg:gap-x-2 absolute bottom-5 right-5 mt-4 text-xs lg:text-md text-right lg:p-2">
            <BadgeCheck color="green" /> <span>{t("verifiedComment")}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}