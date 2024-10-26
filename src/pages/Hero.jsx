import styles from "./Hero.module.css"

const Hero = () => {

    return(
        <div className={styles.heroBox}>
            <div className={styles.heroTexteBox}>
            <h1 className={styles.heroText}><span className={styles.heroTextSpan}>KOORDYNATOR</span> - Twój niezawodny partner w zatrudnieniu w Polsce</h1>
            </div>
        </div>
    )
}

export default Hero;