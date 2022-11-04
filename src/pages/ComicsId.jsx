import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { HeaderComicsId } from "../components/MainComics/HeaderComicsId"
import { getComicsByid } from "./service/informationCall"

export const ComicsId = () =>{
    const {id} = useParams ()
    const [Comic, setComic] = useState ({})
 

const HeroesId = async ()=>{
    const response = await getComicsByid(id)
   
    setComic(response)
}
    useEffect(() => {
      
     HeroesId()
    },[id])
    //console.log(Comic)
    return(
        <>
<HeaderComicsId Comic={Comic}/>
        </>
    )

}