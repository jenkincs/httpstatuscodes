import Head from 'next/head';
import StatusCodeDetail from '@/components/statuscode/statuscodedetail';
import styles from './status.module.css';

const HttpStatusPage = ({params}) => {
    const { codemeaning } = params;
    const code = codemeaning.split('-')[0];
    return (
        <div>
            <Head>
                <title>HTTP Status Code 200</title>
            </Head>
            <main className={styles.main}>
                <StatusCodeDetail code={code}/>
            </main>
        </div>
    );
};

export default HttpStatusPage;