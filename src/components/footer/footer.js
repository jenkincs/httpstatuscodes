import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.copyright}>
      <p>&copy; {new Date().getFullYear()} httpstatuscodes.cc. All rights reserved.</p>
    </footer>
  );
};

export default Footer;