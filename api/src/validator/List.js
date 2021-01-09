import * as Yup from 'yup';

export const listStore = Yup.object().shape({
  name: Yup.string().required(),
  completed: Yup.boolean(),
});

export const listUpdate = Yup.object().shape({
  name: Yup.string(),
  completed: Yup.boolean(),
});
