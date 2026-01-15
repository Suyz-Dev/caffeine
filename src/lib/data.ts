import type { Project, TeamMember, Testimonial, BlogPost, HeroImage, Service } from '@/lib/types';
import data from './placeholder-images.json';
import type { ImagePlaceholder } from './placeholder-images';
import { Code, BrainCircuit, BarChart3 } from 'lucide-react';
import React from 'react';

const placeholderImages: ImagePlaceholder[] = data.placeholderImages;

const findImage = (id: string): { imageUrl: string; imageHint: string; description: string } => {
    const image = placeholderImages.find(img => img.id === id);
    if (!image) {
      console.warn(`Image with id "${id}" not found. Using default placeholder.`);
      // Ensure a valid placeholder is returned if an image is not found.
      return { imageUrl: 'https://picsum.photos/seed/error/1920/1080', imageHint: 'placeholder', description: 'Placeholder image' };
    }
    
    // Handle local images
    let imageUrl = image.imageUrl;
    if (image.imageUrl.startsWith('/')) {
      // This is a local image, use as is
      imageUrl = image.imageUrl;
    } else {
      // This is an external image
      imageUrl = image.imageUrl;
    }
    
    return { imageUrl, imageHint: image.imageHint, description: image.description };
};

const findImageOnly = (id: string): { imageUrl: string; imageHint: string } => {
    const image = placeholderImages.find(img => img.id === id);
    if (!image) {
      console.warn(`Image with id "${id}" not found. Using default placeholder.`);
      // Ensure a valid placeholder is returned if an image is not found.
      return { imageUrl: 'https://picsum.photos/seed/error/1920/1080', imageHint: 'placeholder' };
    }
    
    // Handle local images
    let imageUrl = image.imageUrl;
    if (image.imageUrl.startsWith('/')) {
      // This is a local image, use as is
      imageUrl = image.imageUrl;
    } else {
      // This is an external image
      imageUrl = image.imageUrl;
    }
    
    return { imageUrl, imageHint: image.imageHint };
};

export const services: Service[] = [
  {
    icon: React.createElement(Code, { className: "w-10 h-10" }),
    title: 'Web Development',
    description: 'We build fast, responsive, and scalable web applications tailored to your specific business needs, using the latest technologies.',
    ...findImageOnly('service-web-dev')
  },
  {
    icon: React.createElement(BrainCircuit, { className: "w-10 h-10" }),
    title: 'AI Integration',
    description: 'Leverage the power of artificial intelligence. We integrate custom AI models and solutions to automate processes and enhance user experiences.',
    ...findImageOnly('service-ai')
  },
  {
    icon: React.createElement(BarChart3, { className: "w-10 h-10" }),
    title: 'Data Science',
    description: 'Turn your data into actionable insights. Our data science services include analytics, visualization, and predictive modeling to drive your decisions.',
    ...findImageOnly('service-data-science')
  },
];


// Directly define hero images for simplicity and reliability
export const heroSlideshowImages: HeroImage[] = [
    {
        description: 'Abstract network connections representing AI',
        imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop',
        imageHint: 'abstract network'
    },
    {
        description: 'Developer working on code on multiple monitors',
        imageUrl: 'https://images.unsplash.com/photo-1618423168533-9a37c4c7a336?q=80&w=2070&auto=format&fit=crop',
        imageHint: 'developer setup'
    },
    {
        description: 'Server room with glowing lights',
        imageUrl: 'https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=2070&auto=format&fit=crop',
        imageHint: 'data center'
    },
    {
        description: 'Abstract technology background',
        imageUrl: 'https://t4.ftcdn.net/jpg/04/16/30/35/360_F_416303594_tYIuBGkPdUwZJjNpTce7Xgw7d6ZJtlNd.jpg',
        imageHint: 'abstract technology'
    }
];

export const portfolioProjects: Project[] = [
  {
    id: 'proj-1',
    title: 'Student Dropout Prediction System',
    description: 'A cutting-edge e-commerce solution with personalized recommendations and predictive analytics.',
    ...findImageOnly('project-1')
  },
  {
    id: 'proj-2',
    title: 'Influencer Outreach agent',
    description: 'An interactive dashboard for visualizing complex financial data and market trends.',
    ...findImageOnly('project-2')
  },
  {
    id: 'proj-3',
    title: 'Stock market analyzer',
    description: 'Redesigned a major corporate website for improved user experience and modern aesthetics.',
    ...findImageOnly('project-3')
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Suyash Gupta',
    role: 'Founder & CEO,<br />Head of Data Science',
    ...findImageOnly('team-1')
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Caffeine Coders transformed our vision into a reality. Their expertise in AI and web development is unparalleled. The results exceeded all our expectations!',
    author: 'Radha Mohan',
    company: 'Innovate Corp'
  },
  {
    id: 'test-2',
    quote: 'The data science insights provided by the team were a game-changer for our business. Professional, timely, and incredibly skilled.',
    author: 'Shreyansh Gupta',
    company: 'Data-Driven Inc.'
  },
  {
    id: 'test-3',
    quote: 'Working with Caffeine Coders was a seamless experience. They are true partners who are invested in your success. Highly recommended!',
    author: 'Prakhal',
    company: 'Synergy Solutions'
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'The Future of Web Development is AI',
    excerpt: 'Explore how artificial intelligence is revolutionizing the way we build and interact with websites.',
    ...findImageOnly('blog-1')
  },
  {
    id: 'blog-2',
    title: 'Unlocking Business Potential with Data Science',
    excerpt: 'A deep dive into how data-driven strategies can boost efficiency and profitability.',
    ...findImageOnly('blog-2')
  },
  {
    id: 'blog-3',
    title: 'Our Favorite Tech Stacks of 2024',
    excerpt: 'A look at the powerful and efficient technologies we love to use for client projects.',
    ...findImageOnly('blog-3')
  },
];
