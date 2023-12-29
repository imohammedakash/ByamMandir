import MyReduxProvider from '@/Redux/Provider'
import './globals.css'
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from 'next'
import { ToastContainer } from 'react-toastify'
export const metadata: Metadata = {
  title: 'Byam Mandir',
  description: 'Your True Fitness solution from Heavier to Healthier',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='w-screen' lang="en">
      <MyReduxProvider>
        <body className='w-full'>
          <ToastContainer />
          {children}
        </body>
      </MyReduxProvider>
    </html>
  )
}
