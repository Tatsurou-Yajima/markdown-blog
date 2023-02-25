import Link from 'next/link';
import Script from 'next/script'

import styles from '../styles/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Profile from './Profile';
import Logo from './Logo';
import SiteHead from './Head';
import Footer from './Footer';

export default function Layout({
    children,
    home
}: {
    children: React.ReactNode
    home?: boolean
}) {
    return (
        <>
            <SiteHead />
            <Script
                async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`} />
            <Script
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
                `,
                }}
            />
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
            />
            <header className={styles.header}>
                <div className={`${styles.content}`}>
                    <div className={`${styles.contentInner}`}>
                        <Logo />
                    </div>
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
                    <div className={utilStyles.displayInPC}>
                        <Profile />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
