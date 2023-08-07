import Dialogs from './Dialogs';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../redux/dialogs-reducer';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({ dialogsPage: state.dialogsPage });

const mapDispatchToProps = (dispatch) => ({
    addMessage: () => dispatch(addMessageActionCreator()),
    updateNewMessageText: text => dispatch(updateMessageTextActionCreator(text))
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;