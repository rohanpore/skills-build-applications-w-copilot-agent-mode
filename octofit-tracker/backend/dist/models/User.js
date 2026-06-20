import { Schema, model } from 'mongoose';
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    teamId: { type: Schema.Types.ObjectId, ref: 'Team' },
    joinedAt: { type: Date, required: true, default: () => new Date() }
});
export default model('User', userSchema);
