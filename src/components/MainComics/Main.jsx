import { HeroesList } from "../ComponentsHeroes/HeaderHeroes/MainHeroes/style"
import { ContainerCard, FlexContainer, FlexItems1, FlexManipulator, Hero, Pagination, FlexItems2, Modal1 } from "../Header/Main/style"
import { Link } from "react-router-dom"
import { CircularProgress } from "@mui/material"


export const Main = ({currentHeroesComics, ItemsperPageComics, setItemsperPageComics, setSearchComics, loading})=>{


    return(
       <FlexContainer>
                <FlexManipulator>
                <Pagination>
                        <label>Itens por Página : 
                           <select value={ItemsperPageComics} onChange={(e) => setItemsperPageComics(Number(e.target.value))}>
                              <option value={25}>25</option>
                              <option value={50}>50</option>
                              <option value={75}>75</option>
                              <option value={100}>100</option> 
                           </select>
                        </label>
                  </Pagination>
                        <FlexItems1>
                            <h1>COMICS</h1>
                                <p></p>
                        </FlexItems1>
                        <FlexItems2> 
                        <input placeholder="Buscar..." type ='text'  onChange={(e) => setSearchComics(e.target.value)}></input><button>🔍</button>
                     </FlexItems2>
                </FlexManipulator>
            <ContainerCard>
                <HeroesList>
                {currentHeroesComics.map ((comic) => {return ( 
                           <Link key={comic.id} className="Link" to={`/comics/${comic.id}?`}>
                              <Hero>
                                 <img  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`.length == 67 ? 'https://i.annihil.us/u/prod/marvel/i/mg/2/00/5ba3bfcc55f5a/clean.jpg' : `${comic.thumbnail.path}.${comic.thumbnail.extension}`}alt={comic.title}/><span>{comic.title}</span>
                              </Hero>
                           </Link>)})}
                </HeroesList>
            </ContainerCard>
            <Modal1 disabled={loading}>{loading? <CircularProgress size={'150px'}/>:''}</Modal1>
       </FlexContainer>
    )
}