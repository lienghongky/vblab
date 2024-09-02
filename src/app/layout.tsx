
import { Inter } from 'next/font/google'
import './globals.css'
import {Providers} from "./providers";
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import localFont from '@next/font/local'

const audiowide = localFont({
  src: [
    {
      path: '../../public/fonts/Audiowide-Regular.ttf',
      weight: '400'
    },
  ],
  variable: '--font-audiowide'
})



const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${audiowide.variable} font-sans`}>
      <body className={` ${inter.className} bg-white dark:bg-gray-900`}>
        <Providers>
          <NavBar></NavBar>
          {children}
          <Footer></Footer>
        </Providers>
      </body>
    </html>
  )
}
