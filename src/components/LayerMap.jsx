import React, {useEffect} from 'react';
import { TileLayer, Marker, useMap} from 'react-leaflet';
/* Sources */
import iconPersonalized from '../images/icon-location.svg';
import L from 'leaflet';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const LayerMap = ({lat, lng, newLocation}) => {
   const map = useMap();
   const newLatLng = [newLocation.lat, newLocation.lng];

   /* New Marker Icon */
   const MarkerIcon = new L.Icon({
      iconUrl: iconPersonalized,
      shadowUrl: iconShadow
   });

   useEffect(() => {
      if(newLocation.lat === undefined) {
         return;
      } else {
         map.setView([newLocation.lat, newLocation.lng], 14);
      }
   }, [newLocation, map]);

   return (
      <>
         <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
         />
         {newLocation.lat ?
            <Marker position={newLatLng} icon={MarkerIcon} />
            :
            <Marker position={[lat, lng]} icon={MarkerIcon} />
         }
      </>
   );
}
 
export default LayerMap;