import { BrowserRouter } from 'react-router-dom';
import startState, {subscribe, addPost, updateNewPostText, addMessage, updateNewMessageText} from './components/redux/state';
import ReactDOM from 'react-dom';
import App from './App'

const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>
        </BrowserRouter>,
        document.getElementById('root')
    )
};

subscribe(rerenderEntireTree);

rerenderEntireTree(startState)