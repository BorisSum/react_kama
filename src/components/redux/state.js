import { rerenderEntireTree } from "../../render";

const state = {
    dialogsPage: {
        dialogs: [
            { id: 1, name: "state-User-1", avatar: "https://unionavatars.com/wp-content/uploads/2023/02/Mako-hero-web.webp" },
            { id: 2, name: "state-User-2", avatar: null},
            { id: 3, name: "state-User-3", avatar: "https://www.yugatech.com/wp-content/uploads/2020/09/Facebook-Avatar.jpg"},
            { id: 4, name: "state-User-4", avatar: null},
            { id: 5, name: "state-User-5", avatar: null},

            { id: 3, message: "state-Message - 3"},
            { id: 4, message: "state-Message - 4"}
        ]
    },

    profilePage: {
        posts: [
            { id: 1, message: "Hey, how are you?", likesCount: 10},
            { id: 2, message: "It's my first post!", likesCount: 15},
            { id: 3, message: "Yo it-kamasutra", likesCount: 20},
        ],
        newPostText: 'H'
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
}

export const addPost = () => {
    if (!state.profilePage.newPostText) return;
    const newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}


export default state;