import Link from 'next/link';

import styles from '../styles/layout.module.css'

export default function FooterLogo() {
    return (
        <div className={`${styles.footerContent}`}>
            <div className={`${styles.contentInner}`}>
                <div className={`${styles.mb0} ${styles.mx0}`}>
                    <div className={styles.logoContainer}>
                        <h5 className={styles.footerDescription}>バグ解消法、お役立ち情報など</h5>
                        <Link href="/">
                            <img src='https://images-for-yajima-tech-blog.s3.ap-northeast-1.amazonaws.com/yajimaga-logo.png' className={styles.footerLogo} />
                        </Link>
                    </div >
                </div>
            </div>
        </div>
    )
}
