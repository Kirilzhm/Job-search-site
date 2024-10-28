import styles from "./About-us.module.css"

const AboutUs = () => {

    return (
        <div className={styles.aboutUsBox}>
            <div className={styles.aboutUsSmallBox}>
            <div className={styles.aboutUsTextBox}>
                <h3 className={styles.aboutUsText}> <span className={styles.firstTextAboutUs}>KOORDYNATOR</span> to nowoczesna agencja pracy. Pomogliśmy już ponad tysiącowi osób znaleźć pracę, która im się podoba. Przeprowadzimy Cię od osoby poszukującej pracy do doświadczonego specjalisty w swojej dziedzinie. <span className={styles.lastTextAboutUs}>Szukamy Ciebie!</span></h3>
            </div>
            <div className={styles.aboutUsTextBox}>
                <h3 className={styles.aboutUsSecondText}>Dlaczego jesteśmy lepsi?</h3>
                <ul className={styles.aboutUsGoodList}>
                    <li>
                        <h4 className={styles.aboutUsItemText}>Bezpieczne zatrudnienie</h4>
                        <p className={styles.aboutUsItemSmallText}>Dokładnie sprawdzamy pracodawców i oferujemy tylko sprawdzone oferty pracy</p>
                    </li>
                    <li>
                        <h4 className={styles.aboutUsItemText}>Wsparcie na każdym etapie</h4>
                        <p className={styles.aboutUsItemSmallText}>Pomagamy w załatwieniu dokumentów i adaptacji do nowego miejsca pracy</p>
                    </li>
                    <li>
                        <h4 className={styles.aboutUsItemText}>Szeroki wybór ofert pracy</h4>
                        <p className={styles.aboutUsItemSmallText}>Znajdziemy pracę zgodną z Twoimi umiejętnościami i zainteresowaniami</p>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default AboutUs;