import Head from 'next/head';
import Layout from '../components/layout';
import { siteTitle } from '../components/Head';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date'
import { GetStaticProps } from 'next';

export default function Home({
    allPostsData
}: {
    allPostsData: {
        date: string
        title: string
        id: string
    }[]
}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <article className={utilStyles.articlePadding}>
                <aside>
                    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                        {allPostsData.map(({ id, date, title }) => (
                            <dl className={utilStyles.articleDl}>
                                <dt className={utilStyles.articleDt}></dt>
                                <dd className={`${utilStyles.listItem}} ${utilStyles.articleDd}`} key={id}>
                                    <Link href={`/posts/${id}`}>{title}</Link>
                                    <br />
                                    <small className={utilStyles.lightText}>
                                        <Date dateString={date} />
                                    </small>
                                </dd>
                            </dl>
                        ))}
                    </section>
                </aside>
            </article>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData
        }
    };
}
