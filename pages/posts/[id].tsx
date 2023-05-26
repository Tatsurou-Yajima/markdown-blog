import { getAllPostIds, getPostData } from '../../lib/posts';
import { GetStaticPaths, GetStaticProps } from 'next';
import Post from '../../components/Post'

const PostPage = ({ postData }) => {
    return <Post postData={postData} />
};

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

export default PostPage;
