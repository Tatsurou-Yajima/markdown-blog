import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import Head from 'next/head';
import Layout from '../../components/layout';
import ReactMarkDown from 'react-markdown';
import utilStyles from '../../styles/utils.module.css';
import CodeBlock from '../../components/CodeBlock';
import { GetStaticPaths, GetStaticProps } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

export default function Post({
    postData
}: {
    postData: {
        title: string
        date: string
        contentHtml: string
        thumbnail: string
    }
}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
                <meta name='og:title' content={postData.title} />
                <meta name="twitter:title" content={postData.title} />
                <meta name="twitter:title" content={postData.title} />
                <meta name='twitter:image' content={postData.thumbnail} />
            </Head>
            <article className={utilStyles.articlePadding}>
                <div className={utilStyles.lightText}>
                    <FontAwesomeIcon className={utilStyles.calenderIcon} icon={faCalendarDays} />
                    <Date dateString={postData.date} />
                </div>
                <ReactMarkDown
                    components={CodeBlock}
                >
                    {postData.contentHtml}
                </ReactMarkDown>
            </article>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    };
}
