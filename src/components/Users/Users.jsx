import { connect } from 'react-redux';
import { UserInfo } from './UserInfo';
import { followUnfollowAC, setUsersAC } from '../redux/users-reducer';
import styles from './Users.module.css';

const Users = (props) => {
    const { userList, setUsers, followChange } = props;

    if (!userList.length) {
        setUsers([
            {id: 1, avatar: 'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-a-cigarette_52683-34828.jpg?size=626&ext=jpg&ga=GA1.2.1549583125.1686547092&semt=sph', followed: true, fullName: 'Dmitry', status: 'status 1', location: {country: 'Russia', city: 'Moscow'} },
            {id: 2, avatar: 'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-a-cigarette_52683-34828.jpg?size=626&ext=jpg&ga=GA1.2.1549583125.1686547092&semt=sph', followed: false, fullName: 'Alex', status: 'status 2', location: {country: 'Belarus', city: 'Minsk'} },
            {id: 3, avatar: 'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-a-cigarette_52683-34828.jpg?size=626&ext=jpg&ga=GA1.2.1549583125.1686547092&semt=sph', followed: true, fullName: 'Vasiya', status: 'status 3', location: {country: 'Uzbekistan', city: 'Fergana'} },
            {id: 4, avatar: 'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-a-cigarette_52683-34828.jpg?size=626&ext=jpg&ga=GA1.2.1549583125.1686547092&semt=sph', followed: false, fullName: 'Petro', status: 'status 4', location: {country: 'Ukrain', city: 'Kiev'} },
        ]);
    }

    return (
        <div className={styles.user_page_container}>
            { userList.map( u => <UserInfo user={u} followHandler={followChange}/>)}
        </div>
    )
}

const mapStateToProps = state => ({
    userList: state.usersPage.userList
});

const mapDispatchToProps = dispatch => ({
    followChange: id => dispatch(followUnfollowAC(id)),
    setUsers: users => dispatch(setUsersAC(users))
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);