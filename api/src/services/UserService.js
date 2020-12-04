import User from '../models/User';

class UserService {
  async store({ name, email, password }) {
    try {
      const checkUserExists = await User.findOne({ email });
      if (checkUserExists) {
        throw new Error('User already exists!!!');
      }

      const user = await User.create({ name, email, password });
      return user;
    } catch (err) {
      throw new Error('Failed on create user');
    }
  }

  async getUserById(id) {
    try {
      const user = await User.findById(id);
      return user;
    } catch (err) {
      throw new Error('User not found!!!');
    }
  }
}

export default new UserService();
