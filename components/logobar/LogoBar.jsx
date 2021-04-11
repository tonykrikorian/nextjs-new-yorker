import styles from './LogoBar.module.scss';
import SubscribeBar from '../subscribebar/Index'

const LogoBar = () => {
    return (<div className={styles.logobarMainContainer}>
        <img src="/the_new_yorker_logo.svg" alt="New Yorker Logo"/>
        <SubscribeBar newsletter={'#'} login={'#'} search={'#'} subscribe={'#'}/>
    </div>  );
}
 
export default LogoBar;