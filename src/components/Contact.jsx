import { motion } from "framer-motion";
import { Mail, User, MessageSquare } from "lucide-react";

function Contact() {

  return (

    <section
      id="contact"
      className="py-32 px-6 relative"
    >

      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity:0, y:-50 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.7 }}
          className="text-6xl font-bold text-center mb-20"
        >

          <span className="text-white">
            Let's
          </span>

          <span className="text-purple-500">
            {" "}Connect
          </span>

        </motion.h2>

        <motion.form
          initial={{ opacity:0, y:100 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
          action="https://formspree.io/f/xwvynjyr"
          method="POST"
          className="backdrop-blur-xl bg-white/5 border border-purple-500/20 p-10 rounded-[40px] shadow-[0_0_60px_rgba(168,85,247,0.15)] space-y-8"
        >

          <div className="relative">

            <User className="absolute left-5 top-5 text-purple-400" size={22} />

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full bg-black/40 border border-transparent focus:border-purple-500 outline-none rounded-2xl py-5 pl-16 pr-5 text-lg transition"
            />

          </div>

          <div className="relative">

            <Mail className="absolute left-5 top-5 text-purple-400" size={22} />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full bg-black/40 border border-transparent focus:border-purple-500 outline-none rounded-2xl py-5 pl-16 pr-5 text-lg transition"
            />

          </div>

          <div className="relative">

            <MessageSquare className="absolute left-5 top-5 text-purple-400" size={22} />

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
              className="w-full bg-black/40 border border-transparent focus:border-purple-500 outline-none rounded-2xl py-5 pl-16 pr-5 text-lg transition"
            ></textarea>

          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-violet-500 hover:scale-[1.02] transition duration-300 py-5 rounded-2xl text-xl font-semibold shadow-lg shadow-purple-500/30"
          >

            Send Message 🚀

          </button>

        </motion.form>

      </div>

    </section>
  );
}

export default Contact;