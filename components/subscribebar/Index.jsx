import Link from 'next/link'
import styles from './SubscribeBar.module.scss'

const SubscribeBar = ({newsletter,login,subscribe,search}) => {
    return ( <div className={styles.subscribeBarMainContainer}>
        <Link href={newsletter} ><a className={styles.subscribelink}>Newsletter</a></Link>
        <Link href={login} ><a className={styles.subscribelink}>Sign In</a></Link>
        <Link href={subscribe}><a className={styles.subscribebtn}>Subscribe</a></Link>
        <Link href={search}><span className={styles.searchicon}><img src="./search_black_24dp.svg" alt=""/></span></Link>
    </div> );
}
 
export default SubscribeBar;