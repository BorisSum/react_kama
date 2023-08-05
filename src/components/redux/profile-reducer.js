const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

export const profileReducer = (state, action) => {

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