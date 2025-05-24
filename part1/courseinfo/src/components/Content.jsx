import React from 'react'
import Part from './Part'

const part1 = 'Fundamentals of React'
export const exercises1 = 10
const part2 = 'Using props to pass data'
export const exercises2 = 7
const part3 = 'State of a component'
export const exercises3 = 14

const Content = () => {
  return (
    <div>
        <Part part={part1} exercises={exercises1}/>
        <Part part={part2} exercises={exercises2}/>
        <Part part={part3} exercises={exercises3}/>
    </div>
   
  )
}

export default Content