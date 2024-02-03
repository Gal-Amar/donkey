import { Image, Paper } from '@mantine/core';
import { Link } from 'react-router-dom';

export function CarouselCard(props) {
  return (

    <Paper radius="md" p="xl" shadow='md' className={"carousel-card" + props.name}
      style={{ backgroundColor: `var(--${props.name}-background-color)`, border: `2px solid var(--${props.name}-border-color)` }} >
      <div className='carousel-card-content'>
        <div className="carousel-card-text">
          <div className="card-headline">
            <Image className='character-image'
              style={{
                background: 
                  `linear-gradient( transparent 0% ,transparent 20%, transparent 30%, 
               transparent 40%,transparent 70%, var(--${props.name}-border-color) )`,
               width: `30%`
              }}
              src={require(`./../assets/${props.characterImage}`)}
            >
              {/* <Image  /> */}
            </Image>
          <h1>
            {props.friendName}
          </h1>
          </div>
       
          <p>{props.friendDescription}</p>

          <div className="carousel-links">
            <Link to={"#"} className='btn card-button'
              style=
              {{
                border: `2px solid var(--${props.name}-border-color)`,
                backgroundColor: `var(--${props.name}-background-color)`,
                color: `var(--${props.name}-border-color)`
              }}>
              לצפייה בדפי הצביעה
            </Link>
            <Link to={"#"} className='btn card-button'
              style=
              {{
                border: `2px solid var(--${props.name}-border-color)`,
                backgroundColor:` var(--${props.name}-border-color)`,
                color: `var(--${props.name}-text-color)`
              }}>
              לצפייה במשחקים
            </Link>
          </div>
        </div>
        <div className="carousel-images">
          <div className='carousel-image'>
            <Image src={require(`./../assets/${props.src}`)} />
          </div>
        </div>


      </div>


    </Paper>
  );
}


