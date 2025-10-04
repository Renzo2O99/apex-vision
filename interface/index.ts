export interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}

export interface TranslationMessages {
  metadata?: {
    title?: string;
    description?: string;
  };
  [key: string]: any;
};

export interface ComponentPropsInterface {
  children: React.ReactNode;
  className?: string;
}

export interface AnimatedSectionPropsI {
  dataAnimation?: string;
  dataDuration?: string;
  dataOffset?: string;
  dataDelay?: string;
  dataOnce?: boolean;
}

export interface AnimatedComponentPropsI extends AnimatedSectionPropsI {
  children?: React.ReactNode;
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
  rating: number;
  company: string;
  testimonial: string;
  avatar_link: string;
  verified_comment: string;
}

export interface TestimonialSliderProps {
  testimonialsConfig: {
    title: string;
    subtitle: string;
    testimonials: Testimonial[];
    autoRotateInterval: number;
    showVerifiedBadge: boolean;
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