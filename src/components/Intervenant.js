import React from 'react';
import AlignItemsList from './listItem/AlignItemsList';
import './filecss/IntervenantStyle.css';

const Intervenant = () => {
  return (
    <div className="App">
      <h3 className="title"> 
        Intervenant 
      </h3>
      <span className="alignItem">
      <AlignItemsList/>
      </span>
    </div>
  )
}

export default Intervenant;