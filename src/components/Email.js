import styles from "./Email.module.css";
const Email = ({ email }) => {
  return (
    <div className={styles.email}>
      <div className={styles.email1}>Email</div>
      <div className={styles.hmansouresiSbadz}>{email}</div>
    </div>
  );
};

export default Email;
