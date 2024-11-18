import React from 'react';
import Profile from './Profile'; 

function App() {
   const homeAddress = {
      street: '101 Main',
      city: 'Denver',
      state: 'CO',
      zip: '80014'
   };

   const workAddress = {
      street: '2000 Central',
      city: 'Aurora',
      state: 'CO',
      zip: '80010'
   };

   return (
      <div>
         <Profile
            name="Li Chen"
            homeAddress={homeAddress}
            workAddress={workAddress}
         />
      </div>
   );
}

export default App;
