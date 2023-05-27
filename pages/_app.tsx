import { AppProps } from "next/app"
import "../styles/global.css"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
