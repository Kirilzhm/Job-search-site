import style from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = ({ openModal }) => {
    return (
        <header className={style.header}>
            <div className={style.logoBox}>
                <Link to="/" className={style.headerLogo}>
                    KOORDYNATOR
                </Link>
            </div>
            <div className={style.menuSvgBox}>
                <button onClick={openModal} className={style.btnMenu}>
                <svg width="30" height="30" className={style.btnSvg}>
                    <path fill="none" stroke="#fafafa" style={{ stroke: 'var(--color1, #fafafa)' }} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2857" d="M4 11.333h24" />
                    <path fill="none" stroke="#fafafa" style={{ stroke: 'var(--color1, #fafafa)' }} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2857" d="M4 20.667h24" />
                </svg>

                </button>
                <ul className={style.HeaderLinksList}>
                    <li>
                        <Link className={style.headerLinks}>O nas</Link>
                    </li>
                    <li>
                        <Link className={style.headerLinks}>FAQ</Link>
                    </li>
                    <li>
                        <Link className={style.headerLinks}>Kim mogę zacząć pracować?</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
