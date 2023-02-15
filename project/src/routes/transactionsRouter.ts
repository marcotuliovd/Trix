import { Router } from 'express';
import validateToken from '../middleware/validateToken';

import * as controller from '../controller/transactionsController';

const router = Router();

router.put('/deposit', validateToken, controller.deposit);
router.put('/withdrawal', validateToken, controller.withdrawal);

export default router;