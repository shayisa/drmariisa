import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service & Impact | Dr. Mariyam Isa",
  description:
    "Professional leadership, workshops, advocacy, fieldwork, and forensic casework.",
};

/* ------------------------------------------------------------------ */
/*  Data arrays – keeps JSX clean                                      */
/* ------------------------------------------------------------------ */

const professionalLeadership = [
  {
    role: "Member, Anthropology Consensus Body",
    org: "AAFS Standards Board",
    years: "2025–present",
  },
  {
    role: "Executive Secretary, Forensic Anthropology Subcommittee",
    org: "NIST OSAC",
    years: "2024–present",
  },
  {
    role: "Member, OSAC Forensic Anthropology Subcommittee",
    org: "NIST OSAC",
    years: "2023–present",
  },
  {
    role: "Moderator, Anthropology Section Session",
    org: "AAFS Denver",
    years: "2024",
  },
  {
    role: "Member, OERR Subcommittee, Anthropology Section",
    org: "AAFS",
    years: "2020–present",
  },
  {
    role: "Co-Organizer, Forensic Anthropology Meeting",
    org: "New Orleans, LA",
    years: "2025–2026",
  },
  {
    role: "Co-Organizer, Forensic Anthropology Meeting",
    org: "Baltimore, MD",
    years: "2024–2025",
  },
  {
    role: "Co-Organizer, Forensic Anthropology Meeting",
    org: "Denver, CO",
    years: "2023–2024",
  },
  {
    role: "Co-Organizer, Forensic Anthropology Meeting",
    org: "Orlando, FL",
    years: "2022–2023",
  },
];

const workshopsFederal = [
  {
    title:
      "From Morphology to Mechanism: Applying Biomechanics and Fractography to Pediatric Cranial Trauma Interpretation",
    venue: "NYC Office of Chief Medical Examiner Grand Rounds Lecture Series",
    year: "2025",
  },
  {
    title: "Forensic Fractography of Bone Workshop",
    venue:
      "Defense POW/MIA Accounting Agency (DPAA) Laboratory — Offutt AFB, NE and Joint Base Pearl Harbor-Hickam, HI",
    year: "2024",
  },
  {
    title: "Introduction to Forensic Fractography of Bone Workshop",
    venue: "Forensic Anthropology Center at Texas State",
    year: "2024",
  },
];

const workshopsProfessional = [
  {
    title:
      "Forensic Fractography of Bone: A New (and Approachable!) Model for Skeletal Trauma Analysis",
    venue:
      "Forensic Technology Center of Excellence / Society of Forensic Anthropologists Webinar Series (with A.M. Christensen)",
    year: "2022",
  },
  {
    title: "Forensic Anthropology and the Recovery of Human Remains",
    venue: "Odessa Police Department — TCOLE credit course",
    year: "2022",
  },
];

const workshopsPublic = [
  {
    title: "The Science of Broken Bones",
    venue: "Indiana Medical History Museum Forensic Science Lecture Series",
    year: "2019",
  },
  {
    title:
      "Experimental Approaches to the Interpretation of Blunt Force Cranial Fracture",
    venue:
      "Minnesota Coroner\u2019s and Medical Examiners\u2019 Association Annual Forensic Science Seminar",
    year: "2019",
  },
  {
    title: "Mock Burial Excavation Training",
    venue: "Michigan State Police",
    year: "2019",
  },
  {
    title: "Mock Burial Excavation Training",
    venue: "Michigan State Police",
    year: "2014",
  },
];

const fieldworkItaly = [
  {
    name: "IMPERO Archaeological Project",
    location: "Civitella Paganico, Italy",
    years: "2018–2019",
    detail: "Director: Dr. Alessandro Sebastiani",
  },
  {
    name: "Roselle Skeletal Collection",
    location: "Museo Archaeologico, Grosseto, Italy",
    years: "2015–2019",
    detail: "Osteological analysis",
  },
  {
    name: "Quattro Macine Collection",
    location: "Università del Salento, Lecce, Italy",
    years: "2015",
    detail: "Skeletal examination",
  },
];

const fieldworkBelize = [
  {
    name: "Belize River East Archaeological (BREA) Survey",
    location: "Belize",
    years: "2014",
    detail: "Director: Dr. Eleanor Harrison-Buck",
  },
  {
    name: "Central Belize Archaeological Survey (CBAS) Field School",
    location: "Belize",
    years: "2013",
    detail: "Director: Dr. Gabriel Wrobel",
  },
];

const fieldworkUSA = [
  {
    name: "Campus Archaeology Program",
    location: "Michigan State University, East Lansing, MI",
    years: "2016–2019",
    detail: "Directors: Dr. Lynne Goldstein, Dr. Stacey Camp",
  },
];

const universityService = [
  {
    role: "Forensic Science Tenure-Track Assistant Professor Search Committee",
    dept: "Department of Environmental Toxicology",
    years: "2025–2026",
  },
  {
    role: "Lambda Alpha Anthropology Honors Society Faculty Advisor",
    dept: "Texas Tech University",
    years: "2024–2025",
  },
  {
    role: "Women\u2019s and Gender Studies Program Social Committee Co-Chair",
    dept: "Texas Tech University",
    years: "2021–2024",
  },
  {
    role: "Forensic Science Tenure-Track Assistant Professor Search Committee",
    dept: "Department of Environmental Toxicology",
    years: "2021–2022",
  },
  {
    role: "Faculty Mentor, TrUE Scholar Program",
    dept: "Texas Tech University",
    years: "2021–2022",
  },
];

const peerReviewJournals = [
  { name: "Forensic Anthropology", year: "2025" },
  { name: "Forensic Sciences", year: "2025" },
  { name: "Forensic Science Synergy", year: "2023" },
  { name: "Science and Justice", year: "2022" },
];

const peerReviewGrants = [
  { name: "Grady Early Fellowship proposals, Texas State University", year: "2024" },
  { name: "Austrian Science Fund proposals", year: "2023" },
];

const peerReviewOther = [
  { name: "Book chapter: BIPOC Communities and Curricula", year: "2022" },
];

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function ServiceImpactPage() {
  return (
    <>
      {/* ============================================================= */}
      {/*  1. HERO                                                       */}
      {/* ============================================================= */}
      <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden bg-surface-container-low">
        {/* Hero background */}
        <div className="absolute inset-0">
          <img
            src="/images/archaeologist-fieldwork.jpg"
            alt="Archaeologist carefully working on a specimen in the field"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-secondary font-semibold tracking-widest uppercase text-xs mb-6 block">
            Leadership &bull; Advocacy &bull; Casework
          </span>

          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-[1.1] text-primary mb-4">
            Service &amp; Impact
          </h1>

          <p className="font-headline text-xl md:text-2xl text-on-surface-variant mb-10">
            Beyond the Lab
          </p>

          <p className="text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
            Professional leadership, workshops, advocacy, archaeological
            fieldwork, and forensic casework spanning two states and over a
            decade.
          </p>
        </div>

        {/* Decorative gradient */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-container/5 to-transparent -z-0" />
      </section>

      {/* ============================================================= */}
      {/*  2. PROFESSIONAL LEADERSHIP                                    */}
      {/* ============================================================= */}
      <section id="professional-leadership" className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-8 gap-6">
            <h2 className="font-headline text-4xl text-primary">
              Professional <span className="italic">Leadership</span>
            </h2>
            <div className="h-px flex-grow mx-8 bg-outline-variant/30 hidden md:block" />
            <span className="font-label text-sm text-secondary uppercase tracking-widest">
              2020 &ndash; Present
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {professionalLeadership.map((item, i) => (
              <div
                key={i}
                className="bg-surface-container-low rounded-xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.04)]"
              >
                <h3 className="font-headline text-base text-primary mb-2">
                  {item.role}
                </h3>
                <p className="text-on-surface-variant text-sm mb-1">
                  {item.org}
                </p>
                <p className="font-label text-xs uppercase tracking-widest text-secondary">
                  {item.years}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  3. WORKSHOPS & INVITED LECTURES                               */}
      {/* ============================================================= */}
      <section id="workshops-lectures" className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <h2 className="font-headline text-4xl text-primary">
              Workshops &amp; Invited <span className="italic">Lectures</span>
            </h2>
            <div className="rounded-xl overflow-hidden h-64">
              <img
                src="/images/researchers-working-together.jpg"
                alt="Researchers working together in a high-tech lab setting"
                className="w-full h-[150%] object-cover object-[center_25%] rounded-xl"
              />
            </div>
          </div>

          {/* Federal & Institutional */}
          <div className="mb-16">
            <p className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary mb-6">
              Federal &amp; Institutional
            </p>
            <div className="space-y-6">
              {workshopsFederal.map((w, i) => (
                <div key={i} className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
                  <h3 className="font-headline text-base text-primary mb-2">
                    {w.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm mb-1">
                    {w.venue}
                  </p>
                  <p className="font-label text-xs uppercase tracking-widest text-secondary">
                    {w.year}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Education */}
          <div className="mb-16">
            <p className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary mb-6">
              Professional Education
            </p>
            <div className="space-y-6">
              {workshopsProfessional.map((w, i) => (
                <div key={i} className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
                  <h3 className="font-headline text-base text-primary mb-2">
                    {w.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm mb-1">
                    {w.venue}
                  </p>
                  <p className="font-label text-xs uppercase tracking-widest text-secondary">
                    {w.year}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Public & Law Enforcement */}
          <div>
            <p className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary mb-6">
              Public &amp; Law Enforcement
            </p>
            <div className="space-y-6">
              {workshopsPublic.map((w, i) => (
                <div key={i} className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
                  <h3 className="font-headline text-base text-primary mb-2">
                    {w.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm mb-1">
                    {w.venue}
                  </p>
                  <p className="font-label text-xs uppercase tracking-widest text-secondary">
                    {w.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  4. ADVOCACY & COMMUNITY                                       */}
      {/* ============================================================= */}
      <section id="advocacy-community" className="py-32 bg-primary-container text-on-primary-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-4xl md:text-5xl mb-6">
            Advocacy &amp; <span className="italic">Community</span>
          </h2>
          <div className="w-20 h-1 bg-tertiary mb-12" />

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left — narrative */}
            <div className="space-y-8 text-lg leading-relaxed text-primary-fixed-dim">
              <p>
                Dr. Isa&rsquo;s advocacy work centers on &ldquo;shifting the
                forensic anthropological paradigm to incorporate the transgender
                and gender diverse community.&rdquo;
              </p>
              <p>
                She co-organized a six-hour webinar on gender identification in
                forensic cold cases with Idaho State University (2021) and an
                interdisciplinary symposium on gender-inclusive research at the
                AAFS 74th Annual Scientific Meeting in Seattle (2022).
              </p>
              <blockquote className="font-headline text-xl italic leading-relaxed border-l-4 border-tertiary pl-6">
                &ldquo;The field of forensic anthropology can and should
                conceptualize professional ethical behavior beyond so-called
                scientific objectivity and justice beyond the court
                system.&rdquo;
              </blockquote>
              <p className="text-sm">
                &mdash; <em>American Anthropologist</em>, 2022
              </p>
            </div>

            {/* Right — key items */}
            <div className="space-y-6">
              <div className="bg-on-primary-container/10 rounded-xl p-6">
                <h3 className="font-headline text-base mb-2">
                  COSAGE Guide
                </h3>
                <p className="text-primary-fixed-dim text-sm leading-relaxed">
                  Contextual Observations in Support of All Gender Expressions
                  &mdash; Blatt, Isa et al., <em>American Journal of Biological
                  Anthropology</em>, 2025.
                </p>
              </div>

              <div className="bg-on-primary-container/10 rounded-xl p-6">
                <h3 className="font-headline text-base mb-2">
                  TRANScending Webinar
                </h3>
                <p className="text-primary-fixed-dim text-sm leading-relaxed">
                  &ldquo;TRANScending Jane and John Doe: The Impact of Gender
                  Identification in Forensic Cold Cases&rdquo; &mdash;
                  Six-hour webinar co-organized with Idaho State University
                  (2021).
                </p>
              </div>

              <div className="bg-on-primary-container/10 rounded-xl p-6">
                <h3 className="font-headline text-base mb-2">
                  Queered Science Symposium
                </h3>
                <p className="text-primary-fixed-dim text-sm leading-relaxed">
                  &ldquo;Queered Science: Interdisciplinary Approaches to
                  Gender-Inclusive Research&rdquo; &mdash; Co-organized at AAFS
                  74th Annual Scientific Meeting, Seattle (2022).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  5. ARCHAEOLOGICAL FIELDWORK                                   */}
      {/* ============================================================= */}
      <section id="archaeological-fieldwork" className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-4xl text-primary mb-8">
            Archaeological <span className="italic">Fieldwork</span>
          </h2>

          {/* Fieldwork imagery */}
          <div className="grid grid-cols-2 gap-4 mb-16">
            <div className="rounded-xl overflow-hidden h-48 md:h-64">
              <img
                src="/images/archaeologist-fieldwork.jpg"
                alt="Archaeologist carefully using a brush on a fossilized specimen in the field"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-48 md:h-64">
              <img
                src="/images/cave-excavation-site.jpg"
                alt="Archaeological excavation site with geological cross-section and markers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Italy */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-tertiary text-2xl">
                  location_on
                </span>
                <h3 className="font-headline text-xl text-primary">Italy</h3>
              </div>
              <div className="space-y-6">
                {fieldworkItaly.map((f, i) => (
                  <div key={i}>
                    <h4 className="font-headline text-base text-primary mb-1">
                      {f.name}
                    </h4>
                    <p className="text-on-surface-variant text-sm">
                      {f.location}
                    </p>
                    <p className="text-on-surface-variant text-sm italic">
                      {f.detail}
                    </p>
                    <p className="font-label text-xs uppercase tracking-widest text-secondary mt-1">
                      {f.years}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Belize */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-tertiary text-2xl">
                  location_on
                </span>
                <h3 className="font-headline text-xl text-primary">Belize</h3>
              </div>
              <div className="space-y-6">
                {fieldworkBelize.map((f, i) => (
                  <div key={i}>
                    <h4 className="font-headline text-base text-primary mb-1">
                      {f.name}
                    </h4>
                    <p className="text-on-surface-variant text-sm">
                      {f.location}
                    </p>
                    <p className="text-on-surface-variant text-sm italic">
                      {f.detail}
                    </p>
                    <p className="font-label text-xs uppercase tracking-widest text-secondary mt-1">
                      {f.years}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* USA */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-tertiary text-2xl">
                  location_on
                </span>
                <h3 className="font-headline text-xl text-primary">USA</h3>
              </div>
              <div className="space-y-6">
                {fieldworkUSA.map((f, i) => (
                  <div key={i}>
                    <h4 className="font-headline text-base text-primary mb-1">
                      {f.name}
                    </h4>
                    <p className="text-on-surface-variant text-sm">
                      {f.location}
                    </p>
                    <p className="text-on-surface-variant text-sm italic">
                      {f.detail}
                    </p>
                    <p className="font-label text-xs uppercase tracking-widest text-secondary mt-1">
                      {f.years}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  6. UNIVERSITY & DEPARTMENT SERVICE                            */}
      {/* ============================================================= */}
      <section id="university-service" className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-8 gap-6">
            <h2 className="font-headline text-4xl text-primary">
              University &amp; Department{" "}
              <span className="italic">Service</span>
            </h2>
            <div className="h-px flex-grow mx-8 bg-outline-variant/30 hidden md:block" />
            <span className="font-label text-sm text-secondary uppercase tracking-widest">
              Texas Tech University
            </span>
          </div>

          <div className="space-y-0 mt-12">
            {universityService.map((item, i) => (
              <div key={i} className="flex gap-6 pb-8">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-tertiary flex-shrink-0 mt-1.5" />
                  {i < universityService.length - 1 && (
                    <div className="w-px flex-grow bg-outline-variant/30" />
                  )}
                </div>
                <div>
                  <h4 className="font-headline text-base text-primary">
                    {item.role}
                  </h4>
                  <p className="font-label text-xs uppercase tracking-widest text-secondary">
                    {item.dept} &middot; {item.years}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  7. PEER REVIEW                                                */}
      {/* ============================================================= */}
      <section id="peer-review" className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-4xl text-primary mb-16">
            Peer <span className="italic">Review</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Journals */}
            <div>
              <p className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary mb-6">
                Journal Manuscripts
              </p>
              <div className="space-y-4">
                {peerReviewJournals.map((j, i) => (
                  <div
                    key={i}
                    className="bg-surface-container-low rounded-lg p-4"
                  >
                    <p className="text-primary font-headline text-sm">
                      {j.name}
                    </p>
                    <p className="font-label text-xs uppercase tracking-widest text-secondary">
                      {j.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Grant Proposals */}
            <div>
              <p className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary mb-6">
                Grant Proposals
              </p>
              <div className="space-y-4">
                {peerReviewGrants.map((g, i) => (
                  <div
                    key={i}
                    className="bg-surface-container-low rounded-lg p-4"
                  >
                    <p className="text-primary font-headline text-sm">
                      {g.name}
                    </p>
                    <p className="font-label text-xs uppercase tracking-widest text-secondary">
                      {g.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Book Chapter */}
            <div>
              <p className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary mb-6">
                Book Chapter
              </p>
              <div className="space-y-4">
                {peerReviewOther.map((o, i) => (
                  <div
                    key={i}
                    className="bg-surface-container-low rounded-lg p-4"
                  >
                    <p className="text-primary font-headline text-sm">
                      {o.name}
                    </p>
                    <p className="font-label text-xs uppercase tracking-widest text-secondary">
                      {o.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  8. FORENSIC CASEWORK RECORD                                   */}
      {/* ============================================================= */}
      <section id="casework" className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-4xl text-primary mb-6">
            Forensic Casework <span className="italic">Record</span>
          </h2>
          <div className="w-20 h-1 bg-tertiary mb-16" />

          {/* Summary stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            <div className="bg-surface-container-lowest rounded-xl p-8 text-center shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
              <p className="text-5xl font-headline text-primary mb-2">61</p>
              <p className="text-sm text-on-surface-variant uppercase tracking-widest">
                Total Cases
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-8 text-center shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
              <p className="text-5xl font-headline text-primary mb-2">20+</p>
              <p className="text-sm text-on-surface-variant uppercase tracking-widest">
                Counties Served
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-8 text-center shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
              <p className="text-5xl font-headline text-primary mb-2">1</p>
              <p className="text-sm text-on-surface-variant uppercase tracking-widest">
                Expert Testimony (2025)
              </p>
            </div>
          </div>

          {/* Jurisdiction breakdowns */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Texas */}
            <div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-tertiary text-2xl">
                  gavel
                </span>
                <h3 className="font-headline text-xl text-primary">
                  Texas (2021&ndash;2025)
                </h3>
              </div>
              <p className="text-3xl font-headline text-primary mb-4">
                19{" "}
                <span className="text-base text-on-surface-variant font-body">
                  cases
                </span>
              </p>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Counties: Ector, Potter, Winkler, Tom Green, Lubbock, Runnels,
                Upton, Swisher, Howard
              </p>
            </div>

            {/* Michigan */}
            <div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-tertiary text-2xl">
                  gavel
                </span>
                <h3 className="font-headline text-xl text-primary">
                  Michigan (2014&ndash;2019)
                </h3>
              </div>
              <p className="text-3xl font-headline text-primary mb-4">
                41{" "}
                <span className="text-base text-on-surface-variant font-body">
                  cases
                </span>
              </p>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Counties: Genesee, Ingham, Gratiot, Jackson, Eaton, Van Buren,
                Isabella, Macomb, Shiawassee, Wexford, Clinton, Ionia, Newaygo,
                Barry, Presque Isle, Kalamazoo
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
