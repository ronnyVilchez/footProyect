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
=======
import './style.css'

export const MealDescription = () => {

    const [data, setData] = useState([])

    async function getCategories() {
        const rs = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
        const description = await rs.json()
        setData(description.meals)
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <>
           { 
           data && 
           data.map((d)=> (
           <div key={d.idMeal} className="container">
                <div className="figure">
                    <h2>{d.strMeal}</h2>
                    <img src={d.strMealThumb} alt="meals" />
                </div>
                <div className="info">
                    <div className="ingredients">
                        <div className="ingredient">
                            <ul>
                                <li>

                                </li>
                            </ul>
                        </div>
                        <div className="measure">
                            <ul>
                                <li>

                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="instruction">
                        <p>{d.strInstructions}
                        </p>
                    </div>
                </div>
                <div className="video">
                    <video src={d.strYoutube}>

                    </video>
                </div>
            </div>))
            }


        </>
    )

}
