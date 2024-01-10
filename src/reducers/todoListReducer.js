import { ACTIONS } from '../assests/constants';
import { v4 as uuidv4 } from 'uuid';

const STORAGE_IDENTIFIER = 'list-widget';

function newRow(inputText) {
    return {text: inputText, completed: false, id: uuidv4()};
}

export const storedRows =  localStorage.getItem(STORAGE_IDENTIFIER) === null ? [] : JSON.parse(localStorage.getItem(STORAGE_IDENTIFIER));

export const todoListReducer = (rows, action) => {
    switch (action.type) {
        case ACTIONS.ADD_ROW:
            localStorage.setItem(STORAGE_IDENTIFIER,  JSON.stringify([...rows, newRow(action.payload.inputText)]));
            return [...rows, newRow(action.payload.inputText)]
        case ACTIONS.TOGGLE_ROW:
            const updatedRowStatus = rows.map(row => row.id === action.payload.id ? { ...row, completed: !row.completed } : row)
            localStorage.setItem(STORAGE_IDENTIFIER, JSON.stringify(updatedRowStatus));
            return updatedRowStatus
        case ACTIONS.DELETE_ROW:
            const updatedRows = rows.filter(row => action.payload.id !== row.id);
            localStorage.setItem(STORAGE_IDENTIFIER,  JSON.stringify(updatedRows));
            return updatedRows

        default:
            return rows
    }
}