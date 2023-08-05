import { BrowserRouter } from 'react-router-dom';
import { storeRedux as store } from './components/redux/redux-store';
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

store.subscribe(() => {
    rerenderEntireTree(store.getState());
});

rerenderEntireTree(store.getState());