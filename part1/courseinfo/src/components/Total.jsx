import React from 'react'
import {exercises1,exercises2,exercises3} from '../components/Content'
const Total = () => {
  return (
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  )
}

export default Total