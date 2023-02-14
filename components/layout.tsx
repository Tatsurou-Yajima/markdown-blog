import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script'

import styles from '../styles//layout.module.css';
import utilStyles from '../styles/utils.module.css';

export const siteTitle = 'Yajima の技術ブログ'
export const description = 'サーバーサイドエンジニアの技術ブログです。バグ解消法や最近学んだことなどを発信していきます。'
export const defaultImagePath = 'https://images-for-yajima-tech-blog.s3.ap-northeast-1.amazonaws.com/20221216085448.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaDmFwLW5vcnRoZWFzdC0xIkYwRAIgVqZEo0nRQq0BpsZ90Jm1KTjdJtw8DTBxCQkoaiD9mqwCIDJ9LByDAhh7g3qVWF%2BVlT7DKC8GUPs3hsIUm3Z7YwJ3KuQCCBMQABoMMzkwMjc5OTMzNjEyIgxUPhvKOhFOaFXPHfoqwQIIS4OuPQNkviN2NqERgIACGdT8k7iuOGyTEkRMlLdxOJ76u5qtaOyfsBMpPjG7hluTnRdyG9lJrNY8DuHtKMPvqDp%2Bomt7u%2BAvbhDK6Qdd6Z6zQ%2FD6sBMEvzGb1HIGZKVe19SFuKxkK0eKGgzgYHd9laBW6cvQ%2BhrFO6e%2Bevf7y3CEMu9WILZqx20xdXLI6tpQN5FOfJK%2BbvdkZGxwrVgNMFF%2FD%2BNIsQSlj5xW1GFmR308KeoMU%2FVN1Zq0f9gCcFACfvtL%2Fp496ZcBbklLy9L36lwqyJuTqJ6uDA5q8AxAygbu%2Bn%2BXCJt%2FNtTGq7c%2FhuMLXtDx6jF26D5iq0l%2B6pyPiwZb0ZJ9idX5nOJFryXexb3Nsmj978DIJ9f5HWgPPqKPXbtYCCKFyjPm%2BSCtEh1TwUGxHs9WaRrTTVUgwlsnvuEwqa%2BtnwY6tAITCWMiWn2S4%2FBosrJCDNmIxNOY%2FaCo9Nb7R5Bo0%2B6kr0zFdvQGvtQA3H%2FkiIl4QyVgjt7QWyKBWfqZYT1LtAOCHUo0%2FwgM1oKeBiFBxKupsu6y4sXWK1e8ugWT4Kt2FgV00GoahM%2BJcNCLuJegbKKA5BwlXQFZ7x0qyN7A5fNMNz8xHKpz6WkFXIDO%2BF69m%2F1elqHWY%2B9774MLx2nHqNbJJMPCr8SZAUirm6tEN2lH30bvZ0TSUTc0QRW7U3VMyKnjwrr%2FKnalJHp8HYZTFsrb%2FnqG9HNF3DkJBHjbd0uYBx0lfex7mq9Q3jN5Aw3YqMBSngfQe1mP6FkOGHP8l5EDsAqJP7%2BKZbbJr58uePUsNayRw5%2FS2XtTK6D3NTnF9wSJhyblwAqs3kaLc5KO7uvF%2BsE3Yw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230214T095157Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAVVXT7F2WJJM2JMIK%2F20230214%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-Signature=90648c2955671cf761276c5cb687cbb7987d126377c7d7eec5ca08ec1d16f0cd'

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
