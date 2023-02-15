import { Router } from 'express';

import * as controller from '../controller/userController';

const router = Router();

router.post('/', controller.postUser);

export default router;