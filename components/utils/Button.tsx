"use client";

import { ComponentPropsInterface } from "@/interface";
import { twMerge } from "tailwind-merge";
import { useRef, useState } from "react";

export default function Button({ children, className }: ComponentPropsInterface) {
  const [isHovering, setIsHovering] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  const staticClass = "cursor-none text-black font-medium h-12 px-8 bg-gradient-to-t from-slate-700 to-purple-300 outline-none rounded-md flex items-center justify-center transition-all ease-in duration-300 hover:text-black";
  
  const animationClass = isHovering ? "animate-pulse" : "animate-none";
  
  //? Animación de pulsación
  const handleMouseEnter = () => {
    // Limpiar cualquier temporizador pendiente
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setIsHovering(true);
  };
  
  //? Animación de desaparición
  const handleMouseLeave = () => {
    // Guardar referencia al nuevo temporizador
    timerRef.current = setTimeout(() => {
      setIsHovering(false);
      timerRef.current = null;
    }, 1000);
  };
  
  return (
    <button 
      className={twMerge(staticClass, animationClass, className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  )
}
