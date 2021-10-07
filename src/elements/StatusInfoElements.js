import styled from 'styled-components';
import theme from '../theme';

const StatusInfoContainer = styled.section`
   position: absolute;
   bottom: -20%;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   padding: 2.5rem 3.75rem; /* 40px 60px */
   border-radius: 10px;
   background: #fff;
   box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
   z-index: 1;
   @media screen and (max-width: 768px) {
      bottom: -40%;
      grid-template-columns: repeat(2, 1fr);
      padding: 2.5rem 1.25rem; /* 40px */
   }
   @media screen and (max-width: 500px) {
      bottom: -50%;
      grid-template-columns: 1fr;
   }
`;

const StatusSection = styled.article`
   position: relative;
   span {
      display: inline-block;
      margin-bottom: 0.625rem; /* 10px */
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 0.75rem; /* 12px */
      font-weight: 700;
      color: ${theme.darkGray};
   }

   h2 {
      font-size: 1.5625rem; /* 25px */
      color: ${theme.strongDarkGray};
   }

   @media screen and (max-width: 768px) {
      text-align: center;
      margin: 0.625rem 0; /* 10px */
   }
`;

export {StatusInfoContainer, StatusSection};