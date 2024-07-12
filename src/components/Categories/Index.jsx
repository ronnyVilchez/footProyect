import React, { useEffect, useState } from 'react'
import './style.css'

export const Categories = () => {

  const [data, setData] = useState([])
  const [category, setCategory] = useState([])
  const [descrip, setdescrip] = useState(false)
  const [verifSpan, setVerifSpan] = useState('')
  const [input, setInput] = useState('')

  async function getCategories() {
    const rs = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    const category = await rs.json()
    setData(category.categories);
    setCategory(category.categories)
  }

  useEffect(() => {
    getCategories()
  }, [])



  function select(e) {
    if (e.target.tagName === 'H2') {
      const span = e.target.nextElementSibling
      setdescrip(!descrip)
      setVerifSpan(e.target.id)
      console.log(span)
    }
  }

  function onChange(e) {
    setInput(e.target.value)
  }


  useEffect(() => {
    const filterCategory = data.filter((d) => d.strCategory.toLowerCase().includes(input.toLowerCase()))
    setCategory(filterCategory)
  }, [input])
  return (
    <>
      <div className='container'>
        <nav className='nav'>
          <label htmlFor="input"><strong>Buscar Categoria</strong></label>
          <input id='input' type="text" onChange={onChange} />
        </nav>
        <div className="categories">
          <ul >
            {
              category &&
              category.map((c) =>
              (
                <li onClick={select} key={c.idCategory} >
                  <h2 id={c.idCategory}>{c.strCategory}</h2>

                  <span id={c.idCategory} >{c.strCategoryDescription}</span>

                </li>

              )
              )}
          </ul>
        </div>
      </div>
    </>
  )
}
