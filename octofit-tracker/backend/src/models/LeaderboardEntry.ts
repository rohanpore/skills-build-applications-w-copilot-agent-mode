import { Schema, model } from 'mongoose';

export interface ILeaderboardEntry {
  userId: string;
  teamId?: string;
  score: number;
  rank: number;
}

const leaderboardEntrySchema = new Schema<ILeaderboardEntry>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  teamId: { type: Schema.Types.ObjectId, ref: 'Team' },
  score: { type: Number, required: true },
  rank: { type: Number, required: true }
});

export default model<ILeaderboardEntry>('LeaderboardEntry', leaderboardEntrySchema);
