
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { teamMembers } from '@/lib/data';

export default function TeamSection() {
  return (
    <section id="team" className="w-full py-20 md:py-24 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">The Mind Behind the Code</h2>
          <p className="max-w-xl mx-auto mt-4 text-lg text-foreground/70">
            Meet our passionate founder.
          </p>
        </div>
        <div className="flex justify-center">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center flex flex-col items-center">
              <Avatar className="w-48 h-48 mb-4 border-4 border-accent/20">
                <AvatarImage src={member.imageUrl} alt={member.name} data-ai-hint={member.imageHint} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="font-headline text-xl font-semibold">{member.name}</h3>
              <p className="text-accent font-medium text-lg" dangerouslySetInnerHTML={{ __html: member.role }}></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
