import React from "react";
import SectionContainer from "../SectionContainer";
import styles from "./VibesSection.module.css";
import SectionMenuButton from "../../section-menu-button/SectionMenuButton";
import EventsContainer from "../events-container/EventsContainer";

const Vibes = () => {
  const eventLinks = [
    {
      src: "/homepage/events-highlights/events/pexels-pixabay-274192.webp",
      alt: "House Night",
      url: "/",
      eventTitle: "HOUSE NIGHT : 80S THROWBACK",
      subTitle1: "PRESENTED BY SOUL SELECTION",
      subTitle2: null,
      eventDate: "FRIDAY 3RD MAY",
    },
    // {
    //   src: "/homepage/events-highlights/events/pexels-gotta-be-worth-it-5215129.webp",
    //   alt: "Beer Tasting Event",
    //   url: "/",
    //   eventTitle: "BEER SAMPLERS",
    //   subTitle1: "PRESENTED BY LONDON DINING CLUB",
    //   subTitle2: null,
    //   eventDate: "WEDNESDAY 4TH APRIL",
    // },
  ];

  return (
    <SectionContainer>
      <div className={styles.container}>
        <EventsContainer eventLinks={eventLinks}/>
        <SectionMenuButton
          placeHolderTextLine1={"VIEW"}
          placeHolderTextLine2={"UPCOMING"}
          placeHolderTextLine3={"EVENTS"}
        />
      </div>
    </SectionContainer>
  );
};

export default Vibes;
