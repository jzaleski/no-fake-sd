import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources - No Fake SD",
  description:
    "Educational resources about legitimate service dogs, ADA requirements, and the impact of service dog fraud.",
};

const ResourcesPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h1 className="mb-6 text-center text-5xl font-bold text-primary">Resources</h1>
          <p className="mx-auto max-w-3xl text-center text-xl text-foreground">
            Educational information about service dogs, the ADA, and combating fraud
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-primary">
              Understanding Legitimate Service Dogs
            </h2>
            <p className="mb-4 text-lg text-foreground">
              Under the Americans with Disabilities Act (ADA), a service animal is defined as a dog
              that has been individually trained to do work or perform tasks for a person with a
              disability. The tasks performed must be directly related to the person&apos;s
              disability.
            </p>
            <p className="mb-8 text-lg text-foreground">
              Service dogs are working animals, not pets. They undergo extensive training to perform
              specific tasks that help their handlers maintain independence and safety.
            </p>

            <h2 className="mb-6 text-3xl font-bold text-primary">
              The Problem with Fake Service Dogs
            </h2>
            <p className="mb-4 text-lg text-foreground">
              Misrepresenting a pet as a service dog creates serious problems:
            </p>
            <ul className="mb-8 list-disc space-y-2 pl-8 text-lg text-foreground">
              <li>Undermines the credibility of legitimate service dogs</li>
              <li>Creates disruptions in public spaces through untrained animal behavior</li>
              <li>Contributes to stigma affecting people who genuinely need service animals</li>
              <li>
                Causes confusion with Emotional Support Animals (ESAs), which have different
                requirements
              </li>
              <li>Damages public trust and access rights for legitimate service dog handlers</li>
            </ul>

            <h2 className="mb-6 text-3xl font-bold text-primary">Legal Consequences</h2>
            <p className="mb-4 text-lg text-foreground">
              Over 33 states have criminalized the misrepresentation of pets as service dogs.
              Violations are typically classified as misdemeanors or civil infractions, with
              penalties including fines and potential criminal charges.
            </p>
            <p className="mb-8 text-lg text-foreground">
              These laws exist to protect both the public and people with disabilities who rely on
              legitimate service animals.
            </p>

            <h2 className="mb-6 text-3xl font-bold text-primary">
              Service Dogs vs. Emotional Support Animals
            </h2>
            <p className="mb-4 text-lg text-foreground">
              It&apos;s important to understand the difference between service dogs and Emotional
              Support Animals (ESAs):
            </p>
            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border-2 border-primary p-6">
                <h3 className="mb-4 text-xl font-bold text-primary">Service Dogs</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• Trained to perform specific tasks</li>
                  <li>• Protected under ADA</li>
                  <li>• Public access rights</li>
                  <li>• Must be under handler control</li>
                  <li>• Can be any breed</li>
                </ul>
              </div>
              <div className="rounded-lg border-2 border-accent p-6">
                <h3 className="mb-4 text-xl font-bold text-primary">Emotional Support Animals</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• Provide comfort by presence</li>
                  <li>• Not covered under ADA</li>
                  <li>• No public access rights</li>
                  <li>• Housing accommodations only</li>
                  <li>• No specific training required</li>
                </ul>
              </div>
            </div>

            <h2 className="mb-6 text-3xl font-bold text-primary">Additional Resources</h2>
            <p className="mb-4 text-lg text-foreground">
              For more information about service dogs and the ADA, visit:
            </p>
            <ul className="mb-8 list-disc space-y-2 pl-8 text-lg text-foreground">
              <li>
                <a
                  href="https://www.ada.gov/topics/service-animals/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800 font-medium"
                  aria-label="ADA.gov - Service Animals (opens in new tab)"
                >
                  ADA.gov - Service Animals
                </a>
              </li>
              <li>
                <a
                  href="https://www.ada.gov/topics/service-animals/faqs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800 font-medium"
                  aria-label="ADA Frequently Asked Questions about Service Animals (opens in new tab)"
                >
                  ADA Frequently Asked Questions about Service Animals
                </a>
              </li>
            </ul>

            <div className="mt-12 text-center">
              <Link
                href="/service-dog-etiquette"
                className="inline-block w-full sm:w-auto rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-white text-center transition-colors hover:bg-primary-dark"
              >
                Learn About Service Dog Etiquette
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
