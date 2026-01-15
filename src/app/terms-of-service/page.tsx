import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function TermsOfServicePage() {
  return (
    <div className="w-full py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary">Terms of Service</h1>
          <p className="max-w-xl mx-auto mt-4 text-lg text-foreground/70">
            Last updated: January 15, 2026
          </p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Agreement to Terms</h2>
            <p className="mb-4">
              These Terms of Service constitute a legally binding agreement ("Agreement") between Caffeine Coders ("us", "we", 
              or "our") and you ("User", "you", or "your") concerning your use of the Caffeine Coders Studio website and 
              application (the "Service").
            </p>
            <p>
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of 
              these Terms, you may not access the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on Caffeine 
              Coders Studio for personal, non-commercial transitory viewing only. This is the grant of a license, not a 
              transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Modify or copy the materials;</li>
              <li>Use the materials for any commercial purpose or for any public display;</li>
              <li>Attempt to reverse engineer any software contained on Caffeine Coders Studio;</li>
              <li>Remove any copyright or other proprietary notations from the materials; or</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            <p>
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by 
              Caffeine Coders at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Disclaimer</h2>
            <p className="mb-4">
              The materials on Caffeine Coders Studio are provided on an "as is" basis. Caffeine Coders makes no warranties, 
              expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, 
              implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of 
              intellectual property or other violation of rights.
            </p>
            <p>
              Further, Caffeine Coders does not warrant or make any representations concerning the accuracy, likely results, 
              or reliability of the use of the materials on its website or otherwise relating to such materials or on sites 
              linked to this site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Limitations</h2>
            <p>
              In no event shall Caffeine Coders or its suppliers be liable for any damages (including, without limitation, 
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability to 
              use the materials on Caffeine Coders Studio, even if Caffeine Coders or a Caffeine Coders authorized 
              representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Accuracy of Materials</h2>
            <p>
              The materials appearing on Caffeine Coders Studio may include technical, typographical, or photographic errors. 
              Caffeine Coders does not warrant that any of the materials on its website are accurate, complete, or current. 
              Caffeine Coders may make changes to the materials contained on its website at any time without notice. 
              However, Caffeine Coders does not make any commitment to update the materials.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Links</h2>
            <p className="mb-4">
              Caffeine Coders has not reviewed all of the sites linked to its website and is not responsible for the 
              contents of any such linked site. The inclusion of any link does not imply endorsement by Caffeine Coders of 
              the site. Use of any such linked website is at the user's own risk.
            </p>
            <p>
              Caffeine Coders may revise these terms of service for its website at any time without notice. By using this 
              website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the United States 
              and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Modifications and Updates</h2>
            <p className="mb-4">
              Caffeine Coders reserves the right to modify these Terms at any time. You are expected to check this page 
              periodically for changes. Your continued use of the Service after any changes to these Terms constitutes 
              acceptance of those changes.
            </p>
            <p>
              If you have any questions about these Terms of Service, please contact us at: contact@caffeinecoders.com
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}