function validateData(schema) {
  return async (req, res, next) => {
    try {
      await schema.validate(req.body, { abortEarly: false });
      return next();
    } catch (e) {
      return res.status(400).json({ error: e.name, messages: e.inner });
    }
  };
}

export default validateData;
