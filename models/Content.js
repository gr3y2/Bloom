import mongoose from 'mongoose'

const ContentSchema = new mongoose.Schema({
  page: {
    type: String,
    required: true,
    enum: ['home', 'drama', 'youth', 'events'],
  },
  section: {
    type: String,
    required: true,
    // e.g. 'hero', 'about', 'founder', 'stats', etc.
  },
  key: {
    type: String,
    required: true,
    // e.g. 'title', 'subtitle', 'description', 'buttonText'
  },
  value: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

// Compound unique index
ContentSchema.index({ page: 1, section: 1, key: 1 }, { unique: true })

export default mongoose.models.Content || mongoose.model('Content', ContentSchema)
