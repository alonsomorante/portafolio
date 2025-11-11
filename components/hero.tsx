"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="w-full max-w-7xl mx-auto">
        <div className="space-y-4 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold text-balance">
            Hola, soy{" "}
            <span className="text-primary hover:animate-name-wobble inline-block">Alonso Morante</span>
          </h1>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl">
            Creo experiencias web modernas y escalables que transforman ideas en realidad
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button onClick={scrollToProjects} size="sm" className="gap-2">
              Ver mis trabajos
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
