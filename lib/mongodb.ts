import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

interface MongooseCache {
  conn: mongoose.Connection | null;
  promise: Promise<mongoose.Mongoose> | null;
}

declare global {
  var mongoose: MongooseCache | undefined;
}

let cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!MONGODB_URI) throw new Error("MONGODB_URI is not defined");
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((m) => m);
  }
  cached.conn = (await cached.promise).connection;
  return cached.conn;
}

export default connectDB;