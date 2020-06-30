import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import MinHeightStyle from './MinHeightTextarea.module.css';

const MinHeightTextarea = (props) => {
  const { label, rowsMin, placeholder, className } = props;

    return (
    <div className={ className }>
      <TextareaAutosize className={ MinHeightStyle.form }
        aria-label={ label } 
        rowsMin={ rowsMin } 
        placeholder={ placeholder } 
      />
    </div>
    )
}

export default MinHeightTextarea;