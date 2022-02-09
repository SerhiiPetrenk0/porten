import React from "react";

import './other.css'

import { watch } from "../../db/watch";

export const TitleFromSection = (props) => {
        const { title } = props
    return(
        <div className="titleFromSection">
            {title}
        </div>
    )
}

export const WatchList = (props) => {
    const { count } = props
    const items = watch.map((item,index) => {
        if(index >= count){return false}
        return(
        <div className="card-container" >
            <div className="img-container"><img src={item.url} alt="watch"/></div>
            <p className="name-container">{item.name}</p>
            <p>{item.cost} UAH</p>
        </div>
        )})
return(
    <>
    {items}
    </>
)
}
