import React, {useState} from 'react';
import WebFont from 'webfontloader';
import { Helmet } from 'react-helmet';
/* Components */
import { Header } from './components/Header';
import { MapComponent } from './components/Map';
/* Sources */
import favicon from './images/favicon.png';

export const IpAdressApp = () => {
   const [newLocation, setNewLocation] = useState({});

   WebFont.load({
      google: {
         families: ['Rubik:400, 500, 700', 'sans-serif']
      }
   })

   return (
      <>
         <Helmet>
            <link rel="shortcut icon" href={favicon} type="image/x-icon" />
         </Helmet>

         <main>
            <Header setNewLocation={setNewLocation} />
            <MapComponent newLocation={newLocation} />
         </main>
      </>
   );
};