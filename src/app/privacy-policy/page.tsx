import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary">Privacy Policy</h1>
          <p className="max-w-xl mx-auto mt-4 text-lg text-foreground/70">
            Last updated: January 15, 2026
          </p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Introduction</h2>
            <p className="mb-4">
              Caffeine Coders ("us", "we", or "our") operates the Caffeine Coders Studio website and application (the "Service"). 
              This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service 
              and the choices you have associated with that data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Information Collection and Use</h2>
            <p className="mb-4">
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>
            <h3 className="text-xl font-semibold mb-2">Types of Data Collected</h3>
            <h4 className="text-lg font-medium mb-2">Personal Data</h4>
            <p className="mb-4">
              While using our Service, we may ask you to provide us with certain personally identifiable information 
              that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Address, State, Province, ZIP/Postal code</li>
              <li>Cookies and Usage Data</li>
            </ul>
            <h4 className="text-lg font-medium mb-2">Usage Data</h4>
            <p className="mb-4">
              We may also collect information about how the Service is accessed and used ("Usage Data"). 
              This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), 
              browser type, browser version, the pages of our Service that you visit, the time and date of your visit, 
              the time spent on those pages, unique device identifiers and other diagnostic data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Use of Data</h2>
            <p className="mb-4">
              Caffeine Coders uses the collected data for various purposes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Transfer of Data</h2>
            <p className="mb-4">
              Your information, including Personal Data, may be transferred to — and maintained on — computers located outside 
              of your state, province, country or other governmental jurisdiction where the data protection laws may differ 
              from those of your jurisdiction.
            </p>
            <p className="mb-4">
              If you are located outside United States and choose to provide information to us, please note that we transfer 
              the data, including Personal Data, to United States and process it there.
            </p>
            <p>
              Your consent to this Privacy Policy followed by your submission of such information represents your agreement 
              to that transfer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Disclosure of Data</h2>
            <h3 className="text-xl font-semibold mb-2">Legal Requirements</h3>
            <p>
              Caffeine Coders may disclose your Personal Data in the good faith belief that such action is necessary to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>To comply with a legal obligation</li>
              <li>To protect and defend the rights or property of Caffeine Coders</li>
              <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
              <li>To protect the personal safety of users of the Service or the public</li>
              <li>To protect against legal liability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Security of Data</h2>
            <p>
              The security of your data is important to us but remember that no method of transmission over the Internet 
              or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect 
              your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Service Providers</h2>
            <p className="mb-4">
              We may employ third party companies and individuals to facilitate our Service ("Service Providers"), 
              provide the Service on our behalf, perform Service-related services or assist us in analyzing how our Service is used.
            </p>
            <p>
              These third parties have access to your Personal Data only to perform these tasks on our behalf and are 
              obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Links to Other Sites</h2>
            <p>
              Our Service may contain links to other sites that are not operated by us. If you click on a third party link, 
              you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every 
              site you visit. We have no control over and assume no responsibility for the content, privacy policies or 
              practices of any third party sites or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service, prior 
              to the change becoming effective and update the "effective date" at the top of this Privacy Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy 
              are effective when they are posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="mt-4 space-y-2">
              <p>By email: privacy@caffeinecoders.com</p>
              <p>By visiting this page: <Link href="/contact" className="text-accent hover:underline">Contact Us</Link></p>
            </div>
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