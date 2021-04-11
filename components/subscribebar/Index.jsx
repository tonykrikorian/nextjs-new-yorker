import Link from 'next/link'
import styles from './SubscribeBar.module.scss'

const SubscribeBar = () => {
    return ( <div className={styles.subscribeBarMainContainer}>
        <Link href="#" ><a className={styles.subscribelink}>Newsletter</a></Link>
        <Link href="#" ><a className={styles.subscribelink}>Sign In</a></Link>
        <Link href="#"><a className={styles.subscribebtn}>Subscribe</a></Link>
        <Link href="#"><span className={styles.searchicon}><img src="./search_black_24dp.svg" alt=""/></span></Link>
    </div> );
}
 
export default SubscribeBar;