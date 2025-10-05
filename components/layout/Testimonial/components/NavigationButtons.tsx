import { Button } from "@/components/ui/button";
import { NavigationButtonsProps } from "@/interface";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";

export default function NavigationButtons({ handlePrev, handleNext, testimonials, activeIndex, setActiveIndex }: NavigationButtonsProps) {
  return (
    <div className="relative z-20 flex md:flex-col gap-4 justify-center mt-8 md:mt-0">
      <Button
        variant="outline"
        size="icon"
        onClick={handlePrev}
        className="rounded-full h-10 w-10 lg:h-15 lg:w-15 bg-gray-900 border-gray-700 hover:bg-gray-500 transition-all ease-in-out duration-300 cursor-none"
        aria-label="Previous testimonial"
      >
        <ChevronUp className="h-4 w-4 hidden md:block" />

        <ChevronLeft className="h-4 w-4 md:hidden" />
      </Button>

      <div className="flex md:flex-col gap-2 items-center justify-center">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full transition-colors ${index === activeIndex ? "bg-gray-400" : "bg-muted-foreground/20"}`}
            role="button"
            tabIndex={0}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setActiveIndex(index);
              }
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={handleNext}
        className="rounded-full h-10 w-10 lg:h-15 lg:w-15 bg-gray-900 border-gray-700 hover:bg-gray-500 transition-all ease-in-out duration-300 cursor-none"
        aria-label="Next testimonial"
      >
        <ChevronDown className="h-4 w-4 hidden md:block" />

        <ChevronRight className="h-4 w-4 md:hidden" />
      </Button>
    </div>
  );
}