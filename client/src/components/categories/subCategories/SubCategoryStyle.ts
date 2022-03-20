import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { colors } from "../../../styles/Colors";

export const SubCategoryLink = styled(Link)`

color: black;
text-decoration: none;
&:hover {
  background-color: ${colors.primary};
}

&:focus{
  background-color: ${colors.primary};
}

`