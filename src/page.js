import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import {dealData } from './data';

const Page = () => {
    const { id } = useParams()
  
    const filteredData = dealData.filter((item) => {
      return Object.values(item).includes(id)
  })
 
  const arr1d = [].concat(...filteredData)
 
  console.log(filteredData)
  return (
    <>
      
       
       {filteredData.map((data) => (
        <div>
          <div>{data.id}</div>
        <div><img src={data.url} /></div>
        <div>{data.title.shortTitle}</div>
        <div>{data.discount}</div>
        <div>{data. tagline}</div>
        
        
        </div>
      ))}
    
    </>
 
  )
}

export default Page