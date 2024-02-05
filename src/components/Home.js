
import HomeCarousel from './HomeCarousel.js'
import GridSection from './GridSection';
import { Center } from '@mantine/core';
import {useState, useEffect} from 'react'

const Home = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/characters')
      .then(res => {
        return res.json(); //synchronos
      })
      .then(data => {
        setCharacters(data)

      });
  }, [])

  document.title = 'Donkey Home page';
  return (
    <div className="wrapper">

      <h1 >
        <Center h={100} mx="auto" className='headline'>
          דפי צביעה של דונקי וחברים
        </Center>
      </h1>

      <div className="carousel-section">
      {characters && <HomeCarousel characters = {characters}/>}
      </div>

      <Center h={100} mx="auto" className='headline'>
        <h1 className='headline'> דפי צביעה לפי קטגוריות </h1>
      </Center>

      <div className="grid-section">
       {characters && <GridSection characters = {characters} />} 
      </div>
      {/* <PrintablePage name = 'pic' hebName='ענן' kind='jpeg' /> */}
      {/* <MyGrid /> */}

    </div >

  )
}

export default Home;