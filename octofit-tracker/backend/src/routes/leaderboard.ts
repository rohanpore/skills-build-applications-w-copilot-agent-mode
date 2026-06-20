import { Router } from 'express';
import LeaderboardEntry from '../models/LeaderboardEntry.js';

const router = Router();

router.get('/', async (req, res) => {
  const leaderboard = await LeaderboardEntry.find().sort({ rank: 1 }).lean();
  res.send({ leaderboard });
});

export default router;
