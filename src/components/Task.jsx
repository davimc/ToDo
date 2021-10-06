import './Task.css'
import React from 'react';

export default props => {
    return (
        <div className="Task">
            <div className="Box">
                <input type="radio" />
            </div>
            <div className="Content">
                <h4>{props.children}</h4>
                <p>{props.description}</p>
            </div>
            <div className="Date">
                <p>{props.date}</p>
            </div>
        </div>
    )
}