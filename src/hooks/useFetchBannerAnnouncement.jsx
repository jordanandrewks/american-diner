import React, { useState, useEffect } from "react";
import { getBannerAnnouncement } from "@/lib/data";

const useFetchBannerAnnouncement = () => {
  const [announcement, setAnnouncement] = useState(null);
  const [banner, setBanner] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnnouncement = async () => {
      setIsLoading(true);
      try {
        const fetchedAnnouncement = await getBannerAnnouncement();

        if (fetchedAnnouncement) {
          /* Rules for presenting banner 
            1) bannerIsOn IS true (owner may want override an announcement, hence can be toggle)
            2) startTime is GREATER than the current time
            3) endTime is is LESS than the current time
          */

          const currentTime = new Date();
          const startTime = new Date(fetchedAnnouncement.startTime);
          const endTime = new Date(fetchedAnnouncement.endTime);
          const bannerIsOn = fetchedAnnouncement.bannerIsOn;

          if (bannerIsOn && currentTime > startTime && currentTime < endTime) {
            setBanner(true);
          } else {
            setBanner(false);
          }
        }
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnnouncement();
  }, []);

  /* really only need banner & error - but I'll return them all just for the sake of it... */
  return { announcement, banner, isLoading, error };
};

export default useFetchBannerAnnouncement;
