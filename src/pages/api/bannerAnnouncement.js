import { connectToDb } from "@/lib/connectMongo";
import { BannerAnnouncements } from "@lib/models/bannerAnnouncementModel";
/**
 *
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function bannerAnnouncement(req, res) {
  console.log("connecting to mongo");
  await connectToDb();
  console.log("connected to mongo");

  const test = await BannerAnnouncements.findOne().sort("-createdAt").exec();

  // Await the promise returned by exec()
}
