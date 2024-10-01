'use client'

import React from 'react'
// import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'
import { Metadata } from 'next'

{/**export const metadata: Metadata = {
  title: 'John Doe - Full Stack Developer',
  description: 'Resume of John Doe, Full Stack Developer',
}
**/}
const resumeData = {
  name: "John Doe",
  title: "Full Stack Developer",
  contact: {
    email: "john.doe@email.com",
    phone: "(123) 456-7890",
    location: "New York, NY",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe"
  },
  summary: "Experienced Full Stack Developer with a strong background in building scalable web applications. Proficient in both front-end and back-end technologies, with a passion for creating efficient, user-friendly solutions.",
  experience: [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      period: "Jan 2020 - Present",
      achievements: [
        "Led development of a high-traffic e-commerce platform, improving performance by 40%",
        "Implemented CI/CD pipelines, reducing deployment time by 60%",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "WebSolutions LLC",
      period: "Jun 2017 - Dec 2019",
      achievements: [
        "Developed and maintained multiple client websites using React and Node.js",
        "Optimized database queries, improving application response time by 30%",
        "Collaborated with UX designers to implement responsive designs"
      ]
    }
  ],
  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    graduationDate: "May 2017"
  },
  skills: [
    "JavaScript",
    "TypeScript",
    "Python",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Git",
    "Agile methodologies"
  ]
}

export default function ResumePage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 py-8 px-4 sm:px-6 lg:px-8" onClick={handlePrint}>
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">{resumeData.name}</h1>
          <p className="text-xl text-gray-600">{resumeData.title}</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <a href={`mailto:${resumeData.contact.email}`} className="flex items-center text-gray-600 hover:text-gray-800 print:hover:text-gray-600">
          {/**    <Mail className="w-5 h-5 mr-2" />**/}
              {resumeData.contact.email}
            </a>
            <a href={`tel:${resumeData.contact.phone}`} className="flex items-center text-gray-600 hover:text-gray-800 print:hover:text-gray-600">
       {/**       <Phone className="w-5 h-5 mr-2" />**/}
              {resumeData.contact.phone}
            </a>
            <span className="flex items-center text-gray-600">
         {/**     <MapPin className="w-5 h-5 mr-2" />**/}
              {resumeData.contact.location}
            </span>
            <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 print:hover:text-gray-600">
    {/**          <Linkedin className="w-5 h-5" />**/}
            </a>
            <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 print:hover:text-gray-600">
     {/**         <Github className="w-5 h-5" />**/}
            </a>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
          <p className="text-gray-700">{resumeData.summary}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
          {resumeData.experience.map((job, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-medium">{job.title}</h3>
              <p className="text-gray-600">{job.company} | {job.period}</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                {job.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div>
            <h3 className="text-xl font-medium">{resumeData.education.degree}</h3>
            <p className="text-gray-600">{resumeData.education.institution} | Graduated: {resumeData.education.graduationDate}</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc list-inside text-gray-700 grid grid-cols-2 gap-2">
            {resumeData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
      }
