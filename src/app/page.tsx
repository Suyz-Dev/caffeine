import HeroSection from '@/components/sections/hero';
import ServicesSection from '@/components/sections/services';
import PortfolioSection from '@/components/sections/portfolio';
import AiConsultationSection from '@/components/sections/ai-consultation';
import TeamSection from '@/components/sections/team';
import TestimonialsSection from '@/components/sections/testimonials';
import BlogSection from '@/components/sections/blog';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <main>
        <ServicesSection />
        <PortfolioSection />
        <AiConsultationSection />
        <TeamSection />
        <TestimonialsSection />
        <BlogSection />
      </main>
    </div>
  );
}
