import React from 'react';
import logo from '../picture/ese.svg';
import '../App.css';
import { Link } from "react-router-dom";
import AlignItemsList from './listItem/AlignItemsList';

const Intervenant = () => {
    return (
        <div className="App">
            <h3> 
                Intervenant 
            </h3>
            <AlignItemsList/>

        </div>
    )
}

export default Intervenant;