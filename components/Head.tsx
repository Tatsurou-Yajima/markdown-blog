import Head from 'next/head';

export const siteTitle = 'YajiMaga-TECH'
export const description = 'サーバーサイドエンジニアの技術ブログです。バグ解消法や最近学んだことなどを発信していきます。'
export const defaultImagePath = 'https://images-for-yajima-tech-blog.s3.ap-northeast-1.amazonaws.com/top-image-20230214.jpg'

export default function () {
    return (
        <Head>
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
        </Head>
    )
};
