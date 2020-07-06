import React from 'react';
import AlignItemsList from './listItem/AlignItemsList';
import './filecss/IntervenantStyle.css';

const Intervenant = () => {
  return (
    <div className="App">
      <h3> 
        Intervenant 
      </h3>
      <AlignItemsList className="align_item"/>
    </div>
  )
}

export default Intervenant;