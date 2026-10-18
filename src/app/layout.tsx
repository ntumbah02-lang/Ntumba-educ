import '../globals.css'

export const metadata = {
  title: 'ntumba éduc',
  description: 'Plateforme éducative pour la RDC - ntumba éduc',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  )
}
