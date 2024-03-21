import Image from "next/image";
import styles from "./page.module.css";
import Head from 'next/head';
import {httpStatusCodes} from './utils/data/httpstatuscodes';
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="favicon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.codecontainer}>
        <div className={styles.codeblock}>
            {Object.entries(httpStatusCodes).filter(code => (parseInt(code) < 200)).map(([code, meaning]) => (
                    //use Link to navigate to the status code page
                    <ul key={code}>
                      <li className={styles.codeitem}>
                        <Link href={`/statuscode/${code}-${meaning.toLowerCase().replaceAll(' ','-')}`} title={`${code} ${meaning}`} className={styles.customLink}>
                        {code} - {meaning}
                        </Link>
                      </li>
                    </ul>
                  ))}
          </div>
          <div className={styles.codeblock}>
            {Object.entries(httpStatusCodes).filter(code => (parseInt(code) >= 200 && parseInt(code)< 300)).map(([code, meaning]) => (
                    //use Link to navigate to the status code page
                    <ul key={code}>
                      <li className={styles.codeitem}>
                        <Link href={`/statuscode/${code}-${meaning.toLowerCase().replaceAll(' ','-')}`}  title={`${code} ${meaning}`} className={styles.customLink}>
                        {code} - {meaning}
                        </Link>
                      </li>
                    </ul>
                  ))}
          </div>
          <div className={styles.codeblock}>
            {Object.entries(httpStatusCodes).filter(code => (parseInt(code) >= 300 && parseInt(code)< 400)).map(([code, meaning]) => (
                    //use Link to navigate to the status code page
                    <ul key={code}>
                      <li className={styles.codeitem}>
                        <Link href={`/statuscode/${code}-${meaning.toLowerCase().replaceAll(' ','-')}`}  title={`${code} ${meaning}`} className={styles.customLink}>
                        {code} - {meaning}
                        </Link>
                      </li>
                    </ul>
                  ))}
          </div>
          <div className={styles.codeblock}> 
            {Object.entries(httpStatusCodes).filter(code => (parseInt(code) >= 400 && parseInt(code)< 416)).map(([code, meaning]) => (
                    //use Link to navigate to the status code page
                    <ul key={code}>
                      <li className={styles.codeitem}>
                        <Link href={`/statuscode/${code}-${meaning.toLowerCase().replaceAll(' ','-')}`} title={`${code} ${meaning}`}  className={styles.customLink}>
                        {code} - <span>{meaning}</span>
                        </Link>
                      </li>
                    </ul>
                  ))}
          </div>
          <div className={styles.codeblock}> 
            {Object.entries(httpStatusCodes).filter(code => (parseInt(code) >= 416 && parseInt(code)< 500)).map(([code, meaning]) => (
                    //use Link to navigate to the status code page
                    <ul key={code}>
                      <li className={styles.codeitem}>
                        <Link href={`/statuscode/${code}-${meaning.toLowerCase().replaceAll(' ','-')}`} title={`${code} ${meaning}`}  className={styles.customLink}>
                        {code} - {meaning}
                        </Link>
                      </li>
                    </ul>
                  ))}
          </div>
          <div className={styles.codeblock}>
            {Object.entries(httpStatusCodes).filter(code => (parseInt(code) >= 500)).map(([code, meaning]) => (
                    //use Link to navigate to the status code page
                    <ul key={code}>
                      <li className={styles.codeitem}>
                        <Link href={`/statuscode/${code}-${meaning.toLowerCase().replaceAll(' ','-')}`} title={`${code} ${meaning}`}  className={styles.customLink}>
                        {code} - {meaning}
                        </Link>
                      </li>
                    </ul>
                  ))}
          </div>
        </div>
      </main>
    </div>
  );
}
