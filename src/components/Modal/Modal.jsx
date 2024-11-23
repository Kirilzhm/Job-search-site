import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import styles from "./Modal.module.css"

const Modal = () => {
    const navigate = useNavigate();

    const closeModal = () => {
        navigate(-1); 
      };

    return(
        <div className={styles.modal}>
            <div className={styles.modalBox}>
                <button onClick={closeModal}>
                    <svg width="30" height="30">
                        <use xlinkHref="vite.svg#icon-x"/>
                    </svg>
                </button>
                <Link className={styles.linkes}>O nas</Link>
                <Link className={styles.linkes}>FAQ</Link>
                <Link className={styles.linkes}>Kim mogę zacząć pracować?</Link>
            </div>
        </div>
    )
};

export default Modal;