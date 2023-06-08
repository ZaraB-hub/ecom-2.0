"use client"
import '@/styles/globals.css'
import '@/styles/home.css'
import '@/styles/navbar.css'
import '@/styles/product.css'
import '@/styles/productlist.css'
import '@/styles/footer.css'
import '@/styles/buttons.css'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gentle Heart',
  description: 'Fashion that empowers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Provider store={store}>
          <main className="bg-red-50">{children}</main>
        </Provider>
        <Footer />
      </body>
    </html>
  )
}
