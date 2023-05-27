import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CodeBlock from './CodeBlock'
import DateComponent from './DateComponent'
import Head from 'next/head'
import LayoutComponent from './LayoutComponent'
import ReactMarkDown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import UtilStyles from '../styles/utils.module.css'

const PostComponent = ({
    postData
}: {
    postData: {
        title: string
        date: string
        contentHtml: string
        thumbnail: string
    }
}) => {
    return (
        <LayoutComponent>
            <Head>
                <title>{postData.title}</title>
                <meta name='og:title' content={postData.title} />
                <meta name="twitter:title" content={postData.title} />
                <meta name="twitter:title" content={postData.title} />
                <meta name='twitter:image' content={postData.thumbnail} />
                <meta property='og:image' content={postData.thumbnail} />
            </Head>
            <article className={UtilStyles.articlePadding}>
                <div className={UtilStyles.lightText}>
                    <FontAwesomeIcon className={UtilStyles.calenderIcon} icon={faCalendarDays} />
                    <DateComponent dateString={postData.date} />
                </div>
                <ReactMarkDown
                    components={CodeBlock}
                    remarkPlugins={[remarkGfm]}
                >
                    {postData.contentHtml}
                </ReactMarkDown>
            </article>
        </LayoutComponent>
    );
};

export default PostComponent
