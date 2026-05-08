import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTailwindcss
} from "react-icons/si";

function Skills() {

  const skills = [
    {
      name:"HTML",
      icon:<FaHtml5 />,
      color:"text-orange-500"
    },
    {
      name:"CSS",
      icon:<FaCss3Alt />,
      color:"text-blue-500"
    },
    {
      name:"JavaScript",
      icon:<SiJavascript />,
      color:"text-yellow-400"
    },
    {
      name:"React",
      icon:<FaReact />,
      color:"text-cyan-400"
    },
    {
      name:"Node.js",
      icon:<FaNodeJs />,
      color:"text-green-500"
    },
    {
      name:"Express",
      icon:<SiExpress />,
      color:"text-gray-300"
    },
    {
      name:"MongoDB",
      icon:<SiMongodb />,
      color:"text-green-400"
    },
    {
      name:"Tailwind",
      icon:<SiTailwindcss />,
      color:"text-sky-400"
    },
    {
      name:"GitHub",
      icon:<FaGithub />,
      color:"text-white"
    }
  ];

  return (

    <section
      id="skills"
      className="py-32 px-6"
    >

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <p className="text-purple-400 text-lg mb-3">
            My Skills
          </p>

          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-purple-500 bg-clip-text text-transparent">
            Technologies I Use
          </h2>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {skills.map((skill,index)=>(

            <motion.div
              whileHover={{ scale:1.05 }}
              key={index}
              className="bg-[#111827]/80 backdrop-blur-lg border border-purple-500/10 p-8 rounded-3xl text-center hover:-translate-y-3 hover:border-purple-500 hover:shadow-purple-500/20 hover:shadow-2xl transition duration-300"
            >

              <div className={`text-6xl mb-5 flex justify-center ${skill.color}`}>
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {skill.name}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;