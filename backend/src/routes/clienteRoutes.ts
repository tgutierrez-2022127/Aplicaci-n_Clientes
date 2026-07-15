import { Router } from 'express';
import { ClienteController } from '../controllers/clienteController';

const router = Router();

router.get('/clientes', ClienteController.getAll);
router.get('/clientes/:codigo', ClienteController.getByCodigo);
router.post('/clientes', ClienteController.create);
router.put('/clientes/:codigo', ClienteController.update);
router.delete('/clientes/:codigo', ClienteController.delete);

export default router;