import axios from "axios"
import md5 from "md5"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { HeaderHeroes} from "../components/ComponentsHeroes/HeaderHeroes"
import { MainHeroes } from "../components/ComponentsHeroes/HeaderHeroes/MainHeroes"

export const Heroes = () =>{
    const TimeStamp = Number(new Date())
    const Hash = md5(TimeStamp + (process.env.REACT_APP_API_KEY_PRIVATE ) + (process.env.REACT_APP_API_KEY_PUBLIC ))
    const {id} = useParams ()
    const [person, setPerson] = useState ({})

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL_HEROES }${id}?ts=${TimeStamp}&apikey=${process.env.REACT_APP_API_KEY_PUBLIC }&hash=${Hash}`)
        .then(response => setPerson(response?.data?.data?.results[0]))
        .catch(() => {console.log(' deu ruim')})  
    },[id])

    return(
        <>
        <HeaderHeroes  person={person}/>
        <MainHeroes  person={person}/>
        </>
    )
}