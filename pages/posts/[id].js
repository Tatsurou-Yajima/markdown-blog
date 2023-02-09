import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import Head from 'next/head';
import Layout from '../../components/layout';
import ReactMarkDown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from 'remark-gfm';
import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData }) {
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
                    rehypePlugins={[rehypeRaw, rehypeSanitize]}
                    remarkPlugins={[remarkGfm]}
                >
                    {postData.contentHtml}
                </ReactMarkDown>
            </article>
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    };
}
