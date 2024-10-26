import style from "./Header.module.css"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.logoBox}>
            <Link to="/" className={style.headerLogo}>KOORDYNATOR</Link>
            </div>
            <div className={style.menuSvgBox}>
                <button className={style.btnMenu}>
                <svg width="30" height="30">
                    <use xlinkHref="/public/vite.svg#icon-menu" />
                </svg>
                </button>
            </div>
        </header>
    )
};

export default Header;