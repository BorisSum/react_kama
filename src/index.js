import { BrowserRouter } from 'react-router-dom';
import { storeRedux as store } from './components/redux/redux-store';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App'

    // ReactDOM.render(
    //     <BrowserRouter>
    //         <Provider store={store}>
    //             <App />
    //         </Provider>
    //     </BrowserRouter>,
    //     document.getElementById('root')
    // )


const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    )
};

store.subscribe(() => {
    rerenderEntireTree();
});

rerenderEntireTree();