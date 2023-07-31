import React from 'react';


const AddMessageForm = (props) => {
    const { dispatch, newText } = props;

    const addMessageHandler = () => {
        dispatch({
            type: 'ADD_MESSAGE'
        });
    }

    const mText = React.createRef();

    const updateMessageTextHandler = () => {
        dispatch({
            type: 'UPDATE_NEW_MESSAGE_TEXT',
            newText: mText.current.value
        });
    }

    return (
        <div>
            <textarea
                ref={mText}
                value={newText}
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