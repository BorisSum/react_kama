import styles from './UserInfo.module.css';

export const UserInfo = (props) => {
    const { user, followHandler } = props;

    return (
        <div className={styles.user_info_wrapper}>
            <div className={styles.user_info_img}>
                <img src={user.avatar} alt="user avatar" />
            </div>
            <div className={styles.user_info_main}>
                <h4>{user.fullName}</h4>
                <p>{user.status}</p>
            </div>
            <div className={styles.user_info_location}>
                <div>{user.location.country}</div>
                <div>{user.location.city}</div>
            </div>
            <div className={styles.user_info_button}>
                <button onClick={() => followHandler(user.id)}>{user.followed ? 'Unfollow' : 'Follow'}</button>
            </div>
        </div>
    )
}