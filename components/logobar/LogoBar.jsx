import styles from './LogoBar.module.scss';
import SubscribeBar from '../subscribebar/Index'
import NavBar from '../navbar/Navbar';
const LogoBar = () => {
    return (
    <div className={styles.main}>
        <div className={styles.logobarMainContainer}>
            <div className={styles.leftnav}></div>
            <img className={styles.yorkerlogo} src="/the_new_yorker_logo.svg" alt="New Yorker Logo"/>
            <SubscribeBar newsletter={'#'} login={'#'} search={'#'} subscribe={'#'}/>
        </div>
        <NavBar/>
    </div>  );
}
 
export default LogoBar;