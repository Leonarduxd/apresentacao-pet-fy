import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fredoka } from 'next/font/google'
import './globals.css'

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'PetFy — Apresentação',
  description:
    'Apresentação do PetFy: App de Adoção e Gestão de Pets — Engenharia de Software Aplicada a Sistemas Móveis',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#3A231C',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-[#3A231C]">
      <body className={`${fredoka.className} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
