import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { colors } from "../../../styles/Colors";
interface LinkProps {
  isActive?: boolean;
}
export const SubCategoryLink = styled(Link)<LinkProps>`

color: black;
text-decoration: none;
line-height: 2;
border-radius: 0.5em;
width: 100%;
padding: 0.3em 0.5em;
background-color: ${({isActive})=>(isActive?colors.primary:'white')};
color : ${({isActive})=>(isActive?'white':'black')};


&:hover {
  background-color: ${colors.primary};
  color: white;
}


`

export const SubCategoriesContainer = styled('ul')`
padding-left: "0" ;


`