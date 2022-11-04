import {ContainerCard, FlexContainer, FlexItems1, FlexItems2, FlexManipulator, Hero, Modal1, Pagination} from "./style"
import { Link} from "react-router-dom"
import { HeroesList } from "../../ComponentsHeroes/HeaderHeroes/MainHeroes/style"
import CircularProgress from '@mui/material/CircularProgress';


export const Main = ({itemsPerPage, setItemsPerPage, setSearch, currentHeroes, loading}) =>{

return(
   <FlexContainer> 
            <FlexManipulator>
                  <Pagination>
                        <label>Itens por Página : 
                           <select value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))}>
                              <option value={25}>25</option>
                              <option value={50}>50</option>
                              <option value={75}>75</option>
                              <option value={100}>100</option> 
                           </select>
                        </label>
                  </Pagination>
                     <FlexItems1>
                        <h1>CHARACTERS</h1>
                        <p></p>
                     </FlexItems1>
                    
                     <FlexItems2> 
                        <input placeholder="Buscar..." type ='text'  onChange={(e) => setSearch(e.target.value)}></input><button>🔍</button>
                     </FlexItems2>
            </FlexManipulator>
            <ContainerCard>
               <HeroesList> 
                        {currentHeroes.map ((hero) => {return ( 
                           <Link key={hero.id} className="Link" to={`/herois/${hero.id}`}>
                              <Hero>
                                 <img  src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`.length == 67 ? 'https://i.annihil.us/u/prod/marvel/i/mg/2/00/5ba3bfcc55f5a/clean.jpg' : `${hero.thumbnail.path}.${hero.thumbnail.extension}`}alt={hero.name}/><span>{hero.name}</span>
                              </Hero>
                           </Link>)})}
               </HeroesList> 
               <Modal1 disabled={loading}>{loading? <CircularProgress size={'150px'}/>:''}</Modal1>
            </ContainerCard>       
   </FlexContainer>
)

}

