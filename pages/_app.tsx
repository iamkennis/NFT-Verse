import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css';
// import '../theme/';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
