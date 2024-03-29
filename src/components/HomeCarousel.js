import { Carousel } from '@mantine/carousel';
import { CarouselCard } from './CarouselCards';
import { TbArrowBigRightFilled, TbArrowBigLeftFilled } from 'react-icons/tb'
import { Center } from '@mantine/core';

// const data = [
//   {
//     src: 'hipo/hipoPoster.jpeg',
//     characterImage: 'hipo/hipo.png',
//     friendName: 'סופר היפו',
//     name:'hipo',
//     friendDescription:'זהו היפו האמיץ, אשר מציל את העולם ונהנה מהחיים',
//   },
//   {
//     src: 'speedyAndBlue/speedyAndBluePoster.jpeg',
//     characterImage: 'speedyAndBlue/speedyAndBlue.png',
//     friendName: 'ספידי ובלו',
//     name: 'speedy-and-blue',
//     friendDescription:'אלו הם ספידי ובלו החמודים, רודפים אחרי סקייטבורדים מעופפים',
//   },
  // {
  //   src: 'pach.png',
  //   width: "130px",
  //   height: "130px",
  // },
  // {
  //   src: 'pich.png',
  //   width: "137px",
  //   height: "137px",
  // },
  // {
  //   src: 'humb.png',
  //   width: "100px",
  //   height: "130px",
  // },
  // {
  //   src: 'mouseAndDragon.png',
  //   width: "160px",
  //   height: "130px",
  // },

// ]

const HomeCarousel = (props) => {

  return (
    <Center className='carousel-wrapper'>
      <Carousel
        className="carousel"
        my='sm'
        loop
        withIndicators
        draggable={false}
        previousControlIcon = { <TbArrowBigLeftFilled size={35} />}
        nextControlIcon = {<TbArrowBigRightFilled size={35} />}
        
      >
        {
          props.characters.map(({}, id) => {
            return (
              <Carousel.Slide key={id} className='character'>
                <CarouselCard character={props.characters[id]}/>
              </Carousel.Slide>
            )
          })
        }

      </Carousel>
    </Center>
  );
}

export default HomeCarousel;