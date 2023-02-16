import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script'

import styles from '../styles//layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Profile from './Profile';

export const siteTitle = 'YajiMaga-TECH'
export const description = 'サーバーサイドエンジニアの技術ブログです。バグ解消法や最近学んだことなどを発信していきます。'
export const defaultImagePath = 'https://images-for-yajima-tech-blog.s3.ap-northeast-1.amazonaws.com/top-image-20230214.jpg'

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
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
            />
            <header className={styles.header}>
                <div className={styles.logoContainer}>
                    <h1 className={styles.topH1}>バグ解消法、お役立ち情報など</h1>
                    <Link href="/">
                        <img src='https://images-for-yajima-tech-blog.s3.ap-northeast-1.amazonaws.com/yajimaga-logo.png' className={styles.logo} />
                    </Link>
                </div>
                {home && (
                    <div className={styles.width100}>
                        <img className={utilStyles.topImage} src='https://images-for-yajima-tech-blog.s3.ap-northeast-1.amazonaws.com/20221216085448.jpg' />
                    </div>
                )}
            </header>
            <div className={`${styles.content}`}>
                <main className={styles.main}>
                    <div className={styles.contentInner}>
                        <div className={`${styles.container} ${styles.boxShadow}`}>
                            {children}
                            {!home && (
                                <div className={styles.backToHome}>
                                    <Link href="/">← TOP</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </main>
                <div id='side' className={styles.side}>
                    <Profile></Profile>
                </div>
            </div>
        </div>
    );
}
