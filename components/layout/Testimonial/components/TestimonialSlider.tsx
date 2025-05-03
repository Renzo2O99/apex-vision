"use client";

import Section from "@/components/utils/Section";
import { TestimonialSliderProps } from "@/interface";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";
import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import TestimonialHeader from "./TestimonialHeader";
import TestimonialCard from "./TestimonialCard";
import NavigationButtons from "./NavigationButtons";

export default function TestimonialSlider({ testimonialsConfig, className }: TestimonialSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { title, subtitle, testimonials, autoRotateInterval, showVerifiedBadge, trustedCompanies, trustedCompaniesTitle } = testimonialsConfig;
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (typeof autoRotateInterval !== 'number' || autoRotateInterval <= 0 || testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, autoRotateInterval);
    return () => clearInterval(interval);
  }, [testimonials.length, autoRotateInterval]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <Section
      dataAnimation="fade-up"
      dataDuration="500"
      ref={sectionRef}
      id="testimonials-alt"
      className={cn(
        "py-16 relative overflow-hidden flex justify-center mb-0",
        className,
      )}
    >
      <div className="items-center px-4 md:px-6">
        <TestimonialHeader 
          title={title} 
          subtitle={subtitle} 
          controls={controls} 
          containerVariants={containerVariants} 
          itemVariants={itemVariants} 
        />

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="md:grid md:grid-cols-[1fr_auto] gap-8 items-center lg:min-h-[24rem]"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -top-6 -left-6 z-10">
              <Quote className="h-12 w-12 text-primary/20" strokeWidth={1} />
            </div>

            <div className="relative h-[22rem] md:h-[18rem] xl:h-[20rem]">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  activeIndex={activeIndex}
                  index={index}
                  showVerifiedBadge={showVerifiedBadge}
                />
              ))}
            </div>
          </motion.div>

          <NavigationButtons
            handlePrev={handlePrev}
            handleNext={handleNext}
            testimonials={testimonials}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </motion.div>

        {trustedCompanies.length > 0 && (
          <motion.div variants={itemVariants} className="mt-20 pt-10 border-t">
            <h3 className="text-sm font-medium text-muted-foreground text-center mb-8">
              {trustedCompaniesTitle}
            </h3>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
              {trustedCompanies.map((company) => (
                <div
                  key={company}
                  className="text-2xl font-semibold text-muted-foreground/50"
                >
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </Section>
  );
}