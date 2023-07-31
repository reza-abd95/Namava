import './globals.css'
import { Inter } from 'next/font/google'
import HeaderSticky from "@/app/(components)/HeaderSticky";
import Header from "@/app/(components)/Header";
import Footer from "@/app/(components)/Footer";

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
          <Header/>
          <HeaderSticky/>
        </nav>
        
        <main>
          {children}
        </main>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  )
}
