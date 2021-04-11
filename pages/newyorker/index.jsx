import Head from 'next/head'
import SubscriberBar from '../../components/subscribebar/Index'
const Index = () => {
    return (<div className="main-container">
        <Head>
            <title>The New Yorker</title>
            <link rel="shortcut icon" href="yorker_favicon.ico" type="image/x-icon"/>
        </Head>
        <SubscriberBar newsletter={'#'} login={'#'} search={'#'} subscribe={'#'}/>
    </div>  );
}
 
export default Index;