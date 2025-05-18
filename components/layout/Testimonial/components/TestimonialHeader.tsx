import { motion } from "motion/react";
import { TestimonialHeaderProps } from "@/interface";

export default function TestimonialHeader({ title, subtitle, controls, containerVariants, itemVariants }: TestimonialHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="text-center mb-12 space-y-4 lg:min-w-[50rem]"
      //? Tamaño de la sección y card para cada testimonio
    >
      <motion.h2
        variants={itemVariants}
        className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className="text-muted-foreground mx-auto md:text-xl/relaxed"
      >
        {subtitle}
      </motion.p>
    </motion.div>
  );
}