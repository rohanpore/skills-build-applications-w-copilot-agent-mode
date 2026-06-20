import { Schema, model } from 'mongoose';

export interface ITeam {
  name: string;
  description: string;
  members: string[];
}

const teamSchema = new Schema<ITeam>({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

export default model<ITeam>('Team', teamSchema);
