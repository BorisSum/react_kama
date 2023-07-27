import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.item}>
            <img src="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg" alt="ava"></img>
            { props.message }
            <div>
                <span>{`Likes: ${props.likesCount}`}</span>
            </div>
        </div>
    )
}

export default Post;