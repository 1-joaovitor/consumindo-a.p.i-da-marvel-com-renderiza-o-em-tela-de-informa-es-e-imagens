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


`
export const FlexItems1 = styled.div`
width: 130px;
height: 20px;
position: relative;
margin-left:900px;
margin-top:40px;
h1{
    font-size: 20px; 
}
p{
    width: 33px;
    height: 0px;
    border-bottom: solid 6px red;
    margin-left: 92px;
}

`
export const FlexItems2 = styled.div`
width: 100%;
height: 100%;
position: relative;
margin-left: 438px;
margin-top: 95px;
button{
    width: 40px;
    height: 23px;
    background-color:transparent;
    border: solid transparent 0px;
    margin-left: 10px;
   
    
    
}
input{
    width: 249px;
    height: 18px;
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
export const Heroe =styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

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
   
   :hover{
    transform: scale(1.2);
    color:red ;
    border: solid 1px red;

   }
}
`

