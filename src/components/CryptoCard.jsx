import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CryptoCard = () => {
  const [data,setData] =useState()
async function fetchData(){
const res=await axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/airdrops`)
console.log(res.data)
}
  useEffect(()=>{
fetchData()
  },[])
  return (
    <div>CryptoCard</div>
  )
}

export default CryptoCard