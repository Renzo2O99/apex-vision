// components/AOSInitializer.tsx (o .jsx)
"use client"; // ¡Importante! Marca este archivo como un Componente Cliente

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // No olvides importar el CSS de AOS

export default function AosInitializer() {
  useEffect(() => {
    // Llama a AOS.init() solo una vez después de que el componente se monta en el cliente
    AOS.init({
      // Puedes pasar tu objeto de configuración aquí,
      // o dejarlo vacío para usar la configuración por defecto de AOS.init()
      offset: 50,
      // duration: 400,
      // easing: 'ease',
      // once: false,
      // mirror: false,
      // anchorPlacement: 'top-bottom',
      duration: 1400,
      delay: 0,
      easing: 'ease-in-out',
    });

    // Opcional: Limpiar al desmontar (raramente necesario para AOS global, pero buena práctica)
    // Si AOS tuviera un método de limpieza como AOS.destroy(), lo llamarías aquí.
    // AOS no tiene un método destroy(), por lo que este return es opcional a menos que
    // lo añadas para una futura versión de AOS o para otra lógica de inicialización.
    /*
    return () => {
       // Limpiar algo si es necesario
    };
    */

  }, []); // El array vacío [] asegura que este efecto solo se ejecute una vez al montar

  // Este componente no necesita renderizar nada visualmente
  return null;
}