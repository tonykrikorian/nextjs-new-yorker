import Link from 'next/link'
import styles from './Navbar.module.scss'
import LinkStyles from '../subscribebar/SubscribeBar.module.scss'
import {menuData} from './data'

const NavBar = () => {
    return ( <div className={styles.navbar}>
        {menuData.map(item=> <Link href="#" key={item.id}><a className={LinkStyles.subscribelink} >{item.name}</a></Link> )}
    </div> );
}
 
export default NavBar;