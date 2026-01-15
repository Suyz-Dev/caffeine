import Link from 'next/link';
import { Coffee, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Coffee className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">Caffeine Coders</span>
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-foreground/60 text-sm">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link href="/privacy-policy" className="text-foreground/60 hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-foreground/60 hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-foreground/60 hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
          <p>&copy; {currentYear} Caffeine Coders Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
