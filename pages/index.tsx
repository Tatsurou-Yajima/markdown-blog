import Head from 'next/head';
import Layout from '../components/layout';
import { siteTitle } from '../components/Head';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date'
import { GetStaticProps } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';


export default function Home({
    allPostsData
}: {
    allPostsData: {
        date: string
        title: string
        id: string
        thumbnail: string
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
                        {allPostsData.map(({ id, date, title, thumbnail }) => (
                            <Link className={utilStyles.articleLink} href={`/posts/${id}`} key={id}>
                                <dl className={utilStyles.articleDl}>
                                    <dt className={utilStyles.articleDt}>
                                        <img className={utilStyles.thumbnail} src={thumbnail} />
                                    </dt>
                                    <dd className={`${utilStyles.listItem}} ${utilStyles.articleDd}`} key={id}>
                                        {title}
                                        <br />
                                        <small className={`${utilStyles.lightText} ${utilStyles.publishDate}`}>
                                            <FontAwesomeIcon className={utilStyles.calenderIcon} icon={faCalendarDays} />
                                            <Date dateString={date} />
                                        </small>
                                    </dd>
                                </dl>
                            </Link>
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
