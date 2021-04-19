import { useState, useEffect } from 'react';
import { Logo, FooterPoster, Road1, Road2, Road3, Road4, Road5, MiniBus } from './assets/index.js'
import './Home.css';
import Footer from './footer'
// libraries
import Draggable from 'react-draggable';


function Home() {
  const [road, setRoad] = useState([{
    x: (Math.random() * 0.8 * window.innerWidth), 
    y: (Math.random() * 0.2 * window.innerHeight),
    img: Road2.default
  }])
  const [roadCombined, setRoadCombined] = useState([{
    x: (Math.random() * 0.8 * window.innerWidth), 
    y: (Math.random() * 0.2 * window.innerHeight),
    img: Road1.default
  }])
  const [showMiniBus, setShowMiniBus] = useState(false)
  const [roadSet, setRoadSet] = useState([Road2.default, Road3.default, Road4.default, Road5.default])
  const [roadSetAnglesX, setRoadSetAnglesX] = useState([190, 192, 186, 192, 192])
  const [roadSetAnglesY, setRoadSetAnglesY] = useState([2, -158, 5, 152, 10])
  const [roadSetAnglesXMobile, setRoadSetAnglesXMobile] = useState([47.5, 48, 46.5, 48, 50])
  const [roadSetAnglesYMobile, setRoadSetAnglesYMobile] = useState([0.5, -39, 1.3, 37.5, 10])
  const [roadSetIndex, setRoadSetIndex] = useState(0)

  function dragRoad(e, data, index) {
    let newArray = [...road];
    newArray[index].x = data.x;
    newArray[index].y = data.y;
    setRoad(newArray)
  }

  function stopDragRoad(e, data, roadType) {
    if (roadType === "single") {
      // for (var i = 0; i < roadCombined.length; i++) {
        // if ((Math.abs(data.x - roadCombined[i].x) < 200) && (Math.abs(data.y - roadCombined[i].y) < 185)) {
        if ((Math.abs(data.x - roadCombined[roadCombined.length-1].x) < 200) && (Math.abs(data.y - roadCombined[roadCombined.length-1].y) < 185)) {
          let newArray_ = [...roadCombined];
          if (newArray_.length === 4) {
            newArray_.shift()
          }
          newArray_.push({x: roadCombined[roadCombined.length-1].x + roadSetAnglesX[roadSetIndex], y: roadCombined[roadCombined.length-1].y + roadSetAnglesY[roadSetIndex], img: road[0].img})
          setRoadCombined(newArray_);
  
          let newArray = [...road];
          newArray[0].x = Math.random() * 0.8 * window.innerWidth;
          newArray[0].y = Math.random() * 0.2 * window.innerWidth;
          if (roadSetIndex === 3) {
            newArray[0].img = roadSet[0];
            setRoadSetIndex(0);
            runBus(2);
          }
          else {
            newArray[0].img = roadSet[roadSetIndex+1];
            if (roadSetIndex === 2) {
              runBus(4);
            }
            else {
              runBus(2);
            }
            setRoadSetIndex(roadSetIndex+1);
          }
          setRoad(newArray);
          return;
        }
      // }
    }
    else if (roadType === "combined") {
      for (var j = 0; j < road.length; j++) {
        // only adds road pieces at the end. to add throughout chain, run roadCombined[roadCombined.length-1].x in a for loop with i instead of roadCombined.length-1
        if ((Math.abs(roadCombined[roadCombined.length-1].x - road[j].x) < 200) && (Math.abs(roadCombined[roadCombined.length-1].y - road[j].y) < 185)) {
          let newArray_ = [...roadCombined];
          if (newArray_.length === 4) {
            newArray_.shift()
          }
          newArray_.push({x: roadCombined[roadCombined.length-1].x + roadSetAnglesX[roadSetIndex], y: roadCombined[roadCombined.length-1].y + roadSetAnglesY[roadSetIndex], img: road[0].img})
          setRoadCombined(newArray_);
  
          let newArray = [...road];
          newArray[0].x = Math.random() * 0.8 * window.innerWidth;
          newArray[0].y = Math.random() * 0.2 * window.innerWidth;
          if (roadSetIndex === 3) {
            newArray[0].img = roadSet[0];
            setRoadSetIndex(0);
            runBus(2);
          }
          else {
            newArray[0].img = roadSet[roadSetIndex+1];
            if (roadSetIndex === 2) {
              runBus(4);
            }
            else {
              runBus(2);
            }
            setRoadSetIndex(roadSetIndex+1);
          }
          setRoad(newArray);
          return;
        }
      }
    }
  }

  function stopDragRoadMobile(e, data, roadType) {
    if (roadType === "single") {
      for (var i = 0; i < roadCombined.length; i++) {
        if ((Math.abs(data.x - roadCombined[i].x) < 50) && (Math.abs(data.y - roadCombined[i].y) < 46.25)) {
          let newArray_ = [...roadCombined];
          if (newArray_.length === 4) {
            newArray_.shift()
          }
          newArray_.push({x: roadCombined[i].x + roadSetAnglesXMobile[roadSetIndex], y: roadCombined[i].y + roadSetAnglesYMobile[roadSetIndex], img: road[0].img})
          setRoadCombined(newArray_);
  
          let newArray = [...road];
          newArray[0].x = Math.random() * 0.8 * window.innerWidth;
          newArray[0].y = Math.random() * 0.2 * window.innerWidth;
          if (roadSetIndex === 3) {
            newArray[0].img = roadSet[0];
            setRoadSetIndex(0);
            runBus(2);
          }
          else {
            newArray[0].img = roadSet[roadSetIndex+1];
            if (roadSetIndex === 2) {
              runBus(4);
            }
            else {
              runBus(2);
            }
            setRoadSetIndex(roadSetIndex+1);
          }
          setRoad(newArray);
          return;
        }
      }
    }
    else if (roadType === "combined") {
      for (var j = 0; j < road.length; j++) {
        // only adds road pieces at the end. to add throughout chain, run roadCombined[roadCombined.length-1].x in a for loop with i instead of roadCombined.length-1
        if ((Math.abs(roadCombined[roadCombined.length-1].x - road[j].x) < 50) && (Math.abs(roadCombined[roadCombined.length-1].y - road[j].y) < 46.25)) {
          let newArray_ = [...roadCombined];
          if (newArray_.length === 4) {
            newArray_.shift()
          }
          newArray_.push({x: roadCombined[roadCombined.length-1].x + roadSetAnglesXMobile[roadSetIndex], y: roadCombined[roadCombined.length-1].y + roadSetAnglesYMobile[roadSetIndex], img: road[0].img})
          setRoadCombined(newArray_);
  
          let newArray = [...road];
          newArray[0].x = Math.random() * 0.8 * window.innerWidth;
          newArray[0].y = Math.random() * 0.2 * window.innerWidth;
          if (roadSetIndex === 3) {
            newArray[0].img = roadSet[0];
            setRoadSetIndex(0);
            runBus(2);
          }
          else {
            newArray[0].img = roadSet[roadSetIndex+1];
            if (roadSetIndex === 2) {
              runBus(4);
            }
            else {
              runBus(2);
            }
            setRoadSetIndex(roadSetIndex+1);
          }
          setRoad(newArray);
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
    if (length % 4 === 0) {
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
          <div className="header" onDragOver={(e)=>e.preventDefault()}>
            <img src={Logo.default} className="logo" alt="Detour Bus Logo"/>
            <div className="road">
              {road.map((key, index) => 
                <Draggable key={key.img} position={{x:key.x, y:key.y}} onDrag={(e, data)=>dragRoad(e, data, index)} onStop={(e, data)=>stopDragRoad(e, data, "single")}>
                  <img src={key.img} className="road_img" alt="Draggable Road Piece"/>
                </Draggable>)
              }
              {roadCombined.map((key, index) => 
                <Draggable key={key.img} position={{x:key.x, y:key.y}} onDrag={(e, data)=>dragCombinedRoad(e, data, index)} onStop={(e, data)=>stopDragRoad(e, data, "combined")}>
                  <img src={key.img} className="road_img" alt="Draggable Road Piece"/>
                </Draggable>)
              }
              <img src={MiniBus.default} className="minibus" alt="MiniBus Animation" style={{display: showMiniBus ? 'block' : 'none', top: `calc(${roadCombined[0].y}px - 150px)`, left: roadCombined[0].x}}/>
            </div>
            <div className="road_mobile">
              {road.map((key, index) => 
                <Draggable position={{x:key.x, y:key.y}} onDrag={(e, data)=>dragRoad(e, data, index)} onStop={(e, data)=>stopDragRoadMobile(e, data, "single")}>
                  <img src={key.img} className="road_img" alt="Draggable Road Piece"/>
                </Draggable>)
              }
              {roadCombined.map((key, index) => 
                <Draggable position={{x:key.x, y:key.y}} onDrag={(e, data)=>dragCombinedRoad(e, data, index)} onStop={(e, data)=>stopDragRoadMobile(e, data, "combined")}>
                  <img src={key.img} className="road_img" alt="Draggable Road Piece"/>
                </Draggable>)
              }
              <img src={MiniBus.default} className="minibus" alt="MiniBus Animation" style={{display: showMiniBus ? 'block' : 'none', top: `calc(${roadCombined[0].y}px - 40px)`, left: roadCombined[0].x}}/>
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
