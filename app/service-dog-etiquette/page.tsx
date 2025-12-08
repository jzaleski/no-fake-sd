import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Dog Etiquette - No Fake SD",
  description:
    "Learn proper etiquette when encountering service dogs and their handlers in public spaces.",
};

const ServiceDogEtiquettePage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h1 className="mb-6 text-center text-5xl font-bold text-primary">
            Service Dog Etiquette
          </h1>
          <p className="mx-auto max-w-3xl text-center text-xl text-foreground">
            Guidelines for respectful interactions with service dogs and their handlers
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-primary">General Guidelines</h2>
            <p className="mb-8 text-lg text-foreground">
              Service dogs are working animals performing critical tasks for their handlers. When
              you encounter a service dog team in public, following proper etiquette helps ensure
              the dog can do its job effectively and safely.
            </p>

            <h2 className="mb-6 text-3xl font-bold text-primary">Do&apos;s and Don&apos;ts</h2>

            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-secondary p-6">
                <h3 className="mb-4 text-2xl font-bold text-primary">DO:</h3>
                <ul className="space-y-3 text-lg text-foreground">
                  <li>
                    <span className="font-bold text-green-600" aria-hidden="true">
                      ✓
                    </span>{" "}
                    Maintain a respectful distance
                  </li>
                  <li>
                    <span className="font-bold text-green-600" aria-hidden="true">
                      ✓
                    </span>{" "}
                    Ask permission before approaching
                  </li>
                  <li>
                    <span className="font-bold text-green-600" aria-hidden="true">
                      ✓
                    </span>{" "}
                    Keep your pet away from service dogs
                  </li>
                  <li>
                    <span className="font-bold text-green-600" aria-hidden="true">
                      ✓
                    </span>{" "}
                    Be patient if the team needs extra time
                  </li>
                  <li>
                    <span className="font-bold text-green-600" aria-hidden="true">
                      ✓
                    </span>{" "}
                    Speak to the handler, not the dog
                  </li>
                  <li>
                    <span className="font-bold text-green-600" aria-hidden="true">
                      ✓
                    </span>{" "}
                    Respect &quot;Do Not Pet&quot; vests or signs
                  </li>
                  <li>
                    <span className="font-bold text-green-600" aria-hidden="true">
                      ✓
                    </span>{" "}
                    Allow service dogs access where permitted
                  </li>
                </ul>
              </div>
              <div className="rounded-lg bg-secondary p-6">
                <h3 className="mb-4 text-2xl font-bold text-primary">DON&apos;T:</h3>
                <ul className="space-y-3 text-lg text-foreground">
                  <li>
                    <span className="font-bold text-red-600" aria-hidden="true">
                      ✗
                    </span>{" "}
                    Pet, talk to, or distract the dog
                  </li>
                  <li>
                    <span className="font-bold text-red-600" aria-hidden="true">
                      ✗
                    </span>{" "}
                    Feed the service dog
                  </li>
                  <li>
                    <span className="font-bold text-red-600" aria-hidden="true">
                      ✗
                    </span>{" "}
                    Make kissing or whistling sounds
                  </li>
                  <li>
                    <span className="font-bold text-red-600" aria-hidden="true">
                      ✗
                    </span>{" "}
                    Stare at or photograph without permission
                  </li>
                  <li>
                    <span className="font-bold text-red-600" aria-hidden="true">
                      ✗
                    </span>{" "}
                    Ask intrusive questions about disabilities
                  </li>
                  <li>
                    <span className="font-bold text-red-600" aria-hidden="true">
                      ✗
                    </span>{" "}
                    Separate the dog from its handler
                  </li>
                  <li>
                    <span className="font-bold text-red-600" aria-hidden="true">
                      ✗
                    </span>{" "}
                    Assume you know the handler&apos;s disability
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="mb-6 text-3xl font-bold text-primary">Why These Guidelines Matter</h2>
            <p className="mb-4 text-lg text-foreground">
              Service dogs are trained to focus on their handlers and respond to specific needs. Any
              distraction can:
            </p>
            <ul className="mb-8 list-disc space-y-2 pl-8 text-lg text-foreground">
              <li>Prevent the dog from detecting important medical alerts</li>
              <li>Interfere with the dog&apos;s ability to provide mobility assistance</li>
              <li>Create safety hazards for both the handler and the dog</li>
              <li>Break the dog&apos;s concentration and training</li>
            </ul>

            <h2 className="mb-6 text-3xl font-bold text-primary">For Business Owners</h2>
            <p className="mb-4 text-lg text-foreground">
              Under the ADA, businesses must allow service dogs to accompany their handlers in all
              areas where the public is allowed. When a service dog team enters your establishment:
            </p>
            <ul className="mb-8 list-disc space-y-2 pl-8 text-lg text-foreground">
              <li>
                You may ask only two questions: (1) Is the dog a service animal required because of
                a disability? (2) What work or task has the dog been trained to perform?
              </li>
              <li>You cannot ask about the person&apos;s disability</li>
              <li>You cannot require documentation or certification</li>
              <li>You cannot require the dog to demonstrate its task</li>
              <li>
                You can ask the handler to remove the dog only if it is out of control or not
                housebroken
              </li>
            </ul>

            <h2 className="mb-6 text-3xl font-bold text-primary">Teaching Children</h2>
            <p className="mb-4 text-lg text-foreground">
              Help children understand service dog etiquette by explaining:
            </p>
            <ul className="mb-8 list-disc space-y-2 pl-8 text-lg text-foreground">
              <li>Service dogs are working and need to focus</li>
              <li>We don&apos;t pet or talk to working dogs</li>
              <li>The dog is helping someone stay safe and healthy</li>
              <li>We can admire the dog from a distance</li>
              <li>If we want to learn more, we can politely ask the handler</li>
            </ul>

            <h2 className="mb-6 text-3xl font-bold text-primary">If You See a Fake Service Dog</h2>
            <p className="mb-4 text-lg text-foreground">
              Legitimate service dogs are typically well-trained and behave appropriately in public.
              Signs of a fake service dog may include:
            </p>
            <ul className="mb-8 list-disc space-y-2 pl-8 text-lg text-foreground">
              <li>Excessive barking, whining, or growling</li>
              <li>Pulling on the leash or being out of control</li>
              <li>Jumping on people or furniture</li>
              <li>Sniffing merchandise or food</li>
              <li>Showing aggression toward people or other animals</li>
              <li>Eliminating indoors</li>
            </ul>
            <p className="mb-8 text-lg text-foreground">
              If you witness service dog fraud, you can report it to local authorities in states
              where misrepresentation is illegal.
            </p>

            <div className="mt-12 text-center">
              <Link
                href="/get-involved"
                className="inline-block w-full sm:w-auto rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-white text-center transition-colors hover:bg-primary-dark"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDogEtiquettePage;
