import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App({ state, dispatch }) {
    debugger;
    return (
        <div className="app_wrapper">
            <Header />
            <Navbar friends={state.sidebar.friends}/>
            <div className="app_wrapper_content">
                <Routes>
                    <Route path="/profile" element={ <Profile dispatch={dispatch} posts={ state.profilePage.posts } newPostText={state.profilePage.newPostText}/> }/>
                    <Route path="/dialogs/*" element={ <Dialogs dispatch={dispatch} state={ state.dialogsPage } newMessageText={state.dialogsPage.newMessageText}/> }/>
                    <Route path="/news" Component={News}/>
                    <Route path="/music" Component={Music}/>
                    <Route path="/settings" Component={Settings}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;