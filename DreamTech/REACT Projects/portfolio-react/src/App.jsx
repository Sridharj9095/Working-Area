import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <header className="w-full py-8 px-4 text-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
        <p className="text-lg text-white">Hello I'm</p>
        <h1 className="text-4xl font-bold">Sridhar Jeganathan</h1>
        <p className="mt-2 text-lg font-bold text-gray-200">
          MERN Stack Developer
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 rounded-full text-white font-semibold hover:bg-white hover:text-blue-600 flex items-center space-x-2 transition duration-300"
          >
            <span>Download CV</span>
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-500 hover:text-white flex items-center space-x-2 transition duration-300"
          >
            <span>Contact Info</span>
          </a>
        </div>
        <div className="mt-6 flex justify-center space-x-8">
          <a
            href="https://www.linkedin.com/in/sridhar-jeganathan-681b992a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-blue-600 hover:bg-white bg-blue-700 rounded-full flex justify-center items-center h-6 transition duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/Sridharj9095"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-3xl hover:text-amber-50 hover:bg-gray-900 bg-amber-50 rounded-full flex justify-center items-center h-6.5 transition duration-300"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </header>

      {/* About Me Section */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-100">About Me</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          I am a passionate Full Stack Developer with a love for building
          scalable and efficient applications. I have experience in modern web
          technologies and enjoy tackling complex challenges.
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-800 py-16 px-4">
        <h2 className="text-3xl font-semibold text-center text-white">
          My Skills
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="text-center bg-gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">React Js</h3>
            <p className="mt-2">
              Building modern, dynamic user interfaces with React.
            </p>
          </div>
          <div className="text-center bg-gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Node.js</h3>
            <p className="mt-2">
              Server-side programming and RESTful API development with Node.js.
            </p>
          </div>
          <div className="text-center bg-gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Tailwind CSS</h3>
            <p className="mt-2">
              Designing responsive, utility-first UIs with Tailwind CSS.
            </p>
          </div>
          <div className="text-center bg-gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">MongoDB</h3>
            <p className="mt-2">
              Working with NoSQL databases and handling data with MongoDB.
            </p>
          </div>
          <div className="text-center bg-gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">TypeScript</h3>
            <p className="mt-2">
              Developing with strong typing and modern JavaScript features using
              TypeScript.
            </p>
          </div>
          <div className="text-center bg-gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Git</h3>
            <p className="mt-2">
              Version control with Git for collaborative development and code
              management.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-100">
          My Projects
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Project 1</h3>
            <p className="mt-2 text-gray-400">A description of your project.</p>
            <a
              href="#"
              className="mt-4 inline-block px-6 py-2 bg-blue-600 rounded-full text-white hover:bg-blue-700"
            >
              View Project
            </a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Project 2</h3>
            <p className="mt-2 text-gray-400">A description of your project.</p>
            <a
              href="#"
              className="mt-4 inline-block px-6 py-2 bg-blue-600 rounded-full text-white hover:bg-blue-700"
            >
              View Project
            </a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Project 3</h3>
            <p className="mt-2 text-gray-400">A description of your project.</p>
            <a
              href="#"
              className="mt-4 inline-block px-6 py-2 bg-blue-600 rounded-full text-white hover:bg-blue-700"
            >
              View Project
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold text-white">Contact Me</h2>
        <p className="mt-4 text-lg text-gray-300">
          Let's work together! Feel free to reach out if you want to collaborate
          or discuss opportunities.
        </p>
        <div className="mt-8">
          <a
            href="mailto:sridhar.j9095@gmail.com"
            className="px-6 py-3 bg-blue-600 rounded-full text-white font-semibold hover:bg-blue-700"
          >
            Send Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 text-center text-white">
        <p>&copy; 2025 Sridhar Jeganathan. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
