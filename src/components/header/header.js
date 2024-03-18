import Image from 'next/image';
import styles from './header.module.css';

const Header = () => {
    return (
        <header>
            <div className={styles.headercontainer}>
                <div className={styles.logo}>
                    <a
                        href="/"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/http-logo.png"
                            alt="HTTP Status Codes Logo"
                            width={60}
                            height={60}
                            priority
                        />
                    </a>
                </div>
                <div>
                    <h1>
                        <a href="/"rel="noopener noreferrer">HTTP Status Codes</a>
                    </h1>
                </div>
            </div>
        </header>
    );
};

export default Header;