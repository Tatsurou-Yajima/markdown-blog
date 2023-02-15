import utilStyles from '../styles/utils.module.css';

const author = 'やじま（Tatsuro Yajima）';
const authorDescription = '東京都在住のWEBエンジニア。 得意言語はPHP。 フレームワークはLaravel, CakePHPなど。 他にJavaScript, AWS, Dockerなども経験あり。';

export default function Profile() {
    return (
        <div className={utilStyles.profile}>
            <aside>
                <div>
                    <img className={utilStyles.authorImage} src='https://images-for-yajima-tech-blog.s3.ap-northeast-1.amazonaws.com/profile_2023_01_28_small.jpeg' />
                </div>
                <div className={utilStyles.authorBox}>
                    <p className={utilStyles.author}>{author}</p>
                    <p className={utilStyles.authorDescription}>{authorDescription}</p>
                </div>
            </aside>
        </div>
    )
}
