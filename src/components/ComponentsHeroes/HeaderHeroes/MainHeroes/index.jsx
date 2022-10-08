import { ContainerBiography,ContainerTitleHeroes, HeroesList, TextHeroes } from "./style"
import {Footer, Heroe} from '../../../Header/Main/style'


export const MainHeroes = ({person}) =>{
    return(
        <>
        <ContainerTitleHeroes>
            <TextHeroes>
                <h1>{person?.name}COMICS</h1>
                <p></p>
            </TextHeroes>
        </ContainerTitleHeroes>

        <ContainerBiography>
            <HeroesList>
                  <Heroe>
                     <img src='https://i.annihil.us/u/prod/marvel/i/mg/2/00/5ba3bfcc55f5a/clean.jpg'/>
                     <span>
                        {person?.comics?.items?.[0]?.name}
                     </span>
                  </Heroe>
                  <Heroe>
                     <img src='https://i.annihil.us/u/prod/marvel/i/mg/2/00/5ba3bfcc55f5a/clean.jpg'/>
                     <span>
                        {person?.comics?.items?.[1]?.name}
                     </span>
                 </Heroe>
                 <Heroe>
                     <img src='https://i.annihil.us/u/prod/marvel/i/mg/2/00/5ba3bfcc55f5a/clean.jpg'/>
                     <span>
                        {person?.comics?.items?.[2]?.name}
                     </span>
                 </Heroe>
                 <Heroe>
                     <img src='https://i.annihil.us/u/prod/marvel/i/mg/2/00/5ba3bfcc55f5a/clean.jpg'/>
                     <span>
                        {person?.comics?.items?.[3]?.name}
                     </span>
                  </Heroe>   
            </HeroesList>
        </ContainerBiography>
            <Footer/>
        </>
     
    )

}