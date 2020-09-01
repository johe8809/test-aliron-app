import React, { useState, useEffect, useRef } from 'react';
import { observer } from 'mobx-react';
import Input from '@material-ui/core/TextField';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
  FormControlLabel,
  Checkbox,
  FormGroup,
  makeStyles,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { colors } from '../../../config/constants';

const useStyles = makeStyles({
  iconVisibility: { marginTop: 0 },
  labelCheckbox: { color: colors.gray },
  helperText: { margin: '-8px 0 16px 14px' },
});

const CustomInput = ({
  placeholder = '',
  label = '',
  onChange = null,
  value = '',
  error = null,
  required = false,
  store = null,
  type = 'text',
  name,
  fullWidth = false,
}) => {
  if (store && !name) throw new Error('Dev Error: name prop is required when using a store');
  if (store && (onChange || value || error || required))
    throw new Error('Dev Error: you can not use onChange, value, error, or required props when using a store');

  const classes = useStyles();

  // Refs
  const inputLabel = useRef();

  // States
  const [showPassword, setShowPassword] = useState(false);
  const [labelWidth, setLabelWidth] = useState(0);

  const field = store && store[name];

  useEffect(() => {
    if (inputLabel.current) {
      setLabelWidth(inputLabel.current.offsetWidth);
    }
  }, []);

  const renderInput = () => {
    switch (type) {
      case 'password':
        return (
          <FormControl
            variant={'outlined'}
            fullWidth={fullWidth}
            margin={'dense'}
            color={'secondary'}
            error={field ? field.error : error}
          >
            <InputLabel shrink ref={inputLabel} htmlFor={'outlined-adornment-password'}>
              {`${label} ${store && field.required ? '*' : ''}`}
            </InputLabel>
            <OutlinedInput
              id={name}
              name={name}
              type={showPassword ? 'text' : 'password'}
              value={field ? field.value : value}
              placeholder={placeholder}
              onChange={field ? (e) => store.setField(e) : onChange}
              required={field ? field.required : required}
              labelWidth={labelWidth}
              notched
              aria-describedby={'component-helper-text'}
              endAdornment={
                <InputAdornment position={'end'}>
                  <IconButton
                    style={{ marginTop: 0 }}
                    aria-label={'toggle password visibility'}
                    onClick={() => setShowPassword(!showPassword)}
                    edge={'end'}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText id={'component-helper-text'}>
              {field ? field.errorMessages.toJS().join(' ') : ''}
            </FormHelperText>
          </FormControl>
        );
      case 'checkbox':
        const checkValue = field ? field.value === true : value;
        const target = { name, value: !checkValue };
        return (
          <FormControl
            required={field ? field.required : required}
            error={field ? field.error : error}
            component="fieldset"
          >
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkValue}
                    onChange={field ? () => store.setField({ target }) : () => onChange(!checkValue)}
                    name={name}
                    color={'secondary'}
                    size={'small'}
                  />
                }
                label={label}
                className={classes.labelCheckbox}
              />
            </FormGroup>
            <FormHelperText className={classes.helperText}>
              {field ? field.errorMessages.toJS().join(' ') : ''}
            </FormHelperText>
          </FormControl>
        );
      default:
        return (
          <Input
            type={type}
            required={field ? field.required : required}
            onChange={field ? (e) => store.setField(e) : onChange}
            value={field ? field.value : value}
            error={field ? field.error : error}
            placeholder={placeholder}
            label={label}
            name={name}
            variant={'outlined'}
            color={'secondary'}
            margin={'dense'}
            helperText={field ? field.errorMessages.toJS().join(' ') : ''}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        );
    }
  };

  return <>{renderInput()}</>;
};

export default observer(CustomInput);
