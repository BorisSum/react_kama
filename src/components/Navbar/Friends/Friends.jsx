import Friend from "./Friend/Friend";
import style from './Friends.module.css'

const Friends = ({ sidebar }) => {

    const onlineFriendsList = sidebar.friends.map( f => <Friend id={f.id} name={f.name} avatar={f.avatarUrl}/>)
    return (
        <div className={ style.friends_wrapper }>
            <h3>Friends online</h3>
            <div className={ style.friends_inner }>
                {onlineFriendsList}
            </div>
        </div>
    );
};

export default Friends;