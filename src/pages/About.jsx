import React from "react";
//import resume from "../assets/resume.docx"

function About() {
  return (
    <div className="min-h-screen bg-gray-50 px-14 lg:px-20 py-7">
      <div>
        <h1 className="text-4xl font-bold text-gray-800 mb-7 text-center">
          About Me
        </h1>

        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
          {/* Introduction */}
          <p className="text-lg text-gray-700 mb-6">
            Hi, I’m <span className="font-semibold text-indigo-600">Kashish Pundir</span>,
            a passionate learner and aspiring <span className="font-semibold">Java Full Stack Developer</span>.
            I enjoy creating clean, responsive, and user-friendly web applications using modern tools.
          </p>

          {/* Skills */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Skills</h2>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Programming: Java, JavaScript</li>
            <li>Frontend: React, Tailwind CSS, HTML, CSS</li>
            <li>Backend: Core Java, OOPs, SQL</li>
            <li>Tools: Git/GitHub, Vs editor, MySQL, Oracle</li>
          </ul>

          {/* Education */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Education</h2>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>BCA Graduate</li>
            <li>Currently training in Java Full Stack at QSpiders</li>
            <li>12th – Golden Heart Academy (2022)</li>
            <li>10th – Kusum Public School (2020)</li>
          </ul>


          {/* Hobbies */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Strengths & Hobbies</h2>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Strengths: Positive thinker, quick learner, team player</li>
            <li>Hobbies: Singing, reading spiritual books, chanting, writing notes</li>
          </ul>

          {/* Career Goal */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Career Goal</h2>
          <p className="text-gray-600">
            "I am seeking a full-time opportunity as a <span className="text-indigo-600 font-semibold">Software Engineer</span> where I can apply my problem-solving skills, contribute to impactful projects, and grow as a professional in the IT industry."
          </p>

          <div className="flex justify-center mb-3 mt-6">
            <a
              href="/Kashish_pundir.docx" // <-- place your resume in public folder as resume.pdf
              download="Kashish_pundir.docx"
              target="_blank"
              rel="noopener noreferrer"
              className=" px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl shadow-md hover:bg-indigo-700 transition"
            >
             Download Resume
            </a>
          </div>
        </div>


      </div>

    </div>

  );
}

export default About;
