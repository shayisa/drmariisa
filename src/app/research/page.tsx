import type { Metadata } from "next";
import { asset } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Research | Dr. Mariyam Isa",
  description:
    "Research portfolio: forensic fractography, inclusive identification, and cold case resolution.",
};

export default function ResearchPage() {
  return (
    <>
      {/* ============================================================= */}
      {/*  1. HERO                                                       */}
      {/* ============================================================= */}
      <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden bg-surface-container-low">
        {/* Hero background image */}
        <div className="absolute inset-0">
          <img
            src={asset("/images/researchers-forensic-lab.jpg")}
            alt="Researchers working with forensic identification tools in a lab"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-secondary font-semibold tracking-widest uppercase text-xs mb-6 block">
            Dr. Mariyam Isa &bull; Texas Tech University
          </span>

          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-[1.1] text-primary mb-4">
            The Research <span className="italic">Portfolio</span>
          </h1>

          <p className="text-xl text-on-surface-variant max-w-3xl font-light leading-relaxed mb-6">
            Experimental skeletal research, inclusive forensic identification,
            and medicolegal casework &mdash; grounded in biomechanics,
            fractography, and a commitment to ethical practice.
          </p>

          <div className="flex flex-wrap gap-8 mt-10">
            <div className="text-center">
              <p className="text-4xl font-headline text-primary">12</p>
              <p className="text-xs text-on-surface-variant uppercase tracking-widest">
                Peer-Reviewed Articles
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-headline text-primary">4</p>
              <p className="text-xs text-on-surface-variant uppercase tracking-widest">
                Books &amp; Chapters
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-headline text-primary">35</p>
              <p className="text-xs text-on-surface-variant uppercase tracking-widest">
                Presentations
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-headline text-primary">4</p>
              <p className="text-xs text-on-surface-variant uppercase tracking-widest">
                Active Grants
              </p>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-container/5 to-transparent -z-0" />
      </section>

      {/* ============================================================= */}
      {/*  2. RESEARCH PILLARS                                           */}
      {/* ============================================================= */}
      <section id="research-pillars" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">
              Research <span className="italic">Pillars</span>
            </h2>
            <div className="w-20 h-1 bg-tertiary mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="bg-surface-container-lowest rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={asset("/images/bone-fragment-fracture.jpg")}
                  alt="Close-up of a human bone fragment with a clean fracture line under laboratory lighting"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="p-10">
                <span className="material-symbols-outlined text-tertiary text-4xl mb-4">
                  biotech
                </span>
                <h3 className="font-headline text-xl text-primary mb-3">
                  Forensic Fractography &amp; Biomechanics
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Experimental investigations of blunt force trauma and fracture
                  patterns in the human skeleton. NSF GRFP-funded doctoral
                  research leading to an FBI Laboratory publication on forensic
                  fractography of bone.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-primary text-on-primary rounded-xl overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={asset("/images/diverse-identities-abstract.jpg")}
                  alt="Abstract representation of diverse identities using layered translucent glass panels"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="p-10">
                <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4">
                  diversity_3
                </span>
                <h3 className="font-headline text-xl mb-3">
                  Inclusive Identification (COSAGE)
                </h3>
                <p className="text-on-primary-container text-sm leading-relaxed">
                  Contextual Observations in Support of All Gender Expressions
                  &mdash; a crowdsourced guide for documenting gender expression in
                  human identification, shifting the forensic anthropological
                  paradigm to incorporate the transgender and gender diverse
                  community.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-surface-container-lowest rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={asset("/images/cave-excavation-site.jpg")}
                  alt="Historical photograph of cave excavation site with geological cross-section"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="p-10">
                <span className="material-symbols-outlined text-tertiary text-4xl mb-4">
                  manage_search
                </span>
                <h3 className="font-headline text-xl text-primary mb-3">
                  Cold Case Resolution
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Identification of decedents in long-unresolved cases using
                  forensic anthropology and genetic genealogy, including a
                  103-year-old homicide case resolved through interdisciplinary
                  collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  3. ACTIVE INVESTIGATIONS                                      */}
      {/* ============================================================= */}
      <section id="active-investigations" className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-6">
            <h2 className="font-headline text-4xl md:text-5xl text-primary">
              Active <span className="italic">Investigations</span>
            </h2>
            <div className="h-px flex-grow mx-8 bg-outline-variant/30 hidden md:block" />
            <span className="font-label text-sm text-secondary uppercase tracking-widest">
              Current Research
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Investigation 1 */}
            <div className="bg-surface-container-lowest rounded-xl p-8">
              <span className="material-symbols-outlined text-tertiary text-3xl mb-4">
                science
              </span>
              <h3 className="font-headline text-lg text-primary mb-3">
                Blunt Force Trauma Research
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                Experimental investigations of cranial fracture initiation,
                projectile kinetic energy effects, and fracture behavior in flat
                bones. Funded by NSF Graduate Research Fellowship and NIJ award.
              </p>
              <p className="text-xs text-secondary font-semibold uppercase tracking-widest">
                NSF GRFP &bull; NIJ Funded
              </p>
            </div>

            {/* Investigation 2 */}
            <div className="bg-surface-container-lowest rounded-xl p-8">
              <span className="material-symbols-outlined text-tertiary text-3xl mb-4">
                groups
              </span>
              <h3 className="font-headline text-lg text-primary mb-3">
                COSAGE Guide Development
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                Introducing Contextual Observations in Support of All Gender
                Expressions &mdash; a crowdsourced guide for inclusive forensic
                identification practice.
              </p>
              <p className="text-xs text-secondary font-semibold uppercase tracking-widest">
                Douglas M. Lucas &bull; Kenneth S. Field Grants
              </p>
            </div>

            {/* Investigation 3 */}
            <div className="bg-surface-container-lowest rounded-xl p-8">
              <span className="material-symbols-outlined text-tertiary text-3xl mb-4">
                history
              </span>
              <h3 className="font-headline text-lg text-primary mb-3">
                Cold Case Resolution
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                Identification of decedents using forensic anthropology and
                genetic genealogy, including the resolution of a 103-year-old
                homicide case through interdisciplinary collaboration between
                forensic anthropologists, genetic genealogists, and law
                enforcement.
              </p>
              <p className="text-xs text-secondary font-semibold uppercase tracking-widest">
                Forensic Anthropology &bull; Genetic Genealogy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  4. FBI PUBLICATION FEATURE                                     */}
      {/* ============================================================= */}
      <section id="fractography-book" className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — Details */}
            <div>
              <p className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary mb-3">
                FBI Laboratory Division &middot; Publication No. 21.35
              </p>
              <h2 className="font-headline text-3xl md:text-4xl text-primary mb-6">
                <em>A Guide to Forensic Fractography of Bone</em>
              </h2>
              <div className="w-20 h-1 bg-tertiary mb-8" />

              <p className="text-on-surface-variant leading-relaxed mb-4">
                <strong className="text-primary">Authors:</strong> A.M.
                Christensen, M.I. Isa, M.A. Smith, J.T. Hefner, H.E. Berryman,
                I.S. Saginor, J.B. Webb
              </p>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                <strong className="text-primary">Publisher:</strong> Federal
                Bureau of Investigation, Laboratory Division
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                <strong className="text-primary">Year:</strong> 2022
              </p>
            </div>

            {/* Right — Pull Quote + Image */}
            <div className="space-y-8">
              <div className="rounded-xl overflow-hidden h-64">
                <img
                  src={asset("/images/bone-fracture-macro.jpg")}
                  alt="Macro photography of cranial bone fracture patterns showing arrest lines under forensic lighting"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            <div className="bg-primary-container text-on-primary-container p-12 rounded-xl">
              <span className="material-symbols-outlined text-primary-fixed text-4xl mb-6">
                format_quote
              </span>
              <blockquote className="font-headline text-lg md:text-xl leading-relaxed italic text-primary-fixed mb-6">
                &ldquo;With a bit of background information, a few basic tools,
                and a little practice, fractography can be used to enhance the
                anthropologist&rsquo;s understanding of trauma events and thereby
                improve the quality of their forensic products.&rdquo;
              </blockquote>
              <p className="text-primary-fixed-dim text-sm">
                &mdash; <em>A Guide to Forensic Fractography of Bone</em>, 2022
              </p>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  RESEARCH VISUALS GRID                                         */}
      {/* ============================================================= */}
      <section className="py-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-lg overflow-hidden h-48">
              <img
                src={asset("/images/microscope-slide-tissue.jpg")}
                alt="Macro photography of a microscope slide showing thin sections of mineralized tissue"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-48 md:translate-y-8">
              <img
                src={asset("/images/skeletal-impact-simulation.jpg")}
                alt="Data visualization of force distribution vectors in a skeletal impact simulation"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-48">
              <img
                src={asset("/images/antique-books-pipettes.jpg")}
                alt="Stacks of antique leather-bound books next to modern laboratory pipettes"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-48 md:translate-y-8">
              <img
                src={asset("/images/forensic-camera-equipment.jpg")}
                alt="Detail of camera equipment and lenses on a laboratory desk for forensic photography"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  5. SELECTED PUBLICATIONS                                      */}
      {/* ============================================================= */}
      <section id="selected-publications" className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">
              Selected <span className="italic">Publications</span>
            </h2>
            <div className="w-20 h-1 bg-tertiary mx-auto mb-6" />
            <p className="text-on-surface-variant text-lg">
              12 peer-reviewed articles &mdash; * denotes student co-author
            </p>
          </div>

          {/* Group 1: Forensic Fractography & Biomechanics */}
          <div className="mb-16">
            <h3 className="font-headline text-2xl text-primary mb-8">
              Forensic Fractography &amp; Biomechanics
            </h3>
            <div className="space-y-6">
              <div className="bg-surface-container-lowest rounded-xl p-6">
                <p className="text-on-surface leading-relaxed">
                  *D.F. Edwards, <strong>M.I. Isa</strong>.
                  &ldquo;An experimental study of bullet mass and velocity and
                  their relation to fracture patterns in flat bones.&rdquo;{" "}
                  <em>Journal of Forensic Sciences</em>,{" "}
                  <strong>2026</strong>.
                </p>
              </div>

              <div className="bg-surface-container-lowest rounded-xl p-6">
                <p className="text-on-surface leading-relaxed">
                  *D.F. Edwards, <strong>M.I. Isa</strong>.
                  &ldquo;Effects of projectile kinetic energy and
                  firearm-to-target distance on fracture behavior in flat
                  bones.&rdquo; <em>Journal of Forensic Sciences</em>,{" "}
                  <strong>2024</strong>, 69(2), 400&ndash;414.
                </p>
              </div>

              <div className="bg-surface-container-lowest rounded-xl p-6">
                <p className="text-on-surface leading-relaxed">
                  <strong>M.I. Isa</strong>, T.W. Fenton, A.C. Goots, E.O.
                  Watson, P.E. Vaughan, F. Wei. &ldquo;Effects of input energy
                  and impactor shape on cranial fracture patterns.&rdquo;{" "}
                  <em>Forensic Science International</em>,{" "}
                  <strong>2023</strong>, 352, 111859.
                </p>
              </div>

              <div className="bg-surface-container-lowest rounded-xl p-6">
                <p className="text-on-surface leading-relaxed">
                  A.C. Goots, <strong>M.I. Isa</strong>, T.W. Fenton, F. Wei.
                  &ldquo;Blunt force trauma in the human mandible: An
                  experimental investigation.&rdquo;{" "}
                  <em>Forensic Science International Reports</em>,{" "}
                  <strong>2021</strong>, 5(5), 100252.
                </p>
              </div>

              <div className="bg-surface-container-lowest rounded-xl p-6">
                <p className="text-on-surface leading-relaxed">
                  <strong>M.I. Isa</strong>, T.W. Fenton, L.S. Antonelli, P.E.
                  Vaughan, F. Wei. &ldquo;Investigating reverse butterfly
                  fractures: An experimental approach and application of
                  fractography.&rdquo; <em>Forensic Science International</em>,{" "}
                  <strong>2021</strong>, 325, 110899.
                </p>
              </div>

              <div className="bg-surface-container-lowest rounded-xl p-6">
                <p className="text-on-surface leading-relaxed">
                  <strong>M.I. Isa</strong>, T.W. Fenton, A.C. Goots, E.O.
                  Watson, P.E. Vaughan, F. Wei. &ldquo;Experimental
                  investigation of cranial fracture initiation in blunt human
                  head impacts.&rdquo; <em>Forensic Science International</em>,{" "}
                  <strong>2019</strong>, 300, 51&ndash;62.
                </p>
              </div>

              <div className="bg-surface-container-lowest rounded-xl p-6">
                <p className="text-on-surface leading-relaxed">
                  <strong>M.I. Isa</strong>, T.W. Fenton, T.S. DeLand, R.C.
                  Haut. &ldquo;Assessing impact direction in 3-point bending of
                  human femora; incomplete butterfly fractures and fracture
                  surfaces.&rdquo; <em>Journal of Forensic Sciences</em>,{" "}
                  <strong>2018</strong>, 63(1), 38&ndash;46.
                </p>
              </div>

              <div className="bg-surface-container-lowest rounded-xl p-6">
                <p className="text-on-surface leading-relaxed">
                  <strong>M.I. Isa</strong>, J.T. Hefner, M.A. Markey.
                  &ldquo;Application of the Stephan et al. chest radiograph
                  comparison method to decomposed human remains.&rdquo;{" "}
                  <em>Journal of Forensic Sciences</em>,{" "}
                  <strong>2017</strong>, 62(5), 1304&ndash;1307.
                </p>
              </div>
            </div>
          </div>

          {/* Group 2: Inclusive Identification */}
          <div className="mb-16">
            <h3 className="font-headline text-2xl text-primary mb-8">
              Inclusive Identification
            </h3>
            <div className="space-y-6">
              <div className="bg-surface-container-lowest rounded-xl p-6">
                <p className="text-on-surface leading-relaxed">
                  S.H. Blatt, <strong>M.I. Isa</strong>, A.R. Michael, T.M.
                  Flaherty, A. Smith, S. Howard, S. Unwin. &ldquo;Introducing
                  Contextual Observations in Support of All Gender Expressions
                  (COSAGE)...&rdquo;{" "}
                  <em>American Journal of Biological Anthropology</em>,{" "}
                  <strong>2025</strong>, 188:e70180.
                </p>
              </div>

              <div className="bg-surface-container-lowest rounded-xl p-6">
                <p className="text-on-surface leading-relaxed">
                  D.M. Adams, S.M. Blatt, T.M. Flaherty, J.D. Haug,{" "}
                  <strong>M.I. Isa</strong>, A.R. Michael, A.C. Smith.
                  &ldquo;Shifting the forensic anthropological paradigm to
                  incorporate the transgender and gender diverse
                  community.&rdquo; <em>Humans</em>, <strong>2023</strong>, 3,
                  142&ndash;165. (equal authorship, alphabetical)
                </p>
              </div>
            </div>
          </div>

          {/* Group 3: Ethics & Cold Case */}
          <div>
            <h3 className="font-headline text-2xl text-primary mb-8">
              Ethics &amp; Cold Case
            </h3>
            <div className="space-y-6">
              <div className="bg-surface-container-lowest rounded-xl p-6">
                <p className="text-on-surface leading-relaxed">
                  D.M. Adams, J.Z. Goldstein, <strong>M.I. Isa</strong>, J.J.
                  Kim, M.K. Moore, M. Pilloud, S.D. Tallman. &ldquo;A
                  conversation on redefining ethical considerations in forensic
                  anthropology.&rdquo; <em>American Anthropologist</em>,{" "}
                  <strong>2022</strong>, 124(3), 597&ndash;612. (equal
                  authorship, alphabetical)
                </p>
              </div>

              <div className="bg-surface-container-lowest rounded-xl p-6">
                <p className="text-on-surface leading-relaxed">
                  A.M. Michael, S.H. Blatt, <strong>M.I. Isa</strong>, A.
                  Redgrave, D.H. Ubelaker. &ldquo;Identification of a decedent
                  in a 103-year-old homicide case using forensic anthropology and
                  genetic genealogy.&rdquo;{" "}
                  <em>Forensic Sciences Research</em>, <strong>2022</strong>,
                  7(3), 412&ndash;426.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  6. BOOKS & CHAPTERS                                           */}
      {/* ============================================================= */}
      <section id="books-and-chapters" className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">
              Books &amp; <span className="italic">Chapters</span>
            </h2>
            <div className="w-20 h-1 bg-tertiary mx-auto" />
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-surface-container-lowest rounded-xl p-6">
              <p className="text-on-surface leading-relaxed">
                A.M. Christensen, <strong>M.I. Isa</strong>, M.A. Smith, J.T.
                Hefner, H.E. Berryman, I.S. Saginor, J.B. Webb.{" "}
                <em>A Guide to Forensic Fractography of Bone.</em> Ed. Federal
                Bureau of Investigation, No. 21.35, <strong>2022</strong>.
              </p>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-6">
              <p className="text-on-surface leading-relaxed">
                M.G. Celuzza, E.O. Watson, A.C. Goots, <strong>M.I. Isa</strong>,
                J. Beatrice, E.N. Streetman, E. Pacciani. &ldquo;Late Antique
                and Early Medieval Rusellae...&rdquo; In{" "}
                <em>
                  Archaeological and Historical Landscapes of Mediterranean
                  Central Italy, Vol. 3
                </em>
                . Brepols, <strong>2023</strong>, pp. 65&ndash;87.
              </p>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-6 border border-secondary/20">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-secondary bg-secondary-container px-3 py-1 rounded-lg">
                  Forthcoming
                </span>
              </div>
              <p className="text-on-surface leading-relaxed">
                A. Cucina, <strong>M.I. Isa</strong>, G.D. Wrobel. &ldquo;The
                Use and Misuse of Archaeological and Anthropological
                Data...&rdquo; In{" "}
                <em>
                  Routledge Handbook of the Archaeology of Violence in the
                  Americas
                </em>
                . <strong>Accepted, publication anticipated 2026.</strong>
              </p>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-6 border border-secondary/20">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-secondary bg-secondary-container px-3 py-1 rounded-lg">
                  Forthcoming
                </span>
              </div>
              <p className="text-on-surface leading-relaxed">
                <strong>M.I. Isa</strong>. &ldquo;Blunt Trauma and
                Fractography.&rdquo; In{" "}
                <em>The Routledge Handbook of Forensic Anthropology</em>.{" "}
                <strong>Accepted, publication anticipated 2026.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  7. RESEARCH REPORTS                                           */}
      {/* ============================================================= */}
      <section id="research-reports" className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">
              Research <span className="italic">Reports</span>
            </h2>
            <div className="w-20 h-1 bg-tertiary mx-auto" />
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-surface-container-lowest rounded-xl p-6">
              <p className="text-on-surface leading-relaxed">
                <strong>M.I. Isa</strong>, T.W. Fenton.{" "}
                <em>
                  Final Project Overview: Building a Science of Adult Cranial
                  Fracture.
                </em>{" "}
                NIJ Award No. 2015-DN-BX-K013, <strong>2018</strong>.
              </p>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-6">
              <p className="text-on-surface leading-relaxed">
                S.G. Morton, <strong>M.I. Isa</strong>, G.D. Wrobel.
                &ldquo;Caves were the houses of the Earth Lord,
                right?...&rdquo;{" "}
                <em>Research Reports in Belizean Archaeology</em>,{" "}
                <strong>2015</strong>, 12: 107&ndash;114.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  8. CONFERENCE ACTIVITY                                        */}
      {/* ============================================================= */}
      <section id="conference-activity" className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">
              Conference <span className="italic">Activity</span>
            </h2>
            <div className="w-20 h-1 bg-tertiary mx-auto mb-6" />
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
              35 presentations (2013&ndash;2025) at AAFS annual meetings,
              regional forensic conferences, and other venues.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest rounded-xl p-8 text-center shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
              <p className="text-5xl font-headline text-primary mb-2">35</p>
              <p className="text-sm text-on-surface-variant uppercase tracking-widest">
                Presentations
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-8 text-center shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
              <p className="text-5xl font-headline text-primary mb-2">13</p>
              <p className="text-sm text-on-surface-variant uppercase tracking-widest">
                Years Active
              </p>
              <p className="text-xs text-on-surface-variant mt-1">2013&ndash;2025</p>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-8 text-center shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
              <p className="text-5xl font-headline text-primary mb-2">6</p>
              <p className="text-sm text-on-surface-variant uppercase tracking-widest">
                Symposia Organized
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  9. RESEARCH FUNDING                                           */}
      {/* ============================================================= */}
      <section id="research-funding" className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">
              Research <span className="italic">Funding</span>
            </h2>
            <div className="w-20 h-1 bg-tertiary mx-auto" />
          </div>

          {/* Active Research Grants */}
          <div className="mb-20">
            <h3 className="font-headline text-2xl text-primary mb-8">
              Active Research Grants
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-outline-variant/30">
                    <th className="font-label text-xs uppercase tracking-widest text-secondary py-4 pr-6">
                      Grant
                    </th>
                    <th className="font-label text-xs uppercase tracking-widest text-secondary py-4 pr-6">
                      Amount
                    </th>
                    <th className="font-label text-xs uppercase tracking-widest text-secondary py-4 pr-6">
                      Funder
                    </th>
                    <th className="font-label text-xs uppercase tracking-widest text-secondary py-4 pr-6">
                      Year
                    </th>
                    <th className="font-label text-xs uppercase tracking-widest text-secondary py-4">
                      Role
                    </th>
                  </tr>
                </thead>
                <tbody className="text-on-surface-variant">
                  <tr className="border-b border-outline-variant/15">
                    <td className="py-4 pr-6 font-medium text-on-surface">
                      Arts &amp; Sciences Faculty RAP Black
                    </td>
                    <td className="py-4 pr-6">$9,865</td>
                    <td className="py-4 pr-6">TTU College of Arts &amp; Sciences</td>
                    <td className="py-4 pr-6 font-semibold">2026</td>
                    <td className="py-4">PI</td>
                  </tr>
                  <tr className="border-b border-outline-variant/15">
                    <td className="py-4 pr-6 font-medium text-on-surface">
                      Douglas M. Lucas Grant
                    </td>
                    <td className="py-4 pr-6">$3,656.37</td>
                    <td className="py-4 pr-6">Forensic Sciences Foundation</td>
                    <td className="py-4 pr-6 font-semibold">2023</td>
                    <td className="py-4">PI (Co-PI: V. Howle)</td>
                  </tr>
                  <tr className="border-b border-outline-variant/15">
                    <td className="py-4 pr-6 font-medium text-on-surface">
                      Kenneth S. Field Grant
                    </td>
                    <td className="py-4 pr-6">$14,605.05</td>
                    <td className="py-4 pr-6">Forensic Sciences Foundation</td>
                    <td className="py-4 pr-6 font-semibold">2023</td>
                    <td className="py-4">PI (Co-PI: D.F. Edwards)</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-6 font-medium text-on-surface">
                      Proposal Assistance Program Award
                    </td>
                    <td className="py-4 pr-6">$3,189</td>
                    <td className="py-4 pr-6">
                      TTU Office of Research &amp; Innovation
                    </td>
                    <td className="py-4 pr-6 font-semibold">2021</td>
                    <td className="py-4">PI (Co-PI: V. Howle)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Fellowships & Awards */}
          <div>
            <h3 className="font-headline text-2xl text-primary mb-8">
              Fellowships &amp; Awards
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary text-on-primary p-8 rounded-xl">
                <p className="font-headline text-lg mb-1">
                  NSF Graduate Research Fellowship
                </p>
                <p className="text-on-primary-container text-sm mb-3">
                  National Science Foundation &middot; 2015
                </p>
                <p className="font-headline text-2xl">$34,000/yr &times; 3</p>
              </div>

              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
                <p className="font-headline text-lg text-primary mb-1">
                  Outstanding Faculty Mentor Award
                </p>
                <p className="text-on-surface-variant text-sm mb-3">
                  TTU Center for Transformative UG Experiences &middot; 2022
                </p>
              </div>

              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
                <p className="font-headline text-lg text-primary mb-1">
                  Dissertation Completion Fellowship
                </p>
                <p className="text-on-surface-variant text-sm mb-3">
                  MSU Graduate School &middot; 2020
                </p>
                <p className="font-headline text-xl text-primary">$7,000</p>
              </div>

              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
                <p className="font-headline text-lg text-primary mb-1">
                  Rasmussen Graduate Fellowship
                </p>
                <p className="text-on-surface-variant text-sm mb-3">
                  MSU Graduate School &middot; 2014
                </p>
                <p className="font-headline text-xl text-primary">$5,000</p>
              </div>

              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
                <p className="font-headline text-lg text-primary mb-1">
                  Research Scholars Award
                </p>
                <p className="text-on-surface-variant text-sm mb-3">
                  MSU College of Social Science &middot; 2018
                </p>
                <p className="font-headline text-xl text-primary">$2,129</p>
              </div>

              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
                <p className="font-headline text-lg text-primary mb-1">
                  Kenneth E. Corey Research Enrichment Award
                </p>
                <p className="text-on-surface-variant text-sm mb-3">
                  MSU College of Social Science &middot; 2017
                </p>
                <p className="font-headline text-xl text-primary">$2,082</p>
              </div>

              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
                <p className="font-headline text-lg text-primary mb-1">
                  Student Travel Award
                </p>
                <p className="text-on-surface-variant text-sm mb-3">
                  Forensic Sciences Foundation &middot; 2020
                </p>
                <p className="font-headline text-xl text-primary">$1,500</p>
              </div>

              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
                <p className="font-headline text-lg text-primary mb-1">
                  Ellis R. Kerley Paper Award
                </p>
                <p className="text-on-surface-variant text-sm mb-3">
                  Ellis R. Kerley Foundation &middot; 2014
                </p>
                <p className="font-headline text-xl text-primary">$250</p>
              </div>

              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
                <p className="font-headline text-lg text-primary mb-1">
                  Humanities, Social Science &amp; Communication Arts &amp; Sciences Grand Prize
                </p>
                <p className="text-on-surface-variant text-sm mb-3">
                  MSU Undergraduate Research &amp; Arts Forum &middot; 2014
                </p>
                <p className="font-headline text-xl text-primary">$500</p>
              </div>
            </div>

            {/* Honor Societies & Scholarships */}
            <div className="mt-12">
              <h3 className="font-headline text-xl text-primary mb-6">
                Honor Societies &amp; Scholarships
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-surface-container-lowest p-6 rounded-xl text-center">
                  <p className="font-headline text-lg text-primary">Phi Beta Kappa</p>
                  <p className="text-sm text-on-surface-variant">2013</p>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-xl text-center">
                  <p className="font-headline text-lg text-primary">Phi Kappa Phi</p>
                  <p className="text-sm text-on-surface-variant">2012</p>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-xl text-center">
                  <p className="font-headline text-lg text-primary">National Merit Scholarship</p>
                  <p className="text-sm text-on-surface-variant">2010&ndash;2014</p>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-xl text-center">
                  <p className="font-headline text-lg text-primary">MSU Alumni Distinguished Scholarship</p>
                  <p className="text-sm text-on-surface-variant">2010&ndash;2014</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
