// Address.js
import React from 'react';

function Address({ street, city, state, zip }) {
   return (
      <address>
         {street}<br />
         {city}, {state} {zip}
      </address>
   );
}

export default Address;

