import Footer from './Footer'
import Header from './Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Namava',
  description: 'Generated by Number One',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          {/* <Header/> */}
        </nav>
        {children}
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  )
}
