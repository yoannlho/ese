import React from 'react';
import OutsideLinkButton from './outsideLinkButton/OutsideLinkButton';
import './filecss/LandingStyle.css';

const Landing = () => {
  return (
    <div className="App">
      <h3 className="position_title_landing">
          ESIEA SECURE EDITION 2020
      </h3>
      <OutsideLinkButton urlLink="https://www.esiea.fr/esiea-secure-edition-2017/" labelButton="Plus d'info ici"/>
    </div>
  );
}

export default Landing;

