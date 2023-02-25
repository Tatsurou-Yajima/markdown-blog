import Head from 'next/head';
import Script from 'next/script'

export const siteTitle = 'YajiMaga-TECH'
export const description = 'サーバーサイドエンジニアの技術ブログです。バグ解消法や最近学んだことなどを発信していきます。'
export const defaultImagePath = 'https://images-for-yajima-tech-blog.s3.ap-northeast-1.amazonaws.com/top-image-20230214.jpg'

export default function () {
    return (
        <Head>
            <script
                async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA4_MEASUREMENT_ID}`} />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.GA4_MEASUREMENT_ID}');
                `,
                }}
            />
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="description"
                content="サーバーサイドエンジニアの技術ブログです。バグ解消法や最近学んだことなどを発信していきます。"
            />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <meta property="og:image" content={defaultImagePath} />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:image" content={defaultImagePath} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@Yazmatto" />
            <meta name="twitter:creator" content="@Yazmatto" />
            <meta name="twitter:image" content={defaultImagePath} />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
        </Head>
    )
};
