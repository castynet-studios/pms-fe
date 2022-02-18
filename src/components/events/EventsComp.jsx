// import { useState } from "react"
import styles from "./EventsStyles.module.scss"
import EventComp from "components/event/EventComp"

const EventsComp = ({events}) => {
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
                        <EventComp event={event} />
            ))}
            
        </>
    )
}

export default EventsComp