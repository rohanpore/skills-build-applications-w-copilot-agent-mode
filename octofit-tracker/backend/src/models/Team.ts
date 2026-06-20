import { Schema, model, Types } from 'mongoose';

export interface ITeam {
  name: string;
  description: string;
  members: Types.ObjectId[];
}

const teamSchema = new Schema<ITeam>({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

export default model<ITeam>('Team', teamSchema);
