import { BannerAnnouncements } from "../models/bannerAnnouncementsModel";
import { connectToDb } from "./connectToMongoDb";

export const getBannerAnnouncement = async () => {
  try {
    await connectToDb(); // Ensure the connection to the database is awaited

    const bannerAnnouncement = await BannerAnnouncements.findOne()
      .sort("-createdAt")
      .exec(); // Await the promise returned by exec()

    return bannerAnnouncement; // Return the fetched announcement
  } catch (err) {
    console.error(err); // It's good to log the error for debugging
    throw new Error("Failed to fetch bannerAnnouncement");
  }
};
