import { profileReducer } from './profile-reducer';
import { dialogsReducer } from './dialogs-reducer';
import { sidebarReducer } from './sidebar-reducer';

const store = {
    _state: {
        dialogsPage: {
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
        },
    
        profilePage: {
            posts: [
                { id: 1, message: "Hey, how are you?", likesCount: 10},
                { id: 2, message: "It's my first post!", likesCount: 15},
                { id: 3, message: "Yo it-kamasutra", likesCount: 20},
            ],
            newPostText: ''
        },
    
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: "friend-1",
                    avatarUrl: "https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                },
                {
                    id: 2,
                    name: "friend-2",
                    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSyjzcbCX6Hxz0CY2ze6N71kN6kioXT4PEgWzLFLUaGxSGLB8ggDP0-ceLft_5SRuadec&usqp=CAU"
                },
                {
                    id: 3,
                    name: "friend-3",
                    avatarUrl: "https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA=w240-h480-rw"
                },
                {
                    id: 4,
                    name: "friend-4",
                    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGbPeBR_u5lmWwyPaLT9WgK0IgxMc2XmXBDehboc5c8W_LU7689pHPYMoQvg8kDdcxPr4&usqp=CAU"
                }
            ]
        }
    },
    
    _callRenderSubscriber() {
        console.log('No subscribers yet!');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callRenderSubscriber = observer;
    },

    dispatch(action) {
        
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callRenderSubscriber(this._state);
    }
}

export default store;
window.store = store;