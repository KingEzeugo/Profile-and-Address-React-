// Profile.js
import React from 'react';
import Address from './Address';

function Profile({ name, homeAddress, workAddress }) {
   return (
      <div>
         <p>Name: {name}</p>
         <p>Home Address:</p>
         <Address
            street={homeAddress.street}
            city={homeAddress.city}
            state={homeAddress.state}
            zip={homeAddress.zip}
         />
         <p>Work Address:</p>
         <Address
            street={workAddress.street}
            city={workAddress.city}
            state={workAddress.state}
            zip={workAddress.zip}
         />
      </div>
   );
}

export default Profile;

