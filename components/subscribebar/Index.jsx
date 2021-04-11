import Link from 'next/link'
import styles from './SubscribeBar.module.scss'

const SubscribeBar = () => {
    return ( <div className={styles.subscribeBarMainContainer}>
        <Link href="#"><a>Newsletter</a></Link>
        <Link href="#"><a>Sign In</a></Link>
    </div> );
}
 
export default SubscribeBar;