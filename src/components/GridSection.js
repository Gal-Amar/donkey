import React, { useState, useEffect } from 'react'
import video from './../assets/donkeyVideo.mp4'
import GridCard from './GridCard';
import {Grid, Card} from '@mantine/core'


function GridSection(props) {
  const [mutedVideo, setMutedVideo] = useState(true);

  return (
    <Grid columns={12} className='grid-wrapper'>
      <Grid.Col span={4} className="piz">Piz</Grid.Col>
      <Grid.Col span={4} className="suki">Suki</Grid.Col>
      <Grid.Col span={4} className="humb">Humb</Grid.Col>
      <Grid.Col span={8} className="video">
        <Card className="video-card" radius="md" shadow="sm" withBorder>
          <Card.Section>
            <video onClick={() => setMutedVideo(!mutedVideo)} src={video} loop autoPlay={"autoPlay"} muted={mutedVideo} className='video-style' />
          </Card.Section>
        </Card>
      </Grid.Col>
      <Grid.Col span={4} className="hipo">
         <GridCard character={props.characters[2]} />
      </Grid.Col>
      <Grid.Col span={4} className="speedyAndBlue">Speedy And Blue</Grid.Col>
      <Grid.Col span={4} className="gia">Gia</Grid.Col>
      <Grid.Col span={4} className="monster">Monster</Grid.Col>
    </Grid>
  )
}

export default GridSection