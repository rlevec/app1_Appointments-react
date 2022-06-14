import React, { useState, useEffect } from 'react'
import List from './List'

const App = () => {
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState(true)

  const url = "http://localhost:5000/users"

  const fetchUrl = async() => {
    const response = await fetch(url)
    const newPeople = await response.json()
    setPeople(newPeople)
    setLoading(false)
  }

  useEffect(() => {
    fetchUrl()
  }, [])

  if(loading) {
    return (
      <main>
        <section>
          <h2>...loading</h2>
        </section>
      </main>
    )
  }

  return (
    <main>
      <section className='container'>
        <h3>{people.length} Appointments Today</h3>
        <List people={people}/>
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  )
}

export default App