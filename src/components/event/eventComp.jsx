import React from "react";
import styles from "./EventStyles.module.scss";

const EventComp = ({ event }) => {
  return (
    <div className={styles.eventsection}>
      <h3>{event.event}</h3>
      {event.days !== "" ? (
        <h3>
          {event.days}
          <br></br>
          {event.date}
        </h3>
      ) : (
        <h3>{event.date}</h3>
      )}
      <h3>{event.assigned}</h3>
      <h3>{event.pig}</h3>
      <h3>{event.priority}</h3>
      <div className={styles.pointers}>
        <a>&gt;&gt;</a>
      </div>
    </div>
  );
};

export default EventComp;

// {event.date !== 'Overdue' ? <>{event.date}</> : < className={styles.Overdue}>Overdue</>}
