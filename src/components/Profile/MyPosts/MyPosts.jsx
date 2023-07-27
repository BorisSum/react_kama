import React from 'react';
import style from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = ({ posts, addPost }) => {
    const postElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)
    const newPostTextElement = React.createRef();
    const addPostEventHandler = () => {
        addPost(newPostTextElement.current.value);
        newPostTextElement.current.value = "";
    }

    return (
            <div className={style.my_posts_wrapper}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea
                            ref={newPostTextElement}
                            cols="30"
                            rows="5"
                        ></textarea>
                    </div>
                    <div>
                        <button onClick={ addPostEventHandler }>Add Post</button>
                    </div>
                </div>
                <div className={style.posts}>
                    { postElements }
                </div>
            </div>
    )
}

export default MyPosts;