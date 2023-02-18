import styles from '../styles/layout.module.css'
import Profile from './Profile';
import FooterLogo from './FooterLogo'
import utilStyles from '../styles/utils.module.css'

export default function Footer() {
    return (
        <div className={`${styles.contentInner}`}>
            <div className={`${utilStyles.disabledInPC} ${styles.container} ${styles.footer} ${styles.boxShadow}`}>
                <div className={styles.footer}>
                    <Profile />
                </div>
            </div>
            <FooterLogo />
        </div>
    )
}
