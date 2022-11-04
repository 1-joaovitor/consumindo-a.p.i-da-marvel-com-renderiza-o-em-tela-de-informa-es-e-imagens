import api from './api'
import coversHashTimes from '../utils/TimeHash'
import { useState } from 'react'


export const  getAll = async ()=>{
    try{
     const response = await  api.get(`characters?ts=${coversHashTimes.getTimeStamp()}&apikey=${process.env.REACT_APP_API_KEY_PUBLIC}&hash=${coversHashTimes.getHash()}&limit=100`)
     return response.data.data.results
    }
    catch (error){
        console.log(error)
    }
}

export const  getHeroesByid = async (id)=>{
    try{
     const response = await  api.get(`characters/${id}?ts=${coversHashTimes.getTimeStamp()}&apikey=${process.env.REACT_APP_API_KEY_PUBLIC}&hash=${coversHashTimes.getHash()}&limit=100`)
     return response?.data?.data?.results[0]
    }
    catch (error){
        console.log(error)
    }
}

export const  getComics = async ()=>{
    try{
     const response =    await  api.get(`comics?ts=${coversHashTimes.getTimeStamp()}&apikey=${process.env.REACT_APP_API_KEY_PUBLIC}&hash=${coversHashTimes.getHash()}&limit=100`)
     return response?.data?.data?.results

  
     
    }
    catch (error){
        console.log(error)
    }
    
}
export const  getComicsByid = async (id)=>{
    try{
     const response = await  api.get(`comics/${id}?ts=${coversHashTimes.getTimeStamp()}&apikey=${process.env.REACT_APP_API_KEY_PUBLIC}&hash=${coversHashTimes.getHash()}&limit=100`)
     return response?.data?.data?.results[0]

  
     
    }
    catch (error){
        console.log(error)
    }
    
}
