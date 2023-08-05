import Dialogs from './Dialogs';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../redux/dialogs-reducer';

const DialogsContainer = (props) => {

    const { store } = props;
    const state = store.getState();

    const addMessage = () => {
        store.dispatch(addMessageActionCreator());
    }

    const updateNewMessageText = (text) => {
        store.dispatch(updateMessageTextActionCreator(text));
    }

    return <Dialogs 
                dialogsPage={state.dialogsPage} 
                addMessage={addMessage}
                updateNewMessageText={updateNewMessageText}
            />;
};

export default DialogsContainer;