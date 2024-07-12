import React, { useEffect, useState } from 'react'

export default function MealDescription() {
const [data, setData]= useState([])

const getData = async () => {
    const rs = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
    const jsonRs = await rs.json()
    console.log(jsonRs.meals); 
    }

    useEffect(()=> {
        getData()
    },[])

  return (
    <div>
        <div>

        </div>
        <div>

        </div>
        <div>

        </div>
    </div>
  )
}
