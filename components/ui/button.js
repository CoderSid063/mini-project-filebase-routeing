import Link from "next/link";
import styles from "../../styles/button.module.css";

export default function Button({ link, children }) {
  return (
    <Link href={link} className={styles.btn}>
      {children}
    </Link>
  );
}
