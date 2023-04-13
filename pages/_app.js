import { Raleway } from 'next/font/google'
import '@/styles/globals.css'

const inter = Raleway({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.className}`}>
      <Component {...pageProps} />
    </div>
  )
}
