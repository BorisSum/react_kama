import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <>
            <div className={style.profile_header}>
                <img src="https://t3.ftcdn.net/jpg/03/15/34/90/360_F_315349043_6ohfFyx37AFusCKZtGQtJR0jqUxhb25Y.jpg" alt="alt"/>
            </div>
            <div className={ style.description_wrapper}>
                ava + description
            </div>
        </>
    )
}

export default ProfileInfo;