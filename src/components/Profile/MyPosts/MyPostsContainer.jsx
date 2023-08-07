import MyPosts from './MyPosts';
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../redux/profile-reducer';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ profilePage: state.profilePage });

const mapDispatchToProps = dispatch => ({
    addPost: () => dispatch(addPostActionCreator()),
    changeNewPostText: text => dispatch(updateNewPostTextActionCreator(text))
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;