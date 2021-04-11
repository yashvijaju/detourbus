import { useState } from 'react';
import { Logo, FooterPoster, Road, MiniBus } from './assets/index.js'
import './Home.css';
import Footer from './footer'
// libraries
import Draggable from 'react-draggable';


function Home() {
  const [road, setRoad] = useState([{x: (Math.random() * 0.8 * window.innerWidth), y: (Math.random() * 0.2 * window.innerHeight)}])
  const [roadCombined, setRoadCombined] = useState([{x: (Math.random() * 0.8 * window.innerWidth), y: (Math.random() * 0.2 * window.innerHeight)}])
  const [showMiniBus, setShowMiniBus] = useState(false)

  function dragRoad(e, data, index) {
    let newArray = [...road];
    newArray[index].x = data.x;
    newArray[index].y = data.y;
    setRoad(newArray)
  }

  function stopDragRoad(e, data, roadType) {
    if (roadType === "single") {
      for (var i = 0; i < roadCombined.length; i++) {
        if ((Math.abs(data.x - roadCombined[i].x) < 58) && (Math.abs(data.y - roadCombined[i].y) < 33)) {
          let newArray_ = [...roadCombined];
          newArray_.push({x: roadCombined[i].x + 58, y: roadCombined[i].y})
          setRoadCombined(newArray_);
  
          let newArray = [...road];
          newArray[0].x = Math.random() * 0.8 * window.innerWidth;
          newArray[0].y = Math.random() * 0.2 * window.innerWidth;
          setRoad(newArray);
          runBus(newArray_.length);
          return;
        }
      }
    }
    else if (roadType === "combined") {
      for (var j = 0; j < road.length; j++) {
        // only adds road pieces at the end. to add throughout chain, run roadCombined[roadCombined.length-1].x in a for loop with i instead of roadCombined.length-1
        if ((Math.abs(roadCombined[roadCombined.length-1].x - road[j].x) < 58) && (Math.abs(roadCombined[roadCombined.length-1].y - road[j].y) < 33)) {
          let newArray_ = [...roadCombined];
          newArray_.push({x: roadCombined[roadCombined.length-1].x + 58, y: roadCombined[roadCombined.length-1].y})
          setRoadCombined(newArray_);
  
          let newArray = [...road];
          newArray[0].x = Math.random() * 0.8 * window.innerWidth;
          newArray[0].y = Math.random() * 0.2 * window.innerWidth;
          setRoad(newArray);
          runBus(newArray_.length);
          return;
        }
      }
    }
  }

  function dragCombinedRoad(e, data, index) {
    let newArray_ = [...roadCombined];
    let diffX = data.x - newArray_[index].x;
    let diffY = data.y - newArray_[index].y;
    
    for (var i = 0; i < roadCombined.length; i++) {
      newArray_[i].x = newArray_[i].x + diffX;
      newArray_[i].y = newArray_[i].y + diffY;
    }
    setRoadCombined(newArray_)
  }

  function runBus(length) {
    if (length % 3 === 0) {
      setShowMiniBus(true)
    }
    else {
      setShowMiniBus(false)
    }
  }

  return (
    <div className="container_outer">
      <div className="container">
        <div className="container_inner">
          <div className="header">
            <img src={Logo.default} className="logo" alt="Detour Bus Logo" />
            <div className="road">
              {road.map((key, index) => 
                <Draggable position={{x:key.x, y:key.y}} onDrag={(e, data)=>dragRoad(e, data, index)} onStop={(e, data)=>stopDragRoad(e, data, "single")}>
                  <img src={Road.default} className="road_img" alt="Draggable Road Piece"/>
                </Draggable>)
              }
              {roadCombined.map((key, index) => 
                <Draggable position={{x:key.x, y:key.y}} onDrag={(e, data)=>dragCombinedRoad(e, data, index)} onStop={(e, data)=>stopDragRoad(e, data, "combined")}>
                  <img src={Road.default} className="road_img" alt="Draggable Road Piece"/>
                </Draggable>)
              }
              <img src={MiniBus.default} className="minibus" alt="MiniBus Animation" style={{display: showMiniBus ? 'block' : 'none', top: `calc(${roadCombined[0].y}px - 23px)`, left: roadCombined[0].x}}/>
            </div>
          </div>
          <div className="content">
            Detour Bus is a casual VR game where players build ridiculous winding highways around themselves to take the dysfunctional Flowers family on a road trip across Post-Infrastructure America. Get in the construction groove to take on corrupt Senator Joseph McCarthief’s attempts to turn all freeways into pay-to-drive tunnels and reclaim your right to transportation.<br/>
            <br/>
            Featuring: bison herding, 5G weather machines, 360-degree video, a giant tow truck mech, and of course lots of bus hats
            <br/><br/><br/><br/>
            <span className="content_bold">Arriving summer 2021 on Oculus Rift and SteamVR</span>
            <br/><br/>
            Made by placeholder and friends, and published by placeholder. <br/>
            Please enjoy our screenshots, Twitter, and Email.
          </div>
          <div className="youtube">
            <iframe 
              src="https://www.youtube.com/embed/eVtKsgXyZd0"
              title="YouTube video player" 
              frameborder="0"
              style={{borderColor: 'black'}} 
              className="youtube_embed"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="footer">
            <Footer/>
          </div>
        </div>
      </div>
      <img src={FooterPoster.default} className="footer_poster" alt="Detour Bus Footer Poster" />
    </div>
  );
}

export default Home;
