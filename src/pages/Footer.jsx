import styles from "./Footer.module.css"

const Footer = () => {

    return(
        <footer className={styles.footerBox}>
            <div className={styles.footerTextBox}>
                <h4 className={styles.footerText}>Napisz do nas, <span className={styles.smallSpanText}>a my znajdziemy Twoją wymarzoną pracę!</span></h4>
            </div>
        </footer>
    )};

    export default Footer;