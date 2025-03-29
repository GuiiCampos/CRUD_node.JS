import express from 'express';
import {getUser, getUsers, createUser, deleteUser, updateUser} from '../controllers/controllerUsers.js'

const router = express.Router();

router.get('/', getUsers);

router.get('/:id', getUser);

router.post('/', createUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;