import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

const AuthNav = () => {
    return (
        <div className={styles.registerLoginBox}>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Log in</NavLink>
        </div>
    );
};

export default AuthNav;