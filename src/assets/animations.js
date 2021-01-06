import { keyframes } from "styled-components";

export const blink = keyframes`
      0%,
      50%,
      100% {
        opacity: 1;
      }
      25%,
      75% {
        opacity: 0;
      }    
`;


export const ringAnim = keyframes`
 0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const enterNav = keyframes`
  from {
    opacity:0;
    transform:translateX(-100%);
  }to{
    opacity:1;
    transform:translateX(0);
  }
`;