
import { Header } from "../components/Header"
import { Main } from "../components/Header/Main"
import { useEffect, useState} from "react"
import { getAll } from "./service/informationCall"


export const Home = () =>{
    const [HeroesMarvel, setHeroesMarvel] = useState ([])
    const [itemsPerPage, setItemsPerPage] = useState (25)
    const [currentPage, setCurrentPage] = useState (0)
    const startIndex = currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const [search, setSearch] = useState ('')
    const filtering = HeroesMarvel.filter((filter) =>  {return filter.name.toUpperCase().includes(search.toUpperCase())})
    const currentHeroes = filtering.slice(startIndex, endIndex)
    const [loading, setLoading] = useState (true)

 
const getHeroes = async ()=>{
 const response = await getAll() 
  
setLoading(false)  
setHeroesMarvel(response)

}

useEffect(() =>{ 
  setLoading(true)  
 getHeroes()
 
 
},[]) 

    return(
      <>
      <Header/>
      <Main loading={loading} itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} setSearch={setSearch} currentHeroes={currentHeroes}/>
      </>
    )
    }