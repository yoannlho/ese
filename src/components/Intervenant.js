import React from 'react';
import logo from '../picture/ese.svg';
import '../App.css';
import { Link } from "react-router-dom";
import AlignItemsList from './listItem/AlignItemsList';

const Intervenant = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                    <div class="wrapper">  
                        <div class="container">
                            <ul class="menu" rel="sam1">  
                                <li class="active"><Link to="/">Accueil</Link></li>  
                                <li><Link to="/Atelier">Atelier</Link></li>
                                <li><Link to="/Intervenant">Intervenant</Link></li>
                                <li><Link to="/Contacts">Contacts</Link></li>
                            </ul>
                        </div>
                    </div>
                    <h3> 
                        Intervenant 
                    </h3>
                    <AlignItemsList/>
            </header>
        </div>
    )
}

export default Intervenant;