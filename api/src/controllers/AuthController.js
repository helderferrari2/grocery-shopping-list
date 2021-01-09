import jwt from 'jsonwebtoken';
import User from '../schemas/User';

class AuthController {
  async login(request, response) {
    try {
      const { email, password } = request.body;

      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) return response.status(401).json({ error: 'User not found' });

      // Check if passwords match
      const passwordMatched = await user.validatePassword(password);
      if (!passwordMatched)
        return response.status(401).json({ error: "Password doesn't match" });

      // Generate Token
      const token = jwt.sign({ user_id: user.id }, process.env.APP_SECRET, {
        expiresIn: process.env.APP_LIMIT_SESSION,
      });

      return response.json({ user, token });
    } catch (e) {
      return response.status(400).json({ error: 'Failed on Login' });
    }
  }
}

export default new AuthController();
