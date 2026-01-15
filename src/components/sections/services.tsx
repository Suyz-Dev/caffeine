import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { services } from '@/lib/data';
import Image from 'next/image';

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Our Expertise</h2>
          <p className="max-w-xl mx-auto mt-4 text-lg text-foreground/70">
            We provide a comprehensive suite of services to build and scale your digital presence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="relative overflow-hidden group text-center p-6 flex flex-col items-center justify-center transition-all duration-300 transform hover:-translate-y-2 shadow-md hover:shadow-xl h-64 md:h-80">
              <div className="absolute inset-0 z-0">
                <Image 
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  data-ai-hint={service.imageHint}
                />
                <div className="absolute inset-0 bg-background/50 group-hover:bg-background/40 transition-colors duration-300"></div>
              </div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <div className="mb-4 text-accent transition-transform duration-300 group-hover:scale-110">{service.icon}</div>
                <CardHeader className="p-0">
                  <CardTitle className="font-headline text-xl font-semibold mb-2 text-primary group-hover:text-accent transition-colors duration-300">{service.title}</CardTitle>
                  <CardDescription className="text-base text-foreground/80 group-hover:text-foreground transition-colors duration-300">{service.description}</CardDescription>
                </CardHeader>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
