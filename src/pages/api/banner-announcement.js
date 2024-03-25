import { BannerAnnouncements } from "@/lib/models/bannerAnnouncementsModel";
import { connectToDb } from "@/lib/mongo/connectToMongoDb";

/**
 * Handles the API request.
 *
 * @param {import("next").NextApiRequest} req The request object.
 * @param {import("next").NextApiResponse} res The response object.
 */
export default async function test(req, res) {
  try {
    await connectToDb(); // Ensure the connection to the database is awaited

    const bannerAnnouncement = await BannerAnnouncements.findOne()
      .sort("-createdAt")
      .exec(); // Await the promise returned by exec()

    if (!bannerAnnouncement) {
      // If no banner announcement is found, send a 404 response
      res.status(404).json({ message: "Banner announcement not found" });
    } else {
      // Send the fetched announcement as a response
      res.status(200).json(bannerAnnouncement);
    }
  } catch (err) {
    console.error(err); // It's good to log the error for debugging

    // Send a 500 status code indicating a server error
    res.status(500).json({ message: "Failed to fetch banner announcement" });
  }
}
