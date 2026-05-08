function Projects() {

 const projects = [
  {
    title:"Real Estate App",
    desc:"Full stack property management system",
    type:"Full Stack"
  },
  {
    title:"Amazon Clone",
    desc:"Responsive ecommerce frontend",
    type:"Frontend"
  },
  {
    title:"Flipkart Clone",
    desc:"Modern ecommerce UI project",
    type:"Frontend"
  },
  {
    title:"Authentication System",
    desc:"JWT auth with role access",
    type:"Backend"
  },
  {
    title:"Employee Management",
    desc:"CRUD full stack project",
    type:"Full Stack"
  },
  {
    title:"Hospital Management",
    desc:"React admin dashboard system",
    type:"Web App"
  },
  {
    title:"Portfolio Website",
    desc:"Modern animated personal portfolio website",
    type:"Frontend"
  },
  {
    title:"Food Delivery App",
    desc:"MERN stack food ordering application",
    type:"MERN Stack"
  },
  {
    title:"Ecommerce Dashboard",
    desc:"Admin dashboard with analytics and charts",
    type:"Full Stack"
  },
  {
    title:"Blog Application",
    desc:"Full stack blog platform with authentication",
    type:"MERN Stack"
  },
  {
    title:"Chat Application",
    desc:"Realtime chat app using Socket.io",
    type:"Backend"
  },
  {
    title:"Task Management App",
    desc:"Kanban style productivity management system",
    type:"MERN Stack"
  }
];

  return (

    <section
      id="projects"
      className="py-32 px-6"
    >

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <p className="text-purple-400 text-lg mb-3">
            Projects
          </p>

          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-purple-500 bg-clip-text text-transparent">
            My Work
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project,index)=>(

            <div
              key={index}
              className="group bg-[#111827]/80 border border-purple-500/10 p-8 rounded-3xl hover:-translate-y-3 hover:border-purple-500 hover:shadow-purple-500/20 hover:shadow-2xl transition duration-300 relative overflow-hidden"
            >

              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10">

                <div className="flex items-center justify-between mb-8">

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-violet-500 flex items-center justify-center text-3xl font-bold shadow-lg shadow-purple-500/30">
                    {index + 1}
                  </div>

                  <span className="text-purple-400 border border-purple-500/30 px-4 py-2 rounded-full text-sm">
                    {project.type}
                  </span>

                </div>

                <h3 className="text-3xl font-bold mb-4 group-hover:text-purple-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-8 text-lg">
                  {project.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;