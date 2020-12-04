import { Router } from 'express';
import UserController from './controllers/UserController';
// import validation from './validators';

import AuthController from './controllers/AuthController';
import authMiddleware from './middlewares/auth';

const routes = new Router();

/**
 * Public Routes
 */
routes.post('/login', AuthController.login);
routes.post('/register', UserController.store);

/**
 * Private Routes
 */
routes.use(authMiddleware);
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.put('/users', UserController.update);
routes.delete('/users', UserController.delete);

// Route not found
routes.all('*', (req, res) =>
  res.status(404).json({ error: 'Route Not Found!!!' })
);

export default routes;
