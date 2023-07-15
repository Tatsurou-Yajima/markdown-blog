import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'
import Articles from '../components/Articles'
import LayoutComponent from '../components/LayoutComponent'
import Link from 'next/link'

const All = ({
    allPostsData
}: {
    allPostsData: {
        date: string
        title: string
        id: string
        thumbnail: string
    }[]
    }) => {
    return (
        <LayoutComponent home>
            <Articles postData={allPostsData} />
            <div className="text-center pb-4">
                <Link className='link-secondary' href="/">← TOP</Link>
            </div>
        </LayoutComponent >
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

export default All;
