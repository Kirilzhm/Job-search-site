import styles from "./Footer.module.css"

const Footer = () => {

    return(
        <footer className={styles.footerBox}>
           <div className={styles.footerContainer}>
           <div className={styles.footerTextBox}>
                <h4 className={styles.footerText}>Napisz do nas, <span className={styles.smallSpanText}>a my znajdziemy Twoją wymarzoną pracę!</span></h4>
            </div>
           <div>
           <ul className={styles.footerList}>
                <li className={styles.footerItem}>
                    <a className={styles.footerItemLink} href="mailto: 111@gmail.com">zlatobogatoblablabla@gmail.com</a>
                </li>
                <li className={styles.footerItem}>
                    <a className={styles.footerItemLink} href="tel: +48 727 839 366">tel: +48 727 839 366</a>
                </li>
            </ul>
           </div>
           </div>
        </footer>
    )};

    export default Footer;