import FullName from "../components/FirstName";
import Email from "../components/Email";
import Adresse from "../components/Adresse";
import ContactNumber from "../components/ContactNumber";
import Password from "../components/Password";
import styles from "./EditProfile.module.css";
const EditProfile = () => {
  return (
    <div className={styles.editProfile}>
      <div className={styles.editprofilecontainer}>
        <div className={styles.profileInformations}>Profile Informations</div>
        <div className={styles.profileinformations}>
          <FullName fullName="Mansour Houssam" />
          <Email email="h.mansour@esi-sba.dz" />
          <Adresse adresse="Cite Tarek Ben Ziad BT C N 12, M’Sila" />
          <ContactNumber contactNumber="05 55 12 56 32" />
          <Password />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
