import * as yup from 'yup';

const signUpValidation = {
  nickname: yup
    .string()
    .min(2, 'El nickname debe tener mínimo 2 caracteres')
    .max(50, 'El nickname debe tener máximo 50 caracteres')
    .matches(/^[a-zA-Z]+$/, 'Please use a valid name')
    .required('Campo obligatorio'),
  email: yup.string().email('Por favor ingrese un email valido').required('Campo obligatorio'),
  password: yup
    .string()
    .min(8, 'La contraseña debe tener mínimo 8 caracteres')
    .matches(/^(?=.*[a-z]){1,}(?=.*[A-Z]){1,}(?=.*[0-9]){1,}(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]){1,}.{4,}$/)
    .required('Campo obligatorio'),
  confirmPassword: yup
    .string()
    .min(8, 'La contraseña debe tener mínimo 8 caracteres')
    .matches(/^(?=.*[a-z]){1,}(?=.*[A-Z]){1,}(?=.*[0-9]){1,}(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]){1,}.{4,}$/)
    .oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden')
    .required('Campo obligatorio'),
};

export default {
  schema: yup.object().shape(signUpValidation),
};
