import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    const { dispatch, posts, newPostText } = props;
    return (
        <div>
            <ProfileInfo />
            <MyPosts dispatch={dispatch} posts={posts} newPostText={newPostText}/>
        </div>
    )
}

export default Profile;