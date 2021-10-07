import React, {useState, useEffect, useContext} from 'react';

const IpContext = React.createContext();
const useIpContext = () => useContext(IpContext);

const IpProvider = ({children}) => {
   const [ipData, setIpData] = useState({});
   const [loading, setLoading] = useState(true);
   const apiKey = process.env.REACT_APP_API_KEY;

   useEffect(() => {
      fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}`)
         .then((response) => response.json())
         .then(({ip, location, isp, as}) => {
            setIpData({
               ip: ip,
               city: location.city,
               country: location.country,
               asn: as.asn,
               lat: location.lat,
               lng: location.lng,
               timezone: location.timezone,
               isp: isp
            });
            setLoading(false);
         });
   }, [apiKey]);

   return (
      <IpContext.Provider value={{data: ipData}}>
         {!loading && children}
      </IpContext.Provider>
   );
};
 
export {IpContext, IpProvider, useIpContext};