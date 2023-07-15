import { AppProps } from "next/app"
import { DefaultSeo } from 'next-seo'
import Head from "next/head"
import "../styles/global.css"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                name='viewport'
                content='minimum-scale=1, initial-scale=1, width=device-width'
            </Head>
            <DefaultSeo
                defaultTitle='YajiMaga-TECH'
                description='サーバーサイドエンジニアの技術ブログです。バグ解消法や最近学んだことなどを発信していきます。'
                openGraph={{
                    type: 'website',
                    description: 'サーバーサイドエンジニアの技術ブログです。バグ解消法や最近学んだことなどを発信していきます。',
                    site_name: 'YajiMaga-TECH',
                    url: 'https://yajimaga-tech-blog.vercel.app/',
                    images: [
                        {
                            url: 'https://images-for-yajima-tech-blog.s3.ap-northeast-1.amazonaws.com/top-image-20230214.jpg',
                            width: 800,
                            height: 600,
                            alt: 'YajiMaga-TECH',
                            type: 'image/jpeg',
                        },
                    ],
                }}
                twitter={{
                    handle: '@Yazmatto',
                    site: '@Yazmatto',
                    cardType: 'summary_large_image',
                }}
            />
            <Component {...pageProps} />
        </>
    )
}
