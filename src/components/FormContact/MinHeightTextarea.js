import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import MinHeightStyle from './MinHeightTextarea.module.css';

const MinHeightTextarea = (props) => {
  const { label, rowsMin, placeholder, className } = props;

    return (
      <TextareaAutosize className={ [MinHeightStyle.form, className].join('') }
        aria-label={ label } 
        rowsMin={ rowsMin } 
        placeholder={ placeholder } 
      />
    )
}

export default MinHeightTextarea;