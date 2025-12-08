import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Involved - No Fake SD",
  description:
    "Join the movement to protect service dog access rights and combat service dog fraud.",
};

const GetInvolvedPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h1 className="mb-6 text-center text-5xl font-bold text-primary">Get Involved</h1>
          <p className="mx-auto max-w-3xl text-center text-xl text-foreground">
            Join us in protecting the integrity of service dogs and supporting those who depend on
            them
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-primary">Make a Difference</h2>
            <p className="mb-8 text-lg text-foreground">
              Everyone can play a role in protecting service dog access rights and combating fraud.
              Whether you&apos;re a business owner, a member of the public, or someone passionate
              about disability rights, there are many ways to get involved.
            </p>

            <h2 className="mb-6 text-3xl font-bold text-primary">Ways to Help</h2>

            <div className="mb-8 space-y-6">
              <div className="rounded-lg bg-secondary p-6">
                <h3 className="mb-3 text-2xl font-bold text-primary">
                  Educate Yourself and Others
                </h3>
                <p className="text-lg text-foreground">
                  Learn the facts about legitimate service dogs and share accurate information with
                  your community. Understanding ADA requirements and service dog etiquette is the
                  first step in making a difference.
                </p>
              </div>

              <div className="rounded-lg bg-secondary p-6">
                <h3 className="mb-3 text-2xl font-bold text-primary">
                  Support Legitimate Handlers
                </h3>
                <p className="text-lg text-foreground">
                  When you see a service dog team, practice proper etiquette. Support businesses
                  that properly accommodate service dogs while maintaining appropriate standards.
                  Speak up when you witness discrimination against legitimate service dog handlers.
                </p>
              </div>

              <div className="rounded-lg bg-secondary p-6">
                <h3 className="mb-3 text-2xl font-bold text-primary">Report Fraud</h3>
                <p className="text-lg text-foreground">
                  In states where misrepresenting a pet as a service dog is illegal, you can report
                  suspected fraud to local authorities. Familiarize yourself with your state&apos;s
                  laws and the proper channels for reporting.
                </p>
              </div>

              <div className="rounded-lg bg-secondary p-6">
                <h3 className="mb-3 text-2xl font-bold text-primary">Advocate for Stronger Laws</h3>
                <p className="text-lg text-foreground">
                  Support legislation that protects service dog access rights and penalizes fraud.
                  Contact your state representatives to express support for laws that criminalize
                  service dog misrepresentation.
                </p>
              </div>

              <div className="rounded-lg bg-secondary p-6">
                <h3 className="mb-3 text-2xl font-bold text-primary">
                  Spread Awareness on Social Media
                </h3>
                <p className="text-lg text-foreground">
                  Share educational content about service dogs, the impact of fraud, and proper
                  etiquette. Follow and support organizations dedicated to service dog advocacy.
                  Challenge misinformation when you encounter it.
                </p>
              </div>

              <div className="rounded-lg bg-secondary p-6">
                <h3 className="mb-3 text-2xl font-bold text-primary">
                  Support Service Dog Organizations
                </h3>
                <p className="text-lg text-foreground">
                  Consider volunteering or donating to reputable service dog training organizations.
                  These organizations work tirelessly to train legitimate service dogs and place
                  them with people who need them.
                </p>
              </div>
            </div>

            <h2 className="mb-6 text-3xl font-bold text-primary">For Business Owners</h2>
            <p className="mb-4 text-lg text-foreground">
              If you&apos;re a business owner, you can help by:
            </p>
            <ul className="mb-8 list-disc space-y-2 pl-8 text-lg text-foreground">
              <li>Training your staff on ADA service dog requirements</li>
              <li>Knowing the two questions you can legally ask</li>
              <li>Understanding when you can ask a handler to remove a disruptive animal</li>
              <li>Creating a welcoming environment for legitimate service dog teams</li>
              <li>Refusing to enable fraud by questioning suspicious situations appropriately</li>
            </ul>

            <h2 className="mb-6 text-3xl font-bold text-primary">Stay Connected</h2>
            <p className="mb-8 text-lg text-foreground">
              Want to stay informed about service dog advocacy? Sign up for updates and news about
              our efforts to combat fraud and protect access rights.
            </p>

            <div className="mt-12 rounded-lg border-2 border-primary bg-white p-8 text-center">
              <h3 className="mb-4 text-2xl font-bold text-primary">Questions or Ideas?</h3>
              <p className="mb-6 text-lg text-foreground">
                We&apos;d love to hear from you. Contact us to share your thoughts, report fraud, or
                learn more about how you can make a difference.
              </p>
              <Link
                href="/contact"
                className="inline-block w-full sm:w-auto rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-white text-center transition-colors hover:bg-primary-dark"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolvedPage;
