import React from 'react';


const AddMessageForm = (props) => {
    const { newText, addMessage, updateNewMessageText } = props;

    const addMess = () => {
        addMessage();
    }

    const mText = React.createRef();

    const updateMessageText = () => {
        updateNewMessageText(mText.current.value);
    }

    return (
        <div>
            <textarea
                ref={mText}
                value={newText}
                onChange={ updateMessageText }
            >
            </textarea>
            <div>
                <button
                    onClick={addMess}
                >
                    Add Message
                </button>
            </div>
        </div>
    );
};

export default AddMessageForm;