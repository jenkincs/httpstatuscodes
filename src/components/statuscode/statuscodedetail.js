import CodeSnippet from '../codesnippet/codesnippet';
import styles from './statuscodedetail.module.css';
import {httpStatusCodesWithDetails} from '@/app/utils/data/httpstatuscodes';

const StatusCodeDetail = (param) => {
  const code = param.code;
  const codeItemDetail = httpStatusCodesWithDetails.find((codeItem) => {
    if (codeItem.code === parseInt(code)) {
      return codeItem;
    }
  });
  return (
    <div className={styles.statusCodeContainer}>
      <h2 className={styles.title}>{codeItemDetail.code} {codeItemDetail.meaning}</h2>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Explanation:</h3>
        <p>
          {codeItemDetail.explanation}        
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Usage:</h3>
        <p>
        {codeItemDetail.usage}
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Attentions:</h3>
        <ul className={styles.list}>
          {
            codeItemDetail.attentions.map((attention, index) => {
              return (
                <li className={styles.listitem} key={index}>{attention}</li>
              );
            })
          }
        </ul>
      </div>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Sample:</h3>
        <CodeSnippet sample={codeItemDetail.sample} />
      </div>
    </div>
  );
};

export default StatusCodeDetail;