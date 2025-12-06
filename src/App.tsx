import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link2, Download } from "lucide-react";

function App() {
  useEffect(() => {
    // Auto-generate PDF on page load
    const timer = setTimeout(() => {
      handlePrintPDF();
    }, 1000); // Small delay to ensure content is fully rendered

    return () => clearTimeout(timer);
  }, []);

  const handlePrintPDF = () => {
    // Hide the download button before printing
    const downloadBtn = document.getElementById("download-btn");
    if (downloadBtn) {
      downloadBtn.style.display = "none";
    }

    // Configure print settings for professional PDF
    const printStyles = `
      @media print {
        @page {
          size: A4;
          margin: 0.5in;
        }
        
        body {
          font-family: 'Times New Roman', serif !important;
          font-size: 11pt !important;
          line-height: 1.4 !important;
          color: #000 !important;
          background: white !important;
        }
        
        .cv-container {
          max-width: none !important;
          margin: 0 !important;
          padding: 0 !important;
          box-shadow: none !important;
          border: none !important;
          background: white !important;
        }
        
        .cv-header {
          padding: 0 0 12pt 0 !important;
          border-bottom: 1pt solid #333 !important;
          margin-bottom: 12pt !important;
        }
        
        .cv-content {
          padding: 0 !important;
        }
        
        .cv-section {
          margin-bottom: 12pt !important;
          page-break-inside: avoid;
        }
        
        .cv-section-title {
          font-size: 13pt !important;
          font-weight: bold !important;
          color: #000 !important;
          margin-bottom: 6pt !important;
          border-bottom: 0.5pt solid #666 !important;
          padding-bottom: 2pt !important;
        }
        
        .cv-name {
          font-size: 18pt !important;
          font-weight: bold !important;
          color: #000 !important;
          margin-bottom: 4pt !important;
        }
        
        .cv-title {
          font-size: 14pt !important;
          color: #333 !important;
          margin-bottom: 8pt !important;
        }
        
        .cv-contact {
          font-size: 10pt !important;
          margin-bottom: 4pt !important;
        }
        
        .cv-links {
          font-size: 10pt !important;
        }
        
        .cv-links a {
          color: #0066cc !important;
          text-decoration: underline !important;
        }
        
        .cv-job-title {
          font-size: 12pt !important;
          font-weight: bold !important;
          color: #000 !important;
          margin-bottom: 2pt !important;
        }
        
        .cv-job-company {
          font-size: 10pt !important;
          color: #666 !important;
          margin-bottom: 4pt !important;
        }
        
        .cv-job-description {
          font-size: 10pt !important;
          margin-left: 12pt !important;
          margin-bottom: 6pt !important;
        }
        
        .cv-job-description li {
          margin-bottom: 2pt !important;
        }
        
        .cv-skills-category {
          font-size: 11pt !important;
          font-weight: bold !important;
          margin-bottom: 4pt !important;
        }
        
        .cv-skills-list {
          margin-bottom: 8pt !important;
        }
        
        .cv-skill-badge {
          display: inline-block !important;
          background: #f0f0f0 !important;
          color: #000 !important;
          padding: 2pt 6pt !important;
          margin: 1pt 2pt 1pt 0 !important;
          font-size: 9pt !important;
          border: 0.5pt solid #ccc !important;
          border-radius: 3pt !important;
        }
        
        .cv-education-item {
          margin-bottom: 6pt !important;
        }
        
        .cv-education-degree {
          font-size: 11pt !important;
          font-weight: bold !important;
        }
        
        .cv-education-school {
          font-size: 10pt !important;
          color: #666 !important;
        }
        
        .cv-project-item {
          margin-bottom: 8pt !important;
        }
        
        .cv-project-title {
          font-size: 11pt !important;
          font-weight: bold !important;
        }
        
        .cv-project-tech {
          font-size: 9pt !important;
          color: #666 !important;
          font-style: italic !important;
        }
        
        .cv-project-description {
          font-size: 10pt !important;
          margin-top: 2pt !important;
        }
        
        .cv-references {
          display: grid !important;
          grid-template-columns: 1fr 1fr !important;
          gap: 12pt !important;
        }
        
        .cv-reference-item {
          font-size: 10pt !important;
        }
        
        .cv-reference-name {
          font-weight: bold !important;
        }
        
        .cv-reference-title {
          color: #666 !important;
          font-style: italic !important;
        }
        
        .cv-separator {
          border-top: 0.5pt solid #ccc !important;
          margin: 8pt 0 !important;
        }
        
        .no-print {
          display: none !important;
        }
        
        /* Prevent page breaks in critical sections */
        .cv-job-entry {
          page-break-inside: avoid !important;
        }
        
        .cv-project-item {
          page-break-inside: avoid !important;
        }
        
        /* Ensure proper spacing for multi-page documents */
        .cv-section:last-child {
          margin-bottom: 0 !important;
        }
      }
    `;

    // Add print styles to document
    const styleElement = document.createElement("style");
    styleElement.textContent = printStyles;
    document.head.appendChild(styleElement);

    // Trigger print dialog
    setTimeout(() => {
      window.print();

      // Clean up
      document.head.removeChild(styleElement);
      if (downloadBtn) {
        downloadBtn.style.display = "flex";
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <button
        id="download-btn"
        onClick={handlePrintPDF}
        className="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors flex items-center gap-2 no-print z-10"
      >
        <Download size={16} />
        Download PDF
      </button>

      <Card className="cv-container max-w-4xl mx-auto bg-white shadow-lg p-8">
        <CardHeader className="cv-header">
          <CardTitle className="cv-name text-3xl font-bold mb-2">
            WAMUNYIMA MUKELABAI
          </CardTitle>
          <p className="cv-title text-xl text-gray-600">Software Engineer</p>
          <div className="cv-contact">
            <p>+260-977-269-886 | wamunyimamukelabai3@gmail.com</p>
          </div>
          <div className="cv-links flex gap-4 mt-2">
            <a
              href="https://github.com/wamunyima3"
              className="flex items-center text-blue-600 hover:underline"
            >
              <Link2 className="w-4 h-4 mr-1" />
              GitHub
            </a>
            <a
                href="https://github.com/WamunyimaMukelabai"
                className="flex items-center text-blue-600 hover:underline"
            >
              <Link2 className="w-4 h-4 mr-1" />
              Work GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mukelabai-wamunyima-32bbb6211/"
              className="flex items-center text-blue-600 hover:underline"
            >
              <Link2 className="w-4 h-4 mr-1" />
              LinkedIn
            </a>
            <a
              href="https://wamunyimamukelabai.com/"
              className="flex items-center text-blue-600 hover:underline"
            >
              <Link2 className="w-4 h-4 mr-1" />
              Portfolio
            </a>
          </div>
        </CardHeader>

        <CardContent className="cv-content">
          <section className="cv-section mb-6">
            <h2 className="cv-section-title text-xl font-semibold mb-3">
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed">
              Dedicated and versatile Software Engineer with proven experience
              in web and mobile development. Have demonstrated proficiency in a
              range of technologies including React, Flutter, and Kotlin.
              Passionate about open source and Linux. Seeking opportunities to
              leverage technical expertise in building innovative solutions
              across frontend, backend, and full-stack domains.
            </p>
          </section>

          <Separator className="cv-separator my-4" />

          <section className="cv-section mb-6">
            <h2 className="cv-section-title text-xl font-semibold mb-3">
              Work Experience
            </h2>

            <div className="cv-job-entry mb-4">
              <h3 className="cv-job-title text-lg font-medium">
                Junior Software Developer
              </h3>
              <p className="cv-job-company text-gray-600 text-sm">
                Good Nature Agro (GNA) | November 13, 2024 - Present
              </p>
              <ul className="cv-job-description list-disc list-inside mt-2 text-sm space-y-1">
                <li>Developing mobile applications using Kotlin</li>
                <li>
                  Creating and maintaining dashboards using Laravel Nova and
                  Next.js
                </li>
                <li>Providing technical support and troubleshooting</li>
                <li>
                  Collaborating with cross-functional teams to design and
                  implement new features
                </li>
              </ul>
            </div>

            <div className="cv-job-entry mb-4">
              <h3 className="cv-job-title text-lg font-medium">
                Software Developer
              </h3>
              <p className="cv-job-company text-gray-600 text-sm">
                Byte Builders | January 2023 - November 13, 2024
              </p>
              <ul className="cv-job-description list-disc list-inside mt-2 text-sm space-y-1">
                <li>
                  Developed and maintained attendance software for educational
                  institutions
                </li>
                <li>
                  Created and implemented church management software to enhance
                  community engagement
                </li>
                <li>
                  Utilized Flutter and Supabase for mobile application
                  development
                </li>
                <li>
                  Implemented responsive designs and ensured cross-platform
                  compatibility
                </li>
              </ul>
            </div>
          </section>

          <Separator className="cv-separator my-4" />

          <section className="cv-section mb-6">
            <h2 className="cv-section-title text-xl font-semibold mb-3">
              Skills
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className="cv-skills-category text-sm font-medium mb-2">
                  Programming Languages
                </h3>
                <div className="cv-skills-list flex flex-wrap gap-1">
                  {[
                    "JavaScript",
                    "TypeScript",
                    "PHP",
                    "Java",
                    "Kotlin",
                    "C++",
                    "SQL",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      className="cv-skill-badge text-xs"
                      variant="outline"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="cv-skills-category text-sm font-medium mb-2">
                  Frameworks & Libraries
                </h3>
                <div className="cv-skills-list flex flex-wrap gap-1">
                  {[
                    "React.js",
                    "Next.js",
                    "Flutter",
                    "Laravel Nova",
                    "Tailwind CSS",
                    "Mantine",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      className="cv-skill-badge text-xs"
                      variant="outline"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="cv-skills-category text-sm font-medium mb-2">
                  Tools & Technologies
                </h3>
                <div className="cv-skills-list flex flex-wrap gap-1">
                  {["Git", "Linux", "Firebase", "Supabase", "HTML", "CSS"].map(
                    (skill) => (
                      <Badge
                        key={skill}
                        className="cv-skill-badge text-xs"
                        variant="outline"
                      >
                        {skill}
                      </Badge>
                    )
                  )}
                </div>
              </div>
            </div>
          </section>

          <Separator className="cv-separator my-4" />

          <section className="cv-section mb-6">
            <h2 className="cv-section-title text-xl font-semibold mb-3">
              Education
            </h2>
            <div className="cv-education-item mb-3">
              <h3 className="cv-education-degree text-base font-medium">
                Bachelor's Degree in Software Engineering
              </h3>
              <p className="cv-education-school text-gray-600 text-sm">
                Zambia University College of Technology | 2021 - 2024
              </p>
            </div>
            <div className="cv-education-item mb-3">
              <h3 className="cv-education-degree text-base font-medium">
                CCNAv7 Introduction to Networks
                <a
                  href="https://drive.google.com/file/d/1DTH9XUu_iCKWJ-IMeFPXmDDeBDo6PfLA/view?usp=sharing"
                  className="ml-2 text-xs text-blue-600 hover:underline"
                >
                  <Link2 className="w-3 h-3 inline" />
                  Certificate
                </a>
              </h3>
              <p className="cv-education-school text-gray-600 text-sm">
                Evelyn Hon College | January 2024
              </p>
            </div>
          </section>

          <Separator className="cv-separator my-4" />

          <section className="cv-section mb-6">
            <h2 className="cv-section-title text-xl font-semibold mb-3">
              Projects
            </h2>
            <div className="space-y-3">
              {[
                {
                  title: "Medical Physiology Hub",
                  link: "https://drive.google.com/file/d/1toS6rgGV329mRwCUe4vQaltw5c00cwxO/view",
                  tech: "Flutter, Firebase, Lenco",
                  description:
                      "Mobile application for students, In the process of publishing on App and Play store",
                },
                {
                  title: "Purity",
                  link: "https://purity-pm.vercel.app/",
                  tech: "React, Mantine Components, Supabase",
                  description:
                    "Developed a platform to assist students in writing project proposals and help supervisors manage and guide students through the proposal process.",
                },
                {
                  title: "Chainama VOP",
                  link: "https://play.google.com/store/apps/details?id=com.bytebuilders.sda_quo_client",
                  tech: "Flutter, Supabase",
                  description:
                    "Developed an application for the SDA church to facilitate Bible study and faith development.",
                },
                {
                  title: "Attendance APK",
                  link: "https://play.google.com/store/apps/details?id=com.asa.attendance_register",
                  tech: "Flutter, Supabase",
                  description:
                    "Created a mobile application enabling students to mark their attendance by scanning QR codes.",
                },
                {
                  title: "Attendance Admin",
                  link: "https://attendance-register-vite-react.vercel.app/",
                  tech: "React, Vite, Tailwind CSS, Supabase",
                  description:
                    "Built an admin panel for lecturers to manage student attendance, supporting manual marking and QR code scanning.",
                },
                {
                  title: "Face Auth",
                  link: null,
                  tech: "PHP, Tailwind CSS",
                  description:
                    "Implemented an authentication system using facial recognition technology.",
                },
                {
                  title: "Lenco Flutter SDK",
                  link: "https://pub.dev/packages/lenco_flutter/",
                  tech: "Dart",
                  description:
                      "Checkout the SDK I published on pub.dev",
                },
              ].map((project, index) => (
                <div key={index} className="cv-project-item">
                  <h3 className="cv-project-title text-base font-medium">
                    {project.title}
                    {project.link && (
                      <a
                        href={project.link}
                        className="ml-2 text-xs text-blue-600 hover:underline"
                      >
                        <Link2 className="w-3 h-3 inline" />
                        View
                      </a>
                    )}
                  </h3>
                  <p className="cv-project-tech text-xs text-gray-600">
                    Technologies: {project.tech}
                  </p>
                  <p className="cv-project-description text-sm">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <Separator className="cv-separator my-4" />

          <section className="cv-section mb-6">
            <h2 className="cv-section-title text-xl font-semibold mb-3">
              Additional Experience
            </h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Map Data Collector, Zamstats Census Mapping | 2020</li>
              <li>Supervisor, Zamstats Census Enumeration | 2021</li>
              <li>E-voucher Swiping, Melekel Enterprise</li>
            </ul>
          </section>

          <Separator className="cv-separator my-4" />

          <section className="cv-section">
            <h2 className="cv-section-title text-xl font-semibold mb-3">
              References
            </h2>
            <div className="cv-references grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  name: "Vincent Mukamba",
                  title: "Lecturer, Evelyn Hon College",
                  contact: "Phone: 0977344959",
                },
                {
                  name: "Dr. Siva Asani",
                  title: "Product Manager, Byte Builders",
                  contact: "Phone: 0976604095",
                },
                {
                  name: "Parity Chizela",
                  title: "Product Manager - GNA",
                  contact: "Phone: +260969829983",
                },
                {
                  name: "Namacau Maikeli",
                  title: "District Supervisor, Zamstats",
                  contact: "Email: namymaikeli@gmail.com",
                },
              ].map((ref, index) => (
                <div key={index} className="cv-reference-item">
                  <p className="cv-reference-name font-medium text-sm">
                    {ref.name}
                  </p>
                  <p className="cv-reference-title text-gray-600 text-xs">
                    {ref.title}
                  </p>
                  <p className="text-xs">{ref.contact}</p>
                </div>
              ))}
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
