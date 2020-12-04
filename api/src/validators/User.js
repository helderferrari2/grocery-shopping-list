import * as Yup from 'yup';

class UserValidator {
  store() {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });
    return schema;
  }

  update() {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      password: Yup.string().min(6),
    });
    return schema;
  }
}

export default new UserValidator();
