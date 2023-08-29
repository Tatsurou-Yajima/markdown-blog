import utilStyles from '../styles/utils.module.css';

export default function Profile() {
    return (
        <div className={utilStyles.profile}>
            <aside>
                <div>
                    <img className={utilStyles.authorImage} src='https://images-for-yajima-tech-blog.s3.ap-northeast-1.amazonaws.com/profile_2023_01_28_small.jpeg' />
                </div>
                <div className={utilStyles.authorBox}>
                    <p className={utilStyles.author}>{process.env.NEXT_PUBLIC_AUTHOR}</p>
                    <p className={utilStyles.authorDescription}>{process.env.NEXT_PUBLIC_AUTHOR_DESCRIPTION}</p>
                </div>
                <ul className={`${utilStyles.profileSns} ${utilStyles.p0} ${utilStyles.mb30}`}>
                    <li className={`${utilStyles.twitter} ${utilStyles.snsCircle}`}>
                        <a rel="nofollow" href={`${process.env.NEXT_PUBLIC_TWITTER_URL}`} target="_blank" className={utilStyles.snsLink}>
                            <i className={`fab fa-twitter`}></i>
                        </a>
                    </li>
                    <li className={`${utilStyles.instagram} ${utilStyles.snsCircle}`}>
                        <a rel="nofollow" href={`${process.env.NEXT_PUBLIC_INSTAGRAM_URL}`} target="_blank" className={utilStyles.snsLink}>
                            <i className={`fab fa-instagram`}></i>
                        </a>
                    </li>
                    <li className={`${utilStyles.gitHub} ${utilStyles.snsCircle}`}>
                        <a rel="nofollow" href={`${process.env.NEXT_PUBLIC_GITHUB_URL}`} target="_blank" className={utilStyles.snsLink}>
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                </ul>
            </aside>
        </div>
    )
}
