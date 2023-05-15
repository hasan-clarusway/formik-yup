import * as Yup from 'yup';

export const signUpSchema = Yup.object(). shape({
    fullName: Yup.string()
    .max(20, 'fullname must be 20 characters or less.')
    .required('Please fill in the fullName.'),

  email: Yup.string()
    .email('Please enter a valid email address.')
    .required('Please fill in the email.'),

  password: Yup.string()
  .min(8, 'Password must contain at least 8 characters.')
  .max(16, 'The password must contain a maximum of 16 characters.')
  .required('Please fill in the password.')
  .matches(/\d+/, 'Password must contain numbers.')
  .matches(/[a-z]+/, 'Password must contain lowercase letters.')
  .matches(/[A-Z]+/, 'Password must contain capital letters.')
  .matches(/[!,?{}><%&$#£+-.]+/, 'Your password must contain special characters.'), 
});