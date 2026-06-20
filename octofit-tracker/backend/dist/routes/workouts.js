import { Router } from 'express';
import Workout from '../models/Workout.js';
const router = Router();
router.get('/', async (req, res) => {
    const workouts = await Workout.find().lean();
    res.send({ workouts });
});
router.post('/', async (req, res) => {
    const workout = await Workout.create(req.body);
    res.status(201).send({ message: 'Workout created', workout });
});
export default router;
