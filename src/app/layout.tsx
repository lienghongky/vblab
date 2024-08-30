
import { Inter } from 'next/font/google'
import './globals.css'
import {Providers} from "./providers";
import NavBar from './components/NavBar'
import Footer from './components/Footer';
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavBar></NavBar>
          {children}
          <Footer></Footer>
        </Providers>
      </body>
    </html>
  )
}
