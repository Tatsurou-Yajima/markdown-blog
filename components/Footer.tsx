import styles from '../styles/layout.module.css'
import Profile from './Profile';
import FooterLogo from './FooterLogo'

export default function Footer() {
    return (
        <div className={`${styles.contentInner}`}>
            <div className={`${styles.container} ${styles.footer} ${styles.boxShadow}`}>
                <div className={styles.footer}>
                    <Profile />
                </div>
            </div>
            <FooterLogo />
        </div>
    )
}
