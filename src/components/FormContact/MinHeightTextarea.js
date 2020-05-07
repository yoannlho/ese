import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const MinHeightTextarea = (props) => {
  const {label, rowsMin, placeholder} = props;
  
    return (
      <TextareaAutosize 
        aria-label={ label } 
        rowsMin={ rowsMin } 
        placeholder={ placeholder } 
      />
    )
}

export default MinHeightTextarea;