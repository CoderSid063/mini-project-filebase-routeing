import EventItem from "./event-item";
import styles from "../../styles/event-list.module.css";

export default function EventList({ items }) {
  return (
    <ul className={styles.list}>
      {items.map((event) => (
        <EventItem events={event} key={event.id} />
      ))}
    </ul>
  );
}
