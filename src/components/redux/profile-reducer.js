const ADD_POST = Symbol();
const UPDATE_NEW_POST_TEXT = Symbol();

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

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }

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