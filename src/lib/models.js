import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";
const { schema } = mongoose;

const bannerAnnouncements = new Schema(
  {
    bannerIsOn: {
      type: Boolean,
      required: true,
      default: false,
    },
    announcement: {
      type: String,
      required: true,
      min: 1,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);
