import { useCallback } from "react";
import styles from "./ChangeAdressePopUp.module.css";

const ChangeAdressePopUp = ({ newAdresse, onNewAdresseChange, onSaveButtonClick }) => {
  return (
    <div className={styles.changeAdressePopUp}>
      <div className={styles.copyParent}>
        <input
          className={styles.copy}
          type="text"
          placeholder="New adresse"
          id="NewAdresse"
          value={newAdresse}
          onChange={onNewAdresseChange}
        />
        <button className={styles.saveButton} onClick={onSaveButtonClick}>
          <div className={styles.save}>Save</div>
        </button>
      </div>
    </div>
  );
};

export default ChangeAdressePopUp;
