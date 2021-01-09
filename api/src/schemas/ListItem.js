import mongoose from 'mongoose';

const ListItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0.0,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    list: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'List',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('ListItem', ListItemSchema);
