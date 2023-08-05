import React from 'react';


const AddMessageForm = (props) => {

    const { newMessageText, addMessage, updateNewMessageText } = props;

    const addMessageHandler = () => {
        addMessage();
    }

    const mText = React.createRef();

    const updateMessageTextHandler = () => {
        updateNewMessageText(mText.current.value)
    }

    return (
        <div>
            <textarea
                ref={mText}
                value={newMessageText}
                onChange={ updateMessageTextHandler }
            >
            </textarea>
            <div>
                <button
                    onClick={ addMessageHandler }
                >
                    Add Message
                </button>
            </div>
        </div>
    );
};

export default AddMessageForm;