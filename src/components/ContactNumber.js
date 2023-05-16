import { useState, useCallback } from "react";
import ChangeNumberPopUp from "./ChangeNumberPopUp";
import PortalPopup from "./PortalPopup";
import styles from "./ContactNumber.module.css";
const ContactNumber = ({ contactNumber }) => {
  const [isChangeNumberPopUpOpen, setChangeNumberPopUpOpen] = useState(false);

  const openChangeNumberPopUp = useCallback(() => {
    setChangeNumberPopUpOpen(true);
  }, []);

  const closeChangeNumberPopUp = useCallback(() => {
    setChangeNumberPopUpOpen(false);
  }, []);

  return (
    <>
      <div className={styles.contactNumber}>
        <div className={styles.contactNumber1}>Contact number</div>
        <div className={styles.div}>{contactNumber}</div>
        <button
          className={styles.changeContactNumber}
          onClick={openChangeNumberPopUp}
        >
          Change contact number
        </button>
      </div>
      {isChangeNumberPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChangeNumberPopUp}
        >
          <ChangeNumberPopUp onClose={closeChangeNumberPopUp} />
        </PortalPopup>
      )}
    </>
  );
};

export default ContactNumber;
