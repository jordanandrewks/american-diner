import React from "react";
import SectionContainer from "../SectionContainer";
import styles from "./LiveSportsSection.module.css";
import SectionMenuButton from "../../section-menu-button/SectionMenuButton";
import EventsContainer from "../events-container/EventsContainer";

const LiveSportsSection = () => {
  const sportEventLinks = [
    {
      src: "/homepage/events-highlights/sports/anthony-joshua-tyson-fury_5900027.webp",
      alt: "BOXING",
      url: "/",
      eventTitle: "AJ VS FURY",
      subTitle1: "DAZN LIVE",
      subTitle2: null,
      eventDate: "FRIDAY 16TH SEPTEMBER",
    }
  ];
  return (
    <SectionContainer>
      <div className={styles.container}>
        <EventsContainer eventLinks={sportEventLinks} />
        <SectionMenuButton
          placeHolderTextLine1={"VIEW"}
          placeHolderTextLine2={"UPCOMING"}
          placeHolderTextLine3={"EVENTS"}
        />
      </div>
    </SectionContainer>
  );
};

export default LiveSportsSection;
