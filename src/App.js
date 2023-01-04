import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  const [number, setNumber] = useState(1)
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')

  async function getstoreData() {
    const response = await axios.get(`https://fakestoreapi.com/products/${number}`)
    // console.log(response)
    setTitle(response.data.title)
    setImage(response.data.image)
    setDescription(response.data.description)

  }
  getstoreData()


  return (
    <>
      <h1>Our Shop</h1>
      <div className='app'>
        <select value={number} onChange={(e) => setNumber(e.target.value)}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
        </select>
        <h1>Product {number} listed here is: <br /><span>{title}</span> </h1>
        <div className='product'>
          <h2>{title}</h2>
          <img src={image} />
          <p>{description}</p>
        </div>

      </div>
    </>
  )
}

export default App