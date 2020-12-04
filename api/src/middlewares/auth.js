import jwt from 'jsonwebtoken';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if token is present on request
  if (!authHeader) return res.status(401).json({ error: 'Token not provider' });

  // Check if token is valid
  const token = authHeader.split(' ')[1];

  try {
    const decoded = await jwt.verify(token, process.env.APP_SECRET);
    req.user_id = decoded.user_id;
    return next();
  } catch (e) {
    return res.status(401).json({ error: 'Token is invalid' });
  }
};
