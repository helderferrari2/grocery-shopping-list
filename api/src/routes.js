import { Router } from 'express';

// Validators
import validator from './middlewares/validator';
import authLogin from './validator/Auth';
import { userStore, userUpdate } from './validator/User';
import { listStore, listUpdate } from './validator/List';
import { itemAll, itemStore, itemUpdate } from './validator/ListItem';

// Middlewares
import authMiddleware from './middlewares/auth';

// Controllers
import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';
import ListController from './controllers/ListController';
import ListItemController from './controllers/ListItemController';

const routes = new Router();

/**
 * Public Routes
 */
routes.post('/login', validator(authLogin), AuthController.login);
routes.post('/register', validator(userStore), UserController.store);

/**
 * Private Routes
 */
routes.use(authMiddleware);

// Users
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.put('/users', validator(userUpdate), UserController.update);
routes.delete('/users', UserController.delete);

// Grocery list
routes.get('/lists', ListController.index);
routes.post('/lists', validator(listStore), ListController.store);
routes.put('/lists/:id', validator(listUpdate), ListController.update);
routes.delete('/lists/:id', ListController.delete);

// Grocery List Items
routes.post(
  '/listItems/all',
  validator(itemAll),
  ListItemController.getAllListItemsByListId
);
routes.post('/listItems', validator(itemStore), ListItemController.store);
routes.put('/listItems/:id', validator(itemUpdate), ListItemController.update);
routes.delete('/listItems/:id', ListItemController.delete);

// Route not found
routes.all('*', (req, res) =>
  res.status(404).json({ error: 'Route Not Found!!!' })
);

export default routes;
