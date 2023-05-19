import styles from "./ChangeNumberPopUp.module.css";

const ChangeNumberPopUp = ({ newContactNumber, onNewContactNumberChange, onSaveButtonClick }) => {
  return (
    <div className={styles.changeNumberPopUp}>
      <div className={styles.copyParent}>
        <input
          className={styles.copy}
          type="text"
          placeholder="New contact number"
          id="NewContactNumber"
          value={newContactNumber}
          onChange={onNewContactNumberChange}
        />
        <button className={styles.saveButton} onClick={onSaveButtonClick}>
          <div className={styles.save}>Save</div>
        </button>
      </div>
    </div>
  );
};

export default ChangeNumberPopUp;
