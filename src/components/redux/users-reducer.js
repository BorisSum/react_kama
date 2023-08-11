const FOLLOW_UNFOLLOW = Symbol();
const SET_USERS = Symbol();

const initialState = {
    userList: []
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