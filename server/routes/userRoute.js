import express from 'express';

import { create, deleteUserById, getAllUsers, getUserById, updateUserById } from '../controller/userController.js';

const route = express.Router();

route.post('/user', create);
route.get('/users', getAllUsers);
route.get('/user/:id', getUserById);
route.get('update/user/:id', updateUserById);
route.get('delete/user/:id', deleteUserById);

export default route;