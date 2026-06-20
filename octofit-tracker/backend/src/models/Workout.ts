import { Schema, model } from 'mongoose';

export interface IWorkout {
  title: string;
  difficulty: string;
  durationMinutes: number;
  caloriesEstimate: number;
  createdAt: Date;
}

const workoutSchema = new Schema<IWorkout>({
  title: { type: String, required: true },
  difficulty: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  caloriesEstimate: { type: Number, required: true },
  createdAt: { type: Date, required: true, default: () => new Date() }
});

export default model<IWorkout>('Workout', workoutSchema);
