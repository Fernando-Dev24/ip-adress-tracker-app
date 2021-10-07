import styled from "styled-components";
import theme from '../theme';

const Title = styled.h1`
   margin-bottom: 1.25rem; /* 40px */
   text-align: center;
   font-size: 2.1875rem; /* 36px */
   font-weight: 700;
   letter-spacing: 1px;
   color: #fff;
   @media screen and (max-width: 500px) {
      font-size: 1.875rem; /* 30px */
   }
`;

const Input = styled.input`
   width: 100%;
   padding: 1.25rem; /* 20px */
   outline: none;
   border: none;
   border-radius: 10px 0 0 10px;
   font-family: 'Rubik', sans-serif;
   font-size: 1.125rem; /* 18px */
   color: ${theme.strongDarkGray};
   &::placeholder {color: ${theme.darkGray};}
`;

const Button = styled.button`
   width: 10%;
   border: none;
   border-radius: 0 10px 10px 0;
   background: ${theme.strongDarkGray};
   cursor: pointer;
   transition: all .3s ease;
   &:hover {
      background: #444;
   }
`;

export {Title, Input, Button};