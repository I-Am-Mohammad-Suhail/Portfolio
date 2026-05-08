import { motion } from "framer-motion";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import developer from "../assets/developer.png";

function Hero() {

    return (

        <section
            id="home"
            className="min-h-screen flex items-center justify-center px-6 pt-32 md:pt-20 overflow-hidden"
        >

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >

                    <p className="text-purple-400 text-lg md:text-xl mb-4 tracking-widest uppercase">
                        Full Stack Developer
                    </p>

                    <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold leading-tight">

                        Hi, I'm

                        <span className="block bg-gradient-to-r from-white via-purple-300 to-purple-600 bg-clip-text text-transparent">
                            Mohammad Suhail
                        </span>

                    </h1>

                    <p className="mt-8 text-gray-400 text-base md:text-lg leading-8 max-w-xl">

                        I build modern, scalable and responsive
                        MERN stack web applications with beautiful UI,
                        secure backend systems and smooth user experience.

                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 mt-10">

                        <a
                            href="#projects"
                            className="bg-gradient-to-r from-purple-600 to-violet-500 hover:scale-105 transition duration-300 px-8 py-4 rounded-2xl text-lg shadow-lg shadow-purple-500/30 text-center"
                        >
                            View Projects
                        </a>

                        <a
                            href="/resume.pdf"
                            download
                            className="border border-purple-500 hover:bg-purple-600 hover:scale-105 transition duration-300 px-8 py-4 rounded-2xl text-lg text-center"
                        >
                            Download CV
                        </a>

                    </div>

                    <div className="flex gap-6 mt-8 text-3xl text-gray-300">

                        <a
                            href="https://github.com/I-Am-Mohammad-Suhail"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-purple-400 hover:-translate-y-1 transition duration-300"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/mohammad-suhail-300654238"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-purple-400 hover:-translate-y-1 transition duration-300"
                        >
                            <FaLinkedin />
                        </a>

                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center"
                >

                    <div className="relative">

                        <div className="absolute inset-0 bg-purple-600 blur-3xl opacity-30 rounded-full"></div>

                        <img
                            src={developer}
                            alt="developer"
                            className="relative w-[320px] sm:w-[420px] md:w-[550px] hover:scale-105 transition duration-500 animate-[float_4s_ease-in-out_infinite]"
                        />

                    </div>

                </motion.div>

            </div>

        </section>
    );
}

export default Hero;