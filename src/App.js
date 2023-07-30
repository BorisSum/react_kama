import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App({ state, addPost, updateNewPostText, addMessage, updateNewMessageText }) {
    return (
        <div className="app_wrapper">
            <Header />
            <Navbar friends={state.sidebar.friends}/>
            <div className="app_wrapper_content">
                <Routes>
                    <Route path="/profile" element={ <Profile posts={ state.profilePage.posts } addPost={addPost} newPostText={state.profilePage.newPostText} updateNewPostText={updateNewPostText}/> }/>
                    <Route path="/dialogs/*" element={ <Dialogs state={ state.dialogsPage } addMessage={addMessage} newMessageText={state.dialogsPage.newMessageText} updateNewMessageText={updateNewMessageText}/> }/>
                    <Route path="/news" Component={News}/>
                    <Route path="/music" Component={Music}/>
                    <Route path="/settings" Component={Settings}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;