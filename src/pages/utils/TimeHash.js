import md5 from "md5";

const coversHashTimes = {
getTimeStamp: () =>{
    return Number(new Date())
},
getHash: ()=>{
    const TimeStamp = coversHashTimes.getTimeStamp ()
    return md5(TimeStamp + (process.env.REACT_APP_API_KEY_PRIVATE)+(process.env.REACT_APP_API_KEY_PUBLIC))
}


}

export default coversHashTimes
   
    






