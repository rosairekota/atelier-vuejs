import axios from "axios"

export const fetchAllESs =async()=>{
    return (await axios.get('https://ussd.anicns.cd:9443/territorial/ess/')).data
  
  }