import Container from "../utils/Container";
import Section from "../utils/Section";
import TestimonialLayout from "../layout/Testimonial/TestimonialLayout";

export default function TestimonialsSection() {
  return (
    // añadir mb-6 y lg:mb-12 en caso de añadir otra sección.
    <Section 
      dataAnimation="fade"
      className="mb-0 lg:mb-0 bg-purple-400/10"
    >
      <Container>
        <div className="rounded-lg">
          <TestimonialLayout />
        </div>
      </Container>
    </Section>
  );
}
