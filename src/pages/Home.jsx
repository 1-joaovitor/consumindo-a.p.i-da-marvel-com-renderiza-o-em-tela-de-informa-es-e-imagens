
import { Header } from "../components/Header"
import { Main } from "../components/Header/Main"
import { useEffect, useState} from "react"
import axios from "axios"
import md5 from "md5"

export const Home = () =>{
    const TimeStamp = Number(new Date())
    const Hash = md5(TimeStamp + (process.env.REACT_APP_API_KEY_PRIVATE) + (process.env.REACT_APP_API_KEY_PUBLIC))
    const [HeroesMarvel, setHeroesMarvel] = useState ([])
    const [itemsPerPage, setItemsPerPage] = useState (25)
    const [currentPage, setCurrentPage] = useState (0)
    const startIndex = currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const [search, setSearch] = useState ('')
    const filtering = HeroesMarvel.filter((filtro) =>  { return filtro.name.toUpperCase().includes(search.toUpperCase())})
    const currentHeroes = filtering.slice(startIndex, endIndex)


    useEffect(() =>{
      axios.get(`${process.env.REACT_APP_API_BASE_URL}ts=${TimeStamp}&apikey=${process.env.REACT_APP_API_KEY_PUBLIC}&hash=${Hash}&limit=100`)
      .then(response => setHeroesMarvel( response.data.data.results))
      .catch(() => {console.log(' deu ruim')})
},[]) 

    return(
      <>
      <Header/>
      <Main itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} setSearch={setSearch} currentHeroes={currentHeroes}/>
      </>
    )
    }