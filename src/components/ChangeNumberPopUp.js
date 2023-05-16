import { useCallback } from "react";
import styles from "./ChangeNumberPopUp.module.css";
const ChangeNumberPopUp = ({ onClose }) => {
  const onSaveButtonClick = useCallback(() => {
    //TODO: save new number button
  }, []);

  return (
    <div className={styles.changeNumberPopUp}>
      <div className={styles.copyParent}>
        <input
          className={styles.copy}
          type="text"
          placeholder="new contact number"
          id="NewContactNumber"
        />
        <button className={styles.saveButton} onClick={onSaveButtonClick}>
          <div className={styles.save}>Save</div>
        </button>
      </div>
    </div>
  );
};

export default ChangeNumberPopUp;
