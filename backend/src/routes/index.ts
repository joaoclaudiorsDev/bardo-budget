import express from 'express';
import { indexController } from '../controllers/index.controller';
import { signupController } from '../controllers/signup.controller';

const router = express.Router();

router.get('/', indexController);

router.post('/signup', signupController);


export default router;
