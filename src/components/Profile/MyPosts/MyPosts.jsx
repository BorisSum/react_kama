import React from 'react';
import style from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (props) => {

    const { posts, addPost, newPostText, updateNewPostText } = props;
    const postElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)
    const newPostTextElement = React.createRef();

    const changeNewPostText = () => {
        updateNewPostText(newPostTextElement.current.value);
    }

    return (
            <div className={style.my_posts_wrapper}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea
                            ref={newPostTextElement}
                            value={newPostText}
                            onChange={changeNewPostText}
                            cols="30"
                            rows="5"
                            autoFocus
                        />
                    </div>
                    <div>
                        <button onClick={ addPost }>Add Post</button>
                    </div>
                </div>
                <div className={style.posts}>
                    { postElements }
                </div>
            </div>
    )
}

export default MyPosts;