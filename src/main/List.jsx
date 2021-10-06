import './List.css'
import React from 'react';
import Task from '../components/Task';

export default props => {
    return (
        <div className="List">
            <h1 className="Title">Tarefas</h1>
            <div className="Tasks">
                <ul className="List">
                    <li><Task description="de preferência no fim do dia" date="02/10/2021">Regar plantas</Task></li>
                    <li><Task date="02/10/2021">Regar plantas</Task></li>
                    <li><Task description="de preferência no fim do dia" date="02/10/2021">Regar plantas</Task></li>

                </ul>
            </div>
        </div>
    );
}