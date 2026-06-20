import { Router } from 'express';
import Team from '../models/Team.js';
const router = Router();
router.get('/', async (req, res) => {
    const teams = await Team.find().lean();
    res.send({ teams });
});
router.post('/', async (req, res) => {
    const team = await Team.create(req.body);
    res.status(201).send({ message: 'Team created', team });
});
export default router;
