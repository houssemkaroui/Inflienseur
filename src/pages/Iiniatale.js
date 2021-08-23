import React , {useState,useEffect} from 'react';
import { Col, Row } from 'react-bootstrap';
import { Line,Bar } from 'react-chartjs-2';
import Carousel from 'react-bootstrap/Carousel'

import playlist from "./playlist.json";
import { Player } from "./player/Player";


const playerOptions = {};

function Iniatale() {

    const [player, setPlayer] = useState(null);
    const index = 12;
    const video = playlist[index];
  
    useEffect(() => {
      if (player) {
        player.src(video.sources);
      }
    }, [video, player]);
  
    // auto play next
    useEffect(() => {
      if (player) {
        const onPlayerEnded = () => {
          let nextIndex = index + 1;
          if (!playlist[nextIndex]) {
            nextIndex = 0;
          }
  
        };
  
        player.on("ended", onPlayerEnded);
  
        return () => {
          player.off("ended", onPlayerEnded);
        };
      }
    }, [player, index, history]);


  return (
    <div className="dynamic">
    {/* <Row>
    <Col>
   
    </Col>
    <Col>
    <Player
      playerOptions={playerOptions}
      onPlayerInit={setPlayer}
      onPlayerDispose={setPlayer}
    />
    </Col>
    </Row>
    */}
   
  </div>
  );
}

export default Iniatale;
