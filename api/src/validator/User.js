import * as Yup from 'yup';

export const userStore = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required().min(6),
});

export const userUpdate = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email(),
  password: Yup.string().min(6),
});
