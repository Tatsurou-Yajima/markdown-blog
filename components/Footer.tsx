import utilStyles from '../styles/utils.module.css';
import styles from '../styles/layout.module.css'
import Profile from './Profile';

export default function Footer() {
    return (
        <div className={`${styles.contentInner} ${utilStyles.disabledInPC}`}>
            <div className={`${styles.container} ${styles.footer} ${styles.boxShadow}`}>
                <div className={styles.footer}>
                    <Profile />
                </div>
            </div>
        </div>
    )
}
