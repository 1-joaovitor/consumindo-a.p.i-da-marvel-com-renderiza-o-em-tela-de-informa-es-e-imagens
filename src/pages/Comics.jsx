import { useEffect, useState } from "react"
import { Header } from "../components/Header/index"
import { getComics } from "./service/informationCall"
import { Main } from "../components/MainComics/Main"


export const Comics = ()=>{
    const [Comics, setComics] = useState ([])
    const [ItemsperPageComics, setItemsperPageComics ]= useState (25)
    const [currentPageComics, setCurrentPageComics] = useState (0)
    const startIndexComics = currentPageComics * ItemsperPageComics
    const endIndex = startIndexComics + ItemsperPageComics
    const [searchComics, setSearchComics] = useState ('')
    const filteringComics = Comics.filter((comic) =>  {return comic.title.toUpperCase().includes(searchComics.toUpperCase())})
    const currentHeroesComics = filteringComics.slice(startIndexComics, endIndex)
    const [loading, setLoading] = useState (true)

    const ComicsMarvel = async ()=>{
        const response = await getComics()
        setLoading(false) 
        setComics(response)
    }
        useEffect(() => {
        setLoading(true) 
         ComicsMarvel()
        },[])
    return(
        <>
        <Header/>
            <Main loading={loading} setSearchComics={setSearchComics} comics={Comics} currentHeroesComics={currentHeroesComics} ItemsperPageComics={ItemsperPageComics} setItemsperPageComics={setItemsperPageComics}/>
        
        </>
    )
}