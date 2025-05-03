export interface ComponentPropsInterface {
  children: React.ReactNode;
  className?: string;
}

export interface AnimatedSectionPropsI {
  dataAnimation?: string;
  dataDuration?: string;
  dataOffset?: string;
  dataDelay?: string;
}

export interface AnimatedComponentPropsI extends AnimatedSectionPropsI {
  children: React.ReactNode;
  className?: string;
}

export interface LinkInterface {
  path: string;
  textKey: string;
}

export interface SectionInterface {
  cursor?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface TestimonialSliderProps {
  testimonialsConfig: {
    title: string;
    subtitle: string;
    testimonials: Testimonial[];
    autoRotateInterval: number;
    showVerifiedBadge: boolean;
    trustedCompanies: string[];
    trustedCompaniesTitle: string;
  };
  className?: string;
}

export interface TestimonialHeaderProps {
  title: string;
  subtitle: string;
  controls: any;
  containerVariants: any;
  itemVariants: any;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
  activeIndex: number;
  index: number;
  showVerifiedBadge: boolean;
}

export interface NavigationButtonsProps {
  handlePrev: () => void;
  handleNext: () => void;
  testimonials: Testimonial[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}