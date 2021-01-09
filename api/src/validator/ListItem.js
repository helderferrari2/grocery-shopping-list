import * as Yup from 'yup';

export const itemAll = Yup.object().shape({
  list_id: Yup.string().required(),
});

export const itemStore = Yup.object().shape({
  list_id: Yup.string().required(),
  name: Yup.string().required(),
  completed: Yup.boolean(),
  quantity: Yup.number().required().positive().integer(),
  price: Yup.number(),
});

export const itemUpdate = Yup.object().shape({
  list_id: Yup.string().required(),
  name: Yup.string(),
  completed: Yup.boolean(),
  quantity: Yup.number().required().positive().integer(),
  price: Yup.number(),
});
