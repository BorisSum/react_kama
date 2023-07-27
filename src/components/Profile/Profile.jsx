import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ state, addPost }) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={state.posts} addPost={addPost}/>
        </div>
    )
}

export default Profile;