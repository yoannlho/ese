import React from 'react';
import OutsideLinkButton from './outsideLinkButton/OutsideLinkButton';

const Landing = () => {
  return (
    <div className="App">
      <h3>
          ESIEA SECURE EDITION 2020
      </h3>
      <OutsideLinkButton urlLink="https://www.esiea.fr/esiea-secure-edition-2017/" labelButton="Plus d'info ici" className="outside_button_position"/>
    </div>
  );
}

export default Landing;

