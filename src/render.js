import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import { addPost, updateNewPostText } from "./components/redux/state";
import App from './App';


export const rerenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>
    );
}
