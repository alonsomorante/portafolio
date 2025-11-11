import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "Alonso Morante",
  description: "Portafolio profesional de desarrollador web. Proyectos, experiencia y contacto.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/laptop.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/laptop.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/laptop.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/laptop.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${_poppins.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
