function Footer() {

  return (

    <footer className="border-t border-purple-500/10 py-10 text-center">

      <div className="flex justify-center gap-8 mb-5 text-gray-400">

        <a
          href="https://github.com/Mohammad_Suhail"
          target="_blank"
          className="hover:text-purple-400 transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/mohammad-suhail-300654238"
          target="_blank"
          className="hover:text-purple-400 transition"
        >
          LinkedIn
        </a>

      </div>

      <p className="text-gray-500">
        © 2026 Mohammad Suhail. All rights reserved.
      </p>

    </footer>

  );
}

export default Footer;