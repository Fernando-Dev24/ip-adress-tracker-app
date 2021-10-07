import React from 'react';
/* Hooks */
import { useIpContext } from '../contexts/IpContext';
/* Elements */
import {
   StatusInfoContainer,
   StatusSection
} from '../elements/StatusInfoElements'

const StatusInfo = (
   {newIp, newCity, newCountry, newAsn, newTimezone, newIsp}
) => {
   const {data} = useIpContext();
   const {city, ip, country, timezone, asn, isp} = data;

   return (
      <StatusInfoContainer className="container">
         <StatusSection>
            <span>IP Adress</span>
            {newIp ?
               <h2>{newIp}</h2>
               :
               <h2>{ip}</h2>
            }
         </StatusSection>
         <StatusSection>
            <span>Location</span>
            {newIp ?
               <h2>{newCity}, {newCountry}, {newAsn}</h2>
               :
               <h2>{city}, {country}, {asn}</h2>
            }
         </StatusSection>
         <StatusSection>
            <span>Timezone</span>
            {newIp ?
               <h2>UTC {newTimezone}</h2>
               :
               <h2>UTC {timezone}</h2>
            }
         </StatusSection>
         <StatusSection>
            <span>ISP</span>
            {newIp ?
               <h2>{newIsp}</h2>
               :
               <h2>{isp}</h2>
            }
         </StatusSection>
      </StatusInfoContainer>
   );
}
 
export default StatusInfo;