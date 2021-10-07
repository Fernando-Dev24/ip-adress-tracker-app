import React from 'react';
import {MapContainer} from 'react-leaflet';
/* Components */
import LayerMap from './LayerMap';
/* Hooks */
import { useIpContext } from '../contexts/IpContext';

export const MapComponent = ({newLocation}) => {
   const {data} = useIpContext();

   return (
      <>
         <MapContainer
            id="map"
            center={[data.lat, data.lng]}
            zoom={14}
            scrollWheelZoom={false}>
            <LayerMap lat={data.lat} lng={data.lng} newLocation={newLocation} />
         </MapContainer>
      </>
   );
};