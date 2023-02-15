import { Router } from 'express';

import * as controller from '../controller/coinController';
import validateToken from '../middleware/validateToken';

const router = Router();

router.get('/', controller.quotation);
router.get('/:code', controller.quotationCode);
router.post('/sellcoin', validateToken, controller.sellCoin);

export default router;