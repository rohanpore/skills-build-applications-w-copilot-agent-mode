import { Router } from 'express';
import Activity from '../models/Activity.js';

const router = Router();

router.get('/', async (req, res) => {
  const activities = await Activity.find().lean();
  res.send({ activities });
});

router.post('/', async (req, res) => {
  const activity = await Activity.create(req.body);
  res.status(201).send({ message: 'Activity logged', activity });
});

export default router;
