import style from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;
    const defaultAvatar = "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?w=2000";
    const setActive = ({ isActive }) => isActive? style.user_active : null;

    return (
        <div className={ style.dialog }>
            <div className={ style.avatar }>
                <img src={ props.avatar ? props.avatar : defaultAvatar } alt="avatar"/>
            </div>
            <NavLink to={ path } className={setActive}>{ props.name }</NavLink>
        </div>
    );
};

export default DialogItem;