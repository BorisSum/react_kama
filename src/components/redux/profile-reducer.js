const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
    posts: [
        { id: 1, message: "Hey, how are you?", likesCount: 10},
        { id: 2, message: "It's my first post!", likesCount: 15},
        { id: 3, message: "Yo it-kamasutra", likesCount: 20},
    ],
    newPostText: ''
};

export const profileReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            if (!state.newPostText) return;
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const updateNewPostTextActionCreator = text => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});