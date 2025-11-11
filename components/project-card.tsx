"use client"

import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  link: string
  image: string
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false) // eslint-disable-line @typescript-eslint/no-unused-vars

  return (
    <div
      className="group"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
        opacity: 0,
      }}
    >
      <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
        {/* Image Container */}
        <div
          className="relative h-64 md:h-72 overflow-hidden bg-muted"
          onMouseEnter={() => setIsHovered(true)} // eslint-disable-line @typescript-eslint/no-unused-vars
          onMouseLeave={() => setIsHovered(false)} // eslint-disable-line @typescript-eslint/no-unused-vars
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={350}
            height={350}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Ver proyecto
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{project.title}</h3>
          <p className="text-muted-foreground mb-4 text-sm md:text-base leading-relaxed">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs md:text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
