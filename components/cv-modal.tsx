"use client"

import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CVModal() {
  return (
    <a href="/CV-ALONSO-MORANTE.pdf" target="_blank" rel="noopener noreferrer" download>
      <Button size="lg" variant="outline" className="gap-2 bg-transparent">
        <FileText className="w-5 h-5" />
        Ver CV
      </Button>
    </a>
  )
}
