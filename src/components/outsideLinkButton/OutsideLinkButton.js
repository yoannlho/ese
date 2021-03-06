import React from 'react';
import { Button } from '@material-ui/core';
import OutsideLinkButtonStyle from './OutsideLinkButton.module.css';

const OutsideLinkButton = (props) => {
  const { urlLink, labelButton } = props;

  return (
    <Button
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
  )      
}

export default OutsideLinkButton;
