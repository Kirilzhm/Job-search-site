import styles from "./About-us.module.css"

const AboutUs = () => {

    return (
        <div className={styles.aboutUsBox}>
            <div className={styles.aboutUsTextBox}>
                <h3 className={styles.aboutUsText}>KOORDYNATOR to nowoczesna agencja pracy. Pomogliśmy już ponad tysiącowi osób znaleźć pracę, która im się podoba. Przeprowadzimy Cię od osoby poszukującej pracy do doświadczonego specjalisty w swojej dziedzinie. Szukamy Ciebie!</h3>
            </div>
        </div>
    )
}

export default AboutUs;