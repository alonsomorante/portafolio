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

const tagClasses = [
  'tag-terracotta',
  'tag-forest', 
  'tag-sand',
  'tag-coral',
]

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group"
      style={{
        animation: `gentle-reveal 0.8s ease-out ${index * 0.15}s forwards`,
        opacity: 0,
      }}
    >
      <div className="card-organic">
        {/* Image Container */}
        <div
          className="relative h-56 md:h-64 overflow-hidden rounded-t-[2rem]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={400}
            height={400}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          
          {/* Hover overlay */}
          <div className={`absolute inset-0 bg-primary/20 flex items-center justify-center transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-organic btn-organic-secondary gap-2"
            >
              Ver proyecto
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="wave-divider mb-4" />
          <h3 className="text-2xl font-display font-bold text-foreground mb-3">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-5 leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={tag}
                className={`tag-organic ${tagClasses[i % tagClasses.length]}`}
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
