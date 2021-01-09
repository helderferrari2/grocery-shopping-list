import mongoose from 'mongoose';

const ListSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    // listItems: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'ListItem',
    // },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('List', ListSchema);
