import { ContainerBiography,ContainerTitleHeroes, HeroesList, TextHeroes } from "./style"
import {Footer, Hero} from '../../../Header/Main/style'


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
                  <Hero>
                     <img src='https://i.annihil.us/u/prod/marvel/i/mg/2/00/5ba3bfcc55f5a/clean.jpg'/>
                     <span>
                        {person?.comics?.items?.[0]?.name}
                     </span>
                  </Hero>
                  <Hero>
                     <img src='https://i.annihil.us/u/prod/marvel/i/mg/2/00/5ba3bfcc55f5a/clean.jpg'/>
                     <span>
                        {person?.comics?.items?.[1]?.name}
                     </span>
                 </Hero>
                 <Hero>
                     <img src='https://i.annihil.us/u/prod/marvel/i/mg/2/00/5ba3bfcc55f5a/clean.jpg'/>
                     <span>
                        {person?.comics?.items?.[2]?.name}
                     </span>
                 </Hero>
                 <Hero>
                     <img src='https://i.annihil.us/u/prod/marvel/i/mg/2/00/5ba3bfcc55f5a/clean.jpg'/>
                     <span>
                        {person?.comics?.items?.[3]?.name}
                     </span>
                  </Hero>   
            </HeroesList>
        </ContainerBiography>
            <Footer/>
        </>
     
    )

}