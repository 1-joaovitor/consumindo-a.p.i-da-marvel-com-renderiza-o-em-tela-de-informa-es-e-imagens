import styled from "styled-components";

export const FlexContainer = styled.div`
width: 100%;
height: 100%;
background-color: white;
position: absolute;
margin-top: 270px;

`
export const FlexManipulator = styled.div`
width: 100%;
height: 120px;
background-color: white;
display: flex;
align-items: center;

`
export const FlexItems1 = styled.div`
width: 130px;
height: 20px;
position: relative;
margin-left:900px;
p{
width: 33px;
height: 0px;
border-bottom: solid 6px red;
margin-left: 92px;
}
@media all and (max-width:1400px){
margin-left:650px;
}
@media  (min-width:320px) and (max-width:480px){
margin-left:590px;
}
h1{
font-size: 20px;
@media  (min-width:320px) and (max-width:480px){
font-size: 2.5rem; 
}   
}

`
export const FlexItems2 = styled.div`
width: 30%;
height: 100%;
position: relative;
margin-left: 410px;
margin-top: 100px;
display: flex;
button{
width: 40px;
height: 24px;
}

@media all and (max-width:1400px){
margin-left:240px;
margin-top: 100px;
}
@media  (min-width:480px) and (max-width:768px){
margin-left: 180px;
}
@media  (min-width:320px) and (max-width:480px){
margin-left:320px;
button{
font-size: 28px;
width: 40px;
height: 40px;
}
}


   

input{
width: 330px;
height: 25px;
border-radius: 5px;

@media all and (max-width:1400px){
width: 260px;
margin-left: 35px;
}
@media  (min-width:1024px) and (max-width:1200px){
width: 250px;
margin-left: 25px;
}
@media  (min-width:768px) and (max-width:1024px){
width: 250px;
margin-right: 20px;
}
@media  (min-width:320px) and (max-width:480px){
height:40px;
width: 310px;

 
}
::placeholder{
color: black;
font-weight: 700;
font-size: 20px;
}    
}

`
export const Footer = styled.div`
width: 100%;
height: 43px;
background-color: white;
margin-top: 20px;
position: relative;
bottom: 0%;

`
export const ContainerCard =styled.div`
width: 100%;
height: 100%;

.Link{
text-decoration: none;
color: black;
font-weight: 700;
}    

       
img{
width: 364px;
height: 364px;
margin-top: 20px;
margin-bottom: 20px;
border: 1px solid black;
box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
transition: 0.3s;
:hover{
transform: scale(1.1);
}
}
ul{
display: grid;
list-style: none;
grid-template-columns: repeat(3, 1fr);
column-gap: 100px;
row-gap: 50px;
  
}

`
export const Hero =styled.li`
display: flex;
flex-direction: column;
align-items: center;
 
@media  (min-width:1024px) and (max-width:1200px){
margin-left: 5rem;
}
@media  (min-width:768px) and (max-width:1024px){
margin-left: 5rem;
}
@media  (min-width:480px) and (max-width:768px){
margin-left: 4rem;
}
@media  (min-width:320px) and (max-width:480px){
margin-left: 5rem;

}

`
export const Pagination = styled.div`
width: 40%;
height: 40px;
background-color: transparent;
display: flex;
position: absolute;
margin: 35px;
color:black; 

label{
font-weight:900;
@media  (min-width:320px) and (max-width:480px){
font-size: 1.6rem;
  
}
}
select{
width: 60px;
color: white;
font-weight: 700;
background-color:black;
border: solid 1px white;
border-radius: 6px;
cursor: pointer;
transition: 0.1s;
justify-content: center;
align-items: center;
@media  (min-width:320px) and (max-width:480px){   
font-size: 2rem;
width: 200px;
  
}   
:hover{
transform: scale(1.2);
color:red ;
border: solid 1px red;

}
}

`
export const Modal1 =styled.button`
background-color:transparent;
position: absolute;
border:none ;
z-index: 1;
width: 10%;
height: 10%;
transition: 0.5s ease;
top:${(props) => props.disabled? '5%' : '-100%' };
justify-content: center;
align-items: center;
top: 150px;
left: 45%;
`

