import styled from "@emotion/styled";
import { PrimaryButton } from "../../../styles/entities/Buttons";


export const Item = styled("div")`
display: flex;
flex-direction: column;
cursor: pointer;
transition: box-shadow .3s;
width:30%;
margin-top: 1em;

&:hover{
    box-shadow: 0 0 11px rgba(33,33,33,.2); 
}  
@media only screen and (max-width: 700px) {
  & {
    width: 100%;
  }
}
  
`;

export const Name = styled("div")`
display: flex;
justify-content: center;
text-align: center;
`

export const Price = styled("div")`
display: flex;
justify-content: center;
margin-top: auto;
`

export const AddToCart = styled(PrimaryButton)`
margin-top: auto;
height: 2.5em;
margin-bottom:1em;
align-self: center;
width: 80%;

`

export const Image = styled("img")`
width: 80%;
align-self: center;
`
