import { Github as GitHub, Linkedin } from "lucide-react"
import ProjectCard from "@/components/project-card"
import CVModal from "@/components/cv-modal"
import Navigation from "@/components/navigation"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Nutrijama",
    description: "Aplicación web interactiva diseñada para consultar información nutricional detallada de alimentos de manera rápida y sencilla.",
    tags: ["React", "Next.js", "Prisma", "Tailwind CSS", "PostgreSQL"],
    link: "https://nutrijama.vercel.app/groups",
    image: "/nutrijama-thumbnail.png",
  },
  {
    id: 2,
    title: "Bichos game",
    description:
      "Juego de personajes con poderes diferentes con interacción en un mapa",
    tags: ["Javascript", "CSS", "HTML", "Canva API"],
    link: "https://alonsomorante.github.io/",
    image: "/bichos-game-thumbnail.png",
  },
  {
    id: 3,
    title: "Movie finder",
    description: "Aplicación que facilita la búsqueda de películas extrayendo data de una API externa",
    tags: ["Vite", "Javascript", "CSS", "React"],
    link: "https://645eb6fd8bb2214aa2851bd2--warm-malabi-74d3ac.netlify.app/",
    image: "/avenger-thumbnail.png",
  },
  {
    id: 4,
    title: "Burguerking Clone",
    description: "Diseño hecho en Figma y concretado en una página web clon del famoso Burguerking",
    tags: ["Figma", "CSS", "HTML"],
    link: "https://burguer-tech-prov.onrender.com/",
    image: "/burguer-king-clone-thumbnail.png",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-organic text-foreground">
      <Navigation />

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div className="space-y-6">
              <div className="animate-fade-in-up">
                <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                  Desarrollador Web
                </span>
                <h2 className="text-4xl md:text-6xl font-display font-bold mt-3 leading-tight">
                  Hola, soy{" "}
                  <span className="text-primary">Alonso</span>
                </h2>
                <div className="wave-divider mt-4" />
              </div>
              
              <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Soy desarrollador web apasionado por crear experiencias digitales 
                  <span className="text-primary font-semibold"> excepcionales</span>. Con más de 2 años de 
                  experiencia, me especializo en construcción de aplicaciones web 
                  escalables utilizando tecnologías modernas.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Me encanta resolver problemas complejos y trabajar con equipos para 
                  llevar ideas del concepto al lanzamiento.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <CVModal />
                <a href="https://github.com/alonsomorante" target="_blank" rel="noopener noreferrer">
                  <button className="btn-organic btn-organic-secondary gap-2 text-sm">
                    <GitHub className="w-4 h-4" />
                    GitHub
                  </button>
                </a>
                <a href="https://www.linkedin.com/in/alonso-morante-a376a7195/" target="_blank" rel="noopener noreferrer">
                  <button className="btn-organic btn-organic-outline gap-2 text-sm">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </button>
                </a>
              </div>
            </div>
            
            {/* Right - Image */}
            <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-10 pointer-events-none" />
                <Image
                  src="/profile.jpeg"
                  alt="Foto de perfil"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 320px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 px-4 md:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-3">
              Mis Proyectos
            </h2>
            <div className="wave-divider mt-4" />
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Una selección de proyectos que demuestran mis habilidades en desarrollo web, 
              diseño y arquitectura de software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Alonso Morante.{" "}
            <span className="text-primary">Diseñado con cuidado</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
