import React from 'react';
import MyPosts from './MyPosts';
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../redux/profile-reducer';

const MyPostsContainer = (props) => {

    const { store } = props;
    const state = store.getState();

    const changeNewPostText = (text) => {
        store.dispatch(updateNewPostTextActionCreator(text));
    }

    const addPost = () => {
        store.dispatch(addPostActionCreator());
    }

    return <MyPosts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} addPost={addPost} changeNewPostText={changeNewPostText}/>
}

export default MyPostsContainer;