import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact - No Fake SD",
  description:
    "Get in touch with us to learn more about service dog advocacy or report service dog fraud.",
};

const ContactPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h1 className="mb-6 text-center text-5xl font-bold text-primary">Contact Us</h1>
          <p className="mx-auto max-w-3xl text-center text-xl text-foreground">
            Have questions or want to get involved? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
