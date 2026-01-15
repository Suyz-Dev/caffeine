import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/lib/data';
import Link from 'next/link';

export default function BlogSection() {
  return (
    <section id="blog" className="w-full py-20 md:py-24 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Insights & Articles</h2>
          <p className="max-w-xl mx-auto mt-4 text-lg text-foreground/70">
            Stay updated with the latest trends in technology, AI, and web development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:scale-105">
              <div className="relative h-48 w-full">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:scale-110"
                  data-ai-hint={post.imageHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{post.excerpt}</CardDescription>
                <Button variant="link" asChild className="p-0 mt-4 h-auto text-accent hover:text-accent/90">
                  <Link href="#">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
