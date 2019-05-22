import { Router } from 'express';
import * as affichesController from '@controllers/affichesController';
import requireAuth from '@middlewares/requireAuth';

const affichesRoutes = Router();

// List all affiches
affichesRoutes.get('/', affichesController.list);

// Create an affiche
affichesRoutes.post('/', requireAuth, affichesController.create);

// Get a specific affiche
affichesRoutes.get('/:afficheId', affichesController.fetch);

// Update
affichesRoutes.patch('/:afficheId', requireAuth, affichesController.edit);

// Delete
affichesRoutes.delete('/afficheId', affichesController.remove);

export default affichesRoutes;
