import type { Metadata } from "next";
import { asset } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Teaching | Dr. Mariyam Isa",
  description:
    "Courses, mentorship, and academic leadership in forensic anthropology.",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const ttuCourses = [
  {
    code: "ANTH 3314",
    name: "Human Osteology",
    level: "Undergraduate",
    years: "2022",
  },
  {
    code: "ANTH 4343",
    name: "Methods in Forensic Anthropology",
    level: "Undergraduate",
    years: "2021\u2013Present",
  },
  {
    code: "ANTH 3303",
    name: "Forensic Anthropology",
    level: "Undergraduate",
    years: "2020\u2013Present",
  },
  {
    code: "ANTH 4320",
    name: "Forensic Archaeology",
    level: "Undergraduate",
    years: "2020\u2013Present",
  },
  {
    code: "ANTH 5319",
    name: "Skeletal Trauma & Taphonomy",
    level: "Graduate",
    years: "2022\u2013Present",
  },
  {
    code: "ANTH 5319",
    name: "Human Osteology",
    level: "Graduate",
    years: "2022",
  },
  {
    code: "ANTH 5319",
    name: "Cold Cases in Forensic Anthropology",
    level: "Graduate",
    years: "2022\u2013Present",
  },
];

const msuCourses = [
  {
    code: "ANP 441",
    name: "Human Osteology & Forensic Anthropology",
    level: "Undergraduate",
    years: "2019",
  },
  {
    code: "ANP 270",
    name: "Women & Health",
    level: "Undergraduate",
    years: "2016",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function TeachingPage() {
  return (
    <>
      {/* ============================================================= */}
      {/*  1. HERO                                                       */}
      {/* ============================================================= */}
      <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden bg-surface-container-low">
        {/* Hero background */}
        <div className="absolute inset-0">
          <img
            src={asset("/images/lab-equipment-anatomical.jpg")}
            alt="Scientific laboratory setting with equipment and anatomical models"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-secondary font-semibold tracking-widest uppercase text-xs mb-6 block">
            Pedagogy &amp; Purpose
          </span>

          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-[1.1] text-primary mb-8">
            Nurturing the Next Generation of{" "}
            <span className="italic">Forensic Scientists</span>
          </h1>

          <div className="max-w-2xl space-y-6 mb-12">
            <blockquote className="font-headline text-xl md:text-2xl text-tertiary leading-relaxed italic">
              &ldquo;The field of forensic anthropology can and should
              conceptualize professional ethical behavior beyond so-called
              scientific objectivity and justice beyond the court
              system.&rdquo;
            </blockquote>
            <p className="text-on-surface-variant text-sm">
              &mdash; <em>American Anthropologist</em>, 2022
            </p>
          </div>

          {/* Award callout */}
          <div className="max-w-2xl p-8 bg-secondary-container rounded-xl flex items-start gap-6 border-l-4 border-secondary">
            <span
              className="material-symbols-outlined text-4xl text-primary flex-shrink-0"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              workspace_premium
            </span>
            <div>
              <h3 className="font-headline text-xl text-primary mb-2">
                2022 Outstanding Faculty Mentor Award
              </h3>
              <p className="text-on-secondary-container text-sm">
                TTU Center for Transformative Undergraduate Experiences
              </p>
            </div>
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-container/5 to-transparent -z-0" />
      </section>

      {/* ============================================================= */}
      {/*  2. COURSES — TTU                                              */}
      {/* ============================================================= */}
      <section id="curriculum-excellence" className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-6">
            <div>
              <h2 className="font-headline text-4xl text-primary mb-4">
                Curriculum <span className="italic">Excellence</span>
              </h2>
              <p className="text-on-surface-variant max-w-md">
                Bridging anatomical precision with real-world investigative
                rigor through specialized forensic coursework.
              </p>
            </div>
            <span className="font-label text-sm text-secondary uppercase tracking-widest">
              7 TTU Courses &middot; 2 MSU Courses
            </span>
          </div>

          {/* TTU Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ttuCourses.map((course, i) => (
              <div
                key={i}
                className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:translate-y-[-4px] transition-transform duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.04)]"
              >
                <div className="p-8">
                  <div className="flex flex-col gap-3 mb-4">
                    <span
                      className={`self-start px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase ${
                        course.level === "Graduate"
                          ? "bg-primary-container text-on-primary-container"
                          : "bg-secondary-container text-on-secondary-container"
                      }`}
                    >
                      {course.code} &middot; {course.level}
                    </span>
                    <h3 className="font-headline text-xl text-primary">
                      {course.name}
                    </h3>
                  </div>
                  <p className="font-label text-xs uppercase tracking-widest text-secondary">
                    {course.years}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* MSU Divider & Cards */}
          <div className="flex items-center gap-4 mt-16 mb-8">
            <span className="font-label text-xs uppercase tracking-widest text-secondary">
              Michigan State University &middot; 2016&ndash;2019
            </span>
            <div className="h-px flex-grow bg-outline-variant/30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {msuCourses.map((course, i) => (
              <div
                key={i}
                className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:translate-y-[-4px] transition-transform duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.04)]"
              >
                <div className="p-8">
                  <div className="flex flex-col gap-3 mb-4">
                    <span className="self-start px-3 py-1 bg-tertiary/10 text-tertiary rounded-full text-[10px] font-bold tracking-widest uppercase">
                      {course.code} &middot; {course.level}
                    </span>
                    <h3 className="font-headline text-xl text-primary">
                      {course.name}
                    </h3>
                  </div>
                  <p className="font-label text-xs uppercase tracking-widest text-secondary">
                    {course.years}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Course imagery strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="rounded-xl overflow-hidden h-48 group">
              <img
                src={asset("/images/lab-equipment-anatomical.jpg")}
                alt="Scientific laboratory with equipment and anatomical models"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-48 group">
              <img
                src={asset("/images/notebook-biological-sketches.jpg")}
                alt="Open notebook with technical sketches of biological structures in a scholarly desk setting"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-48 group">
              <img
                src={asset("/images/magnifying-glass-documents.jpg")}
                alt="Magnifying glass over documents with maps and historical notes"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  3. STUDENT MENTORSHIP                                         */}
      {/* ============================================================= */}
      <section id="student-mentorship" className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-8 gap-6">
            <h2 className="font-headline text-4xl text-primary">
              Student <span className="italic">Mentorship</span>
            </h2>
            <div className="h-px flex-grow mx-8 bg-outline-variant/30 hidden md:block" />
            <span className="font-label text-sm text-secondary uppercase tracking-widest">
              20+ Students Mentored
            </span>
          </div>

          {/* Group photo */}
          <div className="mb-16 rounded-xl overflow-hidden h-64 md:h-80">
            <img
              src={asset("/images/forensic-students.png")}
              alt="Graduate students collaborating in a forensic anthropology lab"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* ---- Thesis Chair ---- */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-primary text-2xl">
                school
              </span>
              <h3 className="font-headline text-2xl text-primary">
                Thesis Chair
              </h3>
            </div>

            <div className="space-y-4">
              {/* Edwards */}
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(77,68,75,0.06)]">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
                  <h4 className="font-headline text-lg text-primary">
                    Delaney Edwards
                  </h4>
                  <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[10px] font-bold tracking-tight whitespace-nowrap self-start">
                    M.A. 2023
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm italic">
                  &ldquo;Investigation of Fracture Morphology in Gunshot
                  Trauma&rdquo;
                </p>
              </div>

              {/* Unger */}
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(77,68,75,0.06)]">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
                  <h4 className="font-headline text-lg text-primary">
                    Carter Unger
                  </h4>
                  <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[10px] font-bold tracking-tight whitespace-nowrap self-start">
                    M.A. 2024
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm italic">
                  &ldquo;Regional and Seasonal Effects on Long Bone Fracture
                  Characteristics&rdquo;
                </p>
              </div>

              {/* In-Progress Students */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { name: "Madeline Leeah", program: "Anthropology M.A." },
                  { name: "Emma Taylor", program: "Anthropology M.A." },
                  { name: "Dennise Sanchez", program: "Anthropology M.A." },
                ].map((student) => (
                  <div
                    key={student.name}
                    className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_20px_40px_rgba(77,68,75,0.06)]"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="font-headline text-base text-primary">
                        {student.name}
                      </h4>
                      <span className="px-2 py-0.5 bg-tertiary/10 text-tertiary rounded-full text-[9px] font-bold tracking-widest uppercase whitespace-nowrap">
                        In Progress
                      </span>
                    </div>
                    <p className="font-label text-xs text-secondary uppercase tracking-widest">
                      {student.program}
                    </p>
                  </div>
                ))}
              </div>

              {/* Howard — Non-Thesis */}
              <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_20px_40px_rgba(77,68,75,0.06)]">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h4 className="font-headline text-base text-primary">
                    Maxwell Howard
                  </h4>
                  <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[10px] font-bold tracking-tight whitespace-nowrap self-start">
                    Non-Thesis M.A. 2024
                  </span>
                </div>
                <p className="font-label text-xs text-secondary uppercase tracking-widest">
                  Anthropology &middot; Chaired Non-Thesis Exam
                </p>
              </div>
            </div>
          </div>

          {/* ---- Undergraduate Mentees ---- */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-primary text-2xl">
                science
              </span>
              <h3 className="font-headline text-2xl text-primary">
                Undergraduate Mentees
              </h3>
            </div>

            <div className="space-y-4">
              {/* Finch */}
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(77,68,75,0.06)]">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
                  <h4 className="font-headline text-lg text-primary">
                    Darian Finch
                  </h4>
                  <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[10px] font-bold tracking-tight whitespace-nowrap self-start">
                    2024&ndash;2025
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm italic mb-2">
                  &ldquo;Bridging the Gap in Forensic Anthropology&rdquo;
                </p>
                <p className="text-on-surface-variant text-sm">
                  Presented at 2025 TTU Undergraduate Research Conference
                </p>
              </div>

              {/* Knysz & Curry */}
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(77,68,75,0.06)]">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
                  <h4 className="font-headline text-lg text-primary">
                    Jordyn Knysz &amp; Alex Curry
                  </h4>
                  <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[10px] font-bold tracking-tight whitespace-nowrap self-start">
                    2024
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm italic mb-2">
                  &ldquo;Exploring inter-observer agreement in assessments of
                  projectile defects&rdquo;
                </p>
                <p className="text-on-surface-variant text-sm">
                  Poster at 2025 AAFS
                </p>
              </div>

              {/* Wainer */}
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(77,68,75,0.06)]">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
                  <h4 className="font-headline text-lg text-primary">
                    Catherine Wainer
                  </h4>
                  <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[10px] font-bold tracking-tight whitespace-nowrap self-start">
                    2022&ndash;2023
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm italic mb-2">
                  &ldquo;Research Needs vs. Publication Trends in Forensic
                  Anthropology&rdquo;
                </p>
                <p className="text-on-surface-variant text-sm">
                  Co-authored poster at 2023 AAFS
                </p>
              </div>

              {/* Lebechi */}
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(77,68,75,0.06)]">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
                  <h4 className="font-headline text-lg text-primary">
                    Chiamaka Lebechi
                  </h4>
                  <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[10px] font-bold tracking-tight whitespace-nowrap self-start">
                    2021&ndash;2022
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm italic mb-2">
                  &ldquo;The Unidentified-Identified Gap&rdquo;
                </p>
                <p className="text-on-surface-variant text-sm">
                  1st Place, TTU Undergraduate Research Conference 2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  4. CONTACT CTA                                                */}
      {/* ============================================================= */}
      <section className="relative py-32 bg-surface-container-low overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={asset("/images/researchers-working-together.jpg")}
            alt="Researchers working together in a high-tech lab setting"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-headline text-3xl md:text-4xl text-primary mb-8">
            Interested in Working Together?
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-12">
            Whether you are a prospective student or a fellow researcher,
            I would love to hear from you.
          </p>
          <a
            href="mailto:mari.isa@ttu.edu"
            className="px-8 py-4 bg-primary text-on-primary rounded-lg transition-all hover:translate-y-[-2px] hover:shadow-xl shadow-primary/10"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
