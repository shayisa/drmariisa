import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Dr. Mariyam Isa",
  description:
    "Privacy policy for Dr. Mariyam Isa's academic portfolio website.",
};

export default function PrivacyPage() {
  return (
    <main data-no-hero="true" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <span className="font-label text-xs uppercase tracking-[0.3em] text-outline mb-6 block">
        Legal
      </span>
      <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl text-primary mb-12">
        Privacy Policy
      </h1>

      <div className="space-y-12 text-on-surface-variant leading-relaxed">
        <section>
          <h2
            id="introduction"
            className="font-headline text-2xl text-primary mb-4"
          >
            Introduction
          </h2>
          <p>
            This privacy policy describes how Dr. Mariyam Isa and the
            Anthropology Research &amp; IDentification (ARID) Laboratory at
            Texas Tech University collect, use, and protect information gathered
            through this website.
          </p>
        </section>

        <section>
          <h2
            id="information-collection"
            className="font-headline text-2xl text-primary mb-4"
          >
            Information Collection
          </h2>
          <p>
            This website may collect personal information that you voluntarily
            provide through contact forms, including your name, email address,
            organization, and the content of your inquiry. We do not
            automatically collect personal information beyond standard server
            logs.
          </p>
        </section>

        <section>
          <h2
            id="use-of-information"
            className="font-headline text-2xl text-primary mb-4"
          >
            Use of Information
          </h2>
          <p>
            Information submitted through this website is used solely to respond
            to your inquiries, facilitate academic collaboration, process
            speaking engagement requests, and coordinate medicolegal consultation
            services. Your information will not be sold or shared with third
            parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2
            id="academic-research-context"
            className="font-headline text-2xl text-primary mb-4"
          >
            Academic &amp; Research Context
          </h2>
          <p>
            The ARID Laboratory adheres to all applicable Texas Tech University
            data governance policies and ethical standards for research data
            management. Any data collected in connection with research activities
            is subject to Institutional Review Board (IRB) oversight.
          </p>
        </section>

        <section>
          <h2
            id="external-links"
            className="font-headline text-2xl text-primary mb-4"
          >
            External Links
          </h2>
          <p>
            This website contains links to external sites (e.g., journal
            publications, institutional profiles). We are not responsible for the
            privacy practices of external websites. We encourage you to review
            the privacy policies of any site you visit via external links.
          </p>
        </section>

        <section>
          <h2
            id="contact"
            className="font-headline text-2xl text-primary mb-4"
          >
            Contact
          </h2>
          <p>
            For questions about this privacy policy, please contact Dr.&nbsp;Isa
            at{" "}
            <a
              href="mailto:mari.isa@ttu.edu"
              className="text-primary font-semibold underline decoration-primary/30 hover:decoration-primary transition-all"
            >
              mari.isa@ttu.edu
            </a>
            .
          </p>
        </section>

        <p className="text-sm text-outline pt-8">
          Last updated: April 2026. This policy is subject to change. Please
          review periodically.
        </p>
      </div>
    </main>
  );
}
