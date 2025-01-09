import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Link2 } from 'lucide-react'

function App() {

  return (
    <Card className="max-w-4xl mx-auto my-8 p-8 bg-white shadow-lg font-sans">
      <CardHeader>
        <CardTitle className="text-3xl font-bold mb-2">WAMUNYIMA MUKELABAI</CardTitle>
        <p className="text-xl text-muted-foreground">Software Engineer</p>
      </CardHeader>
      <CardContent>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
          <p>+260-977-269-886 | wamunyimamukelabai3@gmail.com</p>
          <div className="flex gap-4 mt-1">
            <a href="https://github.com/wamunyima3" className="flex items-center text-blue-600 hover:underline">
              <Link2 className="w-4 h-4 mr-1" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/mukelabai-wamunyima-32bbb6211/" className="flex items-center text-blue-600 hover:underline">
              <Link2 className="w-4 h-4 mr-1" />
              LinkedIn
            </a>
            <a href="https://wamunyimamukelabai.vercel.app/" className="flex items-center text-blue-600 hover:underline">
              <Link2 className="w-4 h-4 mr-1" />
              Portfolio
            </a>
          </div>
        </section>

        <Separator className="my-6" />

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
          <p>
            Dedicated and versatile Software Engineer with proven experience in web and mobile development. 
            Have demonstrated proficiency in a range of technologies including React, Flutter, and Kotlin. Passionate about open source 
            and Linux. Seeking opportunities to leverage technical expertise in building innovative solutions across 
            frontend, backend, and full-stack domains.
          </p>
        </section>

        <Separator className="my-6" />

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
          <div className="mb-4">
            <h3 className="text-lg font-medium">Junior Software Developer</h3>
            <p className="text-muted-foreground">Good Nature Agro (GNA) | September 13, 2024 - Present</p>
            <ul className="list-disc list-inside mt-2">
              <li>Developing mobile applications using Kotlin</li>
              <li>Creating and maintaining dashboards using Laravel Nova and Next.js</li>
              <li>Providing technical support and troubleshooting</li>
              <li>Collaborating with cross-functional teams to design and implement new features</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium">Software Developer</h3>
            <p className="text-muted-foreground">Byte Builders | January 2023 - September 13, 2024</p>
            <ul className="list-disc list-inside mt-2">
              <li>Developed and maintained attendance software for educational institutions</li>
              <li>Created and implemented church management software to enhance community engagement</li>
              <li>Utilized Flutter and Supabase for mobile application development</li>
              <li>Implemented responsive designs and ensured cross-platform compatibility</li>
            </ul>
          </div>
        </section>

        <Separator className="my-6" />

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <Badge>JavaScript</Badge>
            <Badge>React.js</Badge>
            <Badge>Next.js</Badge>
            <Badge>Flutter</Badge>
            <Badge>Kotlin</Badge>
            <Badge>Laravel Nova</Badge>
            <Badge>PHP</Badge>
            <Badge>SQL</Badge>
            <Badge>Firebase</Badge>
            <Badge>Supabase</Badge>
            <Badge>HTML</Badge>
            <Badge>CSS</Badge>
            <Badge>Tailwind CSS</Badge>
            <Badge>Mantine</Badge>
            <Badge>Java</Badge>
            <Badge>C++</Badge>
            <Badge>Git</Badge>
            <Badge>Linux</Badge>
          </div>
        </section>

        <Separator className="my-6" />

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          <div className="mb-2">
            <h3 className="text-lg font-medium">Bachelor's Degree in Software Engineering</h3>
            <p className="text-muted-foreground">Zambia University College of Technology | 2021 - 2024</p>
          </div>
          <div className="mb-2">
            <h3 className="text-lg font-medium">
              CCNAv7 Introduction to Networks 
                <a href="https://drive.google.com/file/d/1DTH9XUu_iCKWJ-IMeFPXmDDeBDo6PfLA/view?usp=sharing" className="ml-2 text-sm text-blue-600 hover:underline">
                  <Link2 className="w-4 h-4 inline" />
                  View Certificate
                </a>
            </h3>
            <p className="text-muted-foreground">Evelyn Hon College | January 2024</p>
          </div>
        </section>

        <Separator className="my-6" />

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Projects</h2>
          <ul className="list-none">
            <li className="mb-3">
              <h3 className="text-lg font-medium">
                Purity
                <a href="https://purity-pm.vercel.app/" className="ml-2 text-sm text-blue-600 hover:underline">
                  <Link2 className="w-4 h-4 inline" />
                  View Project
                </a>
              </h3>
              <p className="text-sm text-muted-foreground">Technologies: React, Mantine Components, Supabase</p>
              <p>Developed a platform to assist students in writing project proposals and help supervisors manage and guide students through the proposal process.</p>
            </li>
            <li className="mb-3">
              <h3 className="text-lg font-medium">
                Chainama VOP
                <a href="https://play.google.com/store/apps/details?id=com.bytebuilders.sda_quo_client&pcampaignid=web_share" className="ml-2 text-sm text-blue-600 hover:underline">
                  <Link2 className="w-4 h-4 inline" />
                  View on Play Store
                </a>
              </h3>
              <p className="text-sm text-muted-foreground">Technologies: Flutter, Supabase</p>
              <p>Developed an application for the SDA church to facilitate Bible study and faith development.</p>
            </li>
            <li className="mb-3">
              <h3 className="text-lg font-medium">
                Attendance APK
                <a href="https://play.google.com/store/apps/details?id=com.asa.attendance_register&hl=en_US" className="ml-2 text-sm text-blue-600 hover:underline">
                  <Link2 className="w-4 h-4 inline" />
                  View on Play Store
                </a>
              </h3>
              <p className="text-sm text-muted-foreground">Technologies: Flutter, Supabase</p>
              <p>Created a mobile application enabling students to mark their attendance by scanning QR codes.</p>
            </li>
            <li className="mb-3">
              <h3 className="text-lg font-medium">
                Attendance Admin
                <a href="https://attendance-register-vite-react.vercel.app/" className="ml-2 text-sm text-blue-600 hover:underline">
                  <Link2 className="w-4 h-4 inline" />
                  View Project
                </a>
              </h3>
              <p className="text-sm text-muted-foreground">Technologies: React, Vite, Tailwind CSS, Supabase</p>
              <p>Built an admin panel for lecturers to manage student attendance, supporting manual marking and QR code scanning.</p>
            </li>
            <li className="mb-3">
              <h3 className="text-lg font-medium">Face Auth</h3>
              <p className="text-sm text-muted-foreground">Technologies: PHP, Tailwind CSS</p>
              <p>Implemented an authentication system using facial recognition technology.</p>
            </li>
          </ul>
        </section>

        <Separator className="my-6" />

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Additional Experience</h2>
          <ul className="list-disc list-inside">
            <li>Map Data Collector, Zamstats Census Mapping | 2020</li>
            <li>Supervisor, Zamstats Census Enumeration | 2021</li>
            <li>E-voucher Swiping, Melekel Enterprise</li>
          </ul>
        </section>

        <Separator className="my-6" />

        <section>
          <h2 className="text-xl font-semibold mb-2">References</h2>
          <ul className="list-none grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="mb-2">
              <p className="font-medium">Vincent Mukamba</p>
              <p className="text-muted-foreground">Lecturer, Evelyn Hon College</p>
              <p>Phone: 0977344959</p>
            </li>
            <li className="mb-2">
              <p className="font-medium">Dr. Siva Asani</p>
              <p className="text-muted-foreground">Product Manager, Byte Builders</p>
              <p>Phone: 0976604095</p>
            </li>
            <li className="mb-2">
              <p className="font-medium">Dr. Fredah Banda</p>
              <p className="text-muted-foreground">Product Manager, GNA</p>
              <p>Phone: 0767335336</p>
            </li>
            <li>
              <p className="font-medium">Namacau Maikeli</p>
              <p className="text-muted-foreground">District Supervisor, Zamstats</p>
              <p>email: namymaikeli@gmail.com</p>
            </li>
          </ul>
        </section>
      </CardContent>
    </Card>
  )
}

export default App
