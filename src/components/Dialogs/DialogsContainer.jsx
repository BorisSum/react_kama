import Dialogs from './Dialogs';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../redux/dialogs-reducer';
import {connect} from 'react-redux';

// const DialogsContainer = (props) => {

//     const { store } = props;
//     const state = store.getState();

//     const addMessage = () => {
//         store.dispatch(addMessageActionCreator());
//     }

//     const updateNewMessageText = (text) => {
//         store.dispatch(updateMessageTextActionCreator(text));
//     }

//     return <Dialogs 
//                 dialogsPage={state.dialogsPage} 
//                 addMessage={addMessage}
//                 updateNewMessageText={updateNewMessageText}
//             />;
// };

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {dispatch(addMessageActionCreator())},
        updateNewMessageText: text => {dispatch(updateMessageTextActionCreator(text))}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;