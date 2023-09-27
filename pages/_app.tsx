import { AppProps } from "next/app"
import { DefaultSeo } from 'next-seo'
import Head from "next/head"
import "../styles/global.css"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name='viewport'
                    content='minimum-scale=1, initial-scale=1, width=device-width'
                />
                <meta
                    name="google-site-verification"
                    content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
                />
            </Head>
            <DefaultSeo
                defaultTitle={process.env.NEXT_PUBLIC_SITE_TITLE}
                description={process.env.NEXT_PUBLIC_DESCRIPTION}
                openGraph={{
                    type: 'website',
                    description: process.env.NEXT_PUBLIC_DESCRIPTION,
                    site_name: process.env.NEXT_PUBLIC_SITE_TITLE,
                    url: process.env.NEXT_PUBLIC_DOMAIN,
                    images: [
                        {
                            url: process.env.NEXT_PUBLIC_DEFAULT_IMAGE,
                            width: 800,
                            height: 600,
                            alt: process.env.NEXT_PUBLIC_SITE_TITLE,
                        },
                    ],
                }}
                twitter={{
                    handle: process.env.NEXT_PUBLIC_TWITTER_ACCOUNT,
                    site: process.env.NEXT_PUBLIC_TWITTER_ACCOUNT,
                    cardType: 'summary_large_image',
                }}
            />
            <Component {...pageProps} />
        </>
    )
}
