import MyGrid from './MyGrid';
import HomeCarousel from './HomeCarousel.js'
import GridSection from './GridSection';
import { Center } from '@mantine/core';

const Home = () => {
  document.title = 'Donkey Home page';
  return (
    <div className="home">
      <Center h={100} mx="auto" className='headline'>
        <h1 className='headline'>  דפי צביעה של דונקי וחברים </h1>
      </Center>

      <div className="carousel-section">
        <HomeCarousel />
      </div>

      <Center h={100} mx="auto" className='headline'>
        <h1 className='headline'> דפי צביעה לפי קטגוריות </h1>
      </Center>

      <div className="grid-section">
        <GridSection />
      </div>
      {/* <PrintablePage name = 'pic' hebName='ענן' kind='jpeg' /> */}
      {/* <MyGrid /> */}

    </div >

  )
}

export default Home;