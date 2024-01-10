import React from 'react';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Form({inputText, setInputText, submitListHandler}) {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    return (
        <form className="add-form">
            <input placeholder="Add"
                   name = "add"
                   value = {inputText}
                   onChange={inputTextHandler}
            />
            <button className={`add-button${inputText.trim().length === 0 ? " empty" : " add"}`}  type="submit" onClick={submitListHandler}><FontAwesomeIcon icon={faPlus} /></button>
        </form>
    );
}

export default Form;
