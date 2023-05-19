import React, { useState } from 'react';
import FullName from '../components/FirstName';
import Email from '../components/Email';
import Adresse from '../components/Adresse';
import ContactNumber from '../components/ContactNumber';
import Password from '../components/Password';
import styles from './EditProfile.module.css';

const EditProfile = () => {
  const [fullName, setFullName] = useState('Mansour Houssam');
  const [email, setEmail] = useState('h.mansour@esi-sba.dz');
  const [adresse, setAdresse] = useState('Cite Tarek Ben Ziad BT C N 12, M’Sila');
  const [contactNumber, setContactNumber] = useState('05 55 12 56 32');

  const handleFullNameChange = (value) => {
    setFullName(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handleAdresseChange = (value) => {
    setAdresse(value);
  };

  const handleContactNumberChange = (value) => {
    setContactNumber(value);
  };

  return (
    <div className={styles.editProfile}>
      <div className={styles.editprofilecontainer}>
        <div className={styles.profileInformations}>Profile Informations</div>
        <div className={styles.profileinformations}>
          <FullName fullName={fullName} onChange={handleFullNameChange} />
          <Email email={email} onChange={handleEmailChange} />
          <Adresse adresse={adresse} onChange={handleAdresseChange} />
          <ContactNumber contactNumber={contactNumber} onChange={handleContactNumberChange} />
          <Password />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
