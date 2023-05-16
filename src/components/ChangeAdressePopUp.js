import { useCallback } from "react";
import styles from "./ChangeAdressePopUp.module.css";
const ChangeAdressePopUp = ({ onClose }) => {
  const onSaveButtonClick = useCallback(() => {
    //TODO: save new adresse button
  }, []);

  return (
    <div className={styles.changeAdressePopUp}>
      <div className={styles.copyParent}>
        <input
          className={styles.copy}
          type="text"
          placeholder="New adresse"
          id="NewContactNumber"
        />
        <button className={styles.saveButton} onClick={onSaveButtonClick}>
          <div className={styles.save}>Save</div>
        </button>
      </div>
    </div>
  );
};

export default ChangeAdressePopUp;
