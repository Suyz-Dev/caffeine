'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { heroSlideshowImages } from '@/lib/data';

export default function HeroSection() {

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={heroSlideshowImages[0].imageUrl}
          alt={heroSlideshowImages[0].description}
          fill
          style={{ objectFit: 'cover' }}
          className="brightness-50"
          priority
          data-ai-hint={heroSlideshowImages[0].imageHint}
        />
      </div>

      <div className="relative z-10 container mx-auto text-center px-4">
        <div className="mb-4 font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter" style={{ color: 'hsl(var(--accent))' }}>
          Welcome to the Caffeine Coders
        </div>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white">
          We Build Intelligent Web Solutions
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl text-slate-200">
          From cutting-edge web development to advanced AI and data science, Caffeine Coders brings your most ambitious digital projects to life.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} className="hover:opacity-90 transition-opacity">
            <Link href="#consult">
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
            <Link href="#portfolio">Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
