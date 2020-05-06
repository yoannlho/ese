import React from 'react';
import logo from '../picture/ese.svg';
import '../App.css';
import { Link } from "react-router-dom";
import MinHeightTextarea from './FormContact/MinHeightTextarea';

const Contacts = () => {
    return (
        <div className="App">
                    <h3> 
                        Contacts 
                    </h3>
                    <MinHeightTextarea label="minimum height" rowsMin={3} placeholder="Minimum 3 rows"/>
        </div>
    )
}

export default Contacts;