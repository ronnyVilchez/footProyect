import React, { useEffect, useState } from "react";
import './Meals.css'

export const Meals = () => {
const [value, setValue] = useState("")
const [data, setData] = useState([])
const [meal, setMeal] = useState("")

const getData = async () => {
  const rs = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
  const jsonRs = await rs.json()
  setData(jsonRs.meals)
  setMeal(jsonRs.meals)
}

useEffect(() => {
  getData()
}, [])

    useEffect(()=>{
            const rs = data.filter(m => m.strMeal.toLowerCase().includes(value.toLowerCase()) )
            setMeal(rs)
    },[value])

    return(
        <>
        <div className="searching">
            <input onChange={(e) => setValue(e.target.value)} type="text" placeholder="¿Qué quieres ordenar?" className="input"/>
            <button className="button" >search</button>
        </div>
        <div className="container">
            {meal && meal.map(info => (
                <div key={info.idMeal} className="container-int">
                    <img src={info.strMealThumb} alt="img de la meal" />
                    <div className="container-int1">
                        <h2><strong>{info.strMeal}</strong></h2>
                        <p><strong>Id Meal:</strong>{info.idMeal}</p>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}