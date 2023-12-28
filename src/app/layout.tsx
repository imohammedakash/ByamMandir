import MyReduxProvider from '@/Redux/Provider'
import './globals.css'
import type { Metadata } from 'next'
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
        <body className='w-full'>{children}</body>
      </MyReduxProvider>
    </html>
  )
}
