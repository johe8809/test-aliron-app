import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { useHistory } from 'react-router-dom';
import signUpValidation from '../../validation/signUpValidation';
import { signUp } from '../../services/auth';
import View from './view';

function SignUp({ signUpStore }) {
  //#region States
  const [errorMessage, setErrorMessage] = useState(null);
  //#endregion States

  //#region Props
  const history = useHistory();
  //#endregion Props

  //#region Methods
  function handleCloseErrorMessage() {
    setErrorMessage(null);
  }

  async function onSignUp() {
    try {
      const data = signUpStore.getAllValues();
      await signUpValidation.schema.validate(data, { strict: true, abortEarly: false });
      const response = await signUp(data);
      if (response.error) {
        setErrorMessage(response.error);
      } else {
        history.push('/');
      }
    } catch (err) {
      if (err && err.name === 'ValidationError') {
        err.inner.forEach((e) => {
          signUpStore.setError(e.path, true, e.errors);
        });
      }
    }
  }
  //#endregion Methods

  return (
    <View
      signUpStore={signUpStore}
      onSignUp={onSignUp}
      errorMessage={errorMessage}
      handleCloseErrorMessage={handleCloseErrorMessage}
    />
  );
}

SignUp.propTypes = {
  signUpStore: PropTypes.object,
};

export default inject('signUpStore')(observer(SignUp));
