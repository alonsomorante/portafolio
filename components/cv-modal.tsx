"use client"

import { FileText } from "lucide-react"

export default function CVModal() {
  return (
    <a href="/CV-ALONSO-MORANTE.pdf" target="_blank" rel="noopener noreferrer" download>
      <button className="btn-organic btn-organic-primary gap-2">
        <FileText className="w-5 h-5" />
        Ver CV
      </button>
    </a>
  )
}
