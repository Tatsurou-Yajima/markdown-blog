import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import CodeBlock from './CodeBlock'
import DateComponent from './DateComponent'
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
        id: string
    }
    }) => {
    const router = useRouter()

    const fileExtension = postData.thumbnail.split('.').pop()

    return (
        <LayoutComponent>
            <NextSeo
                title={postData.title}
                description={postData.title}
                openGraph={{
                    url: process.env.NEXT_PUBLIC_DOMAIN + router.asPath,
                    description: postData.title,
                    images: [
                        {
                            url: postData.thumbnail,
                            type: 'image/' + fileExtension,
                        },
                    ],
                }}
            />
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
