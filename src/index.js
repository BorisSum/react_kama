import { BrowserRouter } from 'react-router-dom';
import store from './components/redux/state';
import ReactDOM from 'react-dom';
import App from './App'

const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    )
};

store.subscribe(rerenderEntireTree);

rerenderEntireTree(store.getState());