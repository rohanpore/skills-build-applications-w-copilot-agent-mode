import mongoose from 'mongoose';
import User from '../models/User.js';
import Team from '../models/Team.js';
import Activity from '../models/Activity.js';
import LeaderboardEntry from '../models/LeaderboardEntry.js';
import Workout from '../models/Workout.js';
const MONGO_URI = process.env.MONGO_URI ?? 'mongodb://127.0.0.1:27017/octofit_db';
/**
 * Seed the octofit_db database with test data.
 */
async function seed() {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB for seeding:', MONGO_URI);
    await Promise.all([
        User.deleteMany(),
        Team.deleteMany(),
        Activity.deleteMany(),
        LeaderboardEntry.deleteMany(),
        Workout.deleteMany()
    ]);
    const users = await User.create([
        { name: 'Ayesha Khan', email: 'ayesha.khan@example.com', joinedAt: new Date('2025-11-12') },
        { name: 'Marcus Lee', email: 'marcus.lee@example.com', joinedAt: new Date('2026-01-05') },
        { name: 'Elena Roberts', email: 'elena.roberts@example.com', joinedAt: new Date('2026-02-18') }
    ]);
    const teams = await Team.create([
        { name: 'Ocean Runners', description: 'Weekly coastal trail runners', members: [users[0]._id, users[1]._id] },
        { name: 'Peak Performers', description: 'High intensity indoor training team', members: [users[2]._id] }
    ]);
    users[0].teamId = teams[0]._id;
    users[1].teamId = teams[0]._id;
    users[2].teamId = teams[1]._id;
    await Promise.all(users.map((user) => user.save()));
    const activities = await Activity.create([
        { userId: users[0]._id, type: 'Cycling', durationMinutes: 45, caloriesBurned: 420, occurredAt: new Date('2026-06-18T07:30:00Z') },
        { userId: users[1]._id, type: 'Running', durationMinutes: 35, caloriesBurned: 380, occurredAt: new Date('2026-06-19T08:00:00Z') },
        { userId: users[2]._id, type: 'Strength Training', durationMinutes: 55, caloriesBurned: 510, occurredAt: new Date('2026-06-19T17:15:00Z') }
    ]);
    const workouts = await Workout.create([
        { title: 'Morning HIIT Blast', difficulty: 'Hard', durationMinutes: 30, caloriesEstimate: 350, createdAt: new Date('2026-06-10') },
        { title: 'Recovery Yoga Flow', difficulty: 'Easy', durationMinutes: 40, caloriesEstimate: 190, createdAt: new Date('2026-06-12') },
        { title: 'Endurance Ride', difficulty: 'Medium', durationMinutes: 60, caloriesEstimate: 620, createdAt: new Date('2026-06-14') }
    ]);
    const leaderboard = await LeaderboardEntry.create([
        { userId: users[0]._id, teamId: teams[0]._id, score: 1580, rank: 1 },
        { userId: users[1]._id, teamId: teams[0]._id, score: 1450, rank: 2 },
        { userId: users[2]._id, teamId: teams[1]._id, score: 1370, rank: 3 }
    ]);
    console.log('Seed the octofit_db database with test data');
    console.log({
        users: users.length,
        teams: teams.length,
        activities: activities.length,
        workouts: workouts.length,
        leaderboard: leaderboard.length
    });
    await mongoose.disconnect();
}
seed().catch((error) => {
    console.error('Seeding error:', error);
    process.exit(1);
});
