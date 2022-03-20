import styled from "@emotion/styled";
import { colors } from "../../../styles/Colors";


export const Loader = styled('div')`
 display: inline-block;
    width: 50px;
    height: 50px;
    border: 5px solid ${colors.primary};
    border-radius: 50%;
    border-top-color: #fff;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
    position: fixed;
    top: 50%;
    left: 50%;
      
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
}
`







  