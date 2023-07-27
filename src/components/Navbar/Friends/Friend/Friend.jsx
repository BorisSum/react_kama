import style from './Friend.module.css';
const Friend = ({ name, avatar }) => {
    return (
        <div className={ style.friend }>
            <img src={ avatar } alt="avatar"/>
            <h4>{ name }</h4>
        </div>
    );
};

export default Friend;