import {useState} from 'react'
import { Center, Group, Card, Text, Image } from '@mantine/core'

const GridCard = (props) => {
  const firstImage = `./../assets/${props.character.colorPages[0].srcColorPage}`;
  const secondImage = require(`./../assets/${props.character.colorPages[1].srcColorPage}`);
  const [mainImage, setMainImage] = useState(`./../assets/${props.character.colorPages[0].srcColorPage}`)

  return (
    <Card radius="md" shadow="lg" padding="lg" withBorder className="grid-card">
      <h1 m={"0.5rem"}>{props.character.hebName}</h1>

      <Center className='parent'>
        <Card.Section className={mainImage === firstImage ? 'main-image' : 'secondary-image'}>
          <Image classNames={{image: "grid-card-image"}}  onClick={() => setMainImage(firstImage)} radius="lg" src={require(`./../assets/${props.character.colorPages[0].srcColorPage}`)} />
        </Card.Section>
        <Card.Section className={mainImage === firstImage ? 'secondary-image' : 'main-image'} >
          <Image  classNames={{image: "grid-card-image"}} onClick={() => setMainImage(secondImage)} radius="lg" src={require(`./../assets/${props.character.colorPages[1].srcColorPage}`)} />
        </Card.Section>
      </Center>
      <Group p={"0.5rem"} position="apart" mt="md" mb="xs">
        <Text size="sm" className={mainImage === firstImage ? 'card-text-main' : 'card-text-secondary'}>
          {props.character.colorPages[0].picDes}
        </Text>
        <Text size="sm" className={mainImage === firstImage ? 'card-text-secondary' : 'card-text-main'}>
          {props.character.colorPages[1].picDes}
        </Text>

      </Group>
    </Card>
  )
}

export default GridCard;