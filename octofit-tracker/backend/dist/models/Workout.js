import { Schema, model } from 'mongoose';
const workoutSchema = new Schema({
    title: { type: String, required: true },
    difficulty: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    caloriesEstimate: { type: Number, required: true },
    createdAt: { type: Date, required: true, default: () => new Date() }
});
export default model('Workout', workoutSchema);
