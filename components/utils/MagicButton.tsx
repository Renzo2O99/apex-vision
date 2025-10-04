import { cn } from '@/lib/utils';
import React from 'react';

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    version="1.1"
    style={{
      shapeRendering: 'geometricPrecision',
      textRendering: 'geometricPrecision',
      fillRule: 'evenodd',
      clipRule: 'evenodd'
    }}
    viewBox="0 0 784.11 815.53"
  >
    <g>
      <path className="fill-[#fffdef]" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
    </g>
  </svg>
);

export const MagicButton = ({ children, className }: { children?: React.ReactNode, className?: string }) => {
  return (
    <div>
      <button
        className={cn("group relative cursor-none py-3 px-[35px] bg-[#6d28d9] text-white text-[17px] font-medium border-[3px] border-[#6d28d9] rounded-lg shadow-none transition-all duration-300 ease-in-out hover:bg-transparent hover:text-[#8B5CF6] hover:shadow-[0_0_25px_#8b5cf68c]", className)}
      >
        {children}

        {/* Star 1 */}
        <div className="
          absolute top-[20%] left-[20%] w-[25px] h-auto z-[-5]
          transition-all duration-1000 ease-[cubic-bezier(0.05,0.83,0.43,0.96)]
          group-hover:top-[-80%] group-hover:left-[-30%] group-hover:z-[2] group-hover:drop-shadow-[0_0_10px_#fffdef]"
        >
          <StarIcon />
        </div>

        {/* Star 2 */}
        <div className="
          absolute top-[45%] left-[45%] w-[15px] h-auto z-[-5]
          transition-all duration-1000 ease-[cubic-bezier(0,0.4,0,1.01)]
          group-hover:top-[-25%] group-hover:left-[10%] group-hover:z-[2] group-hover:drop-shadow-[0_0_10px_#fffdef]"
        >
          <StarIcon />
        </div>

        {/* Star 3 */}
        <div className="
          absolute top-[40%] left-[40%] w-[5px] h-auto z-[-5]
          transition-all duration-1000 ease-[cubic-bezier(0,0.4,0,1.01)]
          group-hover:top-[55%] group-hover:left-[25%] group-hover:z-[2] group-hover:drop-shadow-[0_0_10px_#fffdef]"
        >
          <StarIcon />
        </div>

        {/* Star 4 */}
        <div className="
          absolute top-[20%] left-[40%] w-[8px] h-auto z-[-5]
          transition-all duration-[800ms] ease-[cubic-bezier(0,0.4,0,1.01)]
          group-hover:top-[30%] group-hover:left-[80%] group-hover:z-[2] group-hover:drop-shadow-[0_0_10px_#fffdef]"
        >
          <StarIcon />
        </div>

        {/* Star 5 */}
        <div className="
          absolute top-[25%] left-[45%] w-[15px] h-auto z-[-5]
          transition-all duration-[600ms] ease-[cubic-bezier(0,0.4,0,1.01)]
          group-hover:top-[25%] group-hover:left-[115%] group-hover:z-[2] group-hover:drop-shadow-[0_0_10px_#fffdef]"
        >
          <StarIcon />
        </div>

        {/* Star 6 */}
        <div className="
          absolute top-[5%] left-[50%] w-[5px] h-auto z-[-5]
          transition-all duration-[800ms] ease-linear
          group-hover:top-[5%] group-hover:left-[60%] group-hover:z-[2] group-hover:drop-shadow-[0_0_10px_#fffdef]"
        >
          <StarIcon />
        </div>
      </button>
    </div>
  );
}
