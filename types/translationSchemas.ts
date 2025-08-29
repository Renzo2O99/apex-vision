export interface HeadsetItemTranslation {
  id: number;
  headset_items_id: number;
  languages_code: string;
  name: string;
  title: string;
  description: string;
}

export interface TestimonialTranslation {
  id: number;
  testimonial_vision_items_id: number;
  languages_code: string;
  role: string;
  verified_comment: string;
  testimonial: string;
}

export interface TestimonialMain {
  id: number;
  status: string;
  sort: number | null;
  date_created: string;
  date_updated: string | null;
  name: string;
  company: string;
  rating: number;
  avatar_link: string;
  translations: number[];
}

export interface PrincipalData {
  id: number;
  apex_vision_id: number;
  languages_code: string;
  en: string;
  es: string;
  title: string;
  home: string;
  company: string;
  features: string;
  sign_up: string;
  banner_title: string;
  banner_alt_image: string;
  banner_button_text: string;
  banner_link_text: string;
  banner_users_text: string;
  experience_title: string;
  experience_description: string;
  experience_button_text: string;
  video_title: string;
  headset_section_title: string;
  headset_section_subtitle: string;
  headset_section_description: string;
  testimonial_title: string;
  testimonial_subtitle: string;
  trusted_companies_title: string;
  about: string;
  copyright: string;
  description: string;
  banner_description: string;
}