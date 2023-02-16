import Link from 'next/link';
import styles from '../styles/layout.module.css';

export default function () {
    return (
        <>
            <div className={styles.logoContainer}>
                <h1 className={styles.topH1}>バグ解消法、お役立ち情報など</h1>
                <Link href="/">
                    <img src='https://images-for-yajima-tech-blog.s3.ap-northeast-1.amazonaws.com/yajimaga-logo.png' className={styles.logo} />
                </Link>
            </div >
        </>
    )
};
