import React from 'react';
import logo from '../picture/ese.svg';
//import './App.css';
import { Link } from "react-router-dom";
import OutsideLinkButton from './outsideLinkButton/OutsideLinkButton';

const Landing = () => {
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
                <p>
                    ESIEA SECURE EDITION 2020
                </p>
                <OutsideLinkButton urlLink="https://www.esiea.fr/esiea-secure-edition-2017/" labelButton="Plus d'info ici"/>
            </header>
        </div>
    );
}

export default Landing;

