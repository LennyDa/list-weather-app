import React, { useState, useReducer} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faListCheck} from '@fortawesome/free-solid-svg-icons';
import Form from './Form';
import List from './List';
import {todoListReducer, storedRows} from '../../reducers/todoListReducer';
import {ACTIONS} from '../../assests/constants';
import './ToDoList.scss';

const ToDoList = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [inputText, setInputText] = useState('');
    const [rows, dispatch] = useReducer(todoListReducer, storedRows);


    const toggleWidget = () => {
        setIsOpen(!isOpen);
    }
    const submitListHandler = (e) => {
        e.preventDefault();
        if (inputText.trim().length === 0) {
            return;
        } else {
            dispatch({ type: ACTIONS.ADD_ROW, payload: { inputText } })
            setInputText('');
        }
    }

    return (
        <div className="todo-widget-container">
            <div className="show-todo-widget-container">
                <button title="Toggle to-do list" className="show-todo-widget" onClick={toggleWidget}><FontAwesomeIcon icon={faListCheck}/></button>
            </div>
            {isOpen && <div className="todo-widget">
                <header className="todo-widget__header widget-header">
                    <h1>To-Do List</h1>
                </header>
                <Form submitListHandler={submitListHandler} inputText={inputText} setInputText={setInputText}
                      rows={rows}
                      dispatch={dispatch}/>
                <List rows={rows} dispatch={dispatch}/>
            </div>}
        </div>
    );
}
export default ToDoList;
