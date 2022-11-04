import styled from "styled-components";

export const ContainerHeader = styled.div`
width: ${(props)=> props.width};
height:${(props)=> (props.height)};
display: flex;
justify-content: space-between;
align-items: center;
justify-content: space-between;
color: white;
background-color: #0A0F0D;
border-bottom: solid 1px red;

@media all and (max-width:1400px){
width: 1400px;
}


`
export const ContainerTitle = styled.div`
width: 16rem;
height:3rem;
margin-left: 6rem;
h1{
font-size: 2rem;

}
@media  (min-width:320px) and (max-width:480px){
width: 50%;
height:5rem;
h1{
font-size: 3rem;
}
}

`
export const ContainerRouter = styled.div`
width: 100%;
width: 90px;
margin-right: 121px;
display: flex;
align-items: center;
justify-content: center;
  

p{
font-weight: 700;
color: white;
font-size: 23px;
cursor: pointer;
}
.LinkHome{
text-decoration: none;
color: white;
font-size: 23px;
font-weight: 700;
margin-right: 100px;
   
}
.linkComics{
text-decoration: none;
color: white;
font-size: 23px;
font-weight: 700;
margin-right: 100px;
}
`
export const ContainerHeader2 = styled.div`
width: 100%;
height: 17rem;
background-color:#0A0F0D ;
display: block;
color: white;
justify-content: center;
text-align: center;
position: absolute;
@media all and (max-width:1400px){
width: 1400px;
}


`
export const Flex = styled.div`
width: 100%;
height: 30px;
justify-content: center;
align-items: center;
display: flex;
margin-top: 50px;

h1{
margin-top: 80px;
font-weight: 900;
@media  (min-width:320px) and (max-width:480px){
font-size: 3rem;
  
}
}
p{
background-color: red;
font-weight: 700;
height: 26px;
width: 360px;
font-size: 16px;
@media  (min-width:320px) and (max-width:480px){
font-size: 1.5rem;
  
}
}


`