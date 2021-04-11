import Head from 'next/head'
import styles from '.'
import LogoBar from '../../components/logobar/LogoBar'


const Index = () => {
    return (<div className="main-container">
        <Head>
            <title>The New Yorker</title>
            <link rel="shortcut icon" href="yorker_favicon.ico" type="image/x-icon"/>
        </Head>
        <LogoBar/>
    </div>  );
}
 
export default Index;