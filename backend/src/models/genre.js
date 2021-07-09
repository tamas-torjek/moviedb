import mongoose from 'mongoose';

const Genre = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: Number,
  name: String
});

export default mongoose.model('Genre', Genre, 'genres');
