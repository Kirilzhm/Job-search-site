import { Link } from "react-router-dom";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose }) => {
    return (
        <div className={`${styles.modal} ${isOpen ? styles.modalOpen : ''}`}>
            <div className={styles.modalBox}>
                <button onClick={onClose} className={styles.closeBtn}>
                    <svg width="30" height="30">
                        <path
                            fill="none"
                            stroke="#000000"
                            style={{ stroke: 'var(--color1, #000000)' }}
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeMiterlimit="4"
                            strokeWidth="2.2857"
                            d="M24 8l-16 16"
                        />
                        <path
                            fill="none"
                            stroke="#000000"
                            style={{ stroke: 'var(--color1, #000000)' }}
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeMiterlimit="4"
                            strokeWidth="2.2857"
                            d="M8 8l16 16"
                        />
                    </svg>
                </button>
                <ul className={styles.modalList}>
                    <Link className={styles.linkes}>O nas</Link>
                    <Link className={styles.linkes}>FAQ</Link>
                    <Link className={styles.linkes}>Kim mogę zacząć pracować?</Link>
                </ul>
            </div>
        </div>
    );
};

export default Modal;