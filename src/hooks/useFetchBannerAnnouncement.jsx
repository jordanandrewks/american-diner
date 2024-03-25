import React, { useState, useEffect } from "react";

const useFetchBannerAnnouncement = () => {
  const [announcement, setAnnouncement] = useState(null);
  const [banner, setBanner] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Assume loading starts immediately
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const response = await fetch("/api/banner-announcement");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const fetchedAnnouncement = await response.json();

        setAnnouncement(fetchedAnnouncement);

        /* Rules for presenting banner 
            1) bannerIsOn IS true (owner may want override an announcement, hence can be toggle)
            2) startTime is GREATER than the current time
            3) endTime is is LESS than the current time
          */

        const currentTime = new Date();
        const startTime = new Date(fetchedAnnouncement.startTime);
        const endTime = new Date(fetchedAnnouncement.endTime);

        setBanner(
          fetchedAnnouncement.bannerIsOn &&
            currentTime > startTime &&
            currentTime < endTime
        );
      } catch (error) {
        setError(error.message); // Store the actual error message
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnnouncement();
  }, []);

  return { announcement, banner, isLoading, error };
};

export default useFetchBannerAnnouncement;
