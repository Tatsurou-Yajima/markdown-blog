import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'
import { SiteTitle } from '../components/Head'
import Articles from '../components/Articles'
import Head from 'next/head'
import LayoutComponent from '../components/LayoutComponent'
import Link from 'next/link'

const Index = ({
    limitedPostsData
}: {
        limitedPostsData: {
            date: string
            title: string
            id: string
            thumbnail: string
        }[]
    }) => {
    return (
        <LayoutComponent home>
            <Head>
                <title>{SiteTitle}</title>
            </Head>
            <Articles postData={limitedPostsData} />
            <div className="text-center pb-4">
                <Link href="/all" className='top-to-all link-secondary'>全て表示</Link>
            </div>
        </LayoutComponent>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData()
    const limitedPostsData = allPostsData.slice(0, 10)

    return {
        props: {
            limitedPostsData
        }
    };
}

export default Index
