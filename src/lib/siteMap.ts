export interface SiteSection {
  id: string;
  text: string;
}

export interface SitePage {
  path: string;
  label: string;
  sections: SiteSection[];
}

export const siteMap: SitePage[] = [
  {
    path: "/",
    label: "Home",
    sections: [
      { id: "integrated-scholar", text: "Integrated Scholar" },
      { id: "about", text: "About" },
      { id: "laboratory-experience", text: "Laboratory Experience" },
      { id: "the-arid-lab", text: "The ARID Lab" },
      { id: "key-research", text: "Key Research" },
    ],
  },
  {
    path: "/research",
    label: "Research",
    sections: [
      { id: "active-investigations", text: "Active Investigations" },
      { id: "fractography-book", text: "FBI Fractography Guide" },
      { id: "selected-publications", text: "Publications (12)" },
      { id: "books-and-chapters", text: "Books & Chapters (4)" },
      { id: "research-reports", text: "Research Reports" },
      { id: "conference-activity", text: "Conference Activity (35)" },
      { id: "research-funding", text: "Research Funding" },
    ],
  },
  {
    path: "/teaching",
    label: "Teaching",
    sections: [
      { id: "curriculum-excellence", text: "Courses (9)" },
      { id: "student-mentorship", text: "Student Mentorship (20+)" },
    ],
  },
  {
    path: "/service-impact",
    label: "Service & Impact",
    sections: [
      { id: "professional-leadership", text: "Professional Leadership" },
      { id: "workshops-lectures", text: "Workshops & Lectures" },
      { id: "advocacy-community", text: "Advocacy & Community" },
      { id: "archaeological-fieldwork", text: "Archaeological Fieldwork" },
      { id: "university-service", text: "University Service" },
      { id: "peer-review", text: "Peer Review" },
      { id: "casework", text: "Casework Record (61)" },
    ],
  },
  {
    path: "/arid-lab",
    label: "ARID Lab",
    sections: [
      { id: "our-mission", text: "Mission" },
      { id: "affiliated-faculty", text: "Affiliated Faculty" },
      { id: "notable-publications", text: "Notable Publications" },
      { id: "join-the-lab", text: "Join the Lab" },
    ],
  },
  {
    path: "/privacy",
    label: "Privacy Policy",
    sections: [],
  },
];
