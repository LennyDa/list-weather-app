import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash, faCheck} from '@fortawesome/free-solid-svg-icons';
import { ACTIONS } from '../../assests/constants';


const Row = ({text, row, dispatch}) => {
    const deleteHandler = (e) => {
        e.target.closest('.row').classList.add('fall');
    }

    const onTransitionEnd = () => {
        dispatch({ type: ACTIONS.DELETE_ROW , payload: { id : row.id } })
    }
    return (
        <div className="row" onTransitionEnd={() => onTransitionEnd()}>
            <li className={`row-item${row.completed ? ' completed' : ''}`}>{text}</li>
            <button className={`complete-btn${row.completed ? ' completed' : ''}`} onClick={() => dispatch({ type: ACTIONS.TOGGLE_ROW , payload: { id : row.id } })}><FontAwesomeIcon icon={faCheck} /></button>
            <button className="trash-btn" onClick={(e) => deleteHandler(e)}><FontAwesomeIcon icon={faTrash} /></button>
        </div>
    );

}

export default Row;