import { connect } from 'react-redux';

const Users = (props) => {
    debugger
    const { userList } = props;

    return (
        <ul>
            {
                userList.map( u => <li key={u.id}>{u.id}: {u.fullName}, {u.status}, {u.location.country}</li>)
            }
        </ul>
    )
}

const mapStateToProps = state => ({
    userList: state.usersPage.userList
});

export default connect(mapStateToProps)(Users);