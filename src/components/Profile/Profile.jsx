import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    debugger;
    const { store } = props;
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store={store}/>
        </div>
    )
}

export default Profile;