import { Schema, model } from 'mongoose';
const leaderboardEntrySchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    teamId: { type: Schema.Types.ObjectId, ref: 'Team' },
    score: { type: Number, required: true },
    rank: { type: Number, required: true }
});
export default model('LeaderboardEntry', leaderboardEntrySchema);
