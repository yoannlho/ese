import React from 'react';
import { Button } from '@material-ui/core';
import OutsideLinkButtonStyle from './OutsideLinkButton.module.css';

const OutsideLinkButton = (props) => {
  const { urlLink, labelButton, className } = props;

  return (
    <div>
      <Button className={ className }
        onClick={() => {
          window.location = urlLink;
        }}
        variant="contained" 
        size="medium"
        color="primary" 
        className={ OutsideLinkButtonStyle.margin }
      >
        { labelButton }
      </Button>
    </div>
  )      
}

export default OutsideLinkButton;
