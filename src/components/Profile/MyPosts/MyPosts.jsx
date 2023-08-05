import React from 'react';
import style from './MyPosts.module.css';
import Post from './Posts/Post';
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../redux/profile-reducer';

const MyPosts = (props) => {

    const { dispatch, posts, newPostText } = props;
    const postElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)
    const newPostTextElement = React.createRef();

    const changeNewPostTextHandler = () => {
        dispatch(updateNewPostTextActionCreator(newPostTextElement.current.value));
    }

    const addPostHandler = () => {
        dispatch(addPostActionCreator());
    }

    return (
            <div className={style.my_posts_wrapper}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea
                            ref={newPostTextElement}
                            value={newPostText}
                            onChange={changeNewPostTextHandler}
                            cols="30"
                            rows="5"
                        />
                    </div>
                    <div>
                        <button onClick={ addPostHandler }>Add Post</button>
                    </div>
                </div>
                <div className={style.posts}>
                    { postElements }
                </div>
            </div>
    )
}

export default MyPosts;