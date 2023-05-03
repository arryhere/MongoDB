import mongoose from "mongoose";
import { config } from "../config/config.js";

export async function mongodb() {
  try {
    await mongoose.connect(config.db.uri)
    console.log('mongodb: connection successful')
  } catch (error) {
    throw new Error('mongodb: connection error')
  }
}