import type { Metadata } from 'next'
import './globals.css'
import Nav from './components/nav'



export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='container mx-auto'>
        <Nav />
        {children}
      </body>
    </html>
  )
}
