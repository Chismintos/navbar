import './globals.css'
import { Mooli } from 'next/font/google';
import NavBar from '@/Components/NavBar'


const mooli = Mooli({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Navbar',
  description: 'Ejemlo de navbar slidebar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={mooli.className}>
        <div className=' h-[100vh]'>
          <NavBar></NavBar>
          {children}
        </div>
      </body>
    </html>
  )
}
