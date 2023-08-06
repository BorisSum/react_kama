import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./Message/AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
    debugger;
    const {dialogsPage, addMessage, updateNewMessageText} = props;

    const {dialogs, messages, newMessageText} = dialogsPage;

    const dialogElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
    const messageElements = messages.map( m => <Message message={m.message} />);

    return (
        <div className={ style.dialog_wrapper }>
            <div className={ style.dialogs }>
                { dialogElements }
            </div>

            <div className={ style.messages }>
                <div>
                    { messageElements }
                </div>
                <AddMessageForm 
                    newMessageText={newMessageText}
                    addMessage={addMessage}
                    updateNewMessageText={updateNewMessageText}
                />
            </div>
        </div>
    );
};

export default Dialogs;