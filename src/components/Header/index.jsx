import { Link } from "react-router-dom"
import {ContainerHeader, ContainerHeader2, ContainerRouter, ContainerTitle, Flex } from "./style"

export const Header = () =>{

 return(
        <> 
      <ContainerHeader height={'5rem'}>
          <ContainerTitle>
            <h1>MARVEL BOOK</h1>
          </ContainerTitle>

          <ContainerRouter> 
          <Link className="linkComics" to='/'><p>HOME</p></Link> 
           <Link className="linkComics" to='/comics'><p>COMICS</p></Link> 
          </ContainerRouter>
      </ContainerHeader>

      <ContainerHeader2>
         <Flex> 
          <h1>MARVEL BOOK</h1>
         </Flex>
         <Flex> 
           <p>Não vivas um dia na vida,
            vive a vida num dia.Thor
           </p>
          </Flex>
      </ContainerHeader2>
    </>
    )
    }