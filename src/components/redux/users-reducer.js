const FOLLOW_UNFOLLOW = Symbol();
const SET_USERS = Symbol();

const initialState = {
    userList: [
        {id: 1, followed: true, fullName: 'Dmitry', status: 'status 1', location: {country: 'Russia', city: 'Moscow'} },
        {id: 2, followed: false, fullName: 'Alex', status: 'status 2', location: {country: 'Belarus', city: 'Minsk'} },
        {id: 3, followed: true, fullName: 'Vasiya', status: 'status 3', location: {country: 'Uzbekistan', city: 'Fergana'} },
        {id: 4, followed: false, fullName: 'Petia', status: 'status 4', location: {country: 'Ukrain', city: 'Kiev'} },
    ]
};

export const userReducer = (state=initialState, action) => {

    switch (action.type) {
        case FOLLOW_UNFOLLOW:
            return {
                ...state,
                userList: state.userList.map( u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: !u.followed}
                    }
                    return u;
                })
            }

        case SET_USERS:
            return {
                ...state,
                userList: [...state.userList, ...action.users]
            }

        default:
            return state
    }
}

export const followUnfollowAC = userId => ({ type: FOLLOW_UNFOLLOW, userId});
export const setUsersAC = users => ({ type: SET_USERS, users});