import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Users from './components/Users/Users';

function App() {
    return (
        <div className="app_wrapper">
            <Header />
            <Navbar/>
            <div className="app_wrapper_content">
                <Routes>
                    <Route path="/profile" element={ <Profile/> }/>
                    <Route path="/dialogs/*" element={ <DialogsContainer/> }/>
                    <Route path="/news" Component={News}/>
                    <Route path="/music" Component={Music}/>
                    <Route path="/settings" Component={Settings}/>
                    <Route path="/users" element={ <Users/> }/>
                </Routes>
            </div>
        </div>
    );
}

export default App;