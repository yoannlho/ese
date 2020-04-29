import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import asyncValidate from './asyncValidate';
//import validate from './validate';

const renderTextField = (
  { input, label, meta: { touched, error }, ...custom },
) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const renderCheckbox = ({ input, label }) => (
  <Checkbox
    label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
  />
);

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    valueSelected={ input.value }
    onChange={(event, value) => input.onChange(value)}
  />
);

const renderSelectField = (
  { input, label, meta: { touched, error }, children, ...custom },
) => (
  <Select
    floatingLabelText={label}
    errorText={ touched && error }
    { ...input }
    onChange={(event, index, value) => input.onChange(value)}
    children={ children }
    { ...custom }
  />
);

const MaterialUiForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <Field
          name="firstName"
          component={ renderTextField }
          label="First Name"
        />
      </div>
      <div>
        <Field name="lastName" component={ renderTextField } label="Last Name" />
      </div>
      <div>
        <Field name="email" component={ renderTextField } label="Email" />
      </div>
      <div>
        <Field name="sex" component={ renderRadioGroup }>
          <Radio value="male" label="male" />
          <Radio value="female" label="female" />
        </Field>
      </div>
      <div>
        <Field
          name="favoriteColor"
          component={ renderSelectField }
          label="Favorite Color"
        >
          <MenuItem value="ff0000" primaryText="Red" />
          <MenuItem value="00ff00" primaryText="Green" />
          <MenuItem value="0000ff" primaryText="Blue" />
        </Field>
      </div>
      <div>
        <Field name="employed" component={ renderCheckbox } label="Employed" />
      </div>
      <div>
        <Field
          name="notes"
          component={ renderTextField }
          label="Notes"
          multiLine={ true }
          rows={ 2 }
        />
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={ reset }>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'MaterialUiForm', // a unique identifier for this form
  //validate,
  asyncValidate,
})(MaterialUiForm);
