import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import Head from 'next/head';
import Layout from '../../components/layout';
import ReactMarkDown from 'react-markdown';
import utilStyles from '../../styles/utils.module.css';
import CodeBlock from '../../components/CodeBlock';
import { GetStaticPaths, GetStaticProps } from 'next';

export default function Post({
    postData
}: {
    postData: {
        title: string
        date: string
        contentHtml: string
    }
}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
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
