import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RefCheck — Automate Employee Reference Checks Legally',
  description: 'Streamline reference checking with templated questions, automated follow-ups, and compliance tracking for HR managers and recruiters.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ea5576c3-618d-4c97-9f78-a5a95d916889"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
