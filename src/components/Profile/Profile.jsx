import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    const { posts, addPost, newPostText, updateNewPostText } = props;
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts} addPost={addPost} newPostText={newPostText} updateNewPostText={updateNewPostText}/>
        </div>
    )
}

export default Profile;