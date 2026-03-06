import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema({
  page: {
    type: String,
    required: true,
    enum: ['youth', 'drama', 'events'],
  },
  postSlug: {
    type: String,
    default: 'general',
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
  },
  comment: {
    type: String,
    required: true,
    maxlength: 1000,
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Comment || mongoose.model('Comment', CommentSchema)
