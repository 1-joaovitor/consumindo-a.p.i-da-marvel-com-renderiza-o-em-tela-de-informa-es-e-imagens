import {ContainerCard, FlexContainer, FlexItems1, FlexItems2, FlexManipulator, Footer, Heroe, Pagination} from "./style"
import { Link} from "react-router-dom"
import { HeroesList } from "../../ComponentsHeroes/HeaderHeroes/MainHeroes/style"


export const Main = ({itemsPerPage, setItemsPerPage, setSearch, currentHeroes}) =>{
 
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
                        {currentHeroes.map ((heroe) => {return ( 
                           <Link key={heroe.id} className="Link" to={`/herois/${heroe.id}`}>
                              <Heroe>
                                 <img  src={`${heroe.thumbnail.path}.${heroe.thumbnail.extension} `}alt={heroe.name}/><span>{heroe.name}</span>
                              </Heroe>
                           </Link>)})}
               </HeroesList>
            </ContainerCard>       
   </FlexContainer>
)

}
