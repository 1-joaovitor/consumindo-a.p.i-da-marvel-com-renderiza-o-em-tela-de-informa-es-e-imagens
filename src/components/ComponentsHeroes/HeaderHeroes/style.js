
import styled from "styled-components";

export const ContainerAbout = styled.div`
width: 100%;
height: 80px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
`
export const TextAbout = styled.div`
width: 100%;
height: 80px;
position: relative;
margin-top: 100px;
justify-content: center;
align-items: center;
font-size: 10px;
font-weight: 700;
margin-left:900px;
p{
width: 27px;
border-bottom: 6px solid red;
margin-left: 26px; 
h1{
font-size: 30px;
        
}
}
@media (min-width:1200px) and (max-width:1400px){
margin-left: 650px;
  
}
@media (min-width:1024px) and (max-width:1200px){
margin-left: 620px;
}
@media (min-width:768px) and (max-width:1024px){
margin-left: 660px;
}
@media (min-width:480px) and (max-width:768px){
margin-left: 780px;
margin-top: 10px;
} 
@media (min-width:320px) and (max-width:480px){
margin-top: 10px;

} 

`
export const ContainerDescription = styled.div`
width: 100%;
height: 250px;
background-color: white;
display: flex;
@media (min-width:768px) and (max-width:1024px){
margin-left: 100px;
}
@media (min-width:480px) and (max-width:768px){
margin-left: 100px;
} 
@media (min-width:320px) and (max-width:480px){
margin-left: 150px;
} 
    

`
export const ContainerImg =styled.div`
width:364px;
height: 250px;
background-color: white;
border: solid 1px black;
margin-left: 120px;
box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
img{
transition: 0.3s;
width: 364px;
height: 250px;
:hover{
transform: scale(1.06);
}
}
`
export const ContainerDetails = styled.div`
width:1300px;
height: 180px;
background-color: white;
justify-content: center;
align-items: center;
text-align: center;
display: flex;
border: solid 1px black;
border-left: solid 0px black;
margin-top: 40px;
box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;


h1{
font-size: 20px;
@media (min-width:1200px) and (max-width:1400px){
font-size: 15px;
  
}
@media (min-width:1024px) and (max-width:1200px){
width:700px;
font-size: 15px;
}
@media (min-width:768px) and (max-width:1024px){
width:550px;
font-size: 15px;
}
@media (min-width:480px) and (max-width:768px){
width:550px;
font-size: 13px;
} 
@media (min-width:320px) and (max-width:480px){
width:500px;
font-size: 16px;
}
}

        
`
export const ContainerNameHeroes = styled.div`
width: 100px;
height: 30px;
justify-content: center;
align-items: center;
display: flex;
border: solid 1px black;
position: absolute;
margin-left: 470px;
margin-top: 25px;
z-index: 1;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
P{
    font-size: 14px;
font-weight:700;
text-align: center;
}
`
