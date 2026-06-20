import { Schema, model, Types } from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  teamId?: Types.ObjectId;
  joinedAt: Date;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  teamId: { type: Schema.Types.ObjectId, ref: 'Team' },
  joinedAt: { type: Date, required: true, default: () => new Date() }
});

export default model<IUser>('User', userSchema);
