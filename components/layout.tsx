import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script'

import styles from '../styles//layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'T.Yajima';
export const siteTitle = 'Yajima の技術ブログ'

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
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
            />
            <header className={styles.header}>
                <div className={styles.width100}>
                    <div className={utilStyles.topImage}>
                        <Link href="/" className={utilStyles.textDecorationNone}>
                            <h1 className={utilStyles.topH1}>{siteTitle}</h1>
                        </Link>
                        <div>
                            <h2 className={utilStyles.topH2}>WEBエンジニアとして活動する中で感じたさまざまなことをご紹介します。</h2>
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
