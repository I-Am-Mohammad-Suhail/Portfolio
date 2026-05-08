import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {

  const [open,setOpen] = useState(false);

  return (

    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/30 border-b border-purple-500/10">

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-purple-500">
          Mohammad Suhail
        </h1>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-8 text-lg font-medium">

          <li>
            <a href="#home" className="hover:text-purple-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-purple-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-purple-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-purple-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-purple-400 transition">
              Contact
            </a>
          </li>

        </ul>

        {/* Mobile Button */}

        <div
          className="md:hidden text-4xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >

          {open ? <HiX /> : <HiMenuAlt3 />}

        </div>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div className="md:hidden bg-[#0f172a] border-t border-purple-500/10">

          <ul className="flex flex-col items-center gap-8 py-10 text-lg">

            <li>
              <a href="#home" onClick={()=>setOpen(false)}>
                Home
              </a>
            </li>

            <li>
              <a href="#about" onClick={()=>setOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#skills" onClick={()=>setOpen(false)}>
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" onClick={()=>setOpen(false)}>
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" onClick={()=>setOpen(false)}>
                Contact
              </a>
            </li>

          </ul>

        </div>

      )}

    </nav>
  );
}

export default Navbar;