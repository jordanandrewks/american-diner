import mongoose from "mongoose";
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
