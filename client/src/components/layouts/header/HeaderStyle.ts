import styled from "@emotion/styled";


export const SearchInput = styled.input`
  height: 2.5em;
  margin-top: auto;
  width: 30%;
`;

export const Logo = styled('img')`
background-image: url(https://www.home24.de/corgi/static/media/home-24-logo.4f73bd13.svg);
width: 8%;
background-repeat: no-repeat;
height: 100%;
margin-top:0.5em;
margin-left: 4em;
cursor: pointer;
`

export const Container = styled('div')`
background-color: white;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
position: fixed;
top:0;
z-index: 10;
padding-bottom: 0.5em;
box-shadow: 0px 10px 10px -15px #111;    

`