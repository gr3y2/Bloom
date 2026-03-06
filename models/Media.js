import mongoose from 'mongoose'

const MediaSchema = new mongoose.Schema({
  page: {
    type: String,
    required: true,
    enum: ['home', 'drama', 'youth', 'events', 'general'],
  },
  section: {
    type: String,
    default: 'gallery',
  },
  publicId: {
    type: String,
    required: true,
    unique: true,
  },
  url: {
    type: String,
    required: true,
  },
  thumbnailUrl: String,
  type: {
    type: String,
    enum: ['image', 'video'],
    required: true,
  },
  title: String,
  description: String,
  tags: [String],
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Media || mongoose.model('Media', MediaSchema)
