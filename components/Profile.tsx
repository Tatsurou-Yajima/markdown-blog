import utilStyles from '../styles/utils.module.css';

const author = 'やじま（Tatsuro Yajima）';
const authorDescription = '東京都在住のWEBエンジニア。 得意言語はPHP。 フレームワークはLaravel, CakePHPなど。 本ブログは Node.js + Next.js で作成しました。';

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
                <ul className={`${utilStyles.clearfix} ${utilStyles.profileSns} ${utilStyles.p0} ${utilStyles.mb30}`}>
                    <li className={utilStyles.twitter}>
                        <a rel="nofollow" href="https://twitter.com/Yazmatto" target="_blank" className={utilStyles.snsLink}>
                            <i className={`fab fa-twitter`}></i>
                        </a>
                    </li>
                    <li className={utilStyles.instagram}>
                        <a rel="nofollow" href="https://www.instagram.com/tatsuro_yajima" target="_blank" className={utilStyles.snsLink}>
                            <i className={`fab fa-instagram`}></i>
                        </a>
                    </li>
                </ul>
            </aside>
        </div>
    )
}
