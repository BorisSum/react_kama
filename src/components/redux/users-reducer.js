// const ADD_POST = 'ADD_POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
    users: [
        {id: 1, fullName: 'Dmitry', status: 'status 1', location: {country: 'Russia', city: 'Moscow'} },
        {id: 2, fullName: 'Alex', status: 'status 2', location: {country: 'Belarus', city: 'Minsk'} },
        {id: 3, fullName: 'Vasiya', status: 'status 3', location: {country: 'Uzbekistan', city: 'Fergana'} },
    ]
};

export const profileReducer = (state=initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}

// export const addPostActionCreator = () => ({
//     type: ADD_POST
// });

// export const updateNewPostTextActionCreator = text => ({
//     type: UPDATE_NEW_POST_TEXT,
//     newText: text
// });