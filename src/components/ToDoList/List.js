import React from 'react';
import Row from './Row';

function List({rows, setRows, dispatch}) {

    return (
        <div className="list-container">
            <ul className="list">
                {rows.map(row => (
                    <Row row={row} text={row.text} key={row.id} rows={rows} setRows={setRows} dispatch={dispatch} />
                    ))}
            </ul>
        </div>
    );
}

export default List;
