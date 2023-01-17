import React from 'react'
import { dealData } from './data';
import { Link } from "react-router-dom"

const home = () => {
  return (
    <div> {dealData.map((data) => (
        <div><Link to={`/${data.id}`} style={{textDecoration: 'none'}}>
          <div>{data.id}</div>
        <div><img src={data.url} /></div>
        <div>{data.title.shortTitle}</div>
        <div>{data.discount}</div>
        <div>{data. tagline}</div>
        
        </Link>
        </div>
      ))}</div>
  )
}

export default home