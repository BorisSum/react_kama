import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = ({ friends }) => {
    const setActive = ({ isActive }) => isActive? styles.active : null;

    return (
        <nav className={styles.nav}>
            <div className={styles.item}><NavLink to="/profile" className={setActive}>Profile</NavLink></div>
            <div className={styles.item}><NavLink to="/dialogs" className={setActive}>Messages</NavLink></div>
            <div className={styles.item}><NavLink to="/news" className={setActive}>News</NavLink></div>
            <div className={styles.item}><NavLink to="/music" className={setActive}>Music</NavLink></div>
            <div className={styles.item}><NavLink to="/settings" className={setActive}>Settings</NavLink></div>
            <Friends friends={friends}/>
        </nav>
    )
}

export default Navbar;