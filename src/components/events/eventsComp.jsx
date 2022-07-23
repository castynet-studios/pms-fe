// import { useState } from "react"
import styles from "./eventsStyles.module.scss";
import EventComp from "components/event/eventComp";

const EventsComp = ({ events }) => {
  return (
    <>
      <div className={styles.title}>
        <h3>Event</h3>
        <h3>Date</h3>
        <h3>Assigned</h3>
        <h3>Pigs</h3>
        <h3>Priority</h3>
      </div>
      {events.map((event, index) => (
        <EventComp event={event} key={index} />
      ))}
    </>
  );
};

export default EventsComp;
