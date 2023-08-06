const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const initialState = {
    dialogs: [
        { id: 1, name: "state-User-1", avatar: "https://unionavatars.com/wp-content/uploads/2023/02/Mako-hero-web.webp" },
        { id: 2, name: "state-User-2", avatar: null},
        { id: 3, name: "state-User-3", avatar: "https://www.yugatech.com/wp-content/uploads/2020/09/Facebook-Avatar.jpg"},
        { id: 4, name: "state-User-4", avatar: null},
        { id: 5, name: "state-User-5", avatar: null},
    ],
    messages: [
        { id: 1, message: "state-Message - 1"},
        { id: 2, message: "state-Message - 2"},
        { id: 3, message: "state-Message - 3"},
        { id: 4, message: "state-Message - 4"}
    ],
    newMessageText: ''
};

export const dialogsReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            if (!state.newMessageText) return;
            const newMessage = {
                id: 5,
                message: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return {...state};

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return {...state};

        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
});

export const updateMessageTextActionCreator = text => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
});