import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

function About() {
  return (

    <section
      id="about"
      className="py-32 px-6"
    >

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div>

          <p className="text-purple-400 text-lg mb-3">
            About Me
          </p>

          <h2 className="text-5xl font-bold mb-8 leading-tight">
            Passionate MERN Stack Developer
          </h2>

          <p className="text-gray-400 leading-9 text-lg">
            I build high-performance full stack web applications
            using React.js, Node.js, Express.js and MongoDB.
            My focus is creating scalable backend systems,
            modern frontend UI and smooth user experiences.
          </p>

          <div className="flex gap-6 mt-10 flex-wrap">

            <div className="bg-[#111827] px-6 py-4 rounded-2xl border border-purple-500/20">
              <h3 className="text-3xl font-bold text-purple-500">
                10+
              </h3>
              <p className="text-gray-400">
                Projects
              </p>
            </div>

            <div className="bg-[#111827] px-6 py-4 rounded-2xl border border-purple-500/20">
              <h3 className="text-3xl font-bold text-purple-500">
                MERN
              </h3>
              <p className="text-gray-400">
                Stack
              </p>
            </div>

          </div>

        </div>

        <div className="grid grid-cols-2 gap-6">

          <div className="bg-[#111827] p-8 rounded-3xl hover:-translate-y-3 transition duration-300 border border-purple-500/10">
            <FaReact className="text-5xl text-cyan-400 mb-5" />
            <h3 className="text-2xl font-bold">
              React.js
            </h3>
            <p className="text-gray-400 mt-3">
              Dynamic modern frontend applications.
            </p>
          </div>

          <div className="bg-[#111827] p-8 rounded-3xl hover:-translate-y-3 transition duration-300 border border-purple-500/10">
            <FaNodeJs className="text-5xl text-green-500 mb-5" />
            <h3 className="text-2xl font-bold">
              Node.js
            </h3>
            <p className="text-gray-400 mt-3">
              Powerful backend and APIs.
            </p>
          </div>

          <div className="bg-[#111827] p-8 rounded-3xl hover:-translate-y-3 transition duration-300 border border-purple-500/10">
            <SiExpress className="text-5xl text-gray-300 mb-5" />
            <h3 className="text-2xl font-bold">
              Express
            </h3>
            <p className="text-gray-400 mt-3">
              Fast scalable server architecture.
            </p>
          </div>

          <div className="bg-[#111827] p-8 rounded-3xl hover:-translate-y-3 transition duration-300 border border-purple-500/10">
            <SiMongodb className="text-5xl text-green-400 mb-5" />
            <h3 className="text-2xl font-bold">
              MongoDB
            </h3>
            <p className="text-gray-400 mt-3">
              Flexible NoSQL database systems.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;