import React from 'react'
import Header from './header'
import Content from './Content'
import Total from './Total'

const Course = ({course}) => {
  return (
    <div>
        <Header course={course.name} />
        <Content parts={course.parts}/>
        <Total  parts={course.parts}/>
    </div>
  )
}

export default Course