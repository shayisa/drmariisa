import Link from "next/link";
import { asset } from "@/lib/basePath";

export const metadata = {
  title: "ARID Lab | Dr. Mariyam Isa",
  description:
    "Anthropology Research & IDentification Laboratory at Texas Tech University.",
};

export default function AridLabPage() {
  return (
    <>
      {/* ============================================================= */}
      {/*  1. HERO                                                       */}
      {/* ============================================================= */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-surface">
        {/* Hero background */}
        <div className="absolute inset-0">
          <img
            src={asset("/images/lab-skeletal-models.jpg")}
            alt="Modern laboratory setting with skeletal models and bright morning light"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <span className="font-label text-xs uppercase tracking-widest text-secondary mb-4 block">
                Anthropology Research &amp; IDentification
              </span>
              <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-[1.1] text-primary tracking-tight">
                ARID Lab
              </h1>
            </div>
            <div className="lg:col-span-5 pb-4">
              <p className="text-xl text-on-surface-variant leading-relaxed">
                The ARID Lab advances forensic anthropology through a tripartite
                mission: research on skeletal trauma and identification equity,
                graduate and undergraduate training, and medicolegal casework
                services for West Texas law enforcement.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-container/5 to-transparent -z-0" />
      </section>

      {/* ============================================================= */}
      {/*  2. OUR MISSION                                                */}
      {/* ============================================================= */}
      <section id="our-mission" className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-headline text-4xl text-primary mb-8 italic">
              Our Mission
            </h2>
            <div className="w-20 h-1 bg-tertiary mb-8" />
            <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
              We conduct research, provide graduate academic training, and offer
              forensic anthropology and archaeology casework services to
              requesting law enforcement agencies and medicolegal professionals.
              Our work is supported by a broader team of anthropologists with
              specialized expertise in skeletal analysis and archaeological
              methods.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-xs font-label uppercase tracking-widest">
                Research
              </span>
              <span className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-xs font-label uppercase tracking-widest">
                Training
              </span>
              <span className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-xs font-label uppercase tracking-widest">
                Casework
              </span>
            </div>
          </div>

          {/* Quote card */}
          <div className="bg-surface-container-lowest p-12 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
            <span className="material-symbols-outlined text-tertiary text-4xl mb-6">
              format_quote
            </span>
            <p className="text-xl font-headline italic text-primary leading-snug">
              &ldquo;Forensic skeletal trauma analysis has experienced a recent
              shift from emphasizing typological and morphological descriptions
              to interpretation based on bone&rsquo;s mechanical properties and
              its response to force and different loading regimes.&rdquo;
            </p>
            <div className="mt-6 font-label text-sm uppercase tracking-widest text-secondary">
              &mdash; A Guide to Forensic Fractography of Bone, FBI Laboratory
              (2022)
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  3. CASEWORK STATS                                             */}
      {/* ============================================================= */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="bg-surface-container-low p-8 rounded-xl text-center">
              <p className="text-5xl font-headline text-primary mb-2">61</p>
              <p className="text-sm text-on-surface-variant uppercase tracking-widest">
                Total Cases
              </p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl text-center">
              <p className="text-5xl font-headline text-primary mb-2">20+</p>
              <p className="text-sm text-on-surface-variant uppercase tracking-widest">
                Counties Served
              </p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl text-center">
              <p className="text-5xl font-headline text-primary mb-2">2021</p>
              <p className="text-sm text-on-surface-variant uppercase tracking-widest">
                Founded
              </p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl text-center">
              <p className="text-5xl font-headline text-primary mb-2">1</p>
              <p className="text-sm text-on-surface-variant uppercase tracking-widest">
                Expert Testimony (2025)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  4. SERVICE CATEGORIES                                         */}
      {/* ============================================================= */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-4xl text-primary mb-16 text-center">
            Service <span className="italic">Categories</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Medicolegal Significance */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-tertiary text-2xl">
                  verified
                </span>
                <h3 className="font-headline text-xl text-primary">
                  Medicolegal Significance
                </h3>
              </div>
              <p className="text-on-surface-variant leading-relaxed">
                Identifying suspected skeletal material as human or non-human and
                evaluating relevance to the death investigation system.
              </p>
            </div>

            {/* Biological Profile */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-tertiary text-2xl">
                  person_search
                </span>
                <h3 className="font-headline text-xl text-primary">
                  Biological Profile
                </h3>
              </div>
              <p className="text-on-surface-variant leading-relaxed">
                Estimating sex, population affinity, age-at-death, and stature of
                unidentified remains, as well as documenting potentially
                individualizing information.
              </p>
            </div>

            {/* Trauma Analysis */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-tertiary text-2xl">
                  biotech
                </span>
                <h3 className="font-headline text-xl text-primary">
                  Trauma Analysis
                </h3>
              </div>
              <p className="text-on-surface-variant leading-relaxed">
                Documenting and evaluating skeletal trauma to provide information
                about the timing and mechanism of injury.
              </p>
            </div>

            {/* Search & Recovery */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-tertiary text-2xl">
                  search
                </span>
                <h3 className="font-headline text-xl text-primary">
                  Search &amp; Recovery
                </h3>
              </div>
              <p className="text-on-surface-variant leading-relaxed">
                Applying archaeological techniques to assist law enforcement in
                the systematic search for and recovery of human remains and
                associated evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  IN ACTION — BENTO GALLERY                                     */}
      {/* ============================================================= */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-4xl text-primary mb-4">
            In <span className="italic">Action</span>
          </h2>
          <div className="w-20 h-1 bg-tertiary mb-12" />

          {/* Bento grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {/* Large — students working */}
            <div className="col-span-2 row-span-2 rounded-xl overflow-hidden">
              <img
                src={asset("/images/cave-excavation-site.jpg")}
                alt="Students working together in a sunlit academic hall"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Archaeological fieldwork */}
            <div className="col-span-2 rounded-xl overflow-hidden">
              <img
                src={asset("/images/archaeologist-fieldwork.jpg")}
                alt="Close up of archaeologist carefully using a brush on a fossilized specimen in the field"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Bone microscopy */}
            <div className="rounded-xl overflow-hidden">
              <img
                src={asset("/images/bone-tissue-microscopy.jpg")}
                alt="Microscopic view of bone tissue with high contrast artistic lighting"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Lab equipment */}
            <div className="rounded-xl overflow-hidden">
              <img
                src={asset("/images/lab-equipment-digital.jpg")}
                alt="Lab equipment and digital displays in a modern forensics facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  5. AFFILIATED FACULTY                                         */}
      {/* ============================================================= */}
      <section id="affiliated-faculty" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-headline text-4xl text-primary mb-4">
              Affiliated <span className="italic">Faculty</span>
            </h2>
            <div className="w-20 h-1 bg-tertiary mb-6" />
            <p className="text-on-surface-variant max-w-2xl">
              Our interdisciplinary team brings together diverse expertise in
              forensic archaeology, osteology, bioarchaeology, and digital
              methods to support every investigation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Dr. Brett A. Houk */}
            <div className="bg-surface-container-low rounded-xl overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src={asset("/images/faculty-houk.jpg")}
                  alt="Dr. Brett A. Houk"
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-headline text-xl text-primary mb-2">
                  Dr. Brett A. Houk
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Forensic archaeology, total data station mapping, photogrammetry
                </p>
              </div>
            </div>

            {/* Dr. Arthur Durband */}
            <div className="bg-surface-container-low rounded-xl overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src={asset("/images/faculty-durband.jpg")}
                  alt="Dr. Arthur Durband"
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-headline text-xl text-primary mb-2">
                  Dr. Arthur Durband
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Osteological analysis
                </p>
              </div>
            </div>

            {/* Dr. Anna Novotny */}
            <div className="bg-surface-container-low rounded-xl overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src={asset("/images/faculty-novotny.jpg")}
                  alt="Dr. Anna Novotny"
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-headline text-xl text-primary mb-2">
                  Dr. Anna Novotny
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Excavation, osteological analysis, identification
                </p>
              </div>
            </div>

            {/* Dr. Giacomo Fontana */}
            <div className="bg-surface-container-low rounded-xl overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src={asset("/images/faculty-fontana.jpg")}
                  alt="Dr. Giacomo Fontana"
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-headline text-xl text-primary mb-2">
                  Dr. Giacomo Fontana
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Drone and pedestrian survey, GIS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  6. NOTABLE PUBLICATIONS                                       */}
      {/* ============================================================= */}
      <section id="notable-publications" className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-4xl text-primary mb-16">
            Notable <span className="italic">Publications</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Edwards & Isa, 2024 */}
            <div className="bg-surface-container-lowest rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src={asset("/images/edwards-isa-2024.jpg")}
                  alt="Journal of Forensic Sciences publication: Effects of kinetic energy and firearm-to-target distance on fracture behavior in flat bones by Edwards and Isa, 2024"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-8">
              <span className="text-xs font-label uppercase tracking-widest text-secondary mb-3 block">
                Journal of Forensic Sciences &middot; 2024
              </span>
              <h3 className="font-headline text-xl text-primary mb-4">
                Effects of projectile kinetic energy and firearm-to-target
                distance on fracture behavior in flat bones
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                Edwards, D.F. &amp; Isa, M.I. &mdash;{" "}
                <em>Journal of Forensic Sciences</em>, 69(2), 400&ndash;414.
              </p>
              <a
                href="https://doi.org/10.1111/1556-4029.15462"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all text-sm"
              >
                Read Paper
                <span className="material-symbols-outlined text-lg">
                  arrow_outward
                </span>
              </a>
              </div>
            </div>

            {/* Blatt, Isa et al., 2025 */}
            <div className="bg-surface-container-lowest rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src={asset("/images/cosage-2025.jpg")}
                  alt="American Journal of Biological Anthropology publication: Introducing COSAGE by Blatt, Isa, et al., 2025"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-8">
              <span className="text-xs font-label uppercase tracking-widest text-secondary mb-3 block">
                American Journal of Biological Anthropology &middot; 2025
              </span>
              <h3 className="font-headline text-xl text-primary mb-4">
                Introducing COSAGE: Contextual Observations in Support of All
                Gender Expressions
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                Blatt, S.H., Isa, M.I. et al. &mdash;{" "}
                <em>American Journal of Biological Anthropology</em>,
                188:e70180.
              </p>
              <a
                href="https://doi.org/10.1002/ajpa.70180"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all text-sm"
              >
                Read Paper
                <span className="material-symbols-outlined text-lg">
                  arrow_outward
                </span>
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  7. JOIN THE LAB                                               */}
      {/* ============================================================= */}
      <section id="join-the-lab" className="py-24 bg-primary-container text-on-primary-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-headline text-4xl mb-6">
                Join the <span className="italic">Lab</span>
              </h2>
              <div className="w-20 h-1 bg-tertiary mb-8" />
              <p className="text-lg text-primary-fixed-dim leading-relaxed mb-8">
                We are looking for motivated students who are passionate about
                the intersection of biology, society, and justice. Whether you
                are an undergraduate curious about lab work or a prospective
                graduate student, we want to hear from you.
              </p>
            </div>

            <div className="bg-surface-container-lowest text-on-surface p-8 rounded-xl">
              <h3 className="font-headline text-xl text-primary mb-4">
                Application Window
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                M.A. applications are typically reviewed in December for the
                following Fall cohort.
              </p>
              <a
                href="mailto:mari.isa@ttu.edu"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-on-primary rounded-lg transition-all hover:translate-y-[-2px] hover:shadow-xl shadow-primary/10"
              >
                Contact Dr. Isa
                <span className="material-symbols-outlined text-lg">
                  email
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
