import { Router } from 'express';
import ExampleController from './app/controllers/ExampleController';

const routes = new Router();

routes.get('/', ExampleController.show);

export default routes;
