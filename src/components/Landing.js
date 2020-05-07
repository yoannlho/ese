import React from 'react';
import logo from '../picture/ese.svg';
import { Link } from "react-router-dom";
import OutsideLinkButton from './outsideLinkButton/OutsideLinkButton';

const Landing = () => {
  return (
    <div className="App">
      <h3>
          ESIEA SECURE EDITION 2020
      </h3>
      <OutsideLinkButton urlLink="https://www.esiea.fr/esiea-secure-edition-2017/" labelButton="Plus d'info ici"/>
    </div>
  );
}

export default Landing;

