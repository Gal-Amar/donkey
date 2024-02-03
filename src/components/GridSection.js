import React, {useState} from 'react'
import video from './../assets/donkeyVideo.mp4'
import {Image} from '@mantine/core'


function gridCard(props) {
  return(
  <div className="card-contenct">
    <div className="card-image">
      <Image src={require(`./../assets/${props.data}`)} />
    </div>
    <div className="card-text">

    </div>
  </div>
  )
}
function GridSection() {
  const [mutedVideo, setMutedVideo] = useState(true);
    return (
     <div className="grid-wrapper">
      
      <div className="hipo">
        gridCard(data.hipo)
      </div>
      <div className="piz">Piz</div>
      <div className="suki">Suki</div>
      <div className="humb">Humb</div>
      <div className="video">     
        <video onClick={() => setMutedVideo(!mutedVideo)} src={video} loop autoplay={"autoplay"} muted={mutedVideo} className='video-style'>
        </video>
      </div>
      <div className="speedyAndBlue">Speedy And Blue</div>
      <div className="gia">Gia</div>
      <div className="monster">Monster</div>

     </div>
    );
}

export default GridSection