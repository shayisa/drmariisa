import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ============================================================= */}
      {/*  1. HERO                                                       */}
      {/* ============================================================= */}
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-secondary font-semibold tracking-widest uppercase text-xs mb-6 block">
                Assistant Professor of Anthropology &bull; Director, ARID Lab
              </span>

              <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-[1.1] text-primary mb-4">
                Dr. Mari Isa
              </h1>

              <p className="font-headline text-xl md:text-2xl text-on-surface-variant mb-1">
                Assistant Professor of Anthropology, Texas Tech University
              </p>
              <p className="font-headline text-lg md:text-xl text-on-surface-variant mb-10">
                Director, Anthropology Research &amp; IDentification (ARID)
                Laboratory
              </p>

              <p className="text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed mb-12">
                Advancing forensic anthropology through experimental skeletal
                research, inclusive identification, and medicolegal casework.
              </p>

              <div className="flex flex-wrap gap-6 items-center">
                <Link
                  href="/research"
                  className="px-8 py-4 bg-primary text-on-primary rounded-lg flex items-center gap-3 transition-all hover:translate-y-[-2px] hover:shadow-xl shadow-primary/10"
                >
                  View Publications
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            {/* Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/mari-isa-portrait.jpg"
                  alt="Professional portrait of Dr. Mari Isa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-container/5 to-transparent -z-0" />
      </section>

      {/* ============================================================= */}
      {/*  2. INTEGRATED SCHOLAR RECOGNITION                             */}
      {/* ============================================================= */}
      <section id="integrated-scholar" className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary mb-3">
              Texas Tech University &middot; 2025&ndash;2026
            </p>
            <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">
              <span className="italic">Integrated</span> Scholar
            </h2>
            <div className="w-20 h-1 bg-tertiary mx-auto mb-6" />
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-3xl mx-auto">
              2025&ndash;2026 Integrated Scholar &mdash; Texas Tech University.
              Selected by Office of the Provost.
            </p>
          </div>

          {/* Three Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Research */}
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.04)] text-center">
              <span className="material-symbols-outlined text-tertiary text-4xl mb-4">
                biotech
              </span>
              <h3 className="font-headline text-xl text-primary mb-3">
                Research
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                12 peer-reviewed articles, FBI Laboratory publication, 4 book
                chapters
              </p>
            </div>

            {/* Teaching */}
            <div className="bg-primary text-on-primary p-10 rounded-xl text-center">
              <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4">
                school
              </span>
              <h3 className="font-headline text-xl mb-3">Teaching</h3>
              <p className="text-on-primary-container text-sm leading-relaxed">
                20+ students mentored, 7 courses developed, Outstanding Faculty
                Mentor Award
              </p>
            </div>

            {/* Service */}
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.04)] text-center">
              <span className="material-symbols-outlined text-tertiary text-4xl mb-4">
                handshake
              </span>
              <h3 className="font-headline text-xl text-primary mb-3">
                Service
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                NIST OSAC Executive Secretary, 61 casework reports, AAFS
                Standards Board
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  3. ABOUT / BIO                                                */}
      {/* ============================================================= */}
      <section id="about" className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            {/* Left column — heading & quote */}
            <div className="lg:sticky lg:top-40">
              <h2 className="font-headline text-4xl md:text-5xl text-primary mb-8">
                About <span className="italic">Dr.&nbsp;Isa</span>
              </h2>
              <div className="w-20 h-1 bg-tertiary mb-12" />

              <p className="text-on-surface-variant font-body text-sm uppercase tracking-widest mb-4">
                Published Perspective
              </p>
              <blockquote className="font-headline text-xl md:text-2xl text-tertiary leading-relaxed mb-8 italic">
                &ldquo;The field of forensic anthropology can and should
                conceptualize professional ethical behavior beyond so-called
                scientific objectivity and justice beyond the court
                system.&rdquo;
              </blockquote>
              <p className="text-on-surface-variant text-sm">
                &mdash; <em>American Anthropologist</em>, 2022
              </p>
            </div>

            {/* Right column — bio paragraphs */}
            <div className="space-y-8 text-lg text-on-surface-variant leading-relaxed">
              <p>
                Dr. Mari Isa is an Assistant Professor of Anthropology at Texas
                Tech University and the founder and director of the Anthropology
                Research &amp; IDentification (ARID) Laboratory. She also holds
                appointments as Adjunct Faculty in Environmental Toxicology and
                Affiliate Faculty in Women&rsquo;s and Gender Studies.
              </p>

              <p>
                She earned her PhD and MA in Anthropology, along with dual
                bachelor&rsquo;s degrees with High Honors in Anthropology and
                Human Biology, from Michigan State University. Her doctoral
                research on blunt force skeletal trauma was funded by a National
                Science Foundation Graduate Research Fellowship (NSF GRFP) and
                led to a co-authored publication with the FBI Laboratory Division
                on forensic fractography of bone.
              </p>

              <p>
                Her work sits at the intersection of experimental skeletal
                biomechanics and forensic identification. In the ARID Lab, she
                and her students investigate how bones break under different
                types of force, train the next generation of forensic scientists,
                and provide casework services to law enforcement agencies across
                Texas.
              </p>

              <p>
                Beyond the bench, she is part of a collaborative effort aimed
                at &ldquo;shifting the forensic anthropological paradigm to
                incorporate the transgender and gender diverse
                community&rdquo; &mdash; developing new tools like the COSAGE
                guide to help identify individuals who have historically been
                overlooked by standard forensic protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  4. STATISTICS STRIP                                           */}
      {/* ============================================================= */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-5xl font-headline text-primary mb-2">12</p>
              <p className="text-sm text-on-surface-variant uppercase tracking-widest">
                Peer-Reviewed Articles
              </p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-headline text-primary mb-2">61</p>
              <p className="text-sm text-on-surface-variant uppercase tracking-widest">
                Forensic Cases
              </p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-headline text-primary mb-2">20+</p>
              <p className="text-sm text-on-surface-variant uppercase tracking-widest">
                Students Mentored
              </p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-headline text-primary mb-2">7</p>
              <p className="text-sm text-on-surface-variant uppercase tracking-widest">
                Courses Developed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  5. LABORATORY EXPERIENCE TIMELINE                             */}
      {/* ============================================================= */}
      <section id="laboratory-experience" className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-8 gap-6">
            <h2 className="font-headline text-4xl text-primary">
              Laboratory <span className="italic">Experience</span>
            </h2>
            <div className="h-px flex-grow mx-8 bg-outline-variant/30 hidden md:block" />
            <span className="font-label text-sm text-secondary uppercase tracking-widest">
              2014 &ndash; Present
            </span>
          </div>

          <div className="space-y-0 mt-12">
            {/* Founder & Director, ARID Lab */}
            <div className="flex gap-6 pb-8">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-tertiary flex-shrink-0 mt-1.5" />
                <div className="w-px flex-grow bg-outline-variant/30" />
              </div>
              <div>
                <h4 className="font-headline text-base text-primary">
                  Founder &amp; Director, ARID Lab
                </h4>
                <p className="font-label text-xs uppercase tracking-widest text-secondary">
                  Texas Tech University &middot; 2021&ndash;Present
                </p>
              </div>
            </div>

            {/* Lead Graduate Research Assistant */}
            <div className="flex gap-6 pb-8">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-tertiary flex-shrink-0 mt-1.5" />
                <div className="w-px flex-grow bg-outline-variant/30" />
              </div>
              <div>
                <h4 className="font-headline text-base text-primary">
                  Lead Graduate Research Assistant
                </h4>
                <p className="font-label text-xs uppercase tracking-widest text-secondary">
                  NIJ &ldquo;Building a Science of Cranial Fracture&rdquo;
                  &middot; MSU &middot; 2016&ndash;2018
                </p>
              </div>
            </div>

            {/* Laboratory Manager */}
            <div className="flex gap-6 pb-8">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-tertiary flex-shrink-0 mt-1.5" />
                <div className="w-px flex-grow bg-outline-variant/30" />
              </div>
              <div>
                <h4 className="font-headline text-base text-primary">
                  Laboratory Manager
                </h4>
                <p className="font-label text-xs uppercase tracking-widest text-secondary">
                  MSU Forensic Anthropology Laboratory &middot;
                  2016&ndash;2017
                </p>
              </div>
            </div>

            {/* Osteologist, Roselle */}
            <div className="flex gap-6 pb-8">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-tertiary flex-shrink-0 mt-1.5" />
                <div className="w-px flex-grow bg-outline-variant/30" />
              </div>
              <div>
                <h4 className="font-headline text-base text-primary">
                  Osteologist &mdash; Roselle Skeletal Collection
                </h4>
                <p className="font-label text-xs uppercase tracking-widest text-secondary">
                  Museo Archaeologico &middot; Grosseto, Italy &middot;
                  2015&ndash;2019
                </p>
              </div>
            </div>

            {/* Graduate Assistant */}
            <div className="flex gap-6 pb-0">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-tertiary flex-shrink-0 mt-1.5" />
              </div>
              <div>
                <h4 className="font-headline text-base text-primary">
                  Graduate Assistant
                </h4>
                <p className="font-label text-xs uppercase tracking-widest text-secondary">
                  MSU Forensic Anthropology Laboratory &middot;
                  2014&ndash;2020
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  6. ARID LAB HIGHLIGHT                                         */}
      {/* ============================================================= */}
      <section id="the-arid-lab" className="relative py-32 bg-primary-container text-on-primary-container overflow-hidden">
        {/* Background atmospheric image */}
        <div className="absolute inset-0">
          <img
            src="/images/forensic-lab-equipment-blue.jpg"
            alt="Forensic laboratory equipment with atmospheric lighting"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-headline text-4xl md:text-5xl mb-6">
            The ARID Lab
          </h2>
          <p className="font-headline text-xl italic mb-2 text-primary-fixed-dim">
            Anthropology Research &amp; IDentification Laboratory
          </p>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-12 text-primary-fixed-dim">
            Advancing forensic science through research, training, and
            casework.
          </p>
          <Link
            href="/arid-lab"
            className="inline-flex items-center gap-3 px-8 py-4 bg-on-primary-container text-primary-container rounded-lg transition-all hover:translate-y-[-2px] hover:shadow-xl"
          >
            Explore Laboratory
            <span className="material-symbols-outlined text-lg">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  7. KEY RESEARCH PREVIEW                                       */}
      {/* ============================================================= */}
      <section id="key-research" className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-4xl md:text-5xl text-primary mb-16 text-center">
            Key <span className="italic">Research</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Card 1 — Fractography */}
            <div className="bg-surface-container-low rounded-xl overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="/images/bone-fracture-macro.jpg"
                  alt="Macro photography of cranial bone fracture patterns under forensic lighting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
              <span className="material-symbols-outlined text-tertiary text-3xl mb-4">
                biotech
              </span>
              <h3 className="font-headline text-xl text-primary mb-4">
                Forensic Fractography &amp; Biomechanics
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                <em>A Guide to Forensic Fractography of Bone</em> &mdash;
                Co-authored FBI Laboratory publication (2022).
              </p>
              <Link
                href="/research"
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
              >
                View Research
                <span className="material-symbols-outlined">east</span>
              </Link>
              </div>
            </div>

            {/* Card 2 — Inclusive ID */}
            <div className="bg-surface-container-low rounded-xl overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="/images/diverse-identities-abstract.jpg"
                  alt="Modern abstract representation of diverse identities using layered translucent glass panels"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
              <span className="material-symbols-outlined text-tertiary text-3xl mb-4">
                diversity_3
              </span>
              <h3 className="font-headline text-xl text-primary mb-4">
                Inclusive Forensic Identification
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                COSAGE: Contextual Observations in Support of All Gender
                Expressions &mdash; Crowdsourced guide for documenting gender
                expression in human identification efforts (2025).
              </p>
              <Link
                href="/research"
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
              >
                View Research
                <span className="material-symbols-outlined">east</span>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  8. ORGANIZATIONS ENGAGED                                      */}
      {/* ============================================================= */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary mb-8">
            Organizations Engaged
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            <span className="font-headline text-lg text-primary">
              NIST OSAC
            </span>
            <span className="font-headline text-lg text-primary">FBI</span>
            <span className="font-headline text-lg text-primary">DPAA</span>
            <span className="font-headline text-lg text-primary">
              NYC OCME
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  9. CONTACT CTA                                                */}
      {/* ============================================================= */}
      <section className="py-32 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headline text-3xl md:text-4xl text-primary mb-8">
            Get in Touch
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-12">
            Whether you are a prospective student, a fellow researcher, or
            interested in forensic advocacy, I would love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:mari.isa@ttu.edu"
              className="px-8 py-4 bg-primary text-on-primary rounded-lg transition-all hover:translate-y-[-2px] hover:shadow-xl shadow-primary/10"
            >
              Get in Touch
            </a>
            <Link
              href="/arid-lab#join-the-lab"
              className="px-8 py-4 border border-outline text-primary rounded-lg transition-all hover:translate-y-[-2px] hover:bg-surface-container-high"
            >
              Join the Lab
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
