import Header from './components/header'
import Content from './components/Content'
import Total from './components/Total'
const App = () => {
  const course = 'Half Stack application development'

  return (
    <div>
      <Header course={course} />
      <Content/>
      <Total/>
    </div>
  )
}

export default App