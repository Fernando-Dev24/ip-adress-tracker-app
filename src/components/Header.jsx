import React, {useState} from 'react';
/* Components */
import StatusInfo from './StatusInfo';
import Alert from '../elements/Alert';
/* Sources */
import {ReactComponent as ArrowRight} from '../images/icon-arrow.svg';
import { Title, Input, Button } from '../elements/HeaderElements';

export const Header = ({setNewLocation}) => {
   /* States */
   const [inputState, setInputState] = useState('');
   const [newData, setNewData] = useState({});
   const [alertState, setAlertState] = useState(false);
   const [alertContent, setAlertContent] = useState({});

   /* Regular Expressions */
   const domainRegEx = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/;
   const ipAdressRegEx = /^((?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])[.]){3}(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/;
   
   /* Api Key */
   const apiKey = process.env.REACT_APP_API_KEY;

   /* handleSubmit */
   const handleSubmit = async (e) => {
      e.preventDefault();
      setAlertState(false);
      setAlertContent({});

      /* Validations */
      if(inputState.trim() === '') {
         setAlertState(true);
         setAlertContent({
            type: 'error',
            message: 'Enter an IP or a domain name'
         });
         return;
      }

      if(domainRegEx.test(inputState)) {
         fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&domain=${inputState}`)
            .then((response) => response.json())
            .then(({ip, location, isp, as}) => {
               setNewData({
                  ip: ip,
                  city: location.city,
                  country: location.country,
                  asn: as.asn,
                  timezone: location.timezone,
                  isp: isp
               });

               setNewLocation({
                  lat: location.lat,
                  lng: location.lng
               });
            });
         return;
      } else if (ipAdressRegEx.test(inputState)) {
         fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${inputState}`)
            .then((response) => response.json())
            .then(({ip, location, isp, as}) => {
               setNewData({
                  ip: ip,
                  city: location.city,
                  country: location.country,
                  asn: as.asn,
                  timezone: location.timezone,
                  isp: isp
               });

               setNewLocation({
                  lat: location.lat,
                  lng: location.lng
               });
            });
         return;
      } else {
         setAlertState(true);
         setAlertContent({
            type: 'error',
            message: 'Enter a valid IP or domain name'
         });
      }
   }

   return (
      <>
         <section className="header-container">
            <Title>IP Adress Tracker</Title>
            <form className="form" autoComplete="off" onSubmit={handleSubmit}>
               <Input
                  type="text"
                  name="ip"
                  placeholder="Try with www.google.com or 8.8.8.8"
                  value={inputState}
                  onChange={({target}) => setInputState(target.value)}
               />
               <Button type="submit">
                  <ArrowRight />
               </Button>
            </form>
            <StatusInfo
               newIp={newData.ip}
               newCity={newData.city}
               newCountry={newData.country}
               newAsn={newData.asn}
               newTimezone={newData.timezone}
               newIsp={newData.isp}
            />
         </section>

         <Alert
            type={alertContent.type}
            message={alertContent.message}
            alertState={alertState}
            setAlertState={setAlertState}
         />
      </>
      
   );
};