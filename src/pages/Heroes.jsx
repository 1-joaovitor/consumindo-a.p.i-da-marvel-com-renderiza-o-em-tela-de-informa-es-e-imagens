
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { HeaderHeroes} from "../components/ComponentsHeroes/HeaderHeroes"
import { MainHeroes } from "../components/ComponentsHeroes/HeaderHeroes/MainHeroes"
import { getHeroesByid } from "./service/informationCall"

export const Heroes = () =>{
    const {id} = useParams ()
    const [person, setPerson] = useState ({})

const HeroesId = async ()=>{
    const response = await getHeroesByid(id)
    setPerson(response)
}
    useEffect(() => {
     HeroesId()
    },[id])

    return(
        <>
        <HeaderHeroes  person={person}/>
        <MainHeroes  person={person}/>
        </>
    )
}