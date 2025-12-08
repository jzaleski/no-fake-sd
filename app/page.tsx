import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[700px] items-center justify-center overflow-hidden md:min-h-[800px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.webp"
            alt="A well-trained service dog assisting their handler, representing legitimate service dog partnerships"
            fill
            priority
            className="object-cover object-center"
            quality={90}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            Spreading awareness about
            <br />
            <span className="text-white">FRAUDULENTLY REPRESENTING PETS</span>
            <br />
            as SERVICE DOGS
          </h1>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/get-involved"
              className="w-full sm:w-auto rounded-lg bg-white px-8 py-3 text-lg font-semibold text-black text-center transition-colors hover:bg-gray-100"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-primary">Our Mission</h2>
            <p className="mb-4 text-lg text-foreground">
              We are dedicated to educating the public about legitimate service dogs and the harm
              caused by fake service dog claims.
            </p>
            <p className="text-lg text-foreground">
              Service dogs perform life-changing tasks for people with disabilities. When untrained
              pets are misrepresented as service dogs, it damages public trust and access rights for
              those who truly need these amazing working dogs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-primary">What We Do</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h3 className="mb-4 text-2xl font-bold text-primary">Education</h3>
              <p className="text-foreground">
                We provide resources and information about the ADA requirements, service dog
                training standards, and the legal rights of service dog handlers.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h3 className="mb-4 text-2xl font-bold text-primary">Advocacy</h3>
              <p className="text-foreground">
                We advocate for stronger enforcement of service dog laws and support legitimate
                service dog handlers facing discrimination or access issues.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h3 className="mb-4 text-2xl font-bold text-primary">Awareness</h3>
              <p className="text-foreground">
                We raise awareness about the impact of fake service dogs on businesses, the public,
                and most importantly, people with disabilities who rely on service dogs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold text-primary">Join the Movement</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-foreground">
            Help us protect the integrity of service dogs and support those who depend on them.
          </p>
          <Link
            href="/contact"
            className="inline-block w-full sm:w-auto rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-white text-center transition-colors hover:bg-primary-dark"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
