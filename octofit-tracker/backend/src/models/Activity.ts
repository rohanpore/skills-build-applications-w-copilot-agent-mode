import { Schema, model, Types } from 'mongoose';

export interface IActivity {
  userId: Types.ObjectId;
  type: string;
  durationMinutes: number;
  caloriesBurned: number;
  occurredAt: Date;
}

const activitySchema = new Schema<IActivity>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  caloriesBurned: { type: Number, required: true },
  occurredAt: { type: Date, required: true }
});

export default model<IActivity>('Activity', activitySchema);
