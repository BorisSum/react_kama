import React from 'react';
import { addMessageActionCreator, updateMessageTextActionCreator} from '../../../redux/dialogs-reducer';


const AddMessageForm = (props) => {
    const { dispatch, newText } = props;

    const addMessageHandler = () => {
        dispatch(addMessageActionCreator());
    }

    const mText = React.createRef();

    const updateMessageTextHandler = () => {
        dispatch(updateMessageTextActionCreator(mText.current.value));
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