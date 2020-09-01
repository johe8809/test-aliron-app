import { observable, decorate } from 'mobx';
import BaseStore from './baseStore';

const initialStateForm = {
  value: '',
  error: false,
  errorMessages: [],
  required: true,
};

class SignUp extends BaseStore {
  nickname = initialStateForm;
  email = initialStateForm;
  password = initialStateForm;
  confirmPassword = initialStateForm;
}

decorate(SignUp, {
  nickname: observable,
  email: observable,
  password: observable,
  confirmPassword: observable,
});

export default new SignUp();
