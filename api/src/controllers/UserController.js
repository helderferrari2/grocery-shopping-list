import User from '../schemas/User';

class UserController {
  async index(request, response) {
    const users = await User.find();
    return response.json(users);
  }

  async store(request, response) {
    try {
      const { name, email, password } = request.body;

      // Check if email exists
      const checkUserExists = await User.findOne({ email });
      if (checkUserExists)
        return response.status(400).json({ error: 'User already exists!!!' });

      // Store data in database
      const user = await User.create({ name, email, password });
      return response.json(user);
    } catch (err) {
      return response.status(400).json({ error: 'Failed on create' });
    }
  }

  async show(request, response) {
    const { id } = request.params;
    const user = await User.findById(id);
    if (!user) return response.status(404).json({ error: 'User not found!!!' });
    return response.json(user);
  }

  async update(request, response) {
    try {
      const { name, email, password } = request.body;

      // Find and update data in database
      const user = await User.findByIdAndUpdate(
        request.user_id,
        { name, email, password },
        { new: true }
      );

      return response.json(user);
    } catch (err) {
      return response.status(404).json({ error: 'Failed on update' });
    }
  }

  async delete(request, response) {
    try {
      await User.findByIdAndRemove(request.user_id);
      return response.json('Successfully');
    } catch (err) {
      return response.status(404).json({ error: 'Failed on delete' });
    }
  }
}

export default new UserController();
