import { Github as GitHub, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Hero from "@/components/hero"
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
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero primero */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 px-4 md:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance animate-fade-in-up">Sobre Mí</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-slide-in-right">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Soy desarrollador web apasionado por crear experiencias digitales excepcionales. Con más de 2 años de
                experiencia, me especializo en construcción de aplicaciones web escalables utilizando tecnologías
                modernas.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Me encanta resolver problemas complejos y trabajar con equipos para llevar ideas del concepto al
                lanzamiento. Cuando no estoy codificando, disfruto contribuyendo a proyectos de código abierto y
                compartir conocimiento con la comunidad.
              </p>
              <div className="flex gap-3 pt-2">
                <CVModal />
                <a href="https://github.com/alonsomorante" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <GitHub className="w-5 h-5" />
                    GitHub
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/alonso-morante-a376a7195/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex justify-center animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-60"></div>
                <Image
                  src="/wira-alonso.jpg"
                  alt="Foto de perfil"
                  width={320}
                  height={320}
                  className="relative md:w-80 md:h-80 rounded-2xl object-cover shadow-lg hover:shadow-xl transition-shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 space-y-3 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Mis Proyectos</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Una selección de proyectos que demuestran mis habilidades en desarrollo web, diseño y arquitectura de
              software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
