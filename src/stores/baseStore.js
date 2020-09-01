import { action, decorate } from 'mobx';

class Base {
  setValue(field, value) {
    this[field].value = value;
  }

  setError(field, hasError = true, messages = []) {
    this[field].error = hasError;
    this[field].errorMessages = messages;
  }

  setField({ target }) {
    const { name, value } = target;
    this[name].value = value;
    this[name].error = false;
    this[name].errorMessages = [];
  }

  toggle(name) {
    this[name].value = !this[name].value;
  }

  getProperties() {
    return Object.getOwnPropertyNames(this);
  }

  getAllValues({ discard = [] } = {}) {
    const keys = this.getProperties().filter((k) => !discard.includes(k));
    let values = {};
    keys.forEach((k) => (values[k] = this[k].value));
    return values;
  }

  removeAllErrors() {
    const keys = this.getProperties();
    keys.forEach((name) => {
      if (this[name] && this[name].error) {
        this[name].error = false;
      }
    });
  }
}

decorate(Base, {
  setValue: action,
  setError: action,
  setField: action,
  toggle: action,
});

export default Base;
