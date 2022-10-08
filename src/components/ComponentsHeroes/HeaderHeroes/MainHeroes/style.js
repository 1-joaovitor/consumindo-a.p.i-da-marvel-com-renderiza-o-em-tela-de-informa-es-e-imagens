import styled from "styled-components";

export const ContainerTitleHeroes = styled.div`
width: 100%;
height: 60px;
background-color:white;
margin-top: 40px;
display: flex;
justify-content: center;
align-items: center;

`
export const TextHeroes = styled.div`
width: 250px;
height: 40px;
font-size: 10px;
p{
    border-bottom: solid 6px red;
    width: 30px;
    margin-left: 136px;
}
`
export const ContainerBiography = styled.div`
width: 100%;
height: 600px;
background-color: white;
display: flex;
justify-content: center;
gap: 210px;




`
export const HeroesList = styled.ul`
 display: grid;
    list-style: none;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 150px;
    row-gap: 50px;
    span{
        text-align: center;
        font-weight:700;
    }
img{
    width: 300px;
    height: 430px;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 1px solid black;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
    transition: 0.3s;
    :hover{
         transform: scale(1.1); 
    }
  
}

`


export const ContainerAbout = styled.div`
width: 100%;
height: 80px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
`
export const TextAbout = styled.div`
width: 100px;
height: 100px;
position: relative;
margin-top: 100px;
justify-content: center;
align-items: center;
font-size: 10px;
font-weight: 700;
p{
    width: 27px;
    border-bottom: 6px solid red;
    margin-left: 26px;
}
`
export const ContainerDescription = styled.div`
width: 100%;
height: 250px;
background-color: white;
display: flex;

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
width: 67.5%;
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
