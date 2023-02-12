import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script'

import styles from '../styles//layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'T.Yajima';
export const siteTitle = 'Yajima の技術ブログ'
export const description = 'サーバーサイドエンジニアの技術ブログです。バグ解消法や最近学んだことなどを発信していきます。'
// export const defaultImagePath = 'https://yajima-tech-blog.vercel.app/_next/static/media/20221216085448.7b375d73.jpg'
export const defaultImagePath = 'https://image.itmedia.co.jp/business/articles/2302/11/cover_news041.jpg'

export default function Layout({
    children,
    home
}: {
    children: React.ReactNode
    home?: boolean
}) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="サーバーサイドエンジニアの技術ブログです。バグ解消法や最近学んだことなどを発信していきます。"
                />
                <meta
                    property="og:image"
                    content={defaultImagePath}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:image" content={defaultImagePath} />
                <meta
                    name="twitter:description"
                    content={description}
                />
                <meta
                    name="twitter:title"
                    content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <script
                    key="json-ld"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `{"image":["${defaultImagePath}"]}`
                    }}
                >
                </script>
            </Head>
            <header className={styles.header}>
                <div className={styles.width100}>
                    <div className={utilStyles.topImage}>
                        <Link href="/" className={utilStyles.textDecorationNone}>
                            <h1 className={utilStyles.topH1}>{siteTitle}</h1>
                        </Link>
                        <div>
                            <p className={utilStyles.topH2}>WEBエンジニアとして活動する中で感じたさまざまなことをご紹介します。</p>
                        </div>
                    </div>
                </div>
            </header>
            <div className={styles.container}>
                <main>{children}</main>
                {!home && (
                    <div className={styles.backToHome}>
                        <Link href="/">← TOP</Link>
                    </div>
                )}
            </div>
        </div>
    );
}
