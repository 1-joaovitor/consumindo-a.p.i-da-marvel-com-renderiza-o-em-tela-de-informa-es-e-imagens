import {ContainerHeader, ContainerHeader2, ContainerRouter, ContainerTitle, Flex } from "./style"

export const Header = () =>{

 return(
        <> 
      <ContainerHeader>
          <ContainerTitle>
            <h1>MARVEL BOOK</h1>
          </ContainerTitle>

          <ContainerRouter> 
            <p>HOME</p>
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